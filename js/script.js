const translations = {
    en: {
        nav_home: "Home",
        nav_about: "About",
        nav_projects: "Projects",
        nav_contact: "Contact",
        hero_badge: "Creative Solutions",
        hero_title: "Building Creative Solutions for Language Learners & Muslim Families",
        hero_subtitle: "We create meaningful content that nurtures faith, culture, and language learning for children and families.",
        hero_cta_primary: "Explore Our Work",
        hero_cta_secondary: "Get In Touch",
        about_tag: "About Us",
        about_title: "Our Mission",
        about_text_1: "Lumma Creative Studio is dedicated to developing creative solutions for language learners and Muslim families. We believe in the power of meaningful content to educate, inspire, and connect communities.",
        about_text_2: "Our focus is on children's Islamic education and language learning, creating resources that are both culturally relevant and engaging. We serve Indonesian Muslim parents and families who value quality educational content for their children.",
        stat_projects: "Active Projects",
        stat_community: "Community Members",
        stat_region: "Indonesia Focused",
        projects_tag: "Our Projects",
        projects_title: "What We're Building",
        project_aya_desc: "A heartwarming series of stories and content designed to introduce Islamic values to young children in an accessible and engaging way.",
        project_funlingua_desc: "An interactive language learning platform that makes acquiring new languages fun and accessible for children through play and storytelling.",
        project_books_desc: "A collection of beautifully crafted books for Muslim children, combining faith-based storytelling with educational value and cultural authenticity.",
        channel_tiktok: "TikTok",
        channel_instagram: "Instagram",
        channel_facebook: "Facebook",
        coming_soon: "Coming Soon",
        courses_tag: "Courses",
        courses_title: "Learning Programs",
        courses_title_2: "Coming Soon",
        courses_desc: "We're developing engaging courses and learning programs for children and families. Stay tuned for updates!",
        contact_tag: "Contact",
        contact_title: "Get In Touch",
        contact_email_label: "Email",
        contact_whatsapp_label: "WhatsApp",
        footer_rights: "All rights reserved."
    },
    id: {
        nav_home: "Beranda",
        nav_about: "Tentang",
        nav_projects: "Proyek",
        nav_contact: "Kontak",
        hero_badge: "Solusi Kreatif",
        hero_title: "Membangun Solusi Kreatif untuk Pembelajar Bahasa & Keluarga Muslim",
        hero_subtitle: "Kami menciptakan konten bermakna yang menumbuhkan iman, budaya, dan pembelajaran bahasa untuk anak-anak dan keluarga.",
        hero_cta_primary: "Jelajahi Karya Kami",
        hero_cta_secondary: "Hubungi Kami",
        about_tag: "Tentang Kami",
        about_title: "Misi Kami",
        about_text_1: "Lumma Creative Studio berdedikasi untuk mengembangkan solusi kreatif untuk pembelajar bahasa dan keluarga Muslim. Kami percaya pada kekuatan konten bermakna untuk mendidik, menginspirasi, dan menghubungkan komunitas.",
        about_text_2: "Fokus kami adalah pada pendidikan Islam anak-anak dan pembelajaran bahasa, menciptakan sumber daya yang secara budaya relevan dan menarik. Kami melayani orang tua Muslim Indonesia dan keluarga yang menghargai konten pendidikan berkualitas untuk anak-anak mereka.",
        stat_projects: "Proyek Aktif",
        stat_community: "Anggota Komunitas",
        stat_region: "Fokus Indonesia",
        projects_tag: "Proyek Kami",
        projects_title: "Yang Kami Bangun",
        project_aya_desc: "Serial cerita dan konten yang mengharukan yang dirancang untuk memperkenalkan nilai-nilai Islam kepada anak-anak kecil dengan cara yang mudah diakses dan menarik.",
        project_funlingua_desc: "Platform pembelajaran bahasa interaktif yang membuat penguasaan bahasa baru menjadi menyenangkan dan mudah diakses bagi anak-anak melalui permainan dan bercerita.",
        project_books_desc: "Koleksi buku yang dibuat dengan indah untuk anak Muslim, menggabungkan cerita berbasis iman dengan nilai pendidikan dan keaslian budaya.",
        channel_tiktok: "TikTok",
        channel_instagram: "Instagram",
        channel_facebook: "Facebook",
        coming_soon: "Segera Hadir",
        courses_tag: "Kursus",
        courses_title: "Program Pembelajaran",
        courses_title_2: "Segera Hadir",
        courses_desc: "Kami sedang mengembangkan kursus dan program pembelajaran yang menarik untuk anak-anak dan keluarga. Tetap ikuti pembaruan kami!",
        contact_tag: "Kontak",
        contact_title: "Hubungi Kami",
        contact_email_label: "Email",
        contact_whatsapp_label: "WhatsApp",
        footer_rights: "Hak cipta dilindungi."
    }
};

let currentLang = 'en';

function setLanguage(lang) {
    currentLang = lang;
    
    try {
        document.querySelectorAll('[data-i18n]').forEach(function(element) {
            const key = element.getAttribute('data-i18n');
            if (translations[lang] && translations[lang][key]) {
                element.textContent = translations[lang][key];
            }
        });
    } catch (e) {
        console.error('Language update failed:', e);
    }
    
    updateLangToggle();
}

function updateLangToggle() {
    const options = document.querySelectorAll('.lang-option');
    options.forEach(function(option) {
        const lang = option.getAttribute('data-lang');
        if (lang === currentLang) {
            option.classList.add('active');
        } else {
            option.classList.remove('active');
        }
    });
}

try {
    document.addEventListener('DOMContentLoaded', function() {
        setLanguage('en');
        
        const langToggle = document.getElementById('langToggle');
        if (langToggle) {
            langToggle.addEventListener('click', function(e) {
                const option = e.target.closest('.lang-option');
                if (option) {
                    const lang = option.getAttribute('data-lang');
                    if (lang && lang !== currentLang) {
                        setLanguage(lang);
                    }
                } else {
                    toggleLanguage();
                }
            });
        }
        
        const mobileToggle = document.getElementById('mobileToggle');
        const navLinks = document.getElementById('navLinks');
        
        if (mobileToggle && navLinks) {
            mobileToggle.addEventListener('click', function() {
                navLinks.classList.toggle('active');
            });
            
            navLinks.querySelectorAll('a').forEach(function(link) {
                link.addEventListener('click', function() {
                    navLinks.classList.remove('active');
                });
            });
        }
        
        const navbar = document.getElementById('navbar');
        
        window.addEventListener('scroll', function() {
            const currentScroll = window.pageYOffset;
            
            if (currentScroll > 100) {
                navbar.style.boxShadow = '0 4px 6px -1px rgba(0,0,0,0.05)';
            } else {
                navbar.style.boxShadow = 'none';
            }
        });
    });
} catch (error) {
    console.error('Initialization error:', error);
}

function toggleLanguage() {
    const newLang = currentLang === 'en' ? 'id' : 'en';
    setLanguage(newLang);
}