askName = () => {
  let person = prompt("İsminizi giriniz");
  document.getElementById("myName").innerHTML = person;
};

let x = setInterval(showTime, 1000);
function showTime() {
  let now = new Date();
  let hour = now.getHours();
  let minute = now.getMinutes();
  let second = now.getSeconds();
  let date = now.getDate();
  let day = now.getDay();
  let dayNames = [
    "Pazar",
    "Pazartesi",
    "Salı",
    "Çarşamba",
    "Perşembe",
    "Cuma",
    "Cumartesi",
  ];
  let dayName = dayNames[day];
  let month = now.getMonth();
  let monthNames = [
    "Ocak",
    "Şubat",
    "Mart",
    "Nisan",
    "Mayıs",
    "Haziran",
    "Temmuz",
    "Ağustos",
    "Eylül",
    "Ekim",
    "Kasım",
    "Aralık",
  ];
  let monthName = monthNames[month];
  let year = now.getFullYear();

  hour = hour < 10 ? `0${hour}` : hour;
  minute = minute < 10 ? `0${minute}` : minute;
  second = second < 10 ? `0${second}` : second;

  let time = `${date} ${monthName} ${year} ${dayName}<br/>  
  Saat: ${hour}:${minute}:${second} `;
  let clock = document.querySelector("#myClock");
  clock.innerHTML = time;
}
