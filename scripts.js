    //3d testimonial card carousel 
    const testimonials = [
        { name: "Emily S.", image: "./sources/testimonial1.png", content: "The aromatherapy massage at Luxe Spa was absolutely divine. I left feeling completely rejuvenated and stress-free. Can't wait to return!" },
        { name: "James L.", image: "./sources/testimonials1.png", content: "Luxe Spa is my go-to place for relaxation. The hydrotherapy session was incredibly refreshing, and the attention to detail is unparalleled." },
        { name: "Sarah M.", image: "./sources/testimonial2.png", content: "The holistic approach at Luxe Spa is impressive. Their treatments complement my yoga practice perfectly, leaving me well balanced." },
        { name: "Michael R.", image: "./sources/testimonials2.png", content: "As an athlete, recovery is crucial. The sports massage at Luxe Spa has become an essential part of my training regimen. Highly recommended!" },
        { name: "Laura K.", image: "./sources/testimonial3.png", content: "The ambiance at Luxe Spa is so inspiring. After my facial treatment, I felt a surge of creativity. It's more than just a spa, it's an experience." },
        { name: "David P.", image: "./sources/testimonials3.png", content: "In my high-stress job, Luxe Spa is my sanctuary. Their mindfulness treatments have helped me maintain focus and calm in chaotic times." },
        { name: "Sophie T.", image: "./sources/testimonial4.png", content: "The attention to detail at Luxe Spa is impeccable. From the decor to the treatments, everything is designed to perfection." },
        { name: "Robert M.", image: "./sources/testimonials4.png", content: "I've been to many spas, but Luxe Spa stands out. The staff's expertise and the tranquil environment make every visit special." },
        { name: "Olivia C.", image: "./sources/testimonial5.png", content: "The reflexology treatment at Luxe Spa worked wonders for my tired feet. It's now an essential part of my performance preparation." },
        { name: "Daniel H.", image: "./sources/testimonials5.png", content: "I've experienced spas worldwide, and Luxe Spa ranks among the best. Their unique treatments and top-notch service are truly world-class." },
        { name: "Emma W.", image: "./sources/testimonial6.png", content: "After long hours at the office, Luxe Spa's deep tissue massage is my go-to stress reliever. It's like they have magic hands!" },
        { name: "Alex R.", image: "./sources/testimonials7.png", content: "The sports therapy at Luxe Spa has significantly improved my game. Their understanding of athlete needs is impressive." }
    ];

    function createTestimonialCard(testimonial) {
        return `
            <div class="testimonial-card card h-100">
                <div class="card-body">
                    <div class="d-flex flex-column align-content-center mb-2">
                        <div class="col-md-2">
                        <img src="${testimonial.image}" alt="${testimonial.name}" class="mb-2 rounded h-100 float-start card-img-top">
                        </div>
                        <div>
                            <h5 class="mb-1">${testimonial.name}</h5>
                        </div>
                        <p class="mb-2">${testimonial.content}</p>
                    </div>
                </div>
            </div>
        `;
    }

    function initializeCarousel(viewportId, startIndex) {
        const viewport = document.getElementById(viewportId);
        let currentIndex = startIndex;

        function updateCarousel() {
            viewport.innerHTML = '';
            const activeCard = createTestimonialCard(testimonials[currentIndex]);
            const nextIndex = (currentIndex + 1) % testimonials.length;
            const nextCard = createTestimonialCard(testimonials[nextIndex]);

            viewport.innerHTML = activeCard + nextCard;

            const cards = viewport.querySelectorAll('.testimonial-card');
            cards[0].classList.add('active');
            cards[1].classList.add('next');

            setTimeout(() => {
                cards[0].style.transform = 'rotateY(-90deg) translateZ(150px) translateX(-50%)';
                cards[1].style.transform = 'rotateY(0) translateZ(0) translateX(0)';
                
                setTimeout(() => {
                    currentIndex = nextIndex;
                    updateCarousel();
                }, 3000);
            }, 5000);
        }

        updateCarousel();
    }

    document.addEventListener('DOMContentLoaded', function() {
        initializeCarousel('testimonialViewport1', 0);
        initializeCarousel('testimonialViewport2', 6);
    });

document.addEventListener('DOMContentLoaded', function() {
const toast = new bootstrap.Toast(document.getElementById('responsiveToast'), {
            autohide: false
        });

        // Show toast automatically after 3 seconds
        setTimeout(() => {
            toast.show();
        }, 3000);

        function updateTheme(isDark) {
            if (isDark) {
                document.documentElement.setAttribute('data-bs-theme', 'dark');
            } else {
                document.documentElement.setAttribute('data-bs-theme', 'light');
            }
        }

        // Check for system preference and set initial theme
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');
        updateTheme(prefersDark.matches);

        // Listen for changes in system preference
        prefersDark.addEventListener('change', (e) => {
            updateTheme(e.matches);
        });
    });

    // Initialize AOS
AOS.init({
    duration: 2000,
    once: false,
    mirror: true,
    easing: 'ease-in-out',
    anchorPlacement: 'top-center'
});

// Counter animation
const counters = document.querySelectorAll('.counter');
const speed = 7000;

counters.forEach(counter => {
    const updateCount = () => {
        const target = +counter.getAttribute('data-target');
        const count = +counter.innerText;
        const inc = target / speed;

        if (count < target) {
            counter.innerText = Math.ceil(count + inc);
            setTimeout(updateCount, 1);
        } else {
            counter.innerText = target;
        }
    };
    updateCount();
});    

// Video controls
const video = document.getElementById('heroVideo');
const playButton = document.getElementById('playButton');
let isPlaying = false;

function updatePlayButton() {
    if (video.paused || video.ended) {
        playButton.innerHTML = '<i class="bi bi-play-circle-fill text-warning me-2 fs-0"></i><span class="cx fs-6">Watch Video</span>';
        isPlaying = false;
    } else {
        playButton.innerHTML = '<i class="bi bi-stop-circle-fill text-warning me-2 fs-0"></i><span class="cx fs-6">Pause Video</span>';
        isPlaying = true;
    }
}

playButton.addEventListener('click', () => {
    if (isPlaying) {
        video.pause();
    } else {
        video.play();
    }
});

video.addEventListener('play', updatePlayButton);
video.addEventListener('pause', updatePlayButton);
video.addEventListener('ended', updatePlayButton);

// Sync with video controls
video.addEventListener('playing', updatePlayButton);
video.addEventListener('pause', updatePlayButton); 

// Smooth scrolling for navigation
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
}

// click event listeners for navigation links
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const sectionId = link.getAttribute('href').substring(1);
        scrollToSection(sectionId);
    });
});
//3d cuboid
document.addEventListener('DOMContentLoaded', function() {
    const cuboid = document.querySelector('.cuboid');
    let currentRotation = 0;

    function rotateCuboid() {
        currentRotation -= 90;
        cuboid.style.transform = `rotateY(${currentRotation}deg)`;
    }

    setInterval(rotateCuboid, 5000);
});


// 3D card effect
const cards = document.querySelectorAll('.card');
cards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX = (y - centerY) / 10;
        const rotateY = (centerX - x) / 10;

        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.05, 1.05, 1.05)`;
    });

    card.addEventListener('mouseleave', () => {
        card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)';
    });
});

    //animated--heading
document.addEventListener('DOMContentLoaded', function() {
    const heading = document.querySelector('.animated--heading a');
    const colors = JSON.parse(heading.parentElement.getAttribute('data-colors'));
    const colorEnd = heading.parentElement.getAttribute('data-color-end');

    const gradientColors = colors.join(', ') + ', ' + colorEnd;
    heading.style.backgroundImage = `linear-gradient(45deg, ${gradientColors})`;

    // hover effect
    heading.addEventListener('mouseenter', function() {
        this.style.transition = 'all 0.3s ease';
        this.style.transform = 'scale(1.1)';
    });

    heading.addEventListener('mouseleave', function() {
        this.style.transform = 'scale(1)';
    });
});

 // Check if the user's system is set to dark mode
 const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");

 // Function to update the text based on the current color scheme
 function updatecardText() {
     const card = document.querySelector('.card');
     if (prefersDarkScheme.matches) {
         box.textContent = "Dark Mode";
     } else {
         box.textContent = "Light Mode";
     }
 }

 // Initial call to set the text
 updatecardText();

 // Listen for changes in the color scheme preference
 prefersDarkScheme.addListener(updateBoxText);

 //ookig cost
 document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('bookingForm');
    const summaryService = document.getElementById('summaryService');
    const summaryTherapist = document.getElementById('summaryTherapist');
    const summaryDate = document.getElementById('summaryDate');
    const summaryTime = document.getElementById('summaryTime');
    const summaryPhone = document.getElementById('summaryPhone');
    const totalPrice = document.getElementById('totalPrice');
    const therapistImage = document.getElementById('therapistImage');

    const prices = {
        aromatherapy: 35000,
        facial: 30000,
        hydrotherapy: 40000,
        gemstone: 45000
    };

    const therapistImages = {
        emma: './sources/spaat4.png',
        michelle: './sources/spaat3.png',
        sophia: './sources/spaat2.png',
        stacy: './sources/spaat1.png'
    };

    form.addEventListener('change', function() {
        const service = document.getElementById('service').value;
        const therapist = document.getElementById('therapist').value;
        const date = document.getElementById('date').value;
        const time = document.getElementById('time').value;
        const phone = document.getElementById('phone').value;

        summaryService.textContent = service ? document.querySelector(`#service option[value="${service}"]`).textContent : 'Not selected';
        summaryTherapist.textContent = therapist ? document.querySelector(`#therapist option[value="${therapist}"]`).textContent : 'Not selected';
        summaryDate.textContent = date || 'Not selected';
        summaryTime.textContent = time || 'Not selected';
        summaryPhone.textContent = phone ? `+254${phone}` : 'Not provided';

        totalPrice.textContent = service ? prices[service].toLocaleString() : '0';

        if (therapist && therapistImages[therapist]) {
            therapistImage.src = therapistImages[therapist];
            therapistImage.alt = `${document.querySelector(`#therapist option[value="${therapist}"]`).textContent}`;
        } else {
            therapistImage.src = '/placeholder.svg?height=100&width=100';
            therapistImage.alt = 'Therapist';
        }
    });

    form.addEventListener('submit', function(e) {
        e.preventDefault();
        alert('Thank you for your booking! We will confirm your appointment shortly.');
    });
});
