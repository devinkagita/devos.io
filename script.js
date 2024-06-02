document.addEventListener("DOMContentLoaded", function () {
  const onButton = document.getElementById("onButton");
  const offButton = document.getElementById("offButton");
  const body = document.body;

  const head = document.getElementById("head");
  const close = document.getElementById("close");

  const waktu = document.getElementById("waktu");

  const cuacaImage = document.getElementById("cuacaImage");
  const cuacaText = document.getElementById("cuacaText");

  const kalkulatorImage = document.getElementById("kalkulatorImage");
  const kalkulatorText = document.getElementById("kalkulatorText");

  const cameraImage = document.getElementById("cameraImage");
  const cameraText = document.getElementById("cameraText");
  const video = document.getElementById("cameraPreview");
  const photoCanvas = document.getElementById("photoCanvas");

  const notepadImage = document.getElementById("notepadImage");
  const notepadText = document.getElementById("notepadText");

  const calendarImage = document.getElementById("calendarImage");
  const calendarText = document.getElementById("calendarText");

  body.style.backgroundImage = "url('bg.png')";
  body.style.backgroundSize = "cover";
  head.style.display = "inline-block";

    // waktu dan tanggal
    var tw = new Date();
    if (tw.getTimezoneOffset() == 0) a = tw.getTime() + 7 * 60 * 60 * 1000;
    else a = tw.getTime();
    tw.setTime(a);
    var tahun = tw.getFullYear();
    var hari = tw.getDay();
    var bulan = tw.getMonth();
    var tanggal = tw.getDate();
    var hariarray = new Array("Minggu,", "Senin,", "Selasa,", "Rabu,", "Kamis,", "Jum'at,", "Sabtu,");
    var bulanarray = new Array("Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember");
    document.getElementById("tanggal").innerHTML = hariarray[hari] + " " + tanggal + " " + bulanarray[bulan] + " " + tahun;

    var time = new Date();
    document.getElementById("waktu").innerHTML = time.toLocaleTimeString();

    // kamera
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
      navigator.mediaDevices
        .getUserMedia({ video: true })
        .then(function (videoStream) {
          video.srcObject = videoStream;
          stream = videoStream;
        })
        .catch(function (error) {
          console.error("Error accessing the camera: ", error);
        });
    } else {
      console.error("getUserMedia is not supported");
    }

  document.getElementById("offButton").addEventListener("click", function () {
    var container = document.getElementById('container');
    var on = document.getElementById('onButton')
      if(container.style.display === "block") {
        container.style.display = 'none';
        on.style.display = 'block';
      } else {
        container.style.display = 'block';
      }
  })

  // offButton.addEventListener("click", function () {
  //     window.location.href = "power.html";
  // });

  // Kalkulator
// Kalkulator
const calcButton = document.getElementById("kalkulatorImage");
const calculator = document.getElementById("calculator");
const closeCalc = document.getElementById("close-calc"); // Assuming you have a close button for the calculator

calcButton.addEventListener("click", () => {
    calculator.style.display = "table";
    closeCalc.style.display = "block";
});
closeCalc.addEventListener("click", () => {
    calculator.style.display = "none";
    closeCalc.style.display = "none";
});

function clearScreen() {
    document.getElementById("result").value = "";
}

function display(value) {
    document.getElementById("result").value += value;
}

function calculate() {
    var p = document.getElementById("result").value;
    var q = eval(p);
    document.getElementById("result").value = q;
}

const numberButtons = document.querySelectorAll(".number-button");

numberButtons.forEach(button => {
    button.addEventListener("click", () => {
        display(button.textContent);
    });
});

  // Kalender
  const calendarButton = document.getElementById("calendarImage");
  const calendar = document.getElementById("idx-calendar");
  const closeCalendar = document.getElementById("close-calnd"); // assuming you have a close button for the calendar

  calendarButton.addEventListener("click", () => {
    calendar.style.display = "block";
    closeCalendar.style.display = "block";
  });
  closeCalendar.addEventListener("click", () => {
    calendar.style.display = "none";
    closeCalendar.style.display = "none";
  });

  function displayCalendar(month, year) {
    var monthNow = new Date().getMonth();
    var yearNow = new Date().getFullYear();
    var nextMonth = month + 1;
    var prevMonth = month - 1;
    var day = 0;

    if (month == monthNow && year == yearNow) {
      var day = new Date().getDate();
    }

    var htmlContent = "";
    var FebNumberOfDays = "";
    var counter = 1;
    var Nameday = 1;

    if (month == 1) {
      if ((year % 100 != 0 && year % 4 == 0) || year % 400 == 0) {
        FebNumberOfDays = 29;
      } else {
        FebNumberOfDays = 28;
      }
    }

    var monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    var monthNum = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"];
    var dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thrusday", "Friday", "Saturday"];
    var dayPerMonth = ["31", "" + FebNumberOfDays + "", "31", "30", "31", "30", "31", "31", "30", "31", "30", "31"];
    var nextDate = new Date(nextMonth + " 1 ," + year);
    var weekdays = nextDate.getDay();
    var weekdays2 = weekdays;
    var numOfDays = dayPerMonth[month];

    while (weekdays > 0) {
      htmlContent += "<li style='padding:1 0 0;'></li>";
      weekdays--;
    }

    while (counter <= numOfDays) {
      if (weekdays2 > 6) {
        weekdays2 = 0;
        htmlContent += "</ul><ul>";
      }
      if (counter == day) {
        htmlContent += "<li class='dayNow'>" + counter + "</li>";
        Nameday = counter;
      } else {
        htmlContent += "<li>" + counter + "</li>";
      }
      weekdays2++;
      counter++;
    }

    document.getElementById("monthNow").innerHTML = monthNames[month] + " " + year;
    document.getElementById("daysNum").innerHTML = "<ul id=" + monthNum[month] + " class=" + year + ">" + htmlContent + "</ul>";
  }

  (function () {
    var dateNow = new Date();
    var month = dateNow.getMonth();
    var year = dateNow.getFullYear();
    displayCalendar(month, year);
  })(window);

  document.getElementById("nextMonth").onclick = function () {
    var idmonth = document.getElementById("daysNum");
    var month = idmonth.getElementsByTagName("ul")[0].id;
    var nextYear = idmonth.getElementsByTagName("ul")[0].className;
    var nextMonth = Number(month);
    if (nextMonth == 12) {
      nextMonth = 0;
      nextYear = Number(nextYear) + 1;
    }
    displayCalendar(nextMonth, nextYear);
  };

  document.getElementById("prevMonth").onclick = function () {
    var idmonth = document.getElementById("daysNum");
    var month = idmonth.getElementsByTagName("ul")[0].id;
    var prevYear = idmonth.getElementsByTagName("ul")[0].className;
    var prevMonth = Number(month) - 2;
    if (prevMonth < 0) {
      prevMonth = 11;
      prevYear = Number(prevYear) - 1;
    }
    displayCalendar(prevMonth, prevYear);
  };

  // camera
  const cameraButton = document.getElementById("cameraImage");
  const cameraContainer = document.getElementById("cameraContainer");
  const closeCamera = document.getElementById("close-cam");

  cameraButton.addEventListener("click", () => {
    cameraContainer.style.display = "block";
    closeCamera.style.display = "block";
  });
  closeCamera.addEventListener("click", () => {
    cameraContainer.style.display = "none";
    closeCamera.style.display = "none";
  });

  let stream,
    mediaRecorder,
    recordedChunks = [];
  let isRecording = false;

  document.addEventListener("DOMContentLoaded", function () {
    const video = document.getElementById("cameraPreview");
    const photoCanvas = document.getElementById("photoCanvas");

    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
      navigator.mediaDevices
        .getUserMedia({ video: true })
        .then(function (videoStream) {
          video.srcObject = videoStream;
          stream = videoStream;
        })
        .catch(function (error) {
          console.error("Error accessing the camera: ", error);
        });
    } else {
      console.error("getUserMedia is not supported");
    }
  });
});

// function display(value) {
//   document.getElementById("result").value += value;
// }

// function calculate() {
//   var p = document.getElementById("result").value;
//   var q = eval(p);
//   document.getElementById("result").value = q;
// }

function capturePhoto() {
  const video = document.getElementById("cameraPreview");
  const photoCanvas = document.getElementById("photoCanvas");
  const context = photoCanvas.getContext("2d");

  photoCanvas.width = video.videoWidth;
  photoCanvas.height = video.videoHeight;
  context.drawImage(video, 0, 0, photoCanvas.width, photoCanvas.height);

  photoCanvas.style.display = "block";
  video.style.display = "none";
  isRecording = false;
}

function saveMedia() {
  const canvas = document.getElementById("photoCanvas");
  const video = document.getElementById("cameraPreview");

  if (canvas.style.display === "block") {
    const photoURL = canvas.toDataURL("image/png");
    const link = document.createElement("a");
    link.href = photoURL;
    link.download = "captured_photo.png";
    link.click();
  } else {
    const videoURL = video.src;
    const link = document.createElement("a");
    link.href = videoURL;
    link.download = "recorded_video.webm";
    link.click();
  }
}

function backToCamera() {
  const video = document.getElementById("cameraPreview");
  const photoCanvas = document.getElementById("photoCanvas");

  video.style.display = "block";
  photoCanvas.style.display = "none";
}

function clearScreen() {
  document.getElementById("result").value = "";
}

// notepad
const notepadButton = document.getElementById("notepadImage");
const notepad = document.getElementById("notepad");
const closeNotepad = document.getElementById("close-note"); // assuming you have a close button for the notepad

  notepadButton.addEventListener("click", () => {
    notepad.style.display = "block";
    closeNotepad.style.display = "block";
  });
  closeNotepad.addEventListener("click", () => {
    notepad.style.display = "none";
    closeNotepad.style.display = "none";
  });
function saveText() {
  var textToSave = document.getElementById("editor").value;
  var blob = new Blob([textToSave], { type: "text/plain;charset=utf-8" });
  saveAs(blob, "note.txt");
}

//battery
document.addEventListener('DOMContentLoaded', function () {
  if ('getBattery' in navigator) {
      navigator.getBattery().then(function (battery) {
          updateBatteryStatus(battery);

          battery.addEventListener('levelchange', function () {
              updateBatteryStatus(battery);
          });

          battery.addEventListener('chargingchange', function () {
              updateBatteryStatus(battery);
          });
      });
  } else {
      document.getElementById('battery-status').innerHTML = 'Battery Status API is not supported in this browser.';
  }
});
function updateBatteryStatus(battery) {
  const level = battery.level * 100;
  const charging = battery.charging;
  const chargingIcon = document.getElementById('charging-icon');
  chargingIcon.innerHTML = getChargingIcon(charging);
  
  document.getElementById('battery-percentage').textContent = Math.round(level);
}
function getChargingIcon(charging) {
  return charging ? '\u{26A1}' : ''; // Petir ikon
}

function showLoading() {
  const loadingContainer = document.getElementById("loading-container");
  loadingContainer.style.display = "flex";
  setTimeout(() => {
    window.location.href = "power.html";
  }, 1000); // Adjust the delay time as needed
}

offButton.addEventListener("click", function () {
  showLoading();
});

function goToCuaca() {
  document.getElementById("cuacaImage").style.display = "block";
      window.location.href = "cuaca.html";
}

function goToPower() {
      window.location.href = "power.html";
}

function goToCalc() {
  document.getElementById("kalkulatorImage").style.display = "block";
      window.location.href = "kalkulator.html";
}
function goToCamera() {
  document.getElementById("cameraImage").style.display = "block";
      window.location.href = "camera.html";
}
function goToCalendar() {
  document.getElementById("calendarImage").style.display = "block";
      window.location.href = "kalender.html";
}