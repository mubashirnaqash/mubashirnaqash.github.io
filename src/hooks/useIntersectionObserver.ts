import { useEffect, useRef } from 'react';

interface UseIntersectionObserverProps {
  onSectionChange: (sectionId: string) => void;
  threshold?: number;
  rootMargin?: string;
}

export const useIntersectionObserver = ({
  onSectionChange,
  threshold = 0.5,
  rootMargin = '-100px 0px -100px 0px'
}: UseIntersectionObserverProps) => {
  const observerRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.target.id) {
            onSectionChange(entry.target.id);
          }
        });
      },
      {
        threshold,
        rootMargin
      }
    );

    const currentRef = observerRef.current;
    if (currentRef) {
      const sections = currentRef.querySelectorAll('section[id]');
      sections.forEach((section) => observer.observe(section));

      return () => {
        sections.forEach((section) => observer.unobserve(section));
      };
    }
  }, [onSectionChange, threshold, rootMargin]);

  return { observerRef };
};
