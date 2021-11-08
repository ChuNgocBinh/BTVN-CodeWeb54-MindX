const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const schema = require('./schema')
const app = express();
app.use(express.json());
app.use(express.static('static'));


 
app.get('/posts', (req, res) => {
    res.sendFile(path.resolve(__dirname + '/static/index.html'));
})

async function main() {
    await mongoose.connect('mongodb://localhost:27017/chap4-demo');
    console.log('mongoose connected');

    const newPost = {
        title: 'cach khong lam ma van co an',
        imgUrl: 'https://cdn.24h.com.vn/upload/4-2021/images/2021-11-08//1636330368-dccdd35460d0461d6c579da1b763725e-width890height572.jpg',
        description: 'khong lam ma doi cos an thi chi co an dau bang an cat thoi',
        author: 'Huan Rose'
    }

    const newComment = {
        content: 'this is comment',
        author: 'chu ngoc thai',
        postId: '6188ca7b809bf6878deaa419'
    }

    // await schema.PostModel.create(newPost)
    // await schema.CommentModel.create(newComment)

    app.get('/api/posts', async (req, res)=>{
        try {
            const posts = await schema.PostModel.find();
            res.send({
                success: true,
                posts: posts
            })
        } catch (error) {
            res.status(404).send({
                data: null,
                message: error.message || ' Something went wrong'
            })
        }
    })

    app.get('/api/comments', async (req, res)=>{
        try {
            const commensts = await schema.CommentModel.find();
            res.send({
                success: true,
                comments: commensts
            })
        } catch (error) {
            res.status(404).send({
                data: null,
                message: error.message || ' Something went wrong'
            })
        }
    })
}

main();

app.listen(9000, (err)=>{
    if (err) throw err;

    console.log('server started');
})