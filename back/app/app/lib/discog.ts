'use server'
import { unstable_noStore as noStore } from 'next/cache';
import { DiscogsClient } from '@lionralfs/discogs-client';

export async function discogSearchByName(name: string) {
  noStore();

  try {
    let client = new DiscogsClient({
        auth: {
          method: 'discogs',
          consumerKey: process.env.DISCOGS_SECRET,
          consumerSecret: process.env.DISCOGS_CONSUMER_KEY
        },
    });

    let db = client.database();
    return await db.search({ query: name })
        .then(function ({ data }) {
            return data.results;
        });
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to search on Discog.');
  }
}