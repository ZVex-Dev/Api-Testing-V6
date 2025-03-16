const axios = require('axios');
module.exports = function (app) {
    app.get('/downloader/youtube', async (req, res) => {
        try {
            const { url } = req.query;
            if (!url) return res.status(400).json({ status: false, error: 'URL is required' });
            res.redirect(`https://www.youtube.com/watch?v=${encodeURIComponent(url)}`);
        } catch (error) {
            res.status(500).json({ status: false, error: error.message });
        }
    });
};
