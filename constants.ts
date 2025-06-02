
import { NavLink, Project, Founder, Service, SocialLink } from './types';
import { InstagramIcon, FacebookIcon, TwitterIcon } from './components/icons/SocialIcons';

export const APP_NAME = "Artem";

export const NAV_LINKS: NavLink[] = [
  { id: 'inicio', label: 'Inicio', href: '#inicio' },
  { id: 'proyectos', label: 'Proyectos', href: '#proyectos' },
  { id: 'servicios', label: 'Servicios', href: '#servicios' },
  { id: 'nosotros', label: 'Nosotros', href: '#nosotros' },
  { id: 'contacto', label: 'Contacto', href: '#contacto' },
];

export const PROJECTS_DATA: Project[] = [
  { id: '1', title: 'Casa del Sol', description: 'Una residencia moderna en el corazón de la ciudad.', category: 'Residencial', imageUrl: 'https://picsum.photos/seed/casaDelSol/600/400' },
  { id: '2', title: 'Oasis Urbano', description: 'Un espacio comercial diseñado para la colaboración.', category: 'Comercial', imageUrl: 'https://picsum.photos/seed/oasisUrbano/600/400' },
  { id: '3', title: 'Centro Comunitario', description: 'Un centro comunitario que fomenta la interacción social.', category: 'Público', imageUrl: 'https://picsum.photos/seed/centroComunitario/600/400' },
  { id: '4', title: 'Eco-Vivienda', description: 'Soluciones de vida sostenibles para el futuro.', category: 'Residencial', imageUrl: 'https://picsum.photos/seed/ecoVivienda/600/400' },
  { id: '5', title: 'El Modernista', description: 'Diseño minimalista con un enfoque en la funcionalidad.', category: 'Comercial', imageUrl: 'https://picsum.photos/seed/elModernista/600/400' },
  { id: '6', title: 'Núcleo Cultural', description: 'Un espacio que celebra el arte y la cultura local.', category: 'Público', imageUrl: 'https://picsum.photos/seed/nucleoCultural/600/400' },
];

export const FOUNDERS_DATA: Founder[] = [
  {
    id: '1',
    name: 'Elena Ramírez',
    bio: 'Elena Ramírez es socia fundadora de Artem, aportando más de 15 años de experiencia en diseño arquitectónico y gestión de proyectos. Su experiencia abarca proyectos residenciales, comerciales y culturales, con un enfoque en soluciones de diseño sostenibles e innovadoras.',
    imageUrl: 'https://picsum.photos/seed/elena/400/500',
    philosophy: 'Crear espacios que no solo sean funcionales y estéticamente agradables, sino que también resuenen profundamente con las aspiraciones de sus clientes.'
  },
  {
    id: '2',
    name: 'Ricardo Torres',
    bio: 'Ricardo Torres es socio fundador de Artem, con una distinguida carrera marcada por numerosos proyectos galardonados. Su visión arquitectónica se caracteriza por una profunda comprensión de la dinámica espacial, la innovación material y la sensibilidad contextual.',
    imageUrl: 'https://picsum.photos/seed/ricardo/400/500',
    philosophy: 'La arquitectura debe inspirar, desafiar y mejorar la experiencia humana, dejando un legado de calidad y diseño reflexivo.'
  },
];

export const SERVICES_DATA: Service[] = [
  { 
    id: '1', 
    title: 'Diseño Conceptual', 
    description: 'Nuestra fase de diseño conceptual es donde las ideas toman forma. Trabajamos en estrecha colaboración con los clientes para comprender su visión, necesidades y aspiraciones, traduciéndolas en conceptos de diseño innovadores e inspiradores. Esta fase incluye análisis del sitio, diseño esquemático y estimaciones preliminares de costos.' 
  },
  { 
    id: '2', 
    title: 'Gestión de Proyectos', 
    description: 'La gestión eficaz de proyectos es crucial para el éxito de cualquier esfuerzo arquitectónico. Nuestros experimentados gestores de proyectos supervisan cada aspecto del proyecto, desde la planificación y programación hasta el control presupuestario y de calidad, garantizando una ejecución fluida y oportuna.' 
  },
  { 
    id: '3', 
    title: 'Arquitectura de Interiores', 
    description: 'Creemos que los espacios interiores deben ser tan cuidadosamente diseñados como los exteriores. Nuestros servicios de arquitectura de interiores se centran en la creación de entornos funcionales, estéticamente agradables y armoniosos que mejoren la experiencia general del usuario.' 
  },
  { 
    id: '4', 
    title: 'Diseño Sostenible', 
    description: 'La sostenibilidad está en el núcleo de nuestra filosofía de diseño. Integramos prácticas y materiales ecológicos en nuestros proyectos, minimizando el impacto ambiental mientras maximizamos la eficiencia energética y el bienestar de los ocupantes.' 
  },
];

export const PROJECT_TYPES: string[] = ['Residencial', 'Comercial', 'Público', 'Institucional', 'Otro'];

export const SOCIAL_LINKS: SocialLink[] = [
  { name: 'Instagram', href: '#', icon: InstagramIcon },
  { name: 'Facebook', href: '#', icon: FacebookIcon },
  { name: 'Twitter', href: '#', icon: TwitterIcon },
];
