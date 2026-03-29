
export const smoothScroll = (e, targetId) => {
  e.preventDefault();
  const targetElement = document.querySelector(targetId);
  
  if (targetElement) {
    const offset = 80; // আপনার নববারের হাইট অনুযায়ী
    const elementPosition = targetElement.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - offset;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth", // ব্রাউজার এখানে কিছুটা স্পিড কন্ট্রোল করে
    });
  }
};