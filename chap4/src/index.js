require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const PostRouter = require('./models/post/post.router')
const CommentRouter = require('./models/comment/comment.router');
const AuthRouter = require('./models/auth/auth.router');


async function main() {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('Mongoose Connected');
    const app = express();
    app.use(express.json());
    app.use('/api/posts', PostRouter)
    app.use('/api/comments', CommentRouter)
    app.use('/api/auth', AuthRouter)
    app.use(express.static('public'));

    app.get('/', (req, res) => {
        res.sendFile(path.resolve(__dirname + '/public/index.html'));
    })

    app.listen(process.env.PORT, (err) => {
        if (err) throw err;

        console.log('server started');
    })
}

main();
