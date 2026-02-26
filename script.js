// ============================================
// Theme System (Dark/Light Mode)
// ============================================

const themeToggle = document.getElementById('themeToggle');
const html = document.documentElement;

// Initialize theme on page load
function initializeTheme() {
    // Check localStorage for saved theme
    let savedTheme = localStorage.getItem('theme');
    
    // If no saved theme, check system preference
    if (!savedTheme) {
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        savedTheme = prefersDark ? 'dark' : 'light';
    }
    
    // Apply theme
    applyTheme(savedTheme);
}

function applyTheme(theme) {
    if (theme === 'dark') {
        html.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
    } else {
        html.removeAttribute('data-theme');
        localStorage.setItem('theme', 'light');
    }
}

// Theme toggle listener
themeToggle.addEventListener('click', () => {
    const currentTheme = html.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    applyTheme(newTheme);
});

// Initialize theme on page load
document.addEventListener('DOMContentLoaded', () => {
    initializeTheme();
    initializeVideoRotation();
});

// ============================================
// Video Rotation System (Background Videos)
// ============================================

function initializeVideoRotation() {
    const videos = document.querySelectorAll('.bg-video');
    let currentVideoIndex = 0;

    // Ensure the first video starts playing
    if (videos.length > 0) {
        videos[0].play().catch(err => console.log('Autoplay prevented:', err));
    }

    // Only rotate if there are multiple videos
    if (videos.length <= 1) return;

    function switchVideo() {
        // Hide current video
        videos[currentVideoIndex].classList.remove('active');
        videos[currentVideoIndex].pause();
        
        // Move to next video
        currentVideoIndex = (currentVideoIndex + 1) % videos.length;
        
        // Show and play next video
        videos[currentVideoIndex].classList.add('active');
        videos[currentVideoIndex].currentTime = 0;
        videos[currentVideoIndex].play().catch(err => console.log('Autoplay prevented:', err));
    }

    // Listen for video end to switch
    videos.forEach((video, index) => {
        video.addEventListener('ended', () => {
            if (index === currentVideoIndex) {
                switchVideo();
            }
        });
    });
}

// ============================================
// vCard Download System
// ============================================

const addContactBtn = document.getElementById('addContactBtn');

addContactBtn.addEventListener('click', async function() {
    const btn = document.getElementById('addContactBtn');
    const originalHTML = btn.innerHTML;
    btn.innerHTML = '<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"></circle><polyline points="12 6 12 12 16 14"></polyline></svg><span>Preparando...</span>';
    btn.style.opacity = '0.6';
    btn.style.pointerEvents = 'none';
    
    try {
        // Function to convert image URL to base64
        async function urlToBase64(url) {
            const response = await fetch(url);
            const blob = await response.blob();
            return new Promise((resolve) => {
                const reader = new FileReader();
                reader.onloadend = () => {
                    const base64 = reader.result.split(',')[1];
                    resolve(base64);
                };
                reader.readAsDataURL(blob);
            });
        }
        
        // Convert photo to base64
        const photoUrl = 'https://media.licdn.com/dms/image/v2/D5603AQF10m1XnBGz7Q/profile-displayphoto-scale_400_400/B56Zgr38lXHcAg-/0/1753082743926?e=1773878400&v=beta&t=PYNYSG0ZtZXk_cYF6PbGSYuDCHndVdV7aPyZNHbJe9M';
        const photoBase64 = await urlToBase64(photoUrl);
        
        // Generate vCard (VCF format) with complete information including embedded photo
        const vCard = `BEGIN:VCARD
VERSION:4.0
FN:Ines Queipo de Llano Hevia
N:Queipo de Llano Hevia;Ines;;;
NICKNAME:Ines-TheQClub
TITLE:CEO & Founder
ORG:The Q Club
PHOTO;ENCODING=BASE64;TYPE=JPEG:${photoBase64}
EMAIL;TYPE=WORK;PREF=1:contacto@theqclub.es
TEL;TYPE=CELL;PREF=1:+34628478980
URL;TYPE=HOMEPAGE:https://theqclub.es/
URL;TYPE=SOCIAL;LABEL=LinkedIn:https://www.linkedin.com/in/inesqll/
URL;TYPE=SOCIAL;LABEL=Instagram:https://www.instagram.com/theqclub.es/
URL;TYPE=SOCIAL;LABEL=TikTok:https://www.tiktok.com/@theqclub.es
URL;TYPE=SOCIAL;LABEL=Calendly:https://calendly.com/contacto-theqclub/30min
NOTE:CEO & Founder de The Q Club. La mejor plataforma para automatizar colaboraciones entre marcas y creadores. Experta en Marketing de influencia y transformando la forma en que las marcas colaboran con creadores.
REV:2026-02-26T00:00:00Z
UID:ines-queipo@theqclub.es
END:VCARD`;

        // Create blob from vCard
        const blob = new Blob([vCard], { type: 'text/vcard; charset=utf-8' });
        
        // Create download link
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = 'Ines_Queipo_Llano_Hevia.vcf';
        
        // Trigger download
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        
        // Clean up
        URL.revokeObjectURL(url);
        
        // Send WhatsApp message
        const whatsappMessage = encodeURIComponent('Hola! Ya he guardado tu contacto.');
        const whatsappUrl = `https://wa.me/34628478980?text=${whatsappMessage}`;
        
        // Open WhatsApp in a new window (small delay to ensure download completes)
        setTimeout(() => {
            window.open(whatsappUrl, '_blank');
        }, 500);
        
        // Visual feedback animation
        btn.innerHTML = '<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg><span>¡Guardado!</span>';
        
        // Restore button after 2.5 seconds
        setTimeout(() => {
            btn.innerHTML = originalHTML;
            btn.style.opacity = '1';
            btn.style.pointerEvents = 'auto';
        }, 2500);
    } catch (error) {
        console.error('Error al guardar el contacto:', error);
        btn.innerHTML = '<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="15" y1="9" x2="9" y2="15"></line><line x1="9" y1="9" x2="15" y2="15"></line></svg><span>Error</span>';
        
        // Restore button after 2 seconds
        setTimeout(() => {
            btn.innerHTML = originalHTML;
            btn.style.opacity = '1';
            btn.style.pointerEvents = 'auto';
        }, 2000);
    }
});
