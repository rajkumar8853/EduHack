// Utility function to validate email format
const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
};

// Function to handle errors
const handleError = (res, error) => {
    console.error(error);
    res.status(500).json({ message: 'An error occurred', error: error.message });
};

// Function to format complaint data
const formatComplaintData = (data) => {
    return {
        user: data.user,
        description: data.description,
        image: data.image || null,
        createdAt: new Date()
    };
};

// Exporting helper functions
module.exports = {
    validateEmail,
    handleError,
    formatComplaintData
};
