import { unstable_noStore as noStore } from 'next/cache';
import { DiscogsClient } from '@lionralfs/discogs-client';

export async function discogSearchByName(name: string) {
  noStore();

  try {
    let client = new DiscogsClient({
        auth: {
            method: 'discogs',
            consumerKey: process.env.DISCOG_CONSUMER_KEY,
            consumerSecret: process.env.DISCOG_SECRET,
        },
    });

    let db = client.database();
    return await db.search({ query: name, type: 'q' })
        .then(function ({ data }) {
            return data.results;
        });
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to search on Discog.');
  }
}