// Задание 1

const toUpper = function (arr) {
   return arr.toUpperCase()
}

// Задание 2

const searchStart = function (strArr, str2) {
    let result = []
    strArr.forEach(arr => {
        if (arr.toLowerCase().startsWith(str2.toLowerCase()))
        result.push(arr)
    });

    return result
}

// Задание 3

const numHw7 = 32.58884;

Math.floor(numHw7)
Math.ceil(numHw7)
Math.round(numHw7)

// Задание 4

console.log(Math.max(52, 53, 49, 77, 21, 32))
console.log(Math.min(52, 53, 49, 77, 21, 32))

// Задание 5

let getRandom = function () {
    return Math.floor(Math.random() * 10);
}

console.log(getRandom());

// Задание 6

let getRandomArrNumbers = function (n) {
    let result = [];
    for (let i = 0; i < Math.floor(n / 2); i++) {
        result.push(getRandomInt(0, n))
    }

    return result;
}

// Задание 7

let getRandomDiap = function (a, b) {
    if (a > b) {
        return getRandomInt(b, a)
    } return getRandomInt(a, b)
}

// Задание 8

let currentDate = new Date();
console.log(currentDate);

// Задание 9

let newDate = new Date(currentDate.setDate(currentDate.getDate() + 73))

console.log(newDate);

// // Задание 10

let getData = function (data) {
    const days = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];
    const months = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь",
        "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];
    let hour = data.getHours(); 
    let minute = data.getMinutes();
    let second = data.getSeconds(); 

    if (minute < 10) { 
        minute = "0" + minute; 
    }
    if (second < 10) { 
        second = "0" + second;
    }        

    let fullDate = 
        "Дата: " + data.getDate() + 
        " " + months[data.getMonth()] + 
        " " + data.getFullYear() + ' - это ' + days[data.getDay()] + 
        " Время: " + hour + ':' + minute + ':' + second; 

    return fullDate
            
}

let rememberGame = function () {
    let arr = ['Яблоко', 'Груша', 'Дыня', 'Виноград', 'Персик', 'Апельсин', 'Мандарин'];
    arr = arr.sort(() => Math.random() - 0.5);
    
    alert(arr);

    let answer1 = String(prompt('Чему равнялся первый элемент массива?'));
    let answer2 = String(prompt('Чему равнялся последний элемент массива?'));

    if (arr.includes(answer1) && arr.includes(answer2)) {
        alert('Поздравляю, оба ответа верны!')
    } else if (arr.includes(answer1) || arr.includes(answer2)) {
        alert('Вы были близки к победе!')
    } else {
        alert('Вы ответили неверно')
    }


}