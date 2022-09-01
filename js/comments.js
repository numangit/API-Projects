// load API with button
function loadData() {
    fetch('https://jsonplaceholder.typicode.com/comments')
        .then(res => res.json())
        .then(data => displayComments(data.slice(0, 20)))
}
// loading data auto matically without any button
loadData();
// function to display the loaded data
const displayComments = (comments) => {
    const commentDiv = document.getElementById('comment-container');
    // forEach used to create eleent for each data
    comments.forEach(comment => {
        const newP = document.createElement('p');
        newP.innerHTML = `<P onclick="loadPost('${comment.postId}')">${comment.body}</P>`
        commentDiv.appendChild(newP);
    });
}
//function to load the commetn post
const loadPost = (postId) => {
    const postDiv = document.getElementById('post-info');
    postDiv.innerText = '';
    const url = `https://jsonplaceholder.typicode.com/comments/${postId}`
    fetch(url)
        .then(res => res.json())
        .then(data => displayPost(data))
}
// function to display postuser email and name on website
const displayPost = (postUser) => {
    const postDiv = document.getElementById('post-info');
    const newP = document.createElement('p');
    newP.innerHTML = `<p> Name : ${postUser.name} <br>
        Email: ${postUser.email}</p>`;
    postDiv.appendChild(newP);
}

