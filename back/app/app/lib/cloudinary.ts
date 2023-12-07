import {v2 as cloudinary} from 'cloudinary';

cloudinary.config({
  cloud_name: CLOUDINARY_NAME,
  api_key: CLOUDINARY_KEY,
  api_secret: CLOUDINARY_SECRET
});

export async function updloadVinylPhoto(fileUrl, fileName) {
    cloudinary.v2.uploader.upload(fileUrl,
      { public_id: fileName },
      function(error, result) {console.log(result); });
}