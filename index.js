const num = Math.floor(Math.random() * 6) + 1;

const scrolls = document.querySelectorAll(".scroll");

function refresh() {
  if (!window.location.hash) {
    window.location = window.location + "#loaded";
    window.location.reload();
  }
  // setTimeout(function () {
  //   document.querySelector(".shuffle-btn").click();
  // }, 10);
}

document.addEventListener("load", refresh);
window.addEventListener("resize", function () {
  window.location.reload();
});
window.addEventListener("blur", function () {
  window.location.reload();
});

////////shuffle functionality//////////////////

document.querySelector(".shuffle-btn").addEventListener("click", function () {
  document.querySelector("main").classList.add("shuffle");

  setTimeout(function () {
    document.querySelector("main").classList.remove("shuffle");
  }, 1000);
});

////////pick scroll functionality ////////////

scrolls.forEach((scroll) => {
  const picked = () => {
    scroll.setAttribute(
      "src",
      "images/scrolls/picked/scroll" + scroll.id + "_picked.png"
    );
  };

  const notPicked = () => {
    scroll.setAttribute("src", "images/scrolls/scroll_" + scroll.id + ".png");
  };

  scroll.addEventListener("mouseover", picked);

  scroll.addEventListener("mouseout", notPicked);

  let isClicked = false;

  scroll.addEventListener("click", function () {
    isClicked = !isClicked;

    isClicked === true ? picked() : notPicked();

    this.removeEventListener("mouseout", notPicked);

    document.querySelector(".show-poem").classList.toggle("show");
  });
});

//////// show poem functionality ////////////////////

document.querySelector(".show-poem").addEventListener("click", function () {
  document.querySelector(".poem").classList.add("show");
  document
    .querySelector(".poem")
    .setAttribute("src", "images/poems/fortune-poem-" + num + ".jpg");

  /////// restart functionality ////////////////////
  setTimeout(function () {
    document.querySelector(".reset").classList.add("show");
  }, 1500);
});

document.querySelector(".reset").addEventListener("click", function () {
  document.location.reload();
});


