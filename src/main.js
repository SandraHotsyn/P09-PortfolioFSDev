// ===== HEADER =====
import { functionHeader } from './js/header/header';
functionHeader();
// ===== END HEADER =====

// ==== About me accordion ====
import { initializeAccordionAboutMe } from './js/about-me-accordion/about-me-accordion';
initializeAccordionAboutMe();
// ===== END About me accordion =====

// ==== About me swiper ====
import './js/about-me-swiper/about-me-swiper';
// ===== END About me swiper =====

// ===== FAQ =====
import { initializeAccordion } from './js/faq/faq';
initializeAccordion();
// === END FAQ ===

// ===== Project=====\
import { swiper } from './js/projects/projects';
// =====END Project=====^

// ===== REVIEWS =====
import { reviewSection } from './js/reviews/reviews';
reviewSection();
// ===== END REVIEWS =====

// ===== FOOTER AND MODALS =====
import { initWorkTogetherSection } from './js/work-together/work-together';
initWorkTogetherSection();
import { initCursorFeature } from './js/features/cursor';
initCursorFeature();
// ===== FOOTER AND MODALS =====

import {trackScroll} from './js/scroll-up/scroll-up';
trackScroll();
