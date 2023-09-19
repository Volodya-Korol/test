import { EScrollableSections } from 'src/types';

export const scrollToSection = (targetId: EScrollableSections) => {
  const el = document.getElementById(targetId);

  if (el) {
    el.scrollIntoView({ behavior: 'smooth' });
  }
};
