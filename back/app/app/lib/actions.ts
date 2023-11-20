'use server';

import { z } from 'zod';
import { sql } from '@vercel/postgres';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { signIn } from '@/auth';

const FormSchema = z.object({
  id: z.string(),
  title: z.string({
    invalid_type_error: 'Please complete the title.',
  }),
  album_status: z.string({
    invalid_type_error: 'Please complete the Album Status.',
  }),
  media_condition: z.string({
    invalid_type_error: 'Please complete the Media Condition.',
  }),
  packaging_condition: z.string({
    invalid_type_error: 'Please complete the Packaging Condition.',
  }),
  is_auction: z.string({
    invalid_type_error: 'Please complete the Is Auction.',
  }),
  accept_offers: z.string({
    invalid_type_error: 'Please complete the Accept Offers.',
  }),
  listing_price: z.string({
    invalid_type_error: 'Please complete the Listing Price.',
  }),
  photo: z.string({
    invalid_type_error: 'Please complete the Photo.',
  }),
  description: z.string({
    invalid_type_error: 'Please complete the Description.',
  }),
  adv_store_location: z.string({
    invalid_type_error: 'Please complete the Store Location.',
  }),
  adv_cost: z.string({
    invalid_type_error: 'Please complete the Cost.',
  }),
  adv_sku: z.string({
    invalid_type_error: 'Please complete the SKU.',
  }),
});

const CreateVinyl = FormSchema.omit({ id: true });
const UpdateVinyl = FormSchema.omit({ date: true, id: true });

// This is temporary
export type State = {
  errors?: {
    title?: string[];
    album_status?: string[];
    media_condition?: string[];
    packaging_condition?: string[];
    is_auction?: string[];
    accept_offers?: string[];
    listing_price?: string[];
    photo?: string[];
    description?: string[];
    adv_store_location?: string[];
    adv_cost?: string[];
    adv_sku?: string[];
  };
  message?: string | null;
};

export async function createVinyl(prevState: State, formData: FormData) {
  // Validate form fields using Zod

  const validatedFields = CreateVinyl.safeParse({
    title: formData.get('title'),
    album_status: formData.get('album_status'),
    media_condition: formData.get('media_condition'),
    packaging_condition: formData.get('packaging_condition'),
    is_auction: formData.get('is_auction'),
    accept_offers: formData.get('accept_offers'),
    listing_price: formData.get('listing_price'),
    photo: formData.get('photo'),
    description: formData.get('description'),
    adv_store_location: formData.get('adv_store_location'),
    adv_cost: formData.get('adv_cost'),
    adv_sku: formData.get('adv_sku'),
  });

  // If form validation fails, return errors early. Otherwise, continue.
  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: 'Missing Fields.',
    };
  }

  // Prepare data for insertion into the database
  const {
    title,
    album_status,
    media_condition,
    packaging_condition,
    is_auction,
    accept_offers,
    listing_price,
    photo,
    description,
    adv_store_location,
    adv_cost,
    adv_sku
  } = validatedFields.data;
  const date = new Date().toISOString().split('T')[0];

  // Insert data into the database
  try {
    await sql`
      INSERT INTO vinyls (
        title,
        album_status,
        media_condition,
        packaging_condition,
        is_auction,
        accept_offers,
        listing_price,
        photo,
        description,
        adv_store_location,
        adv_cost,
        adv_sku,
        user_id,
        status,
        publish_date
      )
      VALUES (
        ${title},
        ${album_status},
        ${media_condition},
        ${packaging_condition},
        ${is_auction},
        ${accept_offers},
        ${listing_price},
        ${photo},
        ${description},
        ${adv_store_location},
        ${adv_cost},
        ${adv_sku},
        '410544b2-4001-4271-9855-fec4b6a6442a',
        'publish',
        ${date}
      )
    `;
  } catch (error) {
    // If a database error occurs, return a more specific error.
    return {
      message: error + 'Database Error: Failed to Create Vinyl.',
    };
  }

  // Revalidate the cache for the vinyls page and redirect the user.
  revalidatePath('/dashboard/vinyls');
  redirect('/dashboard/vinyls');
}

export async function updateVinyl(
  id: string,
  prevState: State,
  formData: FormData,
) {
  const validatedFields = UpdateVinyl.safeParse({
    title: formData.get('title'),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: 'Missing Fields. Failed to Update Vinyl.',
    };
  }

  const { title } = validatedFields.data;

  try {
    await sql`
      UPDATE vinyls
      SET title = ${title}
      WHERE id = ${id}
    `;
  } catch (error) {
    return { message: 'Database Error: Failed to Update Vinyl.' };
  }

  revalidatePath('/dashboard/vinyls');
  redirect('/dashboard/vinyls');
}

export async function deleteVinyl(id: string) {
  // throw new Error('Failed to Delete Vinyl');

  try {
    await sql`DELETE FROM vinyls WHERE id = ${id}`;
    revalidatePath('/dashboard/vinyls');
    return { message: 'Deleted Vinyl' };
  } catch (error) {
    return { message: 'Database Error: Failed to Delete Vinyl.' };
  }
}

export async function authenticate(
  prevState: string | undefined,
  formData: FormData,
) {
  try {
    await signIn('credentials', Object.fromEntries(formData));
  } catch (error) {
    if ((error as Error).message.includes('CredentialsSignin')) {
      return 'CredentialsSignin';
    }
    throw error;
  }
}
