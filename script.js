// Mobile Navigation Toggle
document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    
    if (hamburger && navLinks) {
        hamburger.addEventListener('click', function() {
            this.classList.toggle('active');
            navLinks.classList.toggle('active');
        });
    }

    // Close mobile menu when clicking on a link
    const navItems = document.querySelectorAll('.nav-links a');
    navItems.forEach(item => {
        item.addEventListener('click', () => {
            if (window.innerWidth <= 768) {
                hamburger.classList.remove('active');
                navLinks.classList.remove('active');
            }
        });
    });

    // Explore button animation
    const exploreBtn = document.getElementById('exploreBtn');
    if (exploreBtn) {
        exploreBtn.addEventListener('click', function(e) {
            e.preventDefault();
            this.classList.add('clicked');
            setTimeout(() => {
                this.classList.remove('clicked');
                window.location.href = 'about.html';
            }, 300);
        });
    }

    // Newsletter form submission
    const newsletterForm = document.getElementById('newsletterForm');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const email = this.querySelector('input[type="email"]').value;
            
            // In a real app, you would send this to your server
            console.log('Subscribed email:', email);
            
            // Show success message
            alert('Thank you for subscribing to our newsletter!');
            this.reset();
        });
    }

    // Contact form submission
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const formData = {
                name: this.querySelector('#name').value,
                email: this.querySelector('#email').value,
                subject: this.querySelector('#subject').value,
                message: this.querySelector('#message').value
            };
            
            // In a real app, you would send this to your server
            console.log('Contact form submitted:', formData);
            
            // Show success message
            alert('Thank you for your message! We will get back to you soon.');
            this.reset();
        });
    }

    // Comment form submission
    const commentForm = document.getElementById('commentForm');
    if (commentForm) {
        commentForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const commentData = {
                name: this.querySelector('#commentName').value,
                email: this.querySelector('#commentEmail').value,
                text: this.querySelector('#commentText').value,
                date: new Date().toLocaleDateString()
            };
            
            addCommentToDOM(commentData);
            this.reset();
            
            // In a real app, you would send this to your server
            console.log('New comment:', commentData);
        });
    }

    // Load team members on about page
    const teamContainer = document.getElementById('teamContainer');
    if (teamContainer) {
        const teamMembers = [
            {
                name: 'Chard Omollo',
                role: 'Founder & Editor',
                bio: 'Chard is passionate about technology and sharing knowledge.',
                img: 'images/Chard.jpg'
            },
            {
                name: 'Jane Wekesa',
                role: 'Content Writer',
                bio: 'Jane specializes in travel and lifestyle content.',
                img: 'images/jane.jpg'
            },
            {
                name: 'Mike Omondi',
                role: 'Web Developer',
                bio: 'Mike handles all the technical aspects of the blog.',
                img: 'images/mike.jpg'
            }
        ];
        
        teamMembers.forEach(member => {
            const memberElement = document.createElement('div');
            memberElement.className = 'team-member';
            memberElement.innerHTML = `
                <img src="${member.img}" alt="${member.name}">
                <h4>${member.name}</h4>
                <p class="role">${member.role}</p>
                <p>${member.bio}</p>
            `;
            teamContainer.appendChild(memberElement);
        });
    }

    // Load comments on blog post page
    const commentsContainer = document.getElementById('commentsContainer');
    if (commentsContainer) {
        const comments = [
            {
                name: 'Sarah Williams',
                date: 'March 20, 2025',
                text: 'Great article! Very helpful for beginners like me.',
                img: 'images/sarah.jpg'
            },
            {
                name: 'David Brown',
                date: 'March 18, 2025',
                text: 'I would add that learning version control (Git) early is also important.',
                img: 'images/david.jpg'
            }
        ];
        
        comments.forEach(comment => {
            addCommentToDOM(comment);
        });
    }

    // Function to add a comment to the DOM
    function addCommentToDOM(comment) {
        if (!commentsContainer) return;
        
        const commentElement = document.createElement('div');
        commentElement.className = 'comment';
        commentElement.innerHTML = `
            <img src="${comment.img || 'images/default-avatar.jpg'}" alt="${comment.name}" class="comment-avatar">
            <div class="comment-content">
                <h4>${comment.name}</h4>
                <p class="comment-meta">${comment.date}</p>
                <p class="comment-text">${comment.text}</p>
                <a href="#" class="comment-reply">Reply</a>
            </div>
        `;
        
        commentsContainer.prepend(commentElement);
    }

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Add active class to current page in navigation
    const currentPage = location.pathname.split('/').pop();
    const navLinksAll = document.querySelectorAll('.nav-links a');
    
    navLinksAll.forEach(link => {
        const linkPage = link.getAttribute('href');
        if (currentPage === linkPage) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
});