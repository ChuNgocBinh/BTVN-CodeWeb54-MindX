const express = require('express');
const cmtManager = require('./cmtManager');
const app = express();

app.use(express.json());

app.get('/comments', async (req, res) => {
    const comments = await cmtManager.getComments()
    res.send({
        data: comments,
    })
})

app.post('/comments', async (req, res) => {
    const dataComment = req.body;
    const newComments = await cmtManager.createComment(dataComment);
    res.send({
        data: newComments,
    })
})

app.put('/comments/:id', async (req, res) => {
    const { id } = req.params;
    const dataUpdate = req.body;
    console.log(dataUpdate);
    const commentId = await cmtManager.updateComment(id,dataUpdate);
    res.send({
        data: commentId,
    })
})

app.delete('/comments/:id', async (req, res) => {
    const { id } = req.params;
    const newComment = await cmtManager.deleteComment(id);
    res.send({
        data: newComment,
    })
})


app.listen(8080, (err) => {
    if (err) {
        return console.log(err);
    }
    console.log('server started');
})