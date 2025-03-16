const axios = require('axios');
module.exports = function (app) {
    app.get('/utilities/github', async (req, res) => {
        try {
            const { repo } = req.query;
            if (!repo) return res.status(400).json({ status: false, error: 'Repository name is required' });
            const response = await axios.get(`https://api.github.com/repos/${repo}`);
            res.status(200).json({ status: true, data: response.data });
        } catch (error) {
            res.status(500).json({ status: false, error: error.message });
        }
    });
};
