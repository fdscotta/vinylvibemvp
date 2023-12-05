const { db } = require('@vercel/postgres');
const {
  users,
  vinyls,
} = require('../app/lib/placeholder-data.js');
const bcrypt = require('bcrypt');

async function seedUsers (client) {
  try {
    // await client.sql`DROP TABLE users`;
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
    //await client.sql`DROP TABLE vinyls`;
    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
    // Create the "vinyls" table if it doesn't exist
    const createTable = await client.sql`
      CREATE TABLE IF NOT EXISTS vinyls (
        id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
        title TEXT NOT NULL,
        media_condition VARCHAR(255) NOT NULL,
        packaging_condition VARCHAR(255) NOT NULL,
        price INT NOT NULL,
        photo VARCHAR(255) NOT NULL,
        description VARCHAR(255) NOT NULL,
        address VARCHAR(255) NOT NULL,
        sku VARCHAR(255) NOT NULL,
        user_id UUID NOT NULL,
        status VARCHAR(255) NOT NULL,
        publish_date DATE NOT NULL,
        discogs_data_id INT not NUll
      );
    `;

    console.log(`Created "vinyls" table`);

    // Insert data into the "vinyls" table
    const insertedVinyls = await Promise.all(
      vinyls.map(async (vinyl) => {
        return client.sql`
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
          ${vinyl.title},
          ${vinyl.media_condition},
          ${vinyl.packaging_condition},
          ${vinyl.price},
          ${vinyl.photo},
          ${vinyl.description},
          ${vinyl.address},
          ${vinyl.sku},
          ${vinyl.user_id},
          ${vinyl.status},
          ${vinyl.publish_date},
          ${vinyl.discogs_data_id}
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

async function createDiscogsData (client) {
  try {

    //await client.sql`DROP TABLE discogs_data`;
    // Create the "discogs_data" table if it doesn't exist
    const createTable = await client.sql`
      CREATE TABLE IF NOT EXISTS discogs_data (
        id INT PRIMARY KEY,
        json_response JSONB NOT NULL
      );
    `;

    console.log(`Created "discogs_data" table`);

    return {
      createTable,
    };
  } catch (error) {
    console.error('Error seeding discogs_data:', error);
    throw error;
  }
}

async function main () {
  const client = await db.connect();

  await seedVinyls(client);
  await seedUsers(client);
  await createDiscogsData(client);

  await client.end();
}

main().catch((err) => {
  console.error(
    'An error occurred while attempting to seed the database:',
    err,
  );
});
