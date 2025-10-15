import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

const msInput = document.querySelector("input[name='delay']");
const fulfilled = document.querySelector("input[value='fulfilled']");
const rejected = document.querySelector("input[value='rejected']");
const form = document.querySelector(".form")

form.addEventListener("submit", handleClick);

function handleClick(event) {
    event.preventDefault();

    const delay = msInput.value;
    const isFulfilled = fulfilled.checked;
    const isRejected = rejected.checked;

    new Promise((resolve, reject) => {

        setTimeout(() => {
            if (isFulfilled) {
                resolve(delay)
            } else if (isRejected) {
                reject(delay)
            }

        }, delay)

        form.reset()

    })
        .then((data) => {
            iziToast.show({
                message: `✅ Fulfilled promise in ${data}ms`,
                backgroundColor: '#59A10D',
                messageColor: "#fff",
                position: "topRight",
            })
        })

        .catch((error) => {
            iziToast.show({
                message: `❌ Rejected promise in ${error}ms`,
                backgroundColor: '#EF4040',
                messageColor: "#fff",
                position: "topRight",
            })
        })

}



