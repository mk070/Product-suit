// Button Div Cloning
const elems = document.querySelectorAll(".ct");

elems.forEach((elem) => {
  const clone = elem.cloneNode(true);

  clone.classList.add("clone");
  clone.classList.remove("ct");

  elem.after(clone);
});

// SplitText

var btnSplitText = new SplitText(".shift-btn .ct, .shift-btn .clone", {
  type: "chars"
});

// Timeline

const buttons = document.querySelectorAll(".shift-btn");

buttons.forEach(function (item, index) {
  const tl = gsap
    .timeline({
      paused: true
    })
    .fromTo(
      item.querySelectorAll(".ct div"),
      {
        yPercent: 0,
        autoAlpha: 1
      },
      {
        yPercent: -200,
        stagger: 0.02,
        duration: 0.8,
        autoAlpha: 0,
        ease: "power1.inOut"
      }
    )
    .fromTo(
      item.querySelectorAll(".clone div"),
      {
        yPercent: 200,
        autoAlpha: 0
      },
      {
        yPercent: 0,
        stagger: 0.02,
        duration: 0.8,
        autoAlpha: 1,
        ease: "power1.inOut"
      },
      "<"
    );
  item.addEventListener("mouseenter", () => tl.play());
  item.addEventListener("mouseleave", () => tl.reverse());
});
