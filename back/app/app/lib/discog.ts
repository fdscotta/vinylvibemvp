'use server'
import { unstable_noStore as noStore } from 'next/cache';
import { DiscogsClient } from '@lionralfs/discogs-client';

export async function discogsSearchByName(name: string) {
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
    return await db.search({ query: name, type: 'master' })
        .then(function ({ data }) {
            return data.results;
        });
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to search on Discog.');
  }
}

export async function discogsSearchById(id: number) {
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
    return await db.getMaster(id).then(function ({ rateLimit, data }) {
      return data;
    });
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to search on Discog.');
  }
}