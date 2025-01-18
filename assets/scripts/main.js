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
    let eveningData = "";
    for (let i = 0; i < data["أذكار المساء"].length; i++) {
      eveningData += `
        <div>
          <p>${data["أذكار المساء"][i]["content"]}<span>(${data["أذكار المساء"][i]["count"]})</span></p>
        </div>`;
    }
    eveningList.innerHTML = eveningData;
  });
let afterPrayerList = document.getElementById("after-prayer-list");
fetch(`https://www.myjsons.com/v/b7d03829`)
  .then((response) => response.json())
  .then((data) => {
    let afterPrayerData = "";
    for (let i = 0; i < data["أذكار بعد السلام من الصلاة المفروضة"].length; i++) {
      afterPrayerData += `
        <div>
          <p>${data["أذكار بعد السلام من الصلاة المفروضة"][i]["content"]}<span>(${data["أذكار بعد السلام من الصلاة المفروضة"][i]["count"]})</span></p>
        </div>`;
    }
    afterPrayerList.innerHTML = afterPrayerData;
  });
let rosariesList = document.getElementById("rosaries-list");
fetch(`https://www.myjsons.com/v/b7d03829`)
  .then((response) => response.json())
  .then((data) => {
    let rosariesData = "";
    for (let i = 0; i < data["تسابيح"].length; i++) {
      rosariesData += `
        <div>
          <p>${data["تسابيح"][i]["content"]}<span>(${data["تسابيح"][i]["count"]})</span></p>
        </div>`;
    }
    rosariesList.innerHTML = rosariesData;
  });
let sleepList = document.getElementById("sleep-list");
fetch(`https://www.myjsons.com/v/b7d03829`)
  .then((response) => response.json())
  .then((data) => {
    let sleepData = "";
    for (let i = 0; i < data["أذكار النوم"].length; i++) {
      sleepData += `
        <div>
          <p>${data["أذكار النوم"][i]["content"]}<span>(${data["أذكار النوم"][i]["count"]})</span></p>
        </div>`;
    }
    sleepList.innerHTML = sleepData;
  });
let wakeUpList = document.getElementById("wake-up-list");
fetch(`https://www.myjsons.com/v/b7d03829`)
  .then((response) => response.json())
  .then((data) => {
    let wakeUpData = "";
    for (let i = 0; i < data["أذكار الاستيقاظ"].length; i++) {
      wakeUpData += `
        <div>
          <p>${data["أذكار الاستيقاظ"][i]["content"]}<span>(${data["أذكار الاستيقاظ"][i]["count"]})</span></p>
        </div>`;
    }
    wakeUpList.innerHTML = wakeUpData;
  });
