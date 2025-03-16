const axios = require('axios');
module.exports = function (app) {
    app.get('/services/gemini', async (req, res) => {
        try {
            const { query } = req.query;
            if (!query) return res.status(400).json({ status: false, error: 'Query is required' });
            const response = await axios.post('https://mind.hydrooo.web.id/v1/chat', { text: query });
            res.status(200).json({ status: true, response: response.data });
        } catch (error) {
            res.status(500).json({ status: false, error: error.message });
        }
    });
};
