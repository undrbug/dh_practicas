import express from 'express';
import path from 'path';
import { env } from 'process';

const app = express();

app.use(express.static('public'));

const PORT = process.env.PORT || 3030;

app.get('/', (req, res) => {
    res.sendFile(path.resolve('views/index.html'));
})

app.get(`/lovelace`, (req, res) => {
    res.sendFile(path.resolve('views/lovelace.html'));
})

app.get(`/turing`, (req, res) => {
    res.sendFile(path.resolve('views/turing.html'));
})

app.get(`/berners-lee`, (req, res) => {
    res.sendFile(path.resolve('views/berners-lee.html'));
})

app.get(`/babbage`, (req, res) => {
    res.sendFile(path.resolve('views/babbage.html'));
})

app.get(`/clarke`, (req, res) => {
    res.sendFile(path.resolve('views/clarke.html'));
})

app.get(`/hamilton`, (req, res) => {
    res.sendFile(path.resolve('views/hamilton.html'));
})

app.get(`/hopper`, (req, res) => {
    res.sendFile(path.resolve('views/hopper.html'));
})

//error 404 - Not Found
app.use((req, res) => {
    res.sendFile(path.resolve('views/404.html'));
})

app.listen(PORT, (err) => {
    err ? console.error(`Houston we have a problem: ${err.message}`) : console.log(`Server is running on http://localhost:${PORT}`)
});