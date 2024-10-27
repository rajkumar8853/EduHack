
document.addEventListener("DOMContentLoaded", function() {
    loadComplaints();
});


function loadComplaints() {
    const complaintsTable = document.getElementById("complaintsTable");

    
    const complaints = [
        { id: "101", user: "John Doe", description: "Road construction delay", status: "In Progress" },
        { id: "102", user: "Jane Smith", description: "Lack of teachers", status: "Resolved" },
        { id: "103", user: "Sam Wilson", description: "Insufficient water supply", status: "Pending" }
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
}


function openComplaintModal(id) {
    const complaintData = getComplaintById(id);
    if (complaintData) {
        document.getElementById("complaintID").innerText = complaintData.id;
        document.getElementById("complaintUser").innerText = complaintData.user || "N/A";
        document.getElementById("complaintDescription").innerText = complaintData.description;
        document.getElementById("complaintStatus").innerText = complaintData.status;
        document.getElementById("complaintImage").src = complaintData.image || "";
        document.getElementById("complaintModal").style.display = "block";
    }
}


function getComplaintById(id) {
    
    const complaints = [
        { id: "101", user: "John Doe", description: "Road construction delay", status: "In Progress", image: "path/to/image1.jpg" },
        { id: "102", user: "Jane Smith", description: "Lack of teachers", status: "Resolved", image: "path/to/image2.jpg" },
        { id: "103", user: "Sam Wilson", description: "Insufficient water supply", status: "Pending", image: "path/to/image3.jpg" }
    ];

    return complaints.find(complaint => complaint.id === id);
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
