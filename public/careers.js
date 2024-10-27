
document.addEventListener('DOMContentLoaded', function () {
    const searchForm = document.getElementById('searchForm');
    searchForm.addEventListener('submit', function (e) {
        e.preventDefault();
        const interest = document.getElementById('interest').value;

        const resultsDiv = document.getElementById('results');
        resultsDiv.innerHTML = 'Loading...';

        
        fetch(`../server/career-options.php?name=${encodeURIComponent(interest)}`)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                resultsDiv.innerHTML = '';
                if (data.length) {
                    data.forEach(career => {
                        const careerItem = document.createElement('div');
                        careerItem.innerHTML = `
                            <h3>${career.name}</h3>
                            <p>${career.description}</p>
                        `;
                        resultsDiv.appendChild(careerItem);
                    });
                } else {
                    resultsDiv.innerHTML = 'No careers found matching your interest.';
                }
            })
            .catch(error => {
                console.error('Error:', error);
                resultsDiv.innerHTML = 'An error occurred. Please try again later.';
            });
    });
});
