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

// --- Curriculum Data & Helpers ---

window.LC_SUBJECTS = [
    'Maths', 'English', 'Irish', 'Biology', 'Chemistry', 'Physics', 
    'French', 'German', 'History', 'Geography', 'Business', 'Art', 
    'Home Economics', 'Ag Science', 'Construction', 'Economics', 
    'DCG', 'Accounting', 'Music', 'Politics'
];

window.JC_SUBJECTS = [
    'Maths', 'English', 'Irish', 'Science', 'History', 'Geography', 
    'Religion', 'German', 'Business', 'French', 'Spanish', 
    'Home Economics', 'Wood Tech', 'Graphics', 'Art', 'Music', 
    'Applied Tech', 'Engineering'
];

window.toSubjectKey = function(name) {
    return String(name || "")
        .trim()
        .toLowerCase()
        .replace(/&/g, "and")
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/(^-|-$)/g, "");
};

window.getSubjectColor = function(subject) {
    const s = subject.toLowerCase();
    if (s.includes('maths')) return '--subj-maths';
    if (s.includes('english')) return '--subj-english';
    if (s.includes('irish')) return '--subj-irish';
    if (s.includes('biology')) return '--subj-biology';
    if (s.includes('chemistry')) return '--subj-chemistry';
    if (s.includes('physics')) return '--subj-physics';
    if (s.includes('science')) return '--subj-science';
    if (s.includes('history')) return '--subj-history';
    if (s.includes('geography')) return '--subj-geography';
    if (s.includes('business')) return '--subj-business';
    if (s.includes('french')) return '--subj-french';
    if (s.includes('german')) return '--subj-german';
    if (s.includes('religion')) return '--subj-religion';
    if (s.includes('spanish')) return '--subj-spanish';
    if (s.includes('home ec')) return '--subj-homeec';
    if (s.includes('art')) return '--subj-art';
    if (s.includes('music')) return '--subj-music';
    return '--subj-default';
};
