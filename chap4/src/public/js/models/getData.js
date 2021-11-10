export async function getAllposts() {
    let posts = [];
    await fetch('http://localhost:9000/api/posts')
    .then(response => response.json())
    .then(data => {
       posts = data.data;
    })
    return posts;
}

export async function getCommentsBypost(postId){
    let comments = [];
    await fetch(`http://localhost:9000/api/posts/${postId}/comments`)
    .then(response => response.json())
    .then(data => {
        comments = data.data;
    })
    return comments;
}

export async function getPost(postId){
    let post = {};
    await fetch(`http://localhost:9000/api/posts/${postId}`)
    .then(response => response.json())
    .then(data => {
        post = data.data;
    })
    return post;
}
