document.getElementById('addContactBtn').addEventListener('click', function() {
    // Generate vCard (VCF format)
    const vCard = `BEGIN:VCARD
VERSION:3.0
FN:Inés Queipo de Llano
N:Queipo de Llano;Inés;;;
TITLE:CEO & Founder
ORG:The Q Club
EMAIL;TYPE=WORK:contacto@theqclub.es
EMAIL;TYPE=HOME:inesqueipodellano@gmail.com
TEL;TYPE=CELL:+34628478980
TEL;TYPE=WORK:+34628478980
URL;TYPE=HOMEPAGE:https://theqclub.es/
URL;TYPE=SOCIAL:https://www.instagram.com/theqclub.es/
URL;TYPE=SOCIAL:https://www.linkedin.com/in/inesqll/
URL;TYPE=SOCIAL:https://www.tiktok.com/@theqclub.es
NOTE:CEO & Founder de The Q Club. Apasionada por emprender y crear comunidades.
PHOTO;VALUE=URI:https://media.licdn.com/dms/image/v2/D5603AQF10m1XnBGz7Q/profile-displayphoto-scale_400_400/B56Zgr38lXHcAg-/0/1753082743926?e=1773878400&v=beta&t=PYNYSG0ZtZXk_cYF6PbGSYuDCHndVdV7aPyZNHbJe9M
END:VCARD`;

    // Create blob from vCard
    const blob = new Blob([vCard], { type: 'text/vcard' });
    
    // Create download link
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'Ines_Queipo_Llano.vcf';
    
    // Trigger download
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    // Clean up
    URL.revokeObjectURL(url);
    
    // Optional: Visual feedback
    const btn = document.getElementById('addContactBtn');
    const originalHTML = btn.innerHTML;
    btn.innerHTML = '<span class="icon">✓</span><span>¡Contacto añadido!</span>';
    btn.style.opacity = '0.8';
    
    setTimeout(() => {
        btn.innerHTML = originalHTML;
        btn.style.opacity = '1';
    }, 2000);
});
