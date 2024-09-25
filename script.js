var crsr = document.querySelector("#cursor");
var blur = document.querySelector("#cursor-blur");

// mouse cursor follow
document.addEventListener("mousemove", function (dets) {
  crsr.style.left = dets.x + 30 + "px";
  crsr.style.top = dets.y + "px";
  blur.style.left = dets.x - 250 + "px";
  blur.style.top = dets.y - 250 + "px";
});

// navbar
var nav = document.querySelectorAll("#nav h4");
nav.forEach(function (elem) {
  elem.addEventListener("mouseenter", function () {
    crsr.style.scale = 3;
    crsr.style.border = "1px solid #fff";
    crsr.style.backgroundColor = "transparent";
  });
  elem.addEventListener("mouseleave", function () {
    crsr.style.scale = 1;
    crsr.style.border = "0px solid #95C11E";
    crsr.style.backgroundColor = "#95C11E";
  });
});

var quotes = document.querySelectorAll("p");
console.log(quotes);
quotes.forEach(function(elem) {
  elem.addEventListener("mouseenter", function () {
    crsr.style.scale = 3;
    crsr.style.border = "1px solid #fff";
    crsr.style.backgroundColor = "transparent";
  });
  elem.addEventListener("mouseleave", function () {
    crsr.style.scale = 1;
    crsr.style.border = "0px solid #95C11E";
    crsr.style.backgroundColor = "#95C11E";
  });
})

// quotes[2].addEventListener("mouseenter", function () {
//   crsr.style.scale = 3;
//   crsr.style.border = "1px solid #fff";
//   crsr.style.backgroundColor = "transparent";
// });
// quotes[2].addEventListener("mouseleave", function () {
//   crsr.style.scale = 1;
//   crsr.style.border = "0px solid #95C11E";
//   crsr.style.backgroundColor = "#95C11E";
// });

// change of navbar
gsap.to("#nav", {
  backgroundColor: "#000",
  duration: 0.5,
  height: "110px",
  scrollTrigger: {
    trigger: "#nav",
    scroller: "body",
    start: "top -10%",
    end: "top -11%",
    scrub: 1,
  },
});

//change of main background
gsap.to("#main", {
  backgroundColor: "#000",

  scrollTrigger: {
    trigger: "#main",
    scroller: "body",
    start: "top -25%",
    end: "top -70%",
    scrub: 2,
  },
});
