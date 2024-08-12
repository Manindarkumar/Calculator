let display = document.getElementById("inputBox");
let buttons = document.querySelectorAll("button");


let buttanArray = Array.from(buttons);
let string = ' ';
buttanArray.forEach(btn => {
    btn.addEventListener("click", (e) => {

        if (e.target.innerHTML == 'Del') {
            string = string.substring(0, string.length - 1);
            display.value = string;

        }
        else if (e.target.innerHTML == 'AC') {
            string = '';
            display.value = string;

        }
        else if (e.target.innerHTML == '=') {
            string = eval(string);
            display.value = string;

        }

        else {
            string += e.target.innerHTML;
            display.value = string;
        }

    });
})
