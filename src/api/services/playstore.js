module.exports = function (app) {
    app.get('/services/playstore', async (req, res) => {
        try {
            const { search } = req.query;
            if (!search) return res.status(400).json({ status: false, error: 'Search query is required' });
            res.redirect(`https://play.google.com/store/search?q=${encodeURIComponent(search)}&c=apps`);
        } catch (error) {
            res.status(500).json({ status: false, error: error.message });
        }
    });
};
