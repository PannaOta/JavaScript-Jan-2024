// - Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль
let arr;
arr = [
    123,25,-16, 100, `Ivan`, true, `user`, {id:1, name:`Petro`, age:25}, {id:2, name:`Zahar`, age:35}, 2.25
];
console.log(arr[0])
console.log(arr[1])
console.log(arr[2])
console.log(arr[3])
console.log(arr[4])
console.log(arr[5])
console.log(arr[6])
console.log(arr[7])
console.log(arr[8])
console.log(arr[9])
// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.
let book1 = {title:`Dogs`,pageCount: 100, genre: `scientific`}
let book2 = {title:`Cats`,pageCount:200, genre: `tales`}
let book3 = {title:`Flowers`,pageCount:300, genre: `novel`}
console.log(book1.title)
console.log(book2.pageCount)
console.log(book3)
// Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors. Поле "автори" - являється  масивом. Кожен автор має поля name та age.
let novel1 ={title:`Dogs`,pageCount: 350, genre: `scientific`, authors: [`Petrov`, 40]};
let novel2 ={title:`Cats`,pageCount: 450, genre: `fantastic`, authors: [`Zaicev`, 45]};
let novel3 ={title:`Dogs`,pageCount: 550, genre: `legend`, authors: [`Sereda`, 60]};
console.log(novel1.authors)
// Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password. Вивести в консоль пароль кожного користувача
let users = [
    {name: 'Ivan', username: 'Pirat', password: 'FF33'},
    {name: 'Vasyl', username: 'Vasya', password: '22FF00'},
    {name: 'Ivanka', username: 'Sonce', password: 777733},
    {name: 'Danylo', username: 'Dan', password: 9999993},
    {name: 'Andrii', username: 'Androed', password: 'FFFWWWWwwWWW'},
    {name: 'Lesya', username: 'Luna123', password: 9090909090},
    {name: 'Stepan', username: 'Stepa', password: 'SSS00999'},
    {name: 'Oksana', username: 'Ksusha', password: 565633},
    {name: 'Nataliya', username: 'Natka', password: 09988777},
    {name: 'Pavlo', username: 'Pasha', password: 65439}
];

console.log(users[0].password)
console.log(users[1].password)
console.log(users[2].password)
console.log(users[3].password)
console.log(users[4].password)
console.log(users[5].password)
console.log(users[6].password)
console.log(users[7].password)
console.log(users[8].password)
console.log(users[9].password)
// Логічні розгалуження:
//     - Є змінна х, якій ви надаєте довільне числове значення.
//     Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3
let x = 1;
if (x!==0){
    console.log('Вірно')
} else {
    console.log('Невірно')
}
let a = 0;
if (a!==0){
    console.log('Вірно')
} else {
    console.log('Невірно')
}
let x1 = -3;
if (x1!==0){
    console.log('Вірно')
} else {
    console.log('Невірно')
}
// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).

let time = 1;
if (time<=15&&time>0) {
    console.log('перша четверть')
} else if (time<=30&&time>=16){
    console.log('друга четверть')
} else if (time<=45&&time>=31){
    console.log('третя четверть')
} else if (time<=59&&time>=46){
    console.log('четверта четверть')
}
// У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).
let day = 3;
if (day<=10&&day>=1) {
    console.log('перша декада')
} else if (day<=20&&day>=11){
    console.log('друга декада')
} else if (day<=31&&day>=21) {
    console.log('третя декада')
}
// Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).
let y = 7;
switch (y) {
    case y=1:
        console.log('Monday');
        break;
    case y=2:
        console.log('Tuesday');
        break;
    case y=3:
        console.log('Wednesday');
        break;
    case y=4:
        console.log('Thursday');
        break;
    case y=5:
        console.log('Friday');
        break;
    case y=6:
        console.log('Saturday');
        break;
    case y=7:
        console.log('Sunday');
        break;
}
// - Користувач вводить або має два числа.
//     Потрібно знайти та вивести максимальне число з тих двох .
//     Також потрібно врахувати коли введені рівні числа.
let f = 15;
let z= 10;
if (f<z) {
    console.log('max', z)
}
else if(f===z) {
    console.log('числа рівні')
} else if (f>z) {
    console.log('max',f)
}
// - з файлу arrays.js (лежить в папці 2023 plan ) взяти масив coursesAndDurationArray. За допомоги іф перевірити кожен його елемент на тривалість навчання. У випадку якщо тривалість довша за 5 місяців вивести в консоль "Супер"
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
let monthDuration = 5;
if (monthDuration>5)
{
    console.log('Super')
}
let monthDuration1 = 6;
if (monthDuration1>5)
{
    console.log('Super')
}
let monthDuration2 = 4;
if (monthDuration2>5)
{
    console.log('Super')
}
let monthDuration3 = 7;
if (monthDuration3>5)
{
    console.log('Super')
}





