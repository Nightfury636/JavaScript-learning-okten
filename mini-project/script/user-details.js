document.addEventListener('DOMContentLoaded', function() {
    const userDetails = document.getElementById('userDetails');
    const postsContainer = document.getElementById('postsContainer');
    const loadPostsButton = document.getElementById('loadPosts');

    const urlParams = new URLSearchParams(window.location.search);
    const userId = urlParams.get('id');

    fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
        .then(response => response.json())
        .then(user => {
            userDetails.innerHTML = `
            <h2>User Details</h2>
            <p>ID: ${user.id}</p>
            <p>Name: ${user.name}</p>
            <p>Username: ${user.username}</p>
            <p>Email: ${user.email}</p>
            <p>Address: ${user.address.street}, ${user.address.suite}, ${user.address.city}, ${user.address.zipcode}</p>
            <p>Phone: ${user.phone}</p>
            <p>Website: ${user.website}</p>
            <p>Company: ${user.company.name}</p>
          `;
        });

    loadPostsButton.addEventListener('click', function() {
        fetch(`https://jsonplaceholder.typicode.com/users/${userId}/posts`)
            .then(response => response.json())
            .then(posts => {
                postsContainer.innerHTML = '';
                posts.forEach(post => {
                    const postDiv = document.createElement('div');
                    postDiv.className = 'post';
                    postDiv.innerHTML = `
                <p>Title: ${post.title}</p>
                <a href="post-details.html?id=${post.id}">View Post Details</a>
              `;
                    postsContainer.appendChild(postDiv);
                });
            });
    });
});