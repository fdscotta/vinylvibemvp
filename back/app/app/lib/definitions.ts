// This file contains type definitions for your data.
// It describes the shape of the data, and what data type each property should accept.
// For simplicity of teaching, we're manually defining these types.
// However, these types are generated automatically if you're using an ORM such as Prisma.
export type User = {
  id: string;
  name: string;
  email: string;
  password: string;
};

export type Vinyls = {
  id: string;
  name: string;
  phone: string;
  title: string;
  picture: string;
  user_id: string;
};

export type LatestVinyls = {
  id: string;
  name: string;
  title: string;
  picture: string;
};

export type VinylsTable = {
  id: string;
  name: string;
  phone: string;
  title: string;
  picture: string;
  user_id: string;
};

export type VinylsForm = {
  id: string;
  name: string;
  phone: string;
  title: string;
  picture: string;
  user_id: string;
};
