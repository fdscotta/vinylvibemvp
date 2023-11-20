import { sql } from '@vercel/postgres';
import {
  VinylsForm,
  VinylsTable,
  User,
} from './definitions';
import { unstable_noStore as noStore } from 'next/cache';


export async function fetchLatestVinyls(userID : string) {
  noStore();
  try {
    const data = await sql<VinylsTable>`
      SELECT
        id,
        title,
        photo,
        status,
        description,
        user_id,
        publish_date
      FROM vinyls
      WHERE user_id = ${userID}
      LIMIT 5`;

    const latestVinyls = data.rows;
    return latestVinyls;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch the latest vinyls.');
  }
}

const ITEMS_PER_PAGE = 6;
export async function fetchFilteredVinyls(
  query: string,
  currentPage: number,
) {
  noStore();
  const offset = (currentPage - 1) * ITEMS_PER_PAGE;
  try {
    const vinyls = await sql<VinylsTable>`
      SELECT
        id,
        title,
        photo,
        description,
        adv_cost,
        adv_store_location,
        status,
        user_id,
        publish_date
      FROM vinyls
      WHERE
        title::text ILIKE ${`%${query}%`}
      LIMIT ${ITEMS_PER_PAGE} OFFSET ${offset}
    `;

    return vinyls.rows;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch vinyls.');
  }
}

export async function fetchVinylsPages(query: string) {
  noStore();
  try {
    const count = await sql`SELECT COUNT(*)
    FROM vinyls`;

    const totalPages = Math.ceil(Number(count.rows[0].count) / ITEMS_PER_PAGE);
    return totalPages;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch total number of vinyls.');
  }
}

export async function fetchVinylById(id: string) {
  noStore();
  try {
    const data = await sql<VinylsForm>`
      SELECT
        id,
        title,
        photo,
        user_id,
        publish_date
      FROM vinyls
      WHERE id = ${id};
    `;

    const vinyl = data.rows;

    return vinyl[0];
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch vinyl.');
  }
}

export async function getUser(email: string) {
  try {
    const user = await sql`SELECT * from USERS where email=${email}`;
    return user.rows[0] as User;
  } catch (error) {
    console.error('Failed to fetch user:', error);
    throw new Error('Failed to fetch user.');
  }
}
