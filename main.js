
const input = document.querySelector(".input")

const btns = document.querySelectorAll("button")
let html = ''

for (let i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function () {
        html = btns[i].textContent;
        if (html == "=") {
            format()
            input.value = eval(input.value)
        }

        else if (html == "C") {
            input.value = 0;
        }

        else if (html == "+") {
            format()
            input.value = eval(input.value) + "+";
        }

        else if (html == "-") {
            format()
            input.value = eval(input.value) + "-";
        }
        else if (html == "/") {
            format()
            input.value = eval(input.value) + "/";
        }

        else if (html == "*") {
            format()
            input.value = eval(input.value) + "*";
        }

        else {
            if (input.value == "0") {
                input.value = html
            }
            else {
                input.value += html
            }

        }
    })
}

function format() {
    let val = input.value;
    if (val[val.length - 1] == "+" || val[val.length - 1] == "-" || val[val.length - 1] == "*" || val[val.length - 1] == "/") {
        input.value = val.slice(0, val.length - 1)
    }

}
