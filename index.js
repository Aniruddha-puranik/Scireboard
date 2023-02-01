let count_guest = 0
let count_home = 0

function countUpdate_01() {
    let countUp = document.getElementById("home-count-el")
    count_home += 1
    countUp.innerText = count_home
}

function countUpdate_02() {
    let countUp = document.getElementById("home-count-el")
    count_home += 2
    countUp.innerText = count_home
}

function countUpdate_03() {
    let countUp = document.getElementById("home-count-el")
    count_home += 3
    countUp.innerText = count_home
}

function countUpdate_1() {
    let countUp = document.getElementById("guest-count-el")
    count_guest += 1
    countUp.innerText = count_guest
}

function countUpdate_2() {
    let countUp = document.getElementById("guest-count-el")
    count_guest += 2
    countUp.innerText = count_guest
}

function countUpdate_3() {
    let countUp = document.getElementById("guest-count-el")
    count_guest += 3
    countUp.innerText = count_guest
}

function reset() {
    count_guest = 0
    count_home = 0
    let countUp_ = document.getElementById("guest-count-el")
    let countUp = document.getElementById("home-count-el")
    countUp_.innerText = count_guest
    countUp.innerText = count_home
}