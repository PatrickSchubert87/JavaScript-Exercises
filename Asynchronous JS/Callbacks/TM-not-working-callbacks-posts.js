/**
 * In thins example the code doesn't initialize the createPost function.
 * The getPost() gets invoced after 1 second, however the createPost() needs 2 second to get invoked.
 * @youtube_link https://www.youtube.com/watch?v=PoRJizFvM7s&t=160s 2:40 - 9:00
 */
const posts = [
    { title: 'Post One', body: 'This is post one'},
    { title: 'Post Two', body: 'This is post two'}
];

function getPosts() {
    setTimeout(() => {
        let output = '';
        posts.forEach(post => {
            output += `<li>${post.title}</li>`;
        });
        document.body.innerHTML = output;
    },1000);
}

function createPost(post) {
    setTimeout(() => {
        posts.push(post);
    }, 2000);
}

getPosts();

createPost({ title: 'Post Three', body: 'This is post three'});