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
});

const CreateVinyl = FormSchema.omit({ id: true });
const UpdateVinyl = FormSchema.omit({ date: true, id: true });

// This is temporary
export type State = {
  errors?: {
    title?: string[];
  };
  message?: string | null;
};

export async function createVinyl(prevState: State, formData: FormData) {
  // Validate form fields using Zod

  const validatedFields = CreateVinyl.safeParse({
    title: formData.get('title'),
  });

  // If form validation fails, return errors early. Otherwise, continue.
  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: 'Missing Fields.',
    };
  }

  // Prepare data for insertion into the database
  const { title } = validatedFields.data;

  // Insert data into the database
  try {
    await sql`
      INSERT INTO vinyls (title,picture,user_id)
      VALUES (${title},'','')
    `;
  } catch (error) {
    // If a database error occurs, return a more specific error.
    return {
      message: 'Database Error: Failed to Create Vinyl.',
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
