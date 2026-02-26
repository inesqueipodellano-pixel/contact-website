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
        themeToggle.textContent = '☀️';
        localStorage.setItem('theme', 'dark');
    } else {
        html.removeAttribute('data-theme');
        themeToggle.textContent = '🌙';
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
});

// ============================================
// Accordion System
// ============================================

const accordionToggle = document.getElementById('accordionToggle');
const accordionContent = document.getElementById('accordionContent');
const accordionIcon = document.querySelector('.accordion-icon');

accordionToggle.addEventListener('click', () => {
    accordionContent.classList.toggle('open');
    accordionIcon.classList.toggle('open');
});

// ============================================
// vCard Download System
// ============================================

const addContactBtn = document.getElementById('addContactBtn');

addContactBtn.addEventListener('click', function() {
    // Generate vCard (VCF format) with complete information
    const vCard = `BEGIN:VCARD
VERSION:4.0
FN:Inés Queipo de Llano Hevia
N:Queipo de Llano Hevia;Inés;;;
NICKNAME:Inés-TheQClub
TITLE:CEO & Founder
ORG:The Q Club ®
PHOTO;VALUE=URI;TYPE=JPEG:https://media.licdn.com/dms/image/v2/D5603AQF10m1XnBGz7Q/profile-displayphoto-scale_400_400/B56Zgr38lXHcAg-/0/1753082743926?e=1773878400&v=beta&t=PYNYSG0ZtZXk_cYF6PbGSYuDCHndVdV7aPyZNHbJe9M
EMAIL;TYPE=WORK;PREF=1:contacto@theqclub.es
TEL;TYPE=CELL;PREF=1:+34628478980
URL;TYPE=HOMEPAGE:https://theqclub.es/
URL;TYPE=SOCIAL;LABEL=LinkedIn:https://www.linkedin.com/in/inesqll/
URL;TYPE=SOCIAL;LABEL=Instagram:https://www.instagram.com/theqclub.es/
URL;TYPE=SOCIAL;LABEL=TikTok:https://www.tiktok.com/@theqclub.es
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
    
    // Visual feedback animation
    const btn = document.getElementById('addContactBtn');
    const originalHTML = btn.innerHTML;
    btn.innerHTML = '<span class="icon">✓</span><span>¡Contacto descargado!</span>';
    btn.style.opacity = '0.8';
    btn.style.pointerEvents = 'none';
    
    // Restore button after 2 seconds
    setTimeout(() => {
        btn.innerHTML = originalHTML;
        btn.style.opacity = '1';
        btn.style.pointerEvents = 'auto';
    }, 2000);
});
