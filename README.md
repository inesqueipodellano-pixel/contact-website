# Tarjeta Virtual Profesional - Inés Queipo de Llano

Una tarjeta virtual profesional premium con diseño moderno, tema oscuro/claro y funcionalidades avanzadas.

## ✨ Características Principales

### 🎨 Diseño & Tema
- **Modo Día/Noche** - Toggle elegante con persistencia en localStorage
- **Diseño Responsivo** - Perfectamente adaptado a móvil y desktop
- **Paleta Premium** - Estética tipo Stripe/Linear en modo oscuro, minimalista en modo claro
- **Animaciones Suaves** - Transiciones elegantes sin sobrecargar visualmente

### 📱 Contenido Interactivo
- **Acordeón Elegante** - Descripción expandible de The Q Club
- **Botones Unificados** - Diseño consistente en todos los controles
- **Estructura Organizada** - Botones agrupados por categoría:
  - Grupo 1: LinkedIn + Calendly
  - Grupo 2: Instagram + TikTok
  - Grupo 3: WhatsApp + Email
  - Botón principal: Añadir a contactos

### 🎬 Multimedia
- **Fondo de Vídeo** - Loop automático sin sonido
- **Overlay Dinámico** - Diferente según el tema (oscuro/claro)
- **Optimizado** - Carga rápida y responsive
- **Accesibilidad** - Respeta preferencias de movimiento reducido

### 📥 Descarga de Contactos
- **vCard Completo** - Archivo `.vcf` con toda la información:
  - Nombre completo
  - Cargo y empresa
  - Teléfono y email
  - Sitio web
  - Redes sociales (LinkedIn, Instagram, TikTok)
  - Foto de perfil
  - Descripción profesional
- **Descarga Automática** - Un clic para descargar
- **Feedback Visual** - Confirmación de descarga exitosa

### 🔗 Enlaces & Integración
- **Enlaces Activos**:
  - 🌐 The Q Club website (theqclub.es)
  - 💼 LinkedIn Personal
  - 📷 Instagram @theqclub.es
  - 🎵 TikTok @theqclub.es
  - 📅 Calendly para agendar
  - 💬 WhatsApp directo
  - 📧 Email profesional

### 📊 SEO & Rendimiento
- **Meta Tags Completos** - Descripción optimizada
- **Lazy Loading** - Video optimizado
- **Accesibilidad Web** - ARIA labels y estructura semantic
- **Performance** - Código limpio y escalable

## 🚀 Tecnologías

- **HTML5** - Estructura semantic
- **CSS3** - Variables CSS para tema dinámico
- **JavaScript ES6+** - Sistema modular y clean

## 📁 Estructura del Proyecto

```
mi-primera-web/
├── index.html       # HTML con estructura semantic
├── styles.css       # CSS con sistema de variables
├── script.js        # JavaScript modular
└── README.md        # Esta documentación
```

## 🎯 Características Técnicas Destacadas

### Sistema de Tema
```javascript
// localStorage automático
localStorage.getItem('theme')
localStorage.setItem('theme', 'dark' | 'light')
```

### CSS Variables Dinámicas
```css
:root {
  --bg-primary, --bg-secondary, --bg-tertiary
  --text-primary, --text-secondary, --text-tertiary
  --accent-primary, --accent-primary-dark
  --border-color
  --card-shadow, --card-shadow-lg
}

[data-theme="dark"] {
  /* Variables alternativas */
}
```

### vCard Generado
Formato VCF 4.0 con:
- Información personal completa
- Foto del perfil
- URLs de redes sociales
- Notas profesionales
- Timestamp de revisión

## 💻 Cómo Usar

### Abrir en el navegador
```bash
# Opción 1: Abrir directamente
open index.html

# Opción 2: Con servidor HTTP
python3 -m http.server 8000
# Luego visita http://localhost:8000
```

### Cambiar entre temas
- Haz clic en el botón de tema (🌙/☀️) en la esquina superior derecha
- Tu preferencia se guarda automáticamente

### Descargar contactos
- Haz clic en "Añadir a contactos"
- Se descargará un archivo `.vcf`
- Importa en tu agenda de contactos

## 📱 Responsive Design

- ✅ Desktop (1024px+)
- ✅ Tablet (768px - 1023px)
- ✅ Mobile (360px - 767px)
- ✅ Small phones (< 360px)

## ♿ Accesibilidad

- Respeta `prefers-reduced-motion`
- ARIA labels en botones
- Contraste de colores adecuado
- Estructura semantic HTML

## 🌐 Navegadores Soportados

- ✅ Chrome/Chromium
- ✅ Firefox
- ✅ Safari
- ✅ Edge
- ✅ Opera

## 📝 Información del Perfil

**Inés Queipo de Llano Hevia**
- Cargo: CEO & Founder
- Empresa: The Q Club ®
- Especialidad: Marketing de influencia y automatización de colaboraciones
- Email: contacto@theqclub.es
- Teléfono: +34 628 478 980

## 📄 Licencia

Proyecto personal de Inés Queipo de Llano Hevia - The Q Club ®

---

**Última actualización:** Febrero 26, 2026

Inés Queipo de Llano - CEO & Founder of The Q Club

## License

This is a private project. All rights reserved.
