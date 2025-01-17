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
let morningList = document.getElementById("morning-list");
fetch(`https://www.myjsons.com/v/b7d03829`)
  .then((response) => response.json())
  .then((data) => {
    console.log(data["أذكار الصباح"].length);
    let morningData = "";
    for (let i = 0; i < data["أذكار الصباح"].length; i++) {
      morningData += `
      <div>
        <p>${data["أذكار الصباح"][i]["content"]}<span>(${data["أذكار الصباح"][i]["count"]})</span></p>
      </div>`;
    }
    morningList.innerHTML = morningData;
  });
let eveningList = document.getElementById("evening-list");
fetch(`https://www.myjsons.com/v/b7d03829`)
  .then((response) => response.json())
  .then((data) => {
    console.log(data["أذكار المساء"].length);
    let eveningData = "";
    for (let i = 0; i < data["أذكار المساء"].length; i++) {
      eveningData += `
        <div>
          <p>${data["أذكار المساء"][i]["content"]}<span>(${data["أذكار المساء"][i]["count"]})</span></p>
        </div>`;
    }
    eveningList.innerHTML = eveningData;
  });
