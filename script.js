// Roll In/Out Observer
const rollObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        } else {
            // Remove class when scrolling out to allow "roll out" effect
            entry.target.classList.remove('visible');
        }
    });
}, {
    threshold: 0.1,
    rootMargin: "-50px 0px -50px 0px" // Slight buffer for better visual timing
});

document.querySelectorAll('.roll-item').forEach(item => {
    rollObserver.observe(item);
});

// Highlight Text Observer (Existing logic refined)
const highlightText = document.getElementById('highlight-text');
const highlightObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting && entry.intersectionRatio > 0.5) {
            highlightText.classList.add('active');
        } else {
            highlightText.classList.remove('active');
        }
    });
}, {
    threshold: [0, 0.5, 1.0]
});

if (highlightText) {
    highlightObserver.observe(highlightText);
}

// Parallax for floating objects
window.addEventListener('scroll', () => {
    const scrolled = window.scrollY;
    document.querySelectorAll('.floating-obj').forEach((obj, index) => {
        const speed = (index % 3 + 1) * 0.05;
        obj.style.transform = `translateY(${scrolled * speed}px)`;
    });
});

// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});
