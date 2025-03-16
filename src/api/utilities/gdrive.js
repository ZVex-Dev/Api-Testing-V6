module.exports = function (app) {
    app.get('/utilities/gdrive', async (req, res) => {
        try {
            const { id } = req.query;
            if (!id) return res.status(400).json({ status: false, error: 'File ID is required' });
            res.redirect(`https://drive.google.com/uc?id=${id}&authuser=0&export=download`);
        } catch (error) {
            res.status(500).json({ status: false, error: error.message });
        }
    });
};
