
document.getElementById("trackForm").addEventListener("submit", function(event) {
    event.preventDefault(); 

    const userName = document.getElementById("userName").value;

    fetch(`/track?userName=${encodeURIComponent(userName)}`)
        .then(response => {
            if (!response.ok) {
                throw new Error("Network response was not ok");
            }
            return response.json();
        })
        .then(data => {
            const statusList = document.getElementById("statusList");
            statusList.innerHTML = ""; 

            if (data.length === 0) {
                statusList.innerHTML = '<p>No complaints found for this user.</p>';
                return;
            }

           
            data.forEach(complaint => {
                const complaintDiv = document.createElement("div");
                complaintDiv.classList.add("complaint-item");
                complaintDiv.innerHTML = `
                    <p><strong>ID:</strong> ${complaint.id}</p>
                    <p><strong>Description:</strong> ${complaint.complaint}</p>
                    <p><strong>Status:</strong> ${complaint.status}</p>
                    <p><strong>Last Updated:</strong> ${new Date(complaint.created_at).toLocaleString()}</p>
                    <hr>
                `;
                statusList.appendChild(complaintDiv);
            });
        })
        .catch(error => {
            console.error("Error fetching complaint statuses:", error);
            alert("Error fetching complaint statuses. Please try again.");
        });
});


document.addEventListener("DOMContentLoaded", function() {
    const complaintsTable = document.getElementById("complaintsTable");

    const complaints = [
        { id: "101", user: "John Doe", description: "Road construction delay", status: "In Progress" },
        { id: "102", user: "Jane Smith", description: "Lack of teachers", status: "Resolved" }
    ];

    complaints.forEach(complaint => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${complaint.id}</td>
            <td>${complaint.user}</td>
            <td>${complaint.description}</td>
            <td>${complaint.status}</td>
            <td>
                <button class="view-btn" data-id="${complaint.id}">View</button>
            </td>
        `;
        complaintsTable.appendChild(row);
    });

    document.querySelectorAll(".view-btn").forEach(button => {
        button.addEventListener("click", function() {
            const complaintID = this.getAttribute("data-id");
            openComplaintModal(complaintID);
        });
    });
});

function openComplaintModal(id) {
    const complaints = [
        { id: "101", user: "John Doe", description: "Road construction delay", status: "In Progress" },
        { id: "102", user: "Jane Smith", description: "Lack of teachers", status: "Resolved" }
    ];

    const complaintData = complaints.find(complaint => complaint.id === id);
    if (complaintData) {
        document.getElementById("complaintID").innerText = complaintData.id;
        document.getElementById("complaintUser").innerText = complaintData.user || "N/A";
        document.getElementById("complaintDescription").innerText = complaintData.description;
        document.getElementById("complaintStatus").innerText = complaintData.status;
        document.getElementById("complaintModal").style.display = "block"; 
    }
}

document.querySelector(".close-btn").addEventListener("click", function() {
    document.getElementById("complaintModal").style.display = "none";
});

window.addEventListener("click", function(event) {
    if (event.target === document.getElementById("complaintModal")) {
        document.getElementById("complaintModal").style.display = "none";
    }
});

document.getElementById("resolveBtn").addEventListener("click", function() {
    alert("Complaint marked as resolved.");
    document.getElementById("complaintModal").style.display = "none";
});

document.getElementById("forwardBtn").addEventListener("click", function() {
    alert("Complaint forwarded to government.");
    document.getElementById("complaintModal").style.display = "none";
});



document.getElementById("trackForm").addEventListener("submit", function(event) {
    event.preventDefault(); 

    const userName = document.getElementById("userName").value;

    fetch(`/track?userName=${encodeURIComponent(userName)}`)
        .then(response => {
            if (!response.ok) {
                throw new Error("Network response was not ok");
            }
            return response.json();
        })
        .then(data => {
            const statusList = document.getElementById("statusList");
            statusList.innerHTML = ""; 

            if (data.length === 0) {
                statusList.innerHTML = '<p>No complaints found for this user.</p>';
                return;
            }

            data.forEach(complaint => {
                const complaintDiv = document.createElement("div");
                complaintDiv.classList.add("complaint-item");
                complaintDiv.innerHTML = `
                    <p><strong>ID:</strong> ${complaint.id}</p>
                    <p><strong>Description:</strong> ${complaint.complaint}</p>
                    <p><strong>Status:</strong> ${complaint.status}</p>
                    <!-- Button to view details -->
                    <!-- Add a button or link here if you want to open a modal or show more details -->
                    `;
                
                statusList.appendChild(complaintDiv);
            });
        })
        .catch(error => {
            console.error("Error fetching complaint statuses:", error);
            alert("Error fetching complaint statuses. Please try again.");
        });
});

document.getElementById("complaintForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const complaint = document.getElementById("complaint").value;

   
    fetch('/api/submit_complaint', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name, email, complaint })
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        alert('Complaint submitted successfully!');
        
        document.getElementById("complaintForm").reset();
    })
    .catch(error => {
        console.error('Error:', error);
        alert('There was a problem submitting your complaint.');
    });
});


document.getElementById("trackForm").addEventListener("submit", function(event) {
    event.preventDefault(); 

    const userName = document.getElementById("userName").value;


    fetch(`/track?userName=${encodeURIComponent(userName)}`)
        .then(response => {
            if (!response.ok) {
                throw new Error("Network response was not ok");
            }
            return response.json();
        })
        .then(data => {
            const statusList = document.getElementById("statusList");
            statusList.innerHTML = ""; 

            if (data.length === 0) {
                statusList.innerHTML = '<p>No complaints found for this user.</p>';
                return;
            }

            data.forEach(complaint => {
                const complaintDiv = document.createElement("div");
                complaintDiv.classList.add("complaint-item");
                complaintDiv.innerHTML = `
                    <p><strong>ID:</strong> ${complaint.id}</p>
                    <p><strong>Description:</strong> ${complaint.complaint}</p>
                    <p><strong>Status:</strong> ${complaint.status}</p>
                    <!-- Button to view details -->
                    <!-- Add a button or link here if you want to open a modal or show more details -->
                    `;
                
                statusList.appendChild(complaintDiv);
            });
        })
        .catch(error => {
            console.error("Error fetching complaint statuses:", error);
            alert("Error fetching complaint statuses. Please try again.");
        });
});
