export function useScrollTo() {
  return (id, { duration = 1000,  easing = 'easeInOutCubic' } = {}) => {
    const el = document.getElementById(id)
    if (!el) return

    const easings = {
      easeInOutCubic: (t) =>
        t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2,
      easeOutQuint: (t) => 1 - Math.pow(1 - t, 5),
      easeInQuint: (t) => Math.pow(t, 5),
      linear: (t) => t,
    };

    const ease = easings[easing] || easings.easeInOutCubic
    const startY = window.scrollY
    const targetY = el.getBoundingClientRect().top + window.scrollY;
    const distance = targetY - startY
    const startTime = performance.now();

    const step = (currentTime) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1)
      window.scrollTo(0, startY + distance * ease(progress))
      if (progress < 1)  requestAnimationFrame(step)
    }

    requestAnimationFrame(step)

  }
}
