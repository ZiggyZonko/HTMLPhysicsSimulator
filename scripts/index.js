const sections = document.querySelectorAll('.subject-content');
sections.forEach(section => section.style.display = 'none');
var triggered = false

const menuItems = document.querySelectorAll('.subject-link');
menuItems.forEach(item => {
    item.addEventListener('click', function(e) {
        e.preventDefault();

        const target = this.getAttribute('data-target');

        sections.forEach(section => section.style.display = 'none');

        const targetSection = document.getElementById(target);
        if (targetSection) {
            targetSection.style.display = 'block';
        }

        if (target === 'physics') {
            triggered = true;
            drawCanvas();
        } else {
            triggered = false;
        }
    });
});
