/* TITLE INFINITE LOOP */
document.querySelectorAll('.title').forEach(function (e, i) {
  let row_width = e.getBoundingClientRect().width;
  let row_item_width = e.children[0].getBoundingClientRect().width;
  let offset = ((2 * row_item_width) / row_width) * 100 * -1;
  let duration = 100 * (i + 1);

  gsap.set(e, {
    xPercent: 0
  });

  gsap.to(e, {
    duration: duration,
    ease: "none",
    xPercent: offset,
    repeat: -1
  });
});
