const express = require('express');
const path = require('path');
const handlePosrs = require('./hanlePosts');

const app = express();
app.use('/static', express.static(path.join(__dirname,)))

app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, './index.html'));
})

app.get('/posts',async (req, res) => {
    const posts = await handlePosrs.getPosts()
    res.send({
        data: posts
    });
})

app.listen(9000, (err) => {
    if (err) {
        return console.log(err);
    }
    console.log('server started');
})