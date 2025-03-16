const axios = require('axios');
module.exports = function (app) {
    app.get('/utilities/pastebin', async (req, res) => {
        try {
            const { pasteId } = req.query;
            if (!pasteId) return res.status(400).json({ status: false, error: 'Paste ID is required' });
            const response = await axios.get(`https://pastebin.com/raw/${pasteId}`);
            res.status(200).json({ status: true, data: response.data });
        } catch (error) {
            res.status(500).json({ status: false, error: error.message });
        }
    });
};
