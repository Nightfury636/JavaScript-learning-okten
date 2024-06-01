document.addEventListener('DOMContentLoaded', function() {
    const userContainer = document.getElementById('userContainer');

    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(users => {
            users.forEach(user => {
                const userDiv = document.createElement('div');
                userDiv.className = 'user';
                userDiv.innerHTML = `
              <p>ID: ${user.id}</p>
              <p>Name: ${user.name}</p>
              <a href="user-details.html?id=${user.id}">View Details</a>
            `;
                userContainer.appendChild(userDiv);
            });
        });
});