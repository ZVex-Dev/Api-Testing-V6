const axios = require('axios');
module.exports = function (app) {
    app.get('/downloader/tiktok', async (req, res) => {
        try {
            const { url } = req.query;
            if (!url) return res.status(400).json({ status: false, error: 'URL is required' });
            const response = await axios.get(`https://www.tikwm.com/api/?url=${encodeURIComponent(url)}`);
            res.status(200).json({ status: true, data: response.data });
        } catch (error) {
            res.status(500).json({ status: false, error: error.message });
        }
    });
};
