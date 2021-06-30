/**
 * This is the same code as a Promises().
 * Instead of using a callback(), or a Promise() I use a Async & Await().
 * @youtube_link https://www.youtube.com/watch?v=PoRJizFvM7s&t=1200s 20:05 - 23:20
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
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            posts.push(post);

            const error = false;

            if(!error) {
                resolve();
            } else {
                reject('Error: Something went wrong.');
            }
        }, 2000);
    });
}

// createPost({ title: 'Post Three', body: 'This is post three'})
// .then(getPosts)
// .catch(err => console.log(err));

// async / await
async function init() {
    await createPost({ title: 'Post Three', body: 'This is post three'});

    getPosts();
}

init();

// async / await / fetch
async function fetchUsers() {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');

    const data = await res.json();

    console.log(data);
}

fetchUsers();