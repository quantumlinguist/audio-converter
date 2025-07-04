const cloudinary = require('cloudinary').v2;

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    // Debug logging
    console.log('Cloud name:', process.env.CLOUDINARY_CLOUD_NAME);
    console.log('API key exists:', !!process.env.CLOUDINARY_API_KEY);
    console.log('API secret exists:', !!process.env.CLOUDINARY_API_SECRET);

    cloudinary.config({
      cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
      api_key: process.env.CLOUDINARY_API_KEY,
      api_secret: process.env.CLOUDINARY_API_SECRET
    });

    const { base64Audio } = req.body;
    
    if (!base64Audio) {
      return res.status(400).json({ error: 'Missing base64Audio' });
    }

    const buffer = Buffer.from(base64Audio, 'base64');
    
    const uploadResult = await new Promise((resolve, reject) => {
      cloudinary.uploader.upload_stream(
        {
          resource_type: 'video',
          public_id: `podcast-${Date.now()}`,
          folder: 'temp_podcast_audio'
        },
        (error, result) => {
          if (error) {
            console.log('Cloudinary error:', error);
            reject(error);
          } else {
            resolve(result);
          }
        }
      ).end(buffer);
    });

    res.json({ secure_url: uploadResult.secure_url });

  } catch (error) {
    console.error('Function error:', error);
    res.status(500).json({ error: error.message || 'Conversion failed' });
  }
}
