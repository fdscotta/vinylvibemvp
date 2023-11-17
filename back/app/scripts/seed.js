const { db } = require('@vercel/postgres');
const {
  users,
  vinyls,
} = require('../app/lib/placeholder-data.js');
const bcrypt = require('bcrypt');

async function seedUsers (client) {
  try {
    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
    // Create the "users" table if it doesn't exist
    const createTable = await client.sql`
      CREATE TABLE IF NOT EXISTS users (
        id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        phone TEXT NOT NULL UNIQUE,
        email TEXT NOT NULL UNIQUE,
        password TEXT NOT NULL
      );
    `;

    console.log(`Created "users" table`);

    // Insert data into the "users" table
    const insertedUsers = await Promise.all(
      users.map(async (user) => {
        const hashedPassword = await bcrypt.hash(user.password, 10);
        return client.sql`
        INSERT INTO users (id, name, phone, email, password)
        VALUES (${user.id}, ${user.name}, ${user.phone}, ${user.email}, ${hashedPassword})
        ON CONFLICT (id) DO NOTHING;
      `;
      }),
    );

    console.log(`Seeded ${insertedUsers.length} users`);

    return {
      createTable,
      users: insertedUsers,
    };
  } catch (error) {
    console.error('Error seeding users:', error);
    throw error;
  }
}

async function seedVinyls (client) {
  try {
    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
    // Create the "vinyls" table if it doesn't exist
    const createTable = await client.sql`
      CREATE TABLE IF NOT EXISTS vinyls (
        id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
        title TEXT NOT NULL,
        album_status VARCHAR(255) NOT NULL,
        media_condition VARCHAR(255) NOT NULL,
        packaging_condition VARCHAR(255) NOT NULL,
        is_auction BOOLEAN NOT NULL,
        accept_offers BOOLEAN NOT NULL,
        listing_price INT NOT NULL,
        photo VARCHAR(255) NOT NULL,
        description VARCHAR(255) NOT NULL,
        adv_store_location VARCHAR(255) NOT NULL,
        adv_cost INT NOT NULL,
        adv_sku VARCHAR(255) NOT NULL,
        user_id UUID NOT NULL,
        status VARCHAR(255) NOT NULL
      );
    `;

    console.log(`Created "vinyls" table`);

    // Insert data into the "vinyls" table
    const insertedVinyls = await Promise.all(
      vinyls.map(async (vinyl) => {
        return client.sql`
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
          status
        )
        VALUES (
          ${vinyl.title},
          ${vinyl.album_status},
          ${vinyl.media_condition},
          ${vinyl.packaging_condition},
          ${vinyl.is_auction},
          ${vinyl.accept_offers},
          ${vinyl.listing_price},
          ${vinyl.photo},
          ${vinyl.description},
          ${vinyl.adv_store_location},
          ${vinyl.adv_cost},
          ${vinyl.adv_sku},
          ${vinyl.user_id},
          ${vinyl.status}
        )
        ON CONFLICT (id) DO NOTHING;
      `;
      }),
    );

    console.log(`Seeded ${insertedVinyls.length} vinyls`);

    return {
      createTable,
      vinyls: insertedVinyls,
    };
  } catch (error) {
    console.error('Error seeding vinyls:', error);
    throw error;
  }
}

async function main () {
  const client = await db.connect();

  await seedVinyls(client);
  await seedUsers(client);

  await client.end();
}

main().catch((err) => {
  console.error(
    'An error occurred while attempting to seed the database:',
    err,
  );
});
