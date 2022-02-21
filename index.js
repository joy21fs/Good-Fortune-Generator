const num = Math.floor(Math.random() * 6) + 1;

function refresh() {
  setTimeout(function () {
    document.querySelector(".shuffle-btn").click();
  }, 10);
}

document.addEventListener("load", refresh);

document.querySelector(".shuffle-btn").addEventListener("click", function () {
  document.querySelector("main").classList.add("shuffle");

  setTimeout(function () {
    document.querySelector("main").classList.remove("shuffle");
  }, 1000);
});

const scrolls = document.querySelectorAll(".scroll");

scrolls.forEach((scroll) => {
  const notPicked = () => {
    scroll.setAttribute("src", "images/scrolls/scroll_" + scroll.id + ".png");
  };

  scroll.addEventListener("mouseover", function () {
    this.setAttribute(
      "src",
      "images/scrolls/picked/scroll" + this.id + "_picked.png"
    );
  });

  scroll.addEventListener("mouseout", notPicked);

let isClicked = false;

  scroll.addEventListener("click", function () {
    isClicked = !isClicked;

    if(isClicked ===true){
      this.setAttribute(
        "src",
        "images/scrolls/picked/scroll" + this.id + "_picked.png"
      );
    } else {
      scroll.setAttribute("src", "images/scrolls/scroll_" + scroll.id + ".png");

    }

      this.removeEventListener("mouseout", notPicked);

    document.querySelector(".show-poem").classList.toggle("show");
  });
});

document.querySelector(".show-poem").addEventListener("click", function () {
  document.querySelector(".poem").classList.add("show");
  document
    .querySelector(".poem")
    .setAttribute("src", "images/poems/fortune-poem-" + num + ".jpg");
  setTimeout(function () {
    document.querySelector(".reset").classList.add("show");
  }, 1500);
});

document.querySelector(".reset").addEventListener("click", function () {
  window.location.reload();
});
