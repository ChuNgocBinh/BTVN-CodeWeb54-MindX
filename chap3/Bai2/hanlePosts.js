const fs = require('fs');

const getPosts = async () => {
    try {
        const postsJSON = await fs.promises.readFile('posts.json', 'utf-8');
        const posts = JSON.parse(postsJSON);
        return posts        
    } catch (error) {
        console.log(error);
    }

}

module.exports = {
    getPosts
}