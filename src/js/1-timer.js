import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";


const input = document.querySelector("#datetime-picker")
const startBtn = document.querySelector("[data-start]");
const days = document.querySelector("[data-days]");
const hourse = document.querySelector("[data-hours]");
const minutes = document.querySelector("[data-minutes]");
const seconds = document.querySelector("[data-seconds]")

let userSelectedDate = null
let timerId = null;


const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,

    onClose(selectedDates) {
        const selected = selectedDates[0];
        const now = Date.now();

        if (selected <= now) {
            startBtn.disabled = true
            iziToast.show({
                message: "Please choose a date in the future",
                backgroundColor: "#ef4040",
                messageColor: "#fff",
                position: "topRight"
            })

        } else {
            startBtn.disabled = false
            userSelectedDate = selected
        }
    },
}
flatpickr(input, options)

startBtn.addEventListener("click", onStartBtnClick);

function onStartBtnClick() {
    input.disabled = true;
    startBtn.disabled = true;

    timerId = setInterval(() => {
        const res = userSelectedDate - Date.now();

        if (res <= 0) {
            clearInterval(timerId);
            updateTimer({ days: 0, hours: 0, minutes: 0, seconds: 0 })
            input.disabled = false;
            startBtn.disabled = false;
            return
        }

        const time = convertMs(res);
        updateTimer(time)
    }, 1000)
}

function convertMs(ms) {
    // Number of milliseconds per unit of time
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    // Remaining days
    const days = Math.floor(ms / day);
    // Remaining hours
    const hours = Math.floor((ms % day) / hour);
    // Remaining minutes
    const minutes = Math.floor(((ms % day) % hour) / minute);
    // Remaining seconds
    const seconds = Math.floor((((ms % day) % hour) % minute) / second);

    return { days, hours, minutes, seconds };
}

function updateTimer({ days: d, hours: h, minutes: m, seconds: s }) {
    days.textContent = String(d).padStart(2, '0');
    hourse.textContent = String(h).padStart(2, '0');
    minutes.textContent = String(m).padStart(2, '0');
    seconds.textContent = String(s).padStart(2, "0")
}