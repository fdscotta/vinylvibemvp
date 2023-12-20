'use server'
import {v2 as cloudinary} from 'cloudinary';

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_KEY,
  api_secret: process.env.CLOUDINARY_SECRET
});

export async function updloadVinylPhoto (file : File) {
  const bytes = await file.arrayBuffer()
  const buffer = Buffer.from(bytes);

  const response : any = await new Promise((resolve, reject) => {
    cloudinary.uploader
      .upload_stream({}, (err, result) => {
        console.log(JSON.stringify(err))
        if (err) {
          reject(err);
        }

        resolve(result);
      })
      .end(buffer)
  });

  return response;
}