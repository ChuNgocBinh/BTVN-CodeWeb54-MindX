const fs = require('fs');
const uuid = require('uuid');

//Get all comments

const getComments = async () => {
    try {
        const commentsJSON = await fs.promises.readFile('comments.json', 'utf-8');
        const comments = JSON.parse(commentsJSON);
        return comments;
    } catch (error) {
        console.log(error);
    }
}

//create comment

const createComment = async (dataComment) => {
    try {
        const commentsJSON = await fs.promises.readFile('comments.json', 'utf-8');
        const comments = JSON.parse(commentsJSON);
        const newComment = {
            userId: uuid.v1(),
            ...dataComment
        }
        const newComments = [...comments, newComment];
        await fs.promises.writeFile('comments.json', JSON.stringify(newComments));
        return newComments;
    } catch (error) {
        console.log(error);
    }
}

// update comment

const updateComment = async (id, dataUpdate) => {
    try {
        const commentsJSON = await fs.promises.readFile('comments.json', 'utf-8');
        const comments = JSON.parse(commentsJSON);
        let commentId = comments.findIndex(comment => comment.userId == id);
        if (commentId !== -1) {
            comments[commentId] = {
                ...comments[commentId],
                ...dataUpdate
            }
        }
        await fs.promises.writeFile('comments.json', JSON.stringify(comments));
        return comments[commentId];
    } catch (error) {
        console.log(error);
    }
}


// delete comment

const deleteComment = async (id) => {
    try {
        const commentsJSON = await fs.promises.readFile('comments.json', 'utf-8');
        const comments = JSON.parse(commentsJSON);
        let newComment = comments.filter(comment => comment.userId != id);
       
        await fs.promises.writeFile('comments.json', JSON.stringify(newComment));
        return newComment;
    } catch (error) {
        console.log(error);
    }
}

module.exports = {
    getComments,
    createComment,
    updateComment,
    deleteComment
}