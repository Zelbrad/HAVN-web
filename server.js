const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;

// Serve static files from the "HAVN Final" directory
app.use(express.static(path.join(__dirname, 'HAVN Final')));

// Route for the root path to serve hero.html
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'HAVN Final', 'hero.html'));
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
