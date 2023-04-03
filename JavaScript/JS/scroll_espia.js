const d = document;

export default function scrollSpsy() {
  const $sections = d.querySelectorAll("section[data-scroll-spy]");
  const cb = (entries) => {
    // console.log("entries", entries);
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        d.querySelector(`a[data-scroll-spy][href="#${id}"]`).classList.add(
          "active"
        );
      } else {
        d.querySelector(`a[data-scroll-spy][href="#${id}"]`).classList.remove(
          "active"
        );
      }
    });
  };
  const observer = new IntersectionObserver(cb, {
    // rootMargin:"-250px",
    threshold: [0.5, 0.75],
  });
  $sections.forEach((el) => observer.observe(el));
}
