import express from 'express';
import path, { dirname } from 'path';
const app = express();

app.use('/vite-react-ts-router', express.static(path.join(dirname('./'), 'dist')));

app.get('/vite-react-ts-router/*', function (req, res) {
    res.sendFile(path.join(dirname('./'), 'dist', 'index.html'));
});

app.listen(9000);