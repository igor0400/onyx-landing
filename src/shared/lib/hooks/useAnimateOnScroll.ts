import { useEffect } from 'react';

export const useAnimateOnScroll = (itemId: string, activeClass: string) => {
  useEffect(() => {
    window.addEventListener('scroll', animOnScroll);

    setTimeout(() => animOnScroll(), 300);

    return () => window.removeEventListener('scroll', animOnScroll);
  }, []);

  function animOnScroll() {
    const animItem: HTMLElement | null = document.querySelector(itemId);

    if (animItem) {
      const animItemHeight = animItem.offsetHeight;
      const animItemOffset = offset(animItem).top;
      const animStart = 10;

      let animItemPoint = window.innerHeight - animItemHeight / animStart;
      if (animItemHeight > window.innerHeight) {
        animItemPoint = window.innerHeight - window.innerHeight / animStart;
      }

      if (
        pageYOffset > animItemOffset - animItemPoint &&
        pageYOffset < animItemOffset + animItemHeight
      ) {
        animItem.classList.add(activeClass);
      }
    }
  }

  function offset(el: HTMLElement) {
    const rect = el.getBoundingClientRect();
    const scrollLeft =
      window.pageXOffset || document.documentElement.scrollLeft;
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    return { top: rect.top + scrollTop, left: rect.left + scrollLeft };
  }
};
