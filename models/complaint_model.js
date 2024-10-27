const db = require('../server/db-config');

const createComplaintTable = () => {
    const sql = `
        CREATE TABLE IF NOT EXISTS complaints (
            id INT AUTO_INCREMENT PRIMARY KEY,
            name VARCHAR(255),
            email VARCHAR(255),
            complaint TEXT,
            image VARCHAR(255),
            status ENUM('Pending', 'Resolved') DEFAULT 'Pending',
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        )
    `;
    db.query(sql, (err) => {
        if (err) throw err;
        console.log("Complaint table created or already exists.");
    });
};

module.exports = createComplaintTable;
