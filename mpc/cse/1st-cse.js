
function toggleStep(stepId) {
    var stepContent = document.getElementById(stepId).querySelector('.step-content');
    if (stepContent) {
        stepContent.style.display = (stepContent.style.display === 'block') ? 'none' : 'block';
    } else {
        console.error(`No step content found for ID: ${stepId}`);
    }
}

function toggleLecture(lectureId) {
    var lectureContent = document.getElementById(lectureId).querySelector('.lecture-content');
    if (lectureContent) {
        lectureContent.style.display = (lectureContent.style.display === 'block') ? 'none' : 'block';
        console.log(`Toggling lecture content for ID: ${lectureId}, New display: ${lectureContent.style.display}`);
    } else {
        console.error(`No lecture content found for ID: ${lectureId}`);
    }
}


function fetchNotes(lectureId) {
    console.log(`Fetching notes for lecture ID: ${lectureId}`);
    window.location.href = `/career-guidance/server/fetch_notes.php?lecture_id=${lectureId}`;
    
}

document.querySelectorAll('.step-toggle').forEach(item => {
    item.addEventListener('click', () => {
        toggleStep(item.dataset.stepId); 
    });
});

document.querySelectorAll('.lecture-toggle').forEach(item => {
    item.addEventListener('click', () => {
        toggleLecture(item.dataset.lectureId); 
    });
});
