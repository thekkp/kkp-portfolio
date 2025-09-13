document.addEventListener('DOMContentLoaded', function() {
    // Skills Modal
    const skillsCard = document.getElementById('skillsCard');
    const skillsModal = document.getElementById('skillsModal');
    const skillsCloseBtn = skillsModal.querySelector('.close-button');

    skillsCard.addEventListener('click', function() {
        skillsModal.style.display = 'block';
        document.body.style.overflow = 'hidden';
    });

    skillsCloseBtn.addEventListener('click', function() {
        skillsModal.style.display = 'none';
        document.body.style.overflow = 'auto';
    });

    // Experience Modal
    const experienceCard = document.getElementById('experienceCard');
    const experienceModal = document.getElementById('experienceModal');
    const experienceCloseBtn = experienceModal.querySelector('.close-button');

    experienceCard.addEventListener('click', function() {
        experienceModal.style.display = 'block';
        document.body.style.overflow = 'hidden';
    });

    experienceCloseBtn.addEventListener('click', function() {
        experienceModal.style.display = 'none';
        document.body.style.overflow = 'auto';
    });

    // Close modals when clicking outside
    window.addEventListener('click', function(event) {
        if (event.target === skillsModal) {
            skillsModal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
        if (event.target === experienceModal) {
            experienceModal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    });

    // Close modals with ESC key
    document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape') {
            if (skillsModal.style.display === 'block') {
                skillsModal.style.display = 'none';
                document.body.style.overflow = 'auto';
            }
            if (experienceModal.style.display === 'block') {
                experienceModal.style.display = 'none';
                document.body.style.overflow = 'auto';
            }
        }
    });
});
