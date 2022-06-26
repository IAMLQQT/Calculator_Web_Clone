const user_input = document.querySelector("#user_input");
let value = "";

press = (num) => {
    value += num;
    user_input.value = value;
}

equal = () => {
    user_input.value = eval(value);
    value = "";
}

erase = () => {
    value = "";
    user_input.value = value;
}