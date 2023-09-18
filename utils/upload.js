import multer from 'multer';
import {GridFsStorage } from 'multer-gridfs-storage';
import mongoose from 'mongoose'; // Import mongoose if not already done

const storage = new GridFsStorage({
  url: 'mongodb://shubham:12345@ac-i4xzraa-shard-00-00.ufgol01.mongodb.net:27017,ac-i4xzraa-shard-00-01.ufgol01.mongodb.net:27017,ac-i4xzraa-shard-00-02.ufgol01.mongodb.net:27017/?ssl=true&replicaSet=atlas-uinx47-shard-0&authSource=admin&retryWrites=true&w=majority',
  options: { useNewUrlParser: true },
  file: (request, file) => {
    const match = ['image/PNG', 'image/jpeg']; // Updated file MIME types

    if (match.indexOf(file.mimetype) === -1) {
      // Invalid file type, return a default filename
      return `${Date.now()}-blog-${file.originalname}`;
    }

    return {
      bucketName: 'photos',
      filename: `${Date.now()}-blog-${file.originalname}`,
    };
  },
});

// Create a Multer instance with the storage engine
const upload = multer({ storage });

export default upload;
