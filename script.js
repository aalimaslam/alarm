const $ = (s) => document.querySelector(s);
const time = $("#time");
const audio = $("#alarmSound");
function setAnAlarm(e) {
  e.preventDefault();

  if (!time.value) {
    alert("Time has no Value!");
    return;
  }
  localStorage.setItem("fireAnAlarm", time.value);
}

setInterval(() => {
  const timeToFire = localStorage.getItem("fireAnAlarm");
  const minutes =
    new Date().getMinutes() < 10
      ? "0" + new Date().getMinutes()
      : new Date().getMinutes();
  const currentTime = `${new Date().getHours()}:${minutes}`;

  if (currentTime == timeToFire) {
    alert("Alarm Has Been Raised");
    audio.play();
} else {
    audio.pause();
    return;
  }
}, 2000);

const alarmView = $("#alarm")

function deleteAnAlarm(){
    alert("Alarm Deleted");
    localStorage.removeItem("fireAnAlarm");
    alarmView.innerText = "";
}
function viewAlarm(){
    const alarm = localStorage.getItem("fireAnAlarm");
    if(!alarm){
        alert("There is no Alarm!");
        alarmView.innerText = "";
        return
    }
    alarmView.innerText = alarm;
}
// var end, start;

// start = new Date();
// for (var i = 0; i < 1000; i++) {
//   Math.sqrt(i);
// }
// end = new Date();

// console.log('Operation took ' + (end.getTime() - start.getTime()) + ' msec');
