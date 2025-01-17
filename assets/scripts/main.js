document.getElementById("toggel-menu").onclick = () => {
  document.getElementById("ul").classList.toggle("block");
};
document.getElementById("toggel-them").onclick = () => {
  if (document.body.classList.contains("them")) {
    document.body.classList.remove("them");
    document.getElementById("toggel-them").src = "assets/images/moon.webp";
  } else {
    document.body.classList.add("them");
    document.getElementById("toggel-them").src = "assets/images/sun.webp";
  }
};
