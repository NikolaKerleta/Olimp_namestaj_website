import { useState, useEffect, useRef } from 'react';
import { useSwipeable } from 'react-swipeable'; // kept for lightbox only

// Import kitchen images (20 total)
import kitchen1 from '../assets/images/Gallery/Kitchens/kitchen_modern_potential_hero.jpg';
import kitchen3 from '../assets/images/Gallery/Kitchens/potential_hero_kitchen_white.jpg';
import kitchen4 from '../assets/images/Gallery/Kitchens/kitchen-wood.jpg';
import kitchen5 from '../assets/images/Gallery/Kitchens/kitchen-wood-1.jpg';
import kitchen6 from '../assets/images/Gallery/Kitchens/kitchen_white.jpg';
import kitchen7 from '../assets/images/Gallery/Kitchens/kitchen_white_1.jpg';
import kitchen8 from '../assets/images/Gallery/Kitchens/kitchen_whilte_2.jpg';
import kitchen9 from '../assets/images/Gallery/Kitchens/kitchen_textured.jpg';
import kitchen10 from '../assets/images/Gallery/Kitchens/kitchen_textured_v2.jpg';
import kitchen11 from '../assets/images/Gallery/Kitchens/kitchen_textured_v2_1.jpg';
import kitchen12 from '../assets/images/Gallery/Kitchens/kitchen_pink-ish.jpg';
import kitchen14 from '../assets/images/Gallery/Kitchens/kitchen_modern.jpg';
import kitchen15 from '../assets/images/Gallery/Kitchens/kitchen_modern_1.jpg';
import kitchen16 from '../assets/images/Gallery/Kitchens/kitchen_modern_2.jpg';
import kitchen17 from '../assets/images/Gallery/Kitchens/kitchen_white_slim.jpg';
import kitchen18 from '../assets/images/Gallery/Kitchens/kitchen_white_slim_1.jpg';
import kitchen19 from '../assets/images/Gallery/Kitchens/kitchen_white_slim_2.jpg';

// Import bedroom images (9 total)
import bedroom1 from '../assets/images/Gallery/Bedrooms/bedroom_space.jpg';
import bedroom2 from '../assets/images/Gallery/Bedrooms/bedroom_space_1.jpg';
import bedroom3 from '../assets/images/Gallery/Bedrooms/bedroom_brown.jpg';
import bedroom4 from '../assets/images/Gallery/Bedrooms/bedroom_brown_1.jpg';
import bedroom5 from '../assets/images/Gallery/Bedrooms/bedroom_brown_light.jpg';
import bedroom6 from '../assets/images/Gallery/Bedrooms/bedroom_pink-ish.jpg';
import bedroom7 from '../assets/images/Gallery/Bedrooms/bedroom_pink-ish_1.jpg';
import bedroom8 from '../assets/images/Gallery/Bedrooms/bedroom_floral_white.jpg';
import bedroom9 from '../assets/images/Gallery/Bedrooms/bedroom_white.jpg';

// Import bathroom images (2 total)
import bathroom1 from '../assets/images/Gallery/Bathrooms/bathroom_textured_1.jpg';
import bathroom2 from '../assets/images/Gallery/Bathrooms/bathroom-textured.jpg';

// Import office/interior images (5 total)
import office1 from '../assets/images/Gallery/Offices/office_potential_hero.jpg';
import office2 from '../assets/images/Gallery/Offices/office_1.jpg';
import office3 from '../assets/images/Gallery/Offices/office_2.jpg';
import office4 from '../assets/images/Gallery/Offices/office_3.jpg';
import office5 from '../assets/images/Gallery/Offices/office_4.jpg';

// Import front desk/reception images (3 total)
import frontdesk1 from '../assets/images/Gallery/FrontDesks/front_desk_2_potential_hero.jpg';
import frontdesk2 from '../assets/images/Gallery/FrontDesks/front_desk_1_potential_hero.jpg';
import frontdesk3 from '../assets/images/Gallery/FrontDesks/front_desk.jpg';

// Import new kitchen images (18 additional)
import kitchen21 from '../assets/images/Gallery/Kitchens/20150326_124037.jpg';
import kitchen22 from '../assets/images/Gallery/Kitchens/IMG-001f24ebff4b1fe53a5ef47cd11a429a-V.jpg';
import kitchen24 from '../assets/images/Gallery/Kitchens/IMG-16b79307b800c58cd946f1430fdb18d2-V.jpg';
import kitchen25 from '../assets/images/Gallery/Kitchens/IMG-180a7e67f6aec2c2cf140e01af348bea-V.jpg';
import kitchen26 from '../assets/images/Gallery/Kitchens/IMG-234fe3b6c9d15a82dba13517bb458558-V.jpg';
import kitchen27 from '../assets/images/Gallery/Kitchens/IMG-29d0443911b254035d3f70c187e55da2-V.jpg';
import kitchen28 from '../assets/images/Gallery/Kitchens/IMG-29eba81c1a0b42e0252791e8f9205e63-V.jpg';
import kitchen29 from '../assets/images/Gallery/Kitchens/IMG-32bc712408bb98404cb11cf4bfa3ac5e-V.jpg';
import kitchen30 from '../assets/images/Gallery/Kitchens/IMG-3a4271fc57d6274da1cb5f72340dfe67-V.jpg';
import kitchen31 from '../assets/images/Gallery/Kitchens/IMG-3e1591743edfcba6751510f2b2338433-V.jpg';
import kitchen32 from '../assets/images/Gallery/Kitchens/IMG-63aebc18eb1954d100d8ef2652d7f66b-V.jpg';
import kitchen33 from '../assets/images/Gallery/Kitchens/IMG-7c95d724e77feaa6ba8766f9e125b907-V.jpg';
import kitchen34 from '../assets/images/Gallery/Kitchens/IMG-84889a070defd0397b194378436278bc-V.jpg';
import kitchen36 from '../assets/images/Gallery/Kitchens/IMG-c0552f8d31cf5878bef358301f69bcaf-V.jpg';
import kitchen37 from '../assets/images/Gallery/Kitchens/IMG-c2e8a376311e96757f81907f10daa15e-V.jpg';
import kitchen38 from '../assets/images/Gallery/Kitchens/IMG-ca358a37c414adcf4d6098d8c80b7110-V.jpg';

// Import new bedroom images (4 additional)
import bedroom10 from '../assets/images/Gallery/Bedrooms/IMG-237d79ea1d9c28ef590da5569cf6fdec-V.jpg';
import bedroom11 from '../assets/images/Gallery/Bedrooms/IMG-4f6bcd11d4f9b3c05f635de005a2205c-V.jpg';
import bedroom12 from '../assets/images/Gallery/Bedrooms/IMG-8159cceb749a67290720b53bad6482bd-V.jpg';
import bedroom13 from '../assets/images/Gallery/Bedrooms/IMG-be11026af218db8ff0b5ef39f8b7c8bd-V.jpg';

// Import new bathroom image (1 additional)
import bathroom3 from '../assets/images/Gallery/Bathrooms/image.png';

// Import new office images (6 additional)
import office6 from '../assets/images/Gallery/Offices/IMG-1dd3df5264b6eff5d7fd0e93f576150a-V.jpg';
import office7 from '../assets/images/Gallery/Offices/IMG-2c1ce835e2bc3e1564967976e363d406-V.jpg';
import office9 from '../assets/images/Gallery/Offices/IMG-790f6ac4b6e40ae4cf95854d4e064cd8-V.jpg';
import office10 from '../assets/images/Gallery/Offices/IMG-8c25439f676c4354681e2af1d80f2aa1-V.jpg';
import office11 from '../assets/images/Gallery/Offices/IMG-c742f1770e1c5af65c67cb3bb9b5c345-V.jpg';

// Import Other images (7 additional)
import other1 from '../assets/images/Gallery/Other/IMG-3ee6156f69f0812751ea2ed2334104ce-V.jpg';
import other2 from '../assets/images/Gallery/Other/IMG-5b660ba3539f8f7bcab90a4b81c6a3dc-V.jpg';
import other3 from '../assets/images/Gallery/Other/IMG-5edb99ebcf912ae2ba827b40e914077f-V.jpg';
import other4 from '../assets/images/Gallery/Other/IMG-60ddc2348058984305d45fed5fa5567b-V.jpg';
import other5 from '../assets/images/Gallery/Other/IMG_20151012_141217.jpg';
import other6 from '../assets/images/Gallery/Other/IMG_20180626_125110563~2.jpg';
import other7 from '../assets/images/Gallery/Other/IMG_20230202_131934.jpg';

function Gallery() {
  const [activeFilter, setActiveFilter] = useState('sve');
  const [visualActiveFilter, setVisualActiveFilter] = useState('sve');
  const [isVisible, setIsVisible] = useState(false);
  const [isChanging, setIsChanging] = useState(false);
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [showSwipeHint, setShowSwipeHint] = useState(true);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxImageIndex, setLightboxImageIndex] = useState(0);
  const sectionRef = useRef(null);

  // Drag state
  const [dragX, setDragX] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [isFlying, setIsFlying] = useState(false);
  const dragStartX = useRef(0);
  const dragStartY = useRef(0);
  const dragDirection = useRef(null); // 'horizontal' | 'vertical' | null
  const SWIPE_THRESHOLD = 100;

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1, rootMargin: '0px 0px -100px 0px' }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Show swipe hint whenever "Sve" mode is active
  useEffect(() => {
    if (activeFilter !== 'sve') return;
    setShowSwipeHint(true);
  }, [activeFilter]);

  const projects = [
    // Kitchens (20 images)
    { id: 1, category: 'kuhinje', image: kitchen1, title: 'Moderna kuhinja sa drvom i hromom', size: 'large' },
    { id: 3, category: 'kuhinje', image: kitchen3, title: 'Bela kuhinja sa lustrom', size: 'normal' },
    { id: 4, category: 'kuhinje', image: kitchen4, title: 'Kuhinja od drveta', size: 'normal' },
    { id: 5, category: 'kuhinje', image: kitchen5, title: 'Drvenа kuhinja - varijanta 2', size: 'normal' },
    { id: 6, category: 'kuhinje', image: kitchen6, title: 'Bela kuhinja', size: 'normal' },
    { id: 7, category: 'kuhinje', image: kitchen7, title: 'Bela kuhinja - varijanta 2', size: 'normal' },
    { id: 8, category: 'kuhinje', image: kitchen8, title: 'Bela kuhinja - varijanta 3', size: 'normal' },
    { id: 9, category: 'kuhinje', image: kitchen9, title: 'Kuhinja sa mramornim bаr stolicama', size: 'normal' },
    { id: 10, category: 'kuhinje', image: kitchen10, title: 'Teksturirana kuhinja', size: 'normal' },
    { id: 11, category: 'kuhinje', image: kitchen11, title: 'Teksturirana kuhinja - varijanta 2', size: 'normal' },
    { id: 12, category: 'kuhinje', image: kitchen12, title: 'Ružičasta kuhinja', size: 'normal' },
    { id: 14, category: 'kuhinje', image: kitchen14, title: 'Moderna kuhinja', size: 'normal' },
    { id: 15, category: 'kuhinje', image: kitchen15, title: 'Moderna kuhinja - varijanta 2', size: 'normal' },
    { id: 16, category: 'kuhinje', image: kitchen16, title: 'Moderna kuhinja - varijanta 3', size: 'normal' },
    { id: 17, category: 'kuhinje', image: kitchen17, title: 'Vitka bela kuhinja', size: 'normal' },
    { id: 18, category: 'kuhinje', image: kitchen18, title: 'Vitka bela kuhinja - varijanta 2', size: 'normal' },
    { id: 19, category: 'kuhinje', image: kitchen19, title: 'Vitka bela kuhinja - varijanta 3', size: 'normal' },

    // Bedrooms (9 images)
    { id: 21, category: 'spavace', image: bedroom1, title: 'Dečija soba - svemirska tema', size: 'large' },
    { id: 22, category: 'spavace', image: bedroom2, title: 'Dečija soba - svemirska tema 2', size: 'normal' },
    { id: 23, category: 'spavace', image: bedroom3, title: 'Tamna spavaća soba sa drvenim panelima', size: 'normal' },
    { id: 24, category: 'spavace', image: bedroom4, title: 'Braon spavaća soba', size: 'normal' },
    { id: 25, category: 'spavace', image: bedroom5, title: 'Svetla braon spavaća soba', size: 'normal' },
    { id: 26, category: 'spavace', image: bedroom6, title: 'Ružičasta spavaća soba', size: 'normal' },
    { id: 27, category: 'spavace', image: bedroom7, title: 'Ružičasta spavaća soba - varijanta 2', size: 'normal' },
    { id: 28, category: 'spavace', image: bedroom8, title: 'Bela spavaća soba sa cvećem', size: 'normal' },
    { id: 29, category: 'spavace', image: bedroom9, title: 'Bela spavaća soba', size: 'normal' },

    // Bathrooms (2 images)
    { id: 30, category: 'kupatila', image: bathroom1, title: 'Kupatilo sa mramornim umivaonikom', size: 'large' },
    { id: 31, category: 'kupatila', image: bathroom2, title: 'Teksturirano kupatilo', size: 'normal' },

    // Interiors - Offices + Front Desks (8 images)
    { id: 32, category: 'ostalo', image: office1, title: 'Kancelarija sa pozadinskim osvetljenjem', size: 'large' },
    { id: 33, category: 'ostalo', image: office2, title: 'Kancelarija sa policama', size: 'normal' },
    { id: 34, category: 'ostalo', image: office3, title: 'Kancelarija - detalj', size: 'normal' },
    { id: 35, category: 'ostalo', image: office4, title: 'Dnevna soba sa trpezarijom', size: 'normal' },
    { id: 36, category: 'ostalo', image: office5, title: 'Dnevna soba sa policama', size: 'normal' },
    { id: 37, category: 'ostalo', image: frontdesk1, title: 'Recepcija Genesis sa zlatnim lustrima', size: 'normal' },
    { id: 38, category: 'ostalo', image: frontdesk2, title: 'Recepcija Genesis - ugao', size: 'normal' },
    { id: 39, category: 'ostalo', image: frontdesk3, title: 'Recepcija Genesis - prednji deo', size: 'normal' },

    // New kitchen images
    { id: 40, category: 'kuhinje', image: kitchen21, title: 'Kuhinja - klasičan stil', size: 'normal' },
    { id: 41, category: 'kuhinje', image: kitchen22, title: 'Kuhinja - svetla drvena', size: 'normal' },
    { id: 43, category: 'kuhinje', image: kitchen24, title: 'Kuhinja - otvoreni plan', size: 'normal' },
    { id: 44, category: 'kuhinje', image: kitchen25, title: 'Kuhinja - poluostrvo', size: 'normal' },
    { id: 45, category: 'kuhinje', image: kitchen26, title: 'Kuhinja - varijanta 26', size: 'normal' },
    { id: 46, category: 'kuhinje', image: kitchen27, title: 'Kuhinja - varijanta 27', size: 'normal' },
    { id: 47, category: 'kuhinje', image: kitchen28, title: 'Kuhinja - varijanta 28', size: 'normal' },
    { id: 48, category: 'kuhinje', image: kitchen29, title: 'Kuhinja - varijanta 29', size: 'normal' },
    { id: 49, category: 'kuhinje', image: kitchen30, title: 'Kuhinja - varijanta 30', size: 'normal' },
    { id: 50, category: 'kuhinje', image: kitchen31, title: 'Kuhinja - varijanta 31', size: 'normal' },
    { id: 51, category: 'kuhinje', image: kitchen32, title: 'Kuhinja - varijanta 32', size: 'normal' },
    { id: 52, category: 'kuhinje', image: kitchen33, title: 'Kuhinja - varijanta 33', size: 'normal' },
    { id: 53, category: 'kuhinje', image: kitchen34, title: 'Kuhinja - varijanta 34', size: 'normal' },
    { id: 55, category: 'kuhinje', image: kitchen36, title: 'Kuhinja - varijanta 36', size: 'normal' },
    { id: 56, category: 'kuhinje', image: kitchen37, title: 'Kuhinja - varijanta 37', size: 'normal' },
    { id: 57, category: 'kuhinje', image: kitchen38, title: 'Kuhinja - varijanta 38', size: 'normal' },

    // New bedroom images
    { id: 58, category: 'spavace', image: bedroom10, title: 'Spavaća soba - varijanta 10', size: 'normal' },
    { id: 59, category: 'spavace', image: bedroom11, title: 'Spavaća soba - varijanta 11', size: 'normal' },
    { id: 60, category: 'spavace', image: bedroom12, title: 'Spavaća soba - varijanta 12', size: 'normal' },
    { id: 61, category: 'spavace', image: bedroom13, title: 'Spavaća soba - varijanta 13', size: 'normal' },

    // New bathroom image
    { id: 62, category: 'kupatila', image: bathroom3, title: 'Kupatilo - varijanta 3', size: 'normal' },

    // New office/interior images
    { id: 63, category: 'ostalo', image: office6, title: 'Enterijer - varijanta 6', size: 'normal' },
    { id: 64, category: 'ostalo', image: office7, title: 'Enterijer - varijanta 7', size: 'normal' },
    { id: 66, category: 'ostalo', image: office9, title: 'Enterijer - varijanta 9', size: 'normal' },
    { id: 67, category: 'ostalo', image: office10, title: 'Enterijer - varijanta 10', size: 'normal' },
    { id: 68, category: 'ostalo', image: office11, title: 'Enterijer - varijanta 11', size: 'normal' },

    // Other images
    { id: 69, category: 'ostalo', image: other1, title: 'Enterijer - varijanta 12', size: 'normal' },
    { id: 70, category: 'ostalo', image: other2, title: 'Enterijer - varijanta 13', size: 'normal' },
    { id: 71, category: 'ostalo', image: other3, title: 'Enterijer - varijanta 14', size: 'normal' },
    { id: 72, category: 'ostalo', image: other4, title: 'Enterijer - varijanta 15', size: 'normal' },
    { id: 73, category: 'ostalo', image: other5, title: 'Enterijer - varijanta 16', size: 'normal' },
    { id: 74, category: 'ostalo', image: other6, title: 'Enterijer - varijanta 17', size: 'normal' },
    { id: 75, category: 'ostalo', image: other7, title: 'Enterijer - varijanta 18', size: 'normal' },
  ];

  const filters = [
    { id: 'sve', label: 'Sve', count: projects.length },
    { id: 'kuhinje', label: 'Kuhinje', count: projects.filter(p => p.category === 'kuhinje').length },
    { id: 'spavace', label: 'Spavaće sobe', count: projects.filter(p => p.category === 'spavace').length },
    { id: 'kupatila', label: 'Kupatila', count: projects.filter(p => p.category === 'kupatila').length },
    { id: 'ostalo', label: 'Ostalo', count: projects.filter(p => p.category === 'ostalo').length },
  ];

  const filteredProjects = activeFilter === 'sve'
    ? projects
    : projects.filter(project => project.category === activeFilter);

  const handleFilterChange = (filterId) => {
    if (filterId !== activeFilter) {
      setIsChanging(true);
      setCurrentCardIndex(0);
      setDragX(0);
      setIsDragging(false);
      // Phase 1: collapse the current button immediately
      setVisualActiveFilter(null);
      // Phase 2: after collapse animation, switch data + expand new button
      setTimeout(() => {
        setActiveFilter(filterId);
        setVisualActiveFilter(filterId);
        setIsChanging(false);
      }, 300);
    }
  };

  const nextCard = () => {
    setCurrentCardIndex(prev => (prev + 1) % filteredProjects.length);
  };

  const prevCard = () => {
    setCurrentCardIndex(prev => (prev - 1 + filteredProjects.length) % filteredProjects.length);
  };

  // Pointer drag handlers — card follows finger/mouse live
  const handlePointerDown = (e) => {
    if (isFlying) return;
    if (e.pointerType === 'mouse') return; // mouse users click to zoom, arrows to navigate
    setShowSwipeHint(false);
    e.currentTarget.setPointerCapture(e.pointerId);
    dragStartX.current = e.clientX;
    dragStartY.current = e.clientY;
    dragDirection.current = null;
    setIsDragging(true);
  };

  const handlePointerMove = (e) => {
    if (!isDragging) return;
    const dx = e.clientX - dragStartX.current;
    const dy = e.clientY - dragStartY.current;

    // Lock direction after 8px of movement
    if (!dragDirection.current && (Math.abs(dx) > 8 || Math.abs(dy) > 8)) {
      dragDirection.current = Math.abs(dx) > Math.abs(dy) ? 'horizontal' : 'vertical';
    }

    if (dragDirection.current === 'horizontal') {
      setDragX(dx);
    }
    // vertical: do nothing, let the browser scroll
  };

  const handlePointerUp = () => {
    if (!isDragging) return;
    setIsDragging(false);

    if (dragDirection.current !== 'horizontal') {
      dragDirection.current = null;
      return;
    }
    dragDirection.current = null;

    if (Math.abs(dragX) > SWIPE_THRESHOLD) {
      // Both directions advance to next picture
      const flyDirection = dragX < 0 ? -1 : 1;
      setIsFlying(true);
      setDragX(flyDirection * 700);
      setTimeout(() => {
        nextCard();
        setDragX(0);
        setIsFlying(false);
      }, 380);
    } else {
      setDragX(0);
    }
  };

  // Lightbox handlers
  const openLightbox = (index) => {
    setLightboxImageIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  // Sync body overflow with lightbox state
  useEffect(() => {
    document.body.style.overflow = lightboxOpen ? 'hidden' : '';
    document.body.classList.toggle('lightbox-open', lightboxOpen);
    return () => {
      document.body.style.overflow = '';
      document.body.classList.remove('lightbox-open');
    };
  }, [lightboxOpen]);

  const nextLightboxImage = () => {
    setLightboxImageIndex((prev) => (prev + 1) % filteredProjects.length);
  };

  const prevLightboxImage = () => {
    setLightboxImageIndex((prev) => (prev - 1 + filteredProjects.length) % filteredProjects.length);
  };

  // Close lightbox on Escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape' && lightboxOpen) {
        closeLightbox();
      }
    };
    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, [lightboxOpen]);

  // Swipe handlers for lightbox
  const lightboxHandlers = useSwipeable({
    onSwipedLeft: () => nextLightboxImage(),
    onSwipedRight: () => prevLightboxImage(),
    trackMouse: true, // Enable mouse drag on desktop
    preventScrollOnSwipe: true,
    delta: 10,
  });

  // Generate random tilt angles for stacked effect
  const getTiltAngle = (index) => {
    const angles = [2, -3, 1.5, -2.5, 3, -1, 2.5, -3.5, 1, -2];
    return angles[index % angles.length];
  };

  return (
    <section
      id="gallery"
      ref={sectionRef}
      className="py-10 lg:py-[var(--spacing-section)] bg-[var(--color-background)] relative overflow-hidden [overflow-anchor:none]"
    >
      {/* Decorative background */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-[var(--color-accent)] rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div
          className={`text-center mb-10 lg:mb-32 max-w-4xl mx-auto transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <span className="inline-block text-[var(--color-accent)] text-sm font-bold tracking-widest uppercase mb-6">
            Portfolio
          </span>
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-[var(--color-text-primary)] mb-10 tracking-tight font-serif">
            Naši radovi
          </h2>
          <p className="text-xl lg:text-2xl text-[var(--color-text-secondary)] max-w-3xl mx-auto leading-relaxed font-light">
            Pogledajte projekte koji govore više od reči
          </p>
        </div>

        {/* Enhanced Filter Buttons - Minimal by default, expand on hover/active */}
        <div
          className={`flex flex-wrap justify-center gap-4 mb-16 lg:mb-20 transition-all duration-1000 delay-200 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {filters.map(filter => (
            <button
              key={filter.id}
              onClick={() => handleFilterChange(filter.id)}
              className={`group relative h-11 px-3 text-base font-bold tracking-wide transition-all duration-300 overflow-hidden rounded-sm flex items-center ${
                visualActiveFilter === filter.id
                  ? 'bg-[var(--color-accent)] text-white shadow-2xl px-6'
                  : 'bg-white text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] border-2 border-[var(--color-text-secondary)]/20 hover:border-[var(--color-accent)]/60 shadow-md hover:shadow-xl hover:px-6'
              }`}
            >
              <span className="relative z-10 flex items-center">
                {filter.label}
                <span className={`text-sm py-1 rounded-full font-semibold transition-all duration-300 inline-block overflow-hidden whitespace-nowrap ${
                  visualActiveFilter === filter.id
                    ? 'bg-white/25 opacity-100 max-w-[3rem] ml-3 px-2'
                    : 'bg-[var(--color-accent)]/10 text-[var(--color-accent)] opacity-0 max-w-0 ml-0 px-0'
                }`}>
                  {filter.count}
                </span>
              </span>
              {visualActiveFilter !== filter.id && (
                <span className="absolute inset-0 bg-gradient-to-r from-[var(--color-accent)]/10 to-[var(--color-accent)]/5 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
              )}
            </button>
          ))}
        </div>


        {/* Conditional rendering: Swipe mode for "Sve", Grid mode for specific categories */}
        {activeFilter === 'sve' ? (
          /* Stacked Photo Gallery with live drag — "Sve" mode */
          <div
            className={`relative transition-opacity duration-300 ${
              isChanging ? 'opacity-0' : 'opacity-100'
            }`}
            style={{ minHeight: '600px' }}
          >
            {/* Desktop side arrows — absolutely positioned left/right of the card */}
            {filteredProjects.length > 1 && (
              <>
                <button
                  onClick={prevCard}
                  className="hidden lg:flex absolute left-16 top-1/2 -translate-y-1/2 z-20 w-14 h-14 rounded-full bg-white border-2 border-[var(--color-text-secondary)]/20 hover:border-[var(--color-accent)] hover:bg-[var(--color-accent)] hover:text-white transition-all items-center justify-center group shadow-lg hover:scale-110 hover:shadow-xl"
                  aria-label="Prethodni projekat"
                >
                  <svg className="w-6 h-6 transition-transform group-hover:-translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <button
                  onClick={nextCard}
                  className="hidden lg:flex absolute right-16 top-1/2 -translate-y-1/2 z-20 w-14 h-14 rounded-full bg-white border-2 border-[var(--color-text-secondary)]/20 hover:border-[var(--color-accent)] hover:bg-[var(--color-accent)] hover:text-white transition-all items-center justify-center group shadow-lg hover:scale-110 hover:shadow-xl"
                  aria-label="Sledeći projekat"
                >
                  <svg className="w-6 h-6 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </>
            )}
            {filteredProjects.length > 0 ? (
              <div className="relative w-full max-w-4xl mx-auto lg:px-20 h-[500px] md:h-[680px] lg:h-[700px] flex items-center justify-center">
                {filteredProjects.map((project, index) => {
                  const isActive = index === currentCardIndex;
                  const stackOffset = index - currentCardIndex;

                  // Only render the active card + 3 behind it; nothing before
                  if (index < currentCardIndex || index >= currentCardIndex + 4) return null;

                  // Progress toward threshold (0 → 1) for subtle behind-card reactions
                  const dragProgress = Math.min(Math.abs(dragX) / SWIPE_THRESHOLD, 1);

                  const activeTransform = `translateX(${dragX}px) rotate(${dragX * 0.06}deg) scale(1)`;

                  const behindY = stackOffset * 12 - dragProgress * 6 * Math.min(stackOffset, 1);
                  const behindTransform = `translateY(${behindY}px) rotate(${getTiltAngle(index)}deg) scale(${Math.max(0.88, 1 - stackOffset * 0.04 + dragProgress * 0.02)})`;

                  // Transition: none while dragging, fast fly-off while flying, smooth spring otherwise
                  const cardTransition = isDragging
                    ? 'none'
                    : isFlying && isActive
                    ? 'transform 0.38s cubic-bezier(0.4, 0, 1, 1), opacity 0.38s ease-out'
                    : 'transform 0.55s cubic-bezier(0.25, 0.46, 0.45, 0.94), opacity 0.4s ease-out';

                  return (
                    <div
                      key={project.id}
                      className={`absolute w-full max-w-3xl ${
                        isActive ? 'cursor-pointer' : 'pointer-events-none'
                      }`}
                      style={{
                        transform: isActive ? activeTransform : behindTransform,
                        opacity: 1,
                        zIndex: filteredProjects.length - index,
                        transition: cardTransition,
                        boxShadow: isActive
                          ? `0 ${25 + Math.abs(dragX) * 0.05}px 50px rgba(0,0,0,${0.25 + Math.abs(dragX) * 0.0003})`
                          : `0 ${8 + stackOffset * 4}px ${16 + stackOffset * 8}px rgba(0,0,0,0.12)`,
                        willChange: isActive ? 'transform' : 'auto',
                        touchAction: isActive ? 'pan-y' : 'auto',
                      }}
                      onPointerDown={isActive ? handlePointerDown : undefined}
                      onPointerMove={isActive ? handlePointerMove : undefined}
                      onPointerUp={isActive ? handlePointerUp : undefined}
                      onPointerCancel={isActive ? handlePointerUp : undefined}
                      onClick={() => {
                        if (isActive && !isFlying && Math.abs(dragX) < 5) {
                          setShowSwipeHint(false);
                          openLightbox(index);
                        }
                      }}
                    >
                      {/* Swipe direction hint overlay */}
                      {isActive && isDragging && (
                        <>
                          <div
                            className="absolute inset-0 rounded-sm z-10 pointer-events-none transition-opacity"
                            style={{ opacity: Math.max(0, -dragX / SWIPE_THRESHOLD) * 0.25, background: 'linear-gradient(to right, rgba(181,87,58,0.4), transparent)' }}
                          />
                          <div
                            className="absolute inset-0 rounded-sm z-10 pointer-events-none"
                            style={{ opacity: Math.max(0, dragX / SWIPE_THRESHOLD) * 0.25, background: 'linear-gradient(to left, rgba(181,87,58,0.4), transparent)' }}
                          />
                        </>
                      )}

                      <div className="bg-white p-4 lg:p-6 rounded-sm shadow-xl border-4 border-white select-none">
                        <div className="aspect-[4/3] overflow-hidden rounded-sm bg-[var(--color-surface)] mb-4 relative">
                          <img
                            src={project.image}
                            alt={project.title}
                            className="w-full h-full object-cover"
                            draggable="false"
                            loading="lazy"
                          />
                          {/* Swipe hint overlay — mobile only, plays once */}
                          {showSwipeHint && isActive && (
                            <div
                              className="absolute inset-0 lg:hidden animate-swipe-hint-reveal pointer-events-none z-10 flex items-center justify-center"
                              style={{ background: 'rgba(0,0,0,0.25)' }}
                            >
                              <div style={{ position: 'relative', width: 80, height: 44 }}>
                                {/* Pill outline */}
                                <div style={{
                                  position: 'absolute', inset: 0,
                                  borderRadius: 22,
                                  border: '2.5px solid rgba(255,255,255,0.9)',
                                }} />
                                {/* Sliding dot */}
                                <div
                                  className="animate-swipe-dot-slide"
                                  style={{
                                    position: 'absolute',
                                    top: '50%',
                                    left: 12,
                                    width: 12,
                                    height: 12,
                                    borderRadius: '50%',
                                    background: 'white',
                                    transform: 'translateY(-50%)',
                                  }}
                                />
                              </div>
                            </div>
                          )}
                          {isActive && !isDragging && (
                            <div className="absolute inset-0 bg-black/0 hover:bg-black/20 transition-all duration-300 flex items-center justify-center group">
                              <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white/90 rounded-full p-4">
                                <svg className="w-8 h-8 text-[var(--color-accent)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                                </svg>
                              </div>
                            </div>
                          )}
                        </div>
                        <div className="text-center">
                          <div className="flex items-center justify-center gap-2 text-[var(--color-text-secondary)] text-base">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
                            </svg>
                            <span className="uppercase tracking-wider font-bold">
                              {filters.find(f => f.id === project.category)?.label || 'Projekt'}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            ) : (
              <div className="text-center py-24">
                <p className="text-2xl text-[var(--color-text-secondary)] font-light">
                  Nema dostupnih projekata u ovoj kategoriji.
                </p>
              </div>
            )}
          </div>
        ) : (
          /* Grid Layout for Specific Categories */
          <div
            className={`transition-opacity duration-300 ${
              isChanging ? 'opacity-0' : 'opacity-100'
            }`}
          >
            {filteredProjects.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProjects.map((project, index) => (
                  <div
                    key={project.id}
                    className="group cursor-pointer bg-white p-4 rounded-sm shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
                    onClick={() => openLightbox(index)}
                  >
                    <div className="aspect-[4/3] overflow-hidden rounded-sm bg-[var(--color-surface)] mb-4 relative">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        loading="lazy"
                      />
                      {/* Hover overlay */}
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300 flex items-center justify-center">
                        <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white/90 rounded-full p-3">
                          <svg className="w-6 h-6 text-[var(--color-accent)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-24">
                <div className="text-6xl mb-6 text-[var(--color-accent)]/20">🔍</div>
                <p className="text-2xl text-[var(--color-text-secondary)] font-light">
                  Nema dostupnih projekata u ovoj kategoriji.
                </p>
              </div>
            )}
          </div>
        )}

        {/* Navigation Controls & Counter - Only for "Sve" mode */}
        {activeFilter === 'sve' && filteredProjects.length > 1 && (
          <div className="flex items-center justify-center gap-8 lg:mt-16 md:mt-12">
            {/* Mobile-only prev arrow */}
            <button
              onClick={prevCard}
              className="lg:hidden w-14 h-14 rounded-full bg-white border-2 border-[var(--color-text-secondary)]/20 hover:border-[var(--color-accent)] hover:bg-[var(--color-accent)] hover:text-white transition-all flex items-center justify-center group shadow-lg hover:scale-110 hover:shadow-xl"
              aria-label="Prethodni projekat"
            >
              <svg className="w-6 h-6 transition-transform group-hover:-translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <div className="flex items-center gap-3 px-6 py-3 bg-white rounded-full shadow-lg border-2 border-[var(--color-text-secondary)]/10" aria-live="polite" aria-atomic="true">
              <span className="text-2xl font-bold text-[var(--color-accent)]">{currentCardIndex + 1}</span>
              <span className="text-[var(--color-text-secondary)]">/</span>
              <span className="text-lg text-[var(--color-text-secondary)]">{filteredProjects.length}</span>
            </div>

            {/* Mobile-only next arrow */}
            <button
              onClick={nextCard}
              className="lg:hidden w-14 h-14 rounded-full bg-white border-2 border-[var(--color-text-secondary)]/20 hover:border-[var(--color-accent)] hover:bg-[var(--color-accent)] hover:text-white transition-all flex items-center justify-center group shadow-lg hover:scale-110 hover:shadow-xl"
              aria-label="Sledeći projekat"
            >
              <svg className="w-6 h-6 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        )}
      </div>

      {/* Fullscreen Lightbox Modal */}
      {lightboxOpen && (
        <div
          className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-sm flex items-center justify-center animate-fade-in"
          onClick={closeLightbox}
        >
          {/* Close button */}
          <button
            onClick={closeLightbox}
            className="absolute top-6 right-6 w-14 h-14 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md flex items-center justify-center transition-all z-50 group hover:scale-110 hover:shadow-xl"
            aria-label="Zatvori lightbox"
          >
            <svg className="w-8 h-8 text-white group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Image counter */}
          <div className="absolute top-6 left-1/2 -translate-x-1/2 px-6 py-3 bg-white/10 backdrop-blur-md rounded-full z-50">
            <span className="text-white font-bold text-lg">
              {lightboxImageIndex + 1} / {filteredProjects.length}
            </span>
          </div>

          {/* Previous button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              prevLightboxImage();
            }}
            className="absolute left-6 top-1/2 -translate-y-1/2 w-16 h-16 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md flex items-center justify-center transition-all z-50 group hover:scale-110 hover:shadow-2xl"
            aria-label="Prethodna slika"
          >
            <svg className="w-8 h-8 text-white group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Next button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              nextLightboxImage();
            }}
            className="absolute right-6 top-1/2 -translate-y-1/2 w-16 h-16 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md flex items-center justify-center transition-all z-50 group hover:scale-110 hover:shadow-2xl"
            aria-label="Sledeća slika"
          >
            <svg className="w-8 h-8 text-white group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Image container */}
          <div
            {...lightboxHandlers}
            className="max-w-7xl max-h-[90vh] mx-auto px-4 relative"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={filteredProjects[lightboxImageIndex].image}
              alt={filteredProjects[lightboxImageIndex].title}
              className="max-w-full max-h-[90vh] w-auto h-auto object-contain rounded-sm shadow-2xl animate-scale-in"
            />
            {/* Category label overlay - only show in "Sve" mode */}
            {activeFilter === 'sve' && (
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-8 rounded-b-sm">
                <p className="text-white text-2xl font-bold uppercase tracking-wide">
                  {filters.find(f => f.id === filteredProjects[lightboxImageIndex].category)?.label || 'Projekt'}
                </p>
              </div>
            )}
          </div>

        </div>
      )}
    </section>
  );
}

export default Gallery;
