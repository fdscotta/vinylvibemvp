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
    id: string,
    title: string,
    media_condition: 'm' | 'nm' | 'vg+' | 'vg' | 'g+' | 'g' | 'f' | 'p',
    packaging_condition: 'm' | 'nm' | 'vg+' | 'vg' | 'g+' | 'g' | 'f' | 'p' | 'x' | 'nc' ,
    price: number,
    photo: string,
    description: string,
    address: string,
    sku: string,
    user_id: string,
    status: 'publish' | 'draft';
    publish_date: string;
};

export type LatestVinyls = {
    id: string,
    title: string,
    media_condition: 'm' | 'nm' | 'vg+' | 'vg' | 'g+' | 'g' | 'f' | 'p',
    packaging_condition: 'm' | 'nm' | 'vg+' | 'vg' | 'g+' | 'g' | 'f' | 'p' | 'x' | 'nc' ,
    price: number,
    photo: string,
    description: string,
    address: string,
    sku: string,
    user_id: string,
    status: 'publish' | 'draft';
    publish_date: string;
};

export type VinylsTable = {
    id: string,
    title: string,
    media_condition: 'm' | 'nm' | 'vg+' | 'vg' | 'g+' | 'g' | 'f' | 'p',
    packaging_condition: 'm' | 'nm' | 'vg+' | 'vg' | 'g+' | 'g' | 'f' | 'p' | 'x' | 'nc' ,
    price: number,
    photo: string,
    description: string,
    address: string,
    sku: string,
    user_id: string,
    status: 'publish' | 'draft';
    publish_date: string;
};

export type VinylsForm = {
    id: string,
    title: string,
    media_condition: 'm' | 'nm' | 'vg+' | 'vg' | 'g+' | 'g' | 'f' | 'p',
    packaging_condition: 'm' | 'nm' | 'vg+' | 'vg' | 'g+' | 'g' | 'f' | 'p' | 'x' | 'nc' ,
    price: number,
    photo: string,
    description: string,
    address: string,
    sku: string,
    user_id: string,
    status: 'publish' | 'draft';
    publish_date: string;
};
