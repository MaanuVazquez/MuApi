import http from 'http';
import express from 'express';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';
import router from './routes/index';
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use('/', router);

http.createServer(app).listen(80, '127.0.0.1');

console.log('Server running at http://127.0.0.1:80/');