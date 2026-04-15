import axios from "axios";

// src/utils/uploadImage.js
export const uploadImage = async (file) => {
  const formData = new FormData();
  formData.append("file", file);
  
  // এই নামটি হুবহু Cloudinary Settings এর মতো হতে হবে (Case Sensitive)
  formData.append("upload_preset", "pqardv7l"); 

  try {
    const response = await axios.post(
      `https://api.cloudinary.com/v1_1/djgzuyzrv/image/upload`,
      formData
    );
    return response.data.secure_url;
  } catch (error) {
    // এরর ডিটেইলস দেখার জন্য এটি যোগ করুন
    console.error("Cloudinary Error Detail:", error.response?.data); 
    throw error;
  }
};