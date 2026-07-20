// Centriva AI Website Scripts
 
document.addEventListener("DOMContentLoaded", function () {
 
    // Smooth scroll for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(link => {
 
        link.addEventListener("click", function(e) {
 
            const target = document.querySelector(
                this.getAttribute("href")
            );
 
            if (target) {
                e.preventDefault();
 
                target.scrollIntoView({
                    behavior: "smooth"
                });
            }
 
        });
 
    });
 
 
 
    // Fade-in animation on scroll
 
    const sections = document.querySelectorAll(
        "section, .card, .features div"
    );
 
 
    const observer = new IntersectionObserver(
        entries => {
 
            entries.forEach(entry => {
 
                if (entry.isIntersecting) {
 
                    entry.target.classList.add("visible");
 
                }
 
            });
 
        },
        {
            threshold: 0.15
        }
    );
 
 
    sections.forEach(section => {
 
        section.classList.add("fade-in");
 
        observer.observe(section);
 
    });
 
 
});
