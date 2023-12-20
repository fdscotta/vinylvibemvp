'use server';

import { z } from 'zod';
import { sql } from '@vercel/postgres';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { signIn } from '@/auth';
import { updloadVinylPhoto } from './cloudinary';

const FormSchema = z.object({
  id: z.string(),
  media_condition: z.string({
    invalid_type_error: 'Please complete the Media Condition.',
  }),
  packaging_condition: z.string({
    invalid_type_error: 'Please complete the Packaging Condition.',
  }),
  price: z.coerce
    .number()
    .gt(0, { message: 'Please enter an Price greater than $0.'
  }),
  photo: z.any(),
  description: z.string(
  {
    invalid_type_error: 'Please complete the Description.',
  }).min(1),
  address: z.string({
    invalid_type_error: 'Please complete the Address.',
  }).min(1),
  sku: z.string({
    invalid_type_error: 'Please complete the SKU.',
  }).min(1),
  discogs_vinyl_id: z.coerce.number(),
  title: z.string()
});

const CreateVinyl = FormSchema.omit({ id: true});
const UpdateVinyl = FormSchema.omit({ date: true, id: true });

// This is temporary
export type State = {
  errors?: {
    media_condition?: string[];
    packaging_condition?: string[];
    price?: string[];
    photo?: string[];
    description?: string[];
    address?: string[];
    sku?: string[];
  };
  message?: string | null;
};

export async function createVinyl(prevState: State, formData: FormData) {

  const file = formData.get('photo') as File;

  //const photo = await updloadVinylPhoto(file);

  if (!file) {
    return {
      errors: {
        photo: ['Please upload a photo.'],
      },
      message: "Missing Fields",
    };
  }

  // Validate form fields using Zod

  const validatedFields = CreateVinyl.safeParse({
    media_condition: formData.get('media_condition'),
    packaging_condition: formData.get('packaging_condition'),
    price: formData.get('price'),
    photo: formData.get('photo'),
    description: formData.get('description'),
    address: formData.get('address'),
    sku: formData.get('sku'),
    discogs_vinyl_id: formData.get('discogs_vinyl_id'),
    title: formData.get('title')
  });

  // If form validation fails, return errors early. Otherwise, continue.
  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: "Missing Fields",
    };
  }

  // Prepare data for insertion into the database
  const {
    media_condition,
    packaging_condition,
    price,
    description,
    address,
    sku,
    discogs_vinyl_id,
    title
  } = validatedFields.data;

  const [date] = new Date().toISOString().split('T');

  // Insert data into the database
  try {
    await sql`
      INSERT INTO vinyls (
        title,
        media_condition,
        packaging_condition,
        price,
        photo,
        description,
        address,
        sku,
        user_id,
        status,
        publish_date,
        discogs_data_id
      )
      VALUES (
        ${title},
        ${media_condition},
        ${packaging_condition},
        ${price},
        '',
        ${description},
        ${address},
        ${sku},
        '410544b2-4001-4271-9855-fec4b6a6442a',
        'publish',
        ${date},
        ${discogs_vinyl_id}
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

export async function createDiscogsVinylData(discogsVinylID: number, discogsVinylData: any) {
  const json_response = JSON.stringify(discogsVinylData).replace(/'/g, "''");

  try {
    await sql`
      INSERT INTO discogs_data (
        id,
        json_response
      )
      VALUES (
        ${discogsVinylID},
        ${json_response}
      )
    `;
  } catch (error) {
    // If a database error occurs, return a more specific error.
    return {
      message: error + 'Database Error: Failed to Create Discogs Vinyl Data.',
    };
  }
}