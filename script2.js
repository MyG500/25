let myPosts = [{
    "postId": 1,
    "title": "Title of Post 1", "content": "Content of Post 1"
}, {
    "postId": 2,
    "title": "Title of Post 2", "content": "Content of Post 2"
}, {
    "postId": 3,
    "title": "Title of Post 3", "content": "Content of Post 3"
}];

let comments = [{
    "commentId": 1,
    "commentOfPost": 1,
    "body": "Comment 1 to post 1"
}, {
    "commentId": 2,
    "commentOfPost": 1,
    "body": "Comment 2 to post 1"
}, {
    "commentId": 3,
    "commentOfPost": 2,
    "body": "Comment 1 to post 2"
}, {
    "commentId": 4,
    "commentOfPost": 2,
    "body": "Comment 2 to post 2"
}, {
    "commentId": 5,
    "commentOfPost": 3,
    "body": "Comment 1 to post 3"
}, {
    "commentId": 6,
    "commentOfPost": 3,
    "body": "Comment 2 to post 3"
}];

let allData = [];
// console.log(allData);
let postsPromise = new Promise((resolve) => {
    setTimeout(() => {
        resolve(myPosts);
    }, 3000);
});
let commentPromise = new Promise((resolve) => {
    setTimeout(() => {
        resolve(comments);
    }, 4000);
});

postsPromise.then((result) => allData.push(result)).then(() => commentPromise).then((result2) => allData.push(result2)).then(() => renderToHTML(allData));

function renderToHTML(myData) {
    myData[0].forEach(post => {
        let myPostDiv = document.createElement("div");
        myPostDiv.setAttribute("class", "postDiv");
        myPostDiv.innerHTML = `<h2>Post Title: ${post.title}</h2><p>Post Content: ${post.content}</p><h3>Comments:</h3>`;
        myData[1].forEach(comment => {
            if (comment.commentOfPost == post.postId) {
                let myCommentDiv = document.createElement("div");
                myCommentDiv.setAttribute("class", "commentDiv");
                myCommentDiv.innerHTML = `<p>Comment Content: ${comment.body}</p>`;
                myPostDiv.appendChild(myCommentDiv);
            }
        });
        document.body.appendChild(myPostDiv);
    });
}