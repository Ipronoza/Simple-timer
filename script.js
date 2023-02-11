let resetBtn = document.querySelector('.reset');
let stopBtn = document.querySelector('.stop');
let startBtn = document.querySelector('.start');

let minElem = document.querySelector('.min');
let secElem = document.querySelector('.sec');
let milsecElem = document.querySelector('.milsec');

let results = document.querySelector('.result');
let flag;

let n = 0;

let minute = 00,
    second = 00,
    millisecond = 00,
    interval;

startBtn.addEventListener('click', () => {
    flag = true;
    clearInterval(interval);
    interval = setInterval(startTimer, 10);
})

function startTimer() {
    millisecond++
    //milliseconds
    if (millisecond < 9) {
        milsecElem.innerHTML = '0' + millisecond;
    }
    if (millisecond > 9) {
        milsecElem.innerHTML = millisecond;
    }

    if (millisecond > 99) {
        second++
        secElem.innerHTML = '0' + second;
        millisecond = 0;
        milsecElem.innerHTML = '0' + millisecond;
    }

    //seconds
    if (second < 9) {
        secElem.innerHTML = '0' + second;
    }
    if (second > 9) {
        secElem.innerHTML = second;
    }

    if (second > 59) {
        minute++
        minElem.innerHTML = '0' + minute;
        second = 0;
        secElem.innerHTML = '0' + second;
    }

    //minutes
    if (minute < 9) {
        minElem.innerHTML = '0' + minute;
    }
    if (minute > 9) {
        minElem.innerHTML = minute;
    }

    if (minute >= 60) {
        stopTimer();
    }
}

stopBtn.addEventListener('click', stopTimer);
function stopTimer() {
    if (flag) {
        clearInterval(interval);
        n++
        if (n <= 5) {
            createP();
        }
        else {
            createP();
            let p = document.querySelector('p');
            p.remove();
        }

        flag = false;
    }
}
resetBtn.addEventListener('click', () => {
    clearInterval(interval);
    clearFields();
})

function clearFields() {
    minElem.innerHTML = '00';
    secElem.innerHTML = '00';
    milsecElem.innerHTML = '00';
    minute = 0;
    second = 0;
    millisecond = 0;
    let ps = document.querySelectorAll('p');
    for (let p of ps) {
        p.remove();
    }
    n = 0;
}

function createP() {
    let result = document.createElement('p');
    if (minute <= 9) {
        if (second <= 9) {
            if (millisecond <= 9) {
                result.innerHTML = `${n}. 0${minute}:0${second}:0${millisecond}`;
                results.append(result);
            }
            if (second <= 9) {
                if (millisecond >= 10) {
                    result.innerHTML = `${n}. 0${minute}:0${second}:${millisecond}`;
                    results.append(result);
                }
            }
        }
        if (second >= 10) {
            if (millisecond <= 9) {
                result.innerHTML = `${n}. 0${minute}:${second}:0${millisecond}`;
                results.append(result);
            }
            if (millisecond >= 10) {
                result.innerHTML = `${n}. 0${minute}:${second}:${millisecond}`;
                results.append(result);
            }
        }
    }
    else {
        result.innerHTML = `${n}. ${minute}:${second}:${millisecond}`;
        results.append(result);
    }
}


