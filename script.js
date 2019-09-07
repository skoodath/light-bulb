const swBoard = document.querySelector('#switchboard');
const onOff = document.querySelector('#onOff');
const bulb = document.querySelector('#lightbulb');
const Offdot = document.querySelector('#offSwitch');
const Ondot = document.querySelector('#onSwitch');


const opLight = () => {
    if (bulb.className === "c-lightbulbOff") {
        bulb.classList.remove("c-lightbulbOff");
        bulb.classList.add("c-lightbulbOn");
        Ondot.classList.add("green");
        Offdot.classList.remove("red");
    } else if (bulb.className === "c-lightbulbOn") {
        bulb.classList.remove("c-lightbulbOn");
        bulb.classList.add("c-lightbulbOff");
        Offdot.classList.add("red");
        Ondot.classList.remove("green");
    }
};

onOff.addEventListener("click", opLight);