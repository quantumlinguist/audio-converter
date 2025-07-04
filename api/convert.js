const cloudinary = require('cloudinary').v2;

cloudinary.config({
  cloud_name: process.env.const cloudinary = require('cloudinary').v2;

cloudinary.config({
  cloud_name: process.env.const cloudinary = require('cloudinary').v2;

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET
});

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { base64Audio } = req.body;
    
    // Convert base64 to buffer (on Vercel's servers)
    const buffer = Buffer.from(base64Audio, 'base64');
    
    // Upload to Cloudinary and get URL
    const uploadResult = await new Promise((resolve, reject) => {
      cloudinary.uploader.upload_stream(
        {
          resource_type: 'video',
          public_id: `podcast-${Date.now()}`,
          folder: 'temp_podcast_audio'
        },
        (error, result) => {
          if (error) reject(error);
          else resolve(result);
        }
      ).end(buffer);
    });

    // Return the download URL
    res.json({ secure_url: uploadResult.secure_url });

  } catch (error) {
    res.status(500).json({ error: 'Conversion failed' });
  }
},
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET
});

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { base64Audio } = req.body;
    
    // Convert base64 to buffer (on Vercel's servers)
    const buffer = Buffer.from(base64Audio, 'base64');
    
    // Upload to Cloudinary and get URL
    const uploadResult = await new Promise((resolve, reject) => {
      cloudinary.uploader.upload_stream(
        {
          resource_type: 'video',
          public_id: `podcast-${Date.now()}`,
          folder: 'temp_podcast_audio'
        },
        (error, result) => {
          if (error) reject(error);
          else resolve(result);
        }
      ).end(buffer);
    });

    // Return the download URL
    res.json({ secure_url: uploadResult.secure_url });

  } catch (error) {
    res.status(500).json({ error: 'Conversion failed' });
  }
},
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET
});

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { base64Audio } = req.body;
    
    // Convert base64 to buffer (on Vercel's servers)
    const buffer = Buffer.from(base64Audio, 'base64');
    
    // Upload to Cloudinary and get URL
    const uploadResult = await new Promise((resolve, reject) => {
      cloudinary.uploader.upload_stream(
        {
          resource_type: 'video',
          public_id: `podcast-${Date.now()}`,
          folder: 'temp_podcast_audio'
        },
        (error, result) => {
          if (error) reject(error);
          else resolve(result);
        }
      ).end(buffer);
    });

    // Return the download URL
    res.json({ secure_url: uploadResult.secure_url });

  } catch (error) {
    res.status(500).json({ error: 'Conversion failed' });
  }
}
