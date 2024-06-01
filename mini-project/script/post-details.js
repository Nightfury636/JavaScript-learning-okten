
    document.addEventListener('DOMContentLoaded', function() {
    const postDetails = document.getElementById('postDetails');
    const commentsContainer = document.getElementById('commentsContainer');

    const urlParams = new URLSearchParams(window.location.search);
    const postId = urlParams.get('id');

    fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
    .then(response => response.json())
    .then(post => {
    postDetails.innerHTML = `
            <h2>Post Details</h2>
            <p>Title: ${post.title}</p>
            <p>Body: ${post.body}</p>
          `;
});

    fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
    .then(response => response.json())
    .then(comments => {
    comments.forEach(comment => {
    const commentDiv = document.createElement('div');
    commentDiv.className = 'comment';
    commentDiv.innerHTML = `
              <p>Name: ${comment.name}</p>
              <p>Email: ${comment.email}</p>
              <p>Body: ${comment.body}</p>
            `;
    commentsContainer.appendChild(commentDiv);
});
});
});
