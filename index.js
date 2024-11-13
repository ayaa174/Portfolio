function showProjectDetails(projectId) {
    // Hide all project details
    const detailsSections = document.querySelectorAll('.project-detail');
    detailsSections.forEach(section => section.style.display = 'none');

    // Show the selected project details
    document.getElementById('project-details').style.display = 'block';
    document.getElementById(projectId).style.display = 'block';
}

function closeProjectDetails() {
    // Hide project details
    document.getElementById('project-details').style.display = 'none';
}
