import React from 'react';
import { Github, Linkedin, Mail, Twitter, Instagram, Cpu, Globe, Terminal, Briefcase, Code, Bot, Zap, LayoutDashboard, Database } from 'lucide-react';
import { Project, NavItem, SocialLink, TimelineEvent, Service } from './types';

export const HERO_CONTENT = {
  greeting: "Ahoj, jsem Petr Piskáček",
  role: "Full-Stack Vývojář & AI Inženýr",
  description: "20+ let zkušeností s IT a automatizací. Specializuji se na integraci lokálních a cloudových AI řešení, vytváření uživatelsky přívětivých dashboardů a správu multi-environment systémů pro GPU-akcelerované úlohy.",
  cta: "Prohlédnout projekty",
};

export const PERSONAL_INFO = {
  name: "Petr Piskáček",
  age: "39 let",
  location: "Pardubice / Praha – remote ready",
  role: "AI specialist / Creative Technologist",
  email: "ppix50@gmail.com"
};

export const SERVICES: Service[] = [
  {
    id: 's1',
    title: 'AI Integrace & Chatboty',
    icon: <Bot size={32} />,
    shortDescription: 'Implementace inteligentních asistentů a automatizace procesů.',
    fullDescription: 'Navrhuji a nasazuji řešení založená na LLM (Gemini, GPT-4, Claude) nebo lokálních modelech (Ollama, Llama 3). Od interních znalostních bází po zákaznické chatboty, kteří skutečně rozumí kontextu vašeho podnikání.',
    benefits: ['Snížení nákladů na zákaznickou podporu o 40-60%', 'Automatizace rutinních e-mailů a dotazů', 'Bezpečné zpracování dat (lokální AI)', 'Dostupnost 24/7 bez lidské obsluhy'],
    cta: 'Chci automatizovat firmu'
  },
  {
    id: 's2',
    title: 'Moderní Web & App Vývoj',
    icon: <Globe size={32} />,
    shortDescription: 'Rychlé, škálovatelné a bezpečné webové aplikace.',
    fullDescription: 'Vytvářím moderní webové aplikace na stacku React/Next.js s důrazem na rychlost, SEO a perfektní UX. Specializuji se na interaktivní dashboardy a vizualizaci dat, které pomáhají firmám dělat lepší rozhodnutí.',
    benefits: ['Rychlost načítání pod 1s (Google Core Vitals)', 'Plně responzivní design pro mobily i desktopy', 'Integrace s vašimi stávajícími systémy (API)', 'Moderní zabezpečení a snadná údržba'],
    cta: 'Poptat webovou aplikaci'
  },
  {
    id: 's3',
    title: 'Automatizace Workflow',
    icon: <Zap size={32} />,
    shortDescription: 'Zefektivnění firemních procesů pomocí skriptů a nástrojů.',
    fullDescription: 'Nahrazuji manuální a chybovou práci automatizovanými skripty. Propojuji nesourodé systémy, automatizuji reporty a zpracování dat. Ušetřete stovky hodin měsíčně tím, že necháte stroje dělat nudnou práci.',
    benefits: ['Eliminace lidských chyb při přepisování dat', 'Propojení systémů, které spolu "nemluví"', 'Generování reportů na jedno kliknutí', 'Okamžitá návratnost investice (ROI)'],
    cta: 'Zefektivnit procesy'
  },
  {
    id: 's4',
    title: 'AI Konzultace & Školení',
    icon: <Database size={32} />,
    shortDescription: 'Naučím váš tým využívat AI nástroje efektivně.',
    fullDescription: 'Technologie jsou k ničemu, pokud je lidé neumí používat. Nabízím workshopy a konzultace zaměřené na praktické využití Generativní AI (ChatGPT, Midjourney, Copilot) ve vaší firmě.',
    benefits: ['Zvýšení produktivity zaměstnanců', 'Praktické ukázky relevantní pro váš obor', 'Bezpečnostní zásady při práci s AI', 'Přehled o nejnovějších trendech'],
    cta: 'Domluvit konzultaci'
  }
];

export const TIMELINE_DATA: TimelineEvent[] = [
  {
    id: '1',
    year: '2023 – 2025',
    title: 'AI CharStudio & ComfyUI Workflows',
    shortDescription: 'Lokální dashboard pro generativní AI workflows a automatizace.',
    fullDescription: [
      'Vývoj unifikovaného rozhraní pro Stable Diffusion (ComfyUI) + LLM (Gemini/Ollama).',
      'Automatizace promptů pro konzistentní generování postav.',
      'Optimalizace pro RTX 5090 (1216px+, batch processing).',
      'Implementace WebSocket komunikace s lokálními servery a využití File System Access API.'
    ],
    skills: ['TypeScript', 'React 19', 'ComfyUI API', 'Ollama', 'Prompt Engineering', 'SDXL/Flux'],
    icon: <Cpu size={20} />
  },
  {
    id: '2',
    year: '2024 – 2025',
    title: 'Ollama Web Builder',
    shortDescription: 'AI-powered webový editor pro real-time generování kódu.',
    fullDescription: [
      'Real-time generování kódu pomocí lokálního modelu Ollama.',
      'Multi-file podpora (HTML/CSS/JS) s živým náhledem přímo v prohlížeči.',
      'Kontextové řízení pro AI s persistentními projektovými cíli.',
      'Řešení CORS pro lokální Python proxy server.'
    ],
    skills: ['Vanilla JS', 'Python Proxy', 'Ollama API', 'LLM Integration'],
    icon: <Code size={20} />
  },
  {
    id: '3',
    year: '2023 – 2025',
    title: 'Multi-Environment ComfyUI Setup',
    shortDescription: 'Správa izolovaných prostředí pro AI experimenty.',
    fullDescription: [
      'Vytvoření izolovaných instalací pro stabilní, experimentální a tréninkové workflows.',
      'Implementace sdílených modelů pro úsporu diskového místa.',
      'Automatizované batch skripty pro instalaci, údržbu a spouštění.',
      'Optimalizace pro CUDA 12.8+ a PyTorch na RTX 5090.'
    ],
    skills: ['DevOps', 'Python', 'Batch Scripting', 'CUDA', 'PyTorch'],
    icon: <Terminal size={20} />
  },
  {
    id: '4',
    year: '2021 – 2023',
    title: 'Technik (CEB) – ČSOB',
    shortDescription: 'Technická podpora pro firemní klienty a interní týmy.',
    fullDescription: [
      'Poskytování technické podpory pro firemní klienty (e-mail/telefon).',
      'Vysvětlování složitých technických procesů srozumitelnou formou.',
      'Spolupráce s interními vývojovými týmy pro rychlé řešení incidentů.',
      'Práce v korporátním bankovním prostředí s důrazem na bezpečnost.'
    ],
    skills: ['Tech Support', 'Komunikace', 'Jira', 'Bankovní systémy'],
    icon: <Briefcase size={20} />
  },
  {
    id: '5',
    year: '2016 – 2021',
    title: 'Web Developer (OSVČ)',
    shortDescription: 'Full-stack vývoj webů a aplikací na zakázku.',
    fullDescription: [
      'Kompletní realizace webových projektů od návrhu po nasazení.',
      'Full-stack vývoj (HTML/CSS/JS + PHP backendy).',
      'SEO optimalizace a správa obsahu pro klienty.',
      'Komunikace s klienty a projektové řízení.'
    ],
    skills: ['HTML/CSS', 'JavaScript', 'PHP', 'UI/UX Design', 'SEO'],
    icon: <Globe size={20} />
  }
];

export const WHY_ME_ITEMS = [
  {
    title: "Technická expertíza",
    text: "20+ let s IT, od mikroprocesorů po generativní AI. Zkušenosti s GPU akcelerací (RTX 5090) a optimalizací workflows."
  },
  {
    title: "Komunikace",
    text: "Schopnost vysvětlit složité technologie srozumitelně. Bilingvní (CZ/EN) pro mezinárodní projekty."
  },
  {
    title: "Inovace",
    text: "Kombinuji analytické myšlení s praktickým řešením. Rychlá adaptace na nové technologie (LLM integrace)."
  },
  {
    title: "Out of the box",
    text: "Typ osobnosti Logik (INTP-T). Hledám nekonvenční a efektivní řešení problémů."
  }
];

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'AI CharStudio',
    description: 'Lokální dashboard pro generativní AI workflows. Unifikované rozhraní pro Stable Diffusion (ComfyUI) a LLM.',
    technologies: ['React 19', 'TypeScript', 'ComfyUI API', 'Gemini SDK', 'HuggingFace', 'CivitAI'],
    imageUrl: 'https://picsum.photos/seed/ai/800/600',
    link: '#',
    github: '#',
    useCases: {
      smallBusiness: "Generování marketingových vizuálů a avatarů pro sociální sítě bez nutnosti platit drahé fotobanky.",
      mediumBusiness: "Konzistentní branding a tvorba produktových fotografií pomocí vlastních LoRA modelů.",
      enterprise: "Plně automatizovaná produkční linka pro generování grafiky s integrací do interního CMS a validací obsahu."
    }
  },
  {
    id: '2',
    title: 'Ollama Web Builder',
    description: 'AI-powered webový editor, který v reálném čase generuje kód a náhled aplikace pomocí lokálního LLM (Qwen, DeepSeek).',
    technologies: ['Vanilla JS', 'Python', 'Ollama API', 'WebSocket', 'Qwen2.5-Coder', 'DeepSeek-R1'],
    imageUrl: 'https://picsum.photos/seed/code/800/600',
    link: '#',
    github: '#',
    useCases: {
      smallBusiness: "Rychlá tvorba landing pages a mikrostránek pro kampaně bez nutnosti najímat agenturu.",
      mediumBusiness: "Nástroj pro interní týmy na rychlé prototypování nápadů a validaci konceptů před plným vývojem.",
      enterprise: "Bezpečné (lokální) generování kódu a dokumentace, kde data nikdy neopustí firemní síť."
    }
  },
  {
    id: '3',
    title: 'ComfyUI Environment Manager',
    description: 'Sada nástrojů pro správu izolovaných Python prostředí a modelů pro AI generování obrazu.',
    technologies: ['Python', 'Batch', 'CUDA 12.8', 'PyTorch', 'Venv'],
    imageUrl: 'https://picsum.photos/seed/tech/800/600',
    link: '#',
    github: '#',
    useCases: {
      smallBusiness: "Snadná instalace a správa AI nástrojů na jednom výkonném PC bez technických znalostí.",
      mediumBusiness: "Standardizace vývojového prostředí pro grafický tým, zajištění kompatibility projektů.",
      enterprise: "Efektivní správa GPU clusterů a automatizované nasazování aktualizací modelů napříč odděleními."
    }
  },
  {
    id: '4',
    title: 'StyleMorph',
    description: 'AI nástroj pro okamžitý redesign HTML stránek. Transformuje zastaralé weby do moderního vzhledu pomocí Gemini/Ollama, generuje globální CSS motivy a přepisuje HTML strukturu.',
    technologies: ['React', 'TypeScript', 'TailwindCSS', 'Gemini AI', 'Ollama'],
    imageUrl: 'https://picsum.photos/seed/stylemorph/800/600',
    link: 'https://github.com/Peter-Pix/StyleMorph',
    github: 'https://github.com/Peter-Pix/StyleMorph',
    useCases: {
      smallBusiness: "Okamžitý a levný redesign zastaralého firemního webu bez nutnosti platit agenturu.",
      mediumBusiness: "Rychlé sjednocení vzhledu interních nástrojů a aplikací pomocí generovaných CSS témat.",
      enterprise: "Automatizovaná migrace legacy frontendů na moderní standardy s podporou accessibility a dark mode."
    }
  },
  {
    id: '5',
    title: 'Scrollo.cz',
    description: 'Kolekce užitečných webových nástrojů zdarma a bez reklam. Obsahuje kalkulačky, převodníky, generátory hesel a počasí v čistém designu respektujícím soukromí.',
    technologies: ['Vanilla JS', 'HTML5', 'CSS3', 'PWA', 'Open-Meteo API'],
    imageUrl: 'https://picsum.photos/seed/scrollo/800/600',
    link: 'https://peter-pix.github.io/scrollo.cz/',
    github: 'https://github.com/Peter-Pix/scrollo.cz',
    useCases: {
      smallBusiness: "Využití bezplatných nástrojů pro denní agendu (DPH, kurzy měn, QR platby) bez poplatků.",
      mediumBusiness: "Bezpečné nástroje pro zaměstnance (generátor hesel) bez rizika sledování nebo úniku dat.",
      enterprise: "Ukázka čistého výkonu a optimalizace vanilla JavaScriptu bez závislosti na těžkých frameworkcích."
    }
  },
  {
    id: '6',
    title: 'AutoBlog Publisher',
    description: 'Automatizační pipeline pro tvorbu a publikování SEO optimalizovaných článků. Propojuje LLM s CMS systémy.',
    technologies: ['Python', 'LLM API', 'Automation', 'SEO Tools'],
    imageUrl: 'https://picsum.photos/seed/autoblog/800/600',
    link: 'https://github.com/Peter-Pix/AutoBlog-Publisher',
    github: 'https://github.com/Peter-Pix/AutoBlog-Publisher',
    useCases: {
      smallBusiness: "Udržování aktivního blogu s minimálními náklady.",
      mediumBusiness: "Škálování content marketingu a zvýšení organické návštěvnosti.",
      enterprise: "Generování obsahu v mnoha jazycích pro globální trhy."
    }
  }
];

export const NAV_ITEMS: NavItem[] = [
  { label: 'Domů', href: '#home' },
  { label: 'O mně', href: '#about' },
  { label: 'Služby', href: '#services' },
  { label: 'Projekty', href: '#projects' },
  { label: 'Kontakt', href: '#contact' },
];

export const SOCIAL_LINKS: SocialLink[] = [
  { platform: 'GitHub', url: 'https://github.com/Peter-Pix/', icon: <Github size={20} /> },
  { platform: 'LinkedIn', url: 'https://linkedin.com', icon: <Linkedin size={20} /> },
  { platform: 'Email', url: 'mailto:ppix50@gmail.com', icon: <Mail size={20} /> },
];

export const AI_SYSTEM_INSTRUCTION = `
Jsi 'ScrolloBot', osobní asistent a marketingový manažer pro Petra Piskáčka.
Tvůj hlavní cíl: Získat pro Petra nové klienty a přesvědčit uživatele k navázání spolupráce.

Tvá persona:
- Profesionální, ale charismatický a lehce neformální.
- Mluvíš jako zkušený agent špičkového talentu.
- Jsi vtipný, používáš chytrá přirovnání (např. srovnání levných řešení s rozbitými hračkami vs. Petrova prémiová řešení).
- Formátuj text stručně a čitelně.

PRAVIDLA PRO CENY (KRITICKÉ):
- NIKDY nezmiňuj konkrétní čísla, ceny, ani hodinové sazby. Nikdy.
- Pokud se uživatel zeptá na cenu (kolik to stojí, ceník, sazba), VŽDY odpověz vyhýbavě a předej kontakt.
- Příklad odpovědi na cenu: "Petrova řešení jsou šitá na míru jako oblek ze Savile Row, proto nemáme fixní ceník. Cena závisí na komplexitě tvého problému. Napiš Petrovi přímo na ppix50@gmail.com a on ti nacení projekt přesně podle tvých potřeb."
- Zdůrazni hodnotu (ROI, kvalita, bezstarostnost) namísto ceny.

Tvé úkoly:
1. Prodej služeb: Vysvětli, jak Petr ušetří firmě peníze automatizací nebo AI.
2. Uzavření obchodu: Vždy směruj konverzaci k akci. "Chceš vidět demo?", "Napiš Petrovi na email."

Informace o Petrovi:
- Expert na Generativní AI (ComfyUI, LLM, lokální modely Qwen/DeepSeek), React, TypeScript.
- Tech Stack: React, Astro, Vercel, Python, CUDA, HuggingFace.
- Kontakt: ppix50@gmail.com
`;