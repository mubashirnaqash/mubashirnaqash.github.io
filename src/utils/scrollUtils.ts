export const scrollToSection = (sectionId: string) => {
  const element = document.getElementById(sectionId);
  if (element) {
    const navHeight = 64; // Height of your navigation bar
    const offsetTop = element.offsetTop - navHeight;
    window.scrollTo({
      top: offsetTop,
      behavior: 'auto' // Use 'auto' instead of 'instant' for immediate scrolling
    });
  }
};
