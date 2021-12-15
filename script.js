/*//DZ
function acc() {
   for (let key of account) {
      console.log(key);
   }
};
let bank = function () {
   let m = { sum: 0 };
   let depositOne = { deposit: 0 };
   return {
      credit: function () {
         money = parseInt(prompt("Взять кредит на суму:"));
         m.sum += money;
         account.push(m);
      },
      add: function () {
         money = parseInt(prompt("Пополнить карточку:"));
         m.sum += money;
      },
      subtract: function () {
         money = parseInt(prompt("Снять с карточки:"));
         m.sum -= money;
      },
      dep: function () {
         initial = parseInt(prompt("денги:"));
         interest = parseInt(prompt("проценти:")) / 100;
         years = parseInt(prompt("Год:"));
         d = Math.round(initial * (1 + interest * years));
         depositOne.deposit += d;
         account.push(depositOne);
      },
      result: function () {
         console.log(m.sum)
      }
   }
}();
let account = [""];
let exit;
let menu;
do {
   menu = parseInt(prompt("1-Создать аккаунт; 2-Посмотреть аккаунт;\n 3-Взять кредит; 4-Положить депозит;\n 5-Сумма на карточен; 6-Пополнить карточку;\n 7-Снять с карточки; 8-Удалить аккаунт;\n 9-Выйти"));
   switch (menu) {
      case 1: {
         name = prompt("Имя");
         age = parseInt(prompt("Возраст"));
         account[account.length] = { Name: name, Age: age };
         break;
      }
      case 2: {
         acc();
         break;
      }
      case 3: {
         bank.credit();
         break;
      }
      case 4: {
         bank.dep();
         break;
      }
      case 5: {
         bank.result();
         break;
      }
      case 6: {
         bank.add();
         break;
      }
      case 7: {
         bank.subtract();
         break;
      }
      case 8: {
         account.splice(0, 10);
         console.log(account);
         break;
      }
      case 9: {
         exit = true;
         console.log("ви вийшли")
         break;
      }
      default: {
         console.log("error")
         break;
      }
   }
} while (!exit);
*/

//ДЗ
/*
let pensionFund = (sumFund) => {
   if (car.price <= 12500) {
      sumFund = car.price * 0.03;
      car["Пенсійний фонд"] = sumFund;
   } else if (12500 >= car.price <= 22000) {
      sumFund = car.price * 0.04;
      car["Пенсійний фонд"] = sumFund;
   } else if (car.price >= 22000) {
      sumFund = car.price * 0.05
      car["Пенсійний фонд"] = sumFund;
   } else {
      console.log("error");
   }
}
let excise = (sumExcise) => {
   if (car.motor <= 3.0) {
      sumExcise = 50 * car.motor * (2021 - car.year);
      car["Акциз"] = sumExcise;
   } else if (car.motor >= 3.0) {
      sumExcise = 100 * car.motor * (2021 - car.year);
      car["Акциз"] = sumExcise;
   } else {
      console.log("error");
   }
}
let toll = (sumToll) => {
   sumToll = car.price * 0.1;
   car["Мито"] = sumToll;
}
let tax = (sumTax) => {
   sumTax = car.price + car["Акциз"] + car["Мито"];
   sumTax *= 0.2;
   car["ПДВ"] = sumTax;
}
let priceCar = (result) => {
   result = car["Акциз"] + car["Мито"] + car["ПДВ"] + car["Пенсійний фонд"];
   car["Сума розтаможки авто"] = result;
}
let priceTwo = (resultTwo) => {
   resultTwo = car.price + car["Сума розтаможки авто"];
   car["Ціна з розмитненням"] = resultTwo;
}
let listCar = () => {
   for (let key in car) {
      console.log(`${key}: ${car[key]}`);
   }
}
let car = {};
console.log("1 - добавить авто")
console.log("2 - посмотреть стоимость расстаможки")
console.log("3 - выйти")
let exit = false;
while (!exit) {
   let menu = parseInt(prompt("Enter: "))
   switch (menu) {
      case 1: {
         price = parseInt(prompt("цина автомобиля в євро:"));
         motor = parseFloat(prompt("Об'єм двигуна в см3:"));
         year = parseInt(prompt("год автомобиля"));
         car = { price: price, motor: motor, year: year };
         console.log(1);
         break;
      }
      case 2: {
         pensionFund();
         excise();
         toll();
         tax();
         priceCar();
         priceTwo();
         listCar();
         console.log(car);
         console.log(2);
         break;
      }
      case 3: {
         console.log(3);
         exit = true;
         break;
      }
   }
}
*/
//DZ
/*
let fun = () => {
   for (let i = 0; i < car.length; i++) {
      console.log(car[i]);
   }
}
let car = [];
console.log("1 - добавить новый авто");
console.log("2 - посмотреть список авто");
console.log("3 - измененить их показатели");
console.log("4 - выбрать для расчета одну машину");
console.log("5 - расчетать все машины");
console.log("6 - выход из меню");
let exit = false;
while (!exit) {
   let menu = parseInt(prompt("Enter: "));
   switch (menu) {
      case 1: {
         name = prompt("имя авто: ");
         speed = parseInt(prompt("скорость: "));
         car[car.length] = { Name: name, Speed: speed, Meter: 0 }
         console.log(1);
         break;
      }
      case 2: {
         fun();
         console.log(2);
         break;
      }
      case 3: {
         name = prompt("Введите имя авто, кого хотите изменить: ");
         for (item of car) {
            if (item.Name == name) {
               speed = parseInt(prompt("новый показатель швыдкости:"));
               item.Speed = speed;
            }
         }
         console.log(3);
         break;
      }
      case 4: {
         name = prompt("Введите имя авто для расчета пути торможения");
         for (item of car) {
            if (item.Name === name) {
               result = (item.Speed / 10) * 3;
               resultOne = (item.Speed / 10) * (item.Speed / 10);
               item.Meter += result + resultOne;
            }
         }
         console.log(4);
         break;
      }
      case 5: {
         for (item of car) {
            result = (item.Speed / 10) * 3;
            resultOne = (item.Speed / 10) * (item.Speed / 10);
            item.Meter += result + resultOne;
         }
         console.log(5);
         break;
      }
      case 6: {
         console.log("вы выйшли из меню");
         exit = true;
         break;
      }
   }
}
*/
// ===============ДЗ=============
/*
let dictionary = [{ Rus: "Привет", Eng: "Hello" }, { Rus: "Ручка", Eng: "Pen" }];
let translation = () => {
   let menu_1 = +prompt("Меню");
   if (menu_1 === 1) {
      let wordRus = prompt("с русского на английськый");
      for (let i = 0; i < dictionary.length; i++) {
         if (wordRus === dictionary[i].Rus) {
            console.log(dictionary[i].Eng);
         }
      }
   } else if (menu_1 === 2) {
      let wordEng = prompt("с английського на русское")
      for (let k = 0; k < dictionary.length; k++) {
         if (wordEng === dictionary[k].Eng) {
            console.log(dictionary[k].Rus)
         }
      }
   }
}
let display = () => {
   for (let key of dictionary) {
      console.log(`${key.Rus} - ${key.Eng}`);
   }
}
console.log("1 - добавить слова для перевода");
console.log("2 - Перевести слова");
console.log("1) - с руского на ангийськый")
console.log("2) - с ангийського на русское")
console.log("3 - удалить слова для перевода");
console.log("4 - посмотреть словарь");
console.log("5 - выйти");
let exit = false;
while (!exit) {
   let menu = +prompt("Головне меню");
   switch (menu) {
      case 1: {
         rus = prompt("добавить русское слово");
         eng = prompt("добавить английськое слово");
         dictionary[dictionary.length] = { Rus: rus, Eng: eng };
         break;
      }
      case 2: {
         translation();
         break;
      }
      case 3: {
         break;
      }
      case 4: {
         display();
         break;
      }
      case 5: {
         exit = true;
         console.log("вы вышли")
         break;
      }
   }
}
*/
//============== ДЗ ============\\
/*
function Car(model, motor, price, year) {
   let _model = model;
   let _motor = motor;
   let _price = price;
   let _year = year;
   this.dislpay = function () {
      console.log(`${_model}: Мотор: ${_motor}, Цена:${_price} $, Год:${_year}`);
   }
}
function CalculatorCar(sumFund, sumExcise = 0, sumToll = 0, sumTax = 0, result = 0, all = 0) {
   let _sumFund = sumFund;
   let _sumExcise = sumExcise;
   let _sumToll = sumToll;
   let _sumTax = sumTax;
   let _result = result;
   let _all = all;
   this.getPensionFund = function (cars) {
      if (cars._price <= 12500) {
         _sumFund = cars._price * 0.03;
         return `Пенсійний фонд: ${Math.round(_sumFund)}$`;
      } else if (12500 >= cars._price || cars._price <= 22000) {
         _sumFund = cars._price * 0.04;
         return `Пенсійний фонд: ${Math.round(_sumFund)}$`;
      } else if (cars._price >= 22000) {
         _sumFund = cars._price * 0.05
         return `Пенсійний фонд: ${Math.round(_sumFund)}$`;
      } else {
         return `error`;
      }
   };
   getExcise = (cars) => {
      if (cars._motor <= 3.0) {
         _sumExcise = 50 * cars._motor * (2021 - cars._year);
         return `Акциз: ${Math.round(_sumExcise)}$`;
      } else if (cars._motor >= 3.0) {
         _sumExcise = 100 * cars._motor * (2021 - cars._year);
         return `Акциз: ${Math.round(_sumExcise)}$`;
      } else {
         return `error`;
      }
   };
   getToll = (cars) => {
      _sumToll = cars._price * 0.1;
      return `Мито: ${Math.round(_sumToll)}$`;
   };
   getTax = (cars) => {
      _sumTax = cars._price + _sumExcise + _sumToll;
      _sumTax *= 0.2;
      return `ПДВ: ${Math.round(_sumTax)}$`;
   };
   getPriceCar = () => {
      _result = _sumExcise + _sumToll + _sumTax + _sumFund;
      return `Сума розтаможки авто: ${Math.round(_result)}$`;
   };
   getAll = (cars) => {
      s = getPensionFund(car)
      _all = cars._price + _result;
      return `Цена авто с розтаможкою: ${Math.round(_all)}$`;
   };
}
let cars = [];
let calculator = new CalculatorCar();
let nameModel;
console.log("1 - Добавить авто ");
console.log("2 - Посмотреть список авто");
console.log("3 - Посчитать расстаможку");
console.log("  1) - Выбор авто по модели");
console.log("4 - Посчитать расстаможку всех авто");
console.log("5 - Выйти");
let exit = false;
while (!exit) {
   let menu = +prompt("Enter");
   switch (menu) {
      case 1: {
         cars[cars.length] = new Car(prompt("модель автомобиля:"), parseFloat(prompt("Об'єм двигуна в см3:")), +prompt("цена автомобиля:"), +prompt("Год автомобиля:"));
         break;
      }
      case 2: {
         for (item of cars) {
            item.dislpay();
         }
         break;
      }
      case 3: {
         nameModel = prompt("ведите модель автомобиля:");
         for (arr of cars) {
            if (arr._model === nameModel) {
               console.log(calculator.getPensionFund(arr));
            }
         }
         break;
      }
      case 4: {
         for (key of cars) {
            console.log(calculator.getPensionFund(key));
         }
         break;
      }
      case 5: {
         exit = true;
         console.log("вы вышли")
         break;
      }
   }
}
*/
//============== ДЗ ============\\
/*
class MacBookPro {
   #price;
   constructor(inches = 'default', processor = 'M1Pro', memory = '16GB', storage = '1TB-SSD', price = 0) {
      this.inches = inches;
      this.processor = processor;
      this.memory = memory;
      this.storage = storage;
      this.#price = price;
   }
   getMacBookInfo() {
      return `Inches: ${this.inches},<br>Procesor: ${this.processor},<br>Memory: ${this.memory},<br>Storage: ${this.storage},<br>Цина: ${this.#price} $`;
   }
   getInches() {
      menu = +prompt('Диагональ екрана:\n1 - 14inch - 2000$\n2 - 16inch - 2500$');
      switch (menu) {
         case 1: {
            this.inches = '14-inch';
            this.#price = 2000;
            break;
         }
         case 2: {
            this.inches = '16-inch';
            this.#price = 2500;
            break;
         }
      }
   }
   setProcessor() {
      menu = +prompt('Процесор:\n1 - M1Max - +700$\n2 - стандартни характеристики');
      switch (menu) {
         case 1: {
            this.processor = 'M1Max';
            this.#price += 700;
            break;
         }
         case 2: {
            return this.processor;
         }
      }
   }
   setMemory() {
      menu = +prompt('Оперативна память:\n1 - 32GB - +200$\n2 - 64GB - +400$\n3 - стандартни характеристики');
      switch (menu) {
         case 1: {
            this.memory = '32GB';
            this.#price += 200;
            break;
         }
         case 2: {
            this.memory = '64GB';
            this.#price += 400;
            break;
         }
         case 3: {
            return this.memory;
         }
      }
   }
   setStorage() {
      menu = +prompt('Объем памяти:\n1 - 2TB-SSD - +400$\n2 - 4TB-SSD - +800$\n3 - 8TB-SSD - 1200$\n4 - стандартни характеристики');
      switch (menu) {
         case 1: {
            this.storage = '2TB-SSD';
            this.#price += 400;
            break;
         }
         case 2: {
            this.storage = '4TB-SSD';
            this.#price += 800;
            break;
         }
         case 3: {
            this.storage = '8TB-SSD';
            this.#price += 1200;
            break;
         }
         case 4: {
            return this.storage;
         }
      }
   }
}
let menu;
const myNewMacBookPro = new MacBookPro();
myNewMacBookPro.getInches();
myNewMacBookPro.setProcessor();
myNewMacBookPro.setMemory();
myNewMacBookPro.setStorage();
document.write(myNewMacBookPro.getMacBookInfo());
*/
//=======================DZ====================\\
/*
class Person {
   constructor(name, year, job) {
      this.name = name;
      this.year = year;
      this.job = job;
   }
   print() {
      console.log(`Имя: ${this.name}, Возраст: ${this.getFullYear()}, Робота: ${this.job}`);
   }
   getFullYear() {
      return new Date().getFullYear() - this.year;
   }
}
class Librarian extends Person {
   constructor(name, year, job) {
      super(name, year, job);
   }
}
let librarian = new Librarian("Наталя Петривна", 1975, "Библиотекар");
class Author extends Person {
   constructor(name, year, country) {
      super(name, year);
      this.country = country;
   }
   print() {
      console.log(`Имя: ${this.name}, Возраст: ${this.getFullYear()}, Страна: ${this.country}`);
   }
   setName(name) {
      if (name === '') {
         return this.name;
      } else {
         this.name = name;
      }
   }
   setYear(year) {
      if (year === '') {
         return this.year;
      } else {
         this.year = year;
      }
   }
   setCountry(country) {
      if (country === '') {
         return this.country;
      } else {
         this.country = country;
      }
   }
}
let author = [];
class Book extends Author {
   constructor(name, title, year, pages) {
      super(name, year)
      this.title = title;
      this.pages = pages;
   }
   print() {
      console.log(`Автор: ${this.name}, Название: ${this.title}, Год: ${this.year}, Сторинок: ${this.pages}`)
   }
   setTitle(title) {
      if (title === '') {
         return this.title;
      } else {
         this.title = title;
      }
   }
   setPages(pages) {
      if (pages === '') {
         return this.pages;
      } else {
         this.pages = pages;
      }
   }
}
let book = [];
console.log("1 - Добавить автора ");
console.log("2 - Добавить новую книгу");
console.log("3 - Посмотреть все книги");
console.log("4 - Посмотреть книги определенного автора");
console.log("5 - Посмотреть книги за определенный год");
console.log("6 - Изменить информацию об книге");
console.log("7 - Изменить информацию об автор");
console.log("8 - Посмотреть информацию об всей библиотеке.");
console.log("9 - Выйти");
let menu;
let exite = false;
while (!exite) {
   menu = +prompt();
   switch (menu) {
      case 1:
         console.log(1);
         author[author.length] = new Author(prompt("Имя"), prompt("Год рождения"), prompt("Страна"));
         break;
      case 2:
         console.log(2);
         book[book.length] = new Book(prompt("Автор"), prompt("Название"), prompt("Год"), prompt("Сторинок"));
         break;
      case 3:
         console.log(3);
         for (item of book) {
            item.print();
         }
         break;
      case 4:
         console.log(4)
         name = prompt("Автор");
         for (item of book) {
            if (item.name === name) {
               item.print();
            }
         }
         break;
      case 5:
         console.log(5);
         year = prompt("Год книги");
         for (item of book) {
            if (item.year === year) {
               item.print();
            }
         }
         break;
      case 6:
         console.log(6);
         title = prompt("название книги");
         for (item of book) {
            if (item.title === title) {
               item.setName(prompt("новый автор"));
               item.setTitle(prompt("новое название"));
               item.setYear(prompt("новый год"));
               item.setPages(prompt("новые страницы"));
            }
         }
         break;
      case 7:
         console.log(7);
         name = prompt("какова автора хотите изменить");
         for (item of author) {
            if (item.name === name) {
               item.setName(prompt("нове имя"));
               item.setYear(prompt("новый год"));
               item.setCountry(prompt("новая страна"));
            }
         }
         break;
      case 8:
         console.log(8);
         librarian.print();
         console.log(`Книг: ${book.length}`);
         for (item of author) {
            item.print();
         }
         break;
      case 9:
         console.log(9);
         exite = true;
         console.log("Вы выйшли");
         break;
   }
}
*/
//=============== ДЗ =====================\\
//1)
/*
let arr = [];
for (let i = 1; i <= 10; i++) {
   arr.unshift(i);
}
let number = (word, num) => {
   let ch = [];
   let nch = [];
   if (word === "четные") {
      for (let i = 1; i <= 10; i++) {
         if (num[0] % 2 == 0) {
            ch.unshift(num.shift());
         } else {
            nch.unshift(num.shift());
         }
      }
      for (item of ch) {
         console.log(item);
      }
   }
   else if (word === "нечетные") {
      for (let i = 1; i <= 10; i++) {
         if (num[0] % 2 == 0) {
            ch.unshift(num.shift());
         } else {
            nch.unshift(num.shift());
         }
      }
      for (item of nch) {
         console.log(item);
      }
   }
}
number("нечетные", arr);
*/
//2)

/*
class Person {
   constructor(name, age, year) {
      this.name = name;
      this.age = age;
      this.year = year;
   }
   print() {
      console.log(`Имя: ${this.name}, Возраст: ${this.age}, Год раджения: ${this.year}`);
   }
}
let user = [];
for (let i = 0; i < 2; i++) {
   user[i] = new Person(prompt("name"), prompt("age"), prompt("year"));
}
for (item of user) {
   item.print;
}
for (let i = 0; i < user.length; i++) {
   if (user[i].age < 18) {
      user.splice(i, i, "delete")
   }
}
for (key of user) {
   console.log(key)
}
*/
//============ ДЗ =================\\
/*let arr = [5, 3, 8, 1];
let filterRangeInPlace = (arr, a, b) => {
   for (let i = 0; i < arr.length; i++) {
      if (arr[i] < a || arr[i] > b) {
         arr.splice(i, 1);
         i--;
      }
   }
}
console.log(arr);
filterRangeInPlace(arr, 1, 4);
console.log(arr);
*/
/*
function unique(arr) {
   let result = [];
   for (let str of arr) {
      if (!result.includes(str)) {
         result.push(str);
      }
   }
   return result;
}
let strings = ["кришна", "кришна", "харе", "харе",
   "харе", "харе", "кришна", "кришна", ":-O"
];
alert(unique(strings));
*/

//============== ДЗ============\\
/*
let names = "Егор, Аня, Ян, Кирил, Ярик, Дима";
let namesArray = (arr) => {
   let result = arr.split(" ");
   console.log(result);
   let result_Two = result.filter(item =>
      item[0] === "А" || item[0] === "Е" || item[0] === "Ё" ||
      item[0] === "И" || item[0] === "О" || item[0] === "У" ||
      item[0] === "Ю" || item[0] === "Я"
   );
   console.log(result_Two);
   let result_Tree = result_Two.filter((num) => {
      if (num.length >= 4) {
         return num;
      }
   })
   console.log(result_Tree);
   result_Tree.forEach(len => console.log(len + ": " + len.length));
   console.log(result_Tree.sort().reverse().join(", "));
}
namesArray(prompt());
*/
//================= ДЗ ==================\\
/*
//1)
let date = '2025-12-31';
let d = date.split('-').reverse().join('.');
console.log(d);

//2)
function words() {
   let word = [];
   return function () {
      for (let i = 0; i < 5; i++) {
         word[i] = prompt();
      }
      console.log(word.join('/'));
   }
}
words()();

//3)
let abc = 'aaa bbb ccc';
let del = (str) => {
   let res = str.split(' ');
   res.forEach((item, index) => {
      if (item.includes('bbb') == true) {
         res.splice(index, index);
      }
   })
   console.log(res.join(' '));
}
del(abc);
let b = abc.slice(0, 3) + abc.slice(7);
console.log(b);
abc = abc[0] + abc[1] + abc[2] + abc[7] + abc[8] + abc[9] + abc[10];
console.log(abc);

//4)
let string = prompt();
let upper = (u) => {
   return u
      .split(' ')
      .map(item => item[0].toUpperCase() + item.slice(1))
      .join(' ')
}
console.log(upper(string));

//5)
let delete_characters = (str, length) => {
   str = str.substring(str, length);
   console.log(str);
}
delete_characters('Каждый охотник желает знать', 7);

//6)
let comparison = (str1, str2) => {
   let res = str1.toUpperCase() === str2.toUpperCase();
   return res;
}
console.log(comparison('string', 'StRiNg'));
*/

//================ ДЗ ===============\\
/*
let text = prompt();
let regFun = (str) => {
   let arr = [];
   let reg = /^\d+$/;
   let reg_Two = /^\D+$/;
   let reg_Tree = /^.+\w+.+$/;
   let regNumbet = /\d+/gm;
   let regString = /[a-z]+/gim;
   if (reg.test(str) == true) {
      console.log(`Numbers: ${str.match(reg).join('')}`);
   } else if (reg_Two.test(str) == true) {
      console.log(`String: ${str.match(reg_Two).join('')}`)
   } else if (reg_Tree.test(str) == true) {
      arr.push(str.match(regNumbet));
      arr.push(str.match(regString));
      console.log(arr);
   }
}
regFun(text);
*/
//=====================ДЗ===============\\
/*
let p = "Пример: 7-3+5";
let reg = /\d/g;
let regOne = /[+-]/g;
let numbers = p.match(reg);
let znaks = p.match(regOne);
console.log(znaks)
res = 0
for (let i = 0; i < numbers.length; i++) {
   if (i == 0) {
      if (znaks[i] == '+') {
         res += parseInt(numbers[i]) + parseInt(numbers[i + 2])
      }
      else {
         res -= parseInt(numbers[i]) - parseInt(numbers[i + 2])
      }
   }
   else if (i + 1 == numbers.length) {
      if (znaks[i - 1] == "+") {
         console.log(numbers[i])
         console.log(res)
         res += parseInt(numbers[i])
      }
      if (znaks[i - 1] == "-") {
         res -= parseInt(numbers[i])
      }
   }
}
console.log(res)
*/
//===================DZ============\\
/*
let text = 'Всем привет ! Сегодня я решал пример (3*2/3) а после этого получил ответ 2. Мне не понравилось и я решил изменить пример! (5 * 5 - 5) в ходе такого вычисленияя получил 20, а после сделал (3 - 2) и не смог решить!!!'
let reg = /\((.+?)\)/g;
let result = text.match(reg);
console.log(result)
let resultSum = (arr) => {
   let sum = [];
   arr.forEach((item,) => {
      sum.push(eval(item));
   })
   sum.sort((a, b) => a - b);
   sum.forEach(item => console.log(`Результат выполнения: ${item}`));
   console.log(`Найдено было ${arr.length} примера.`)
}
resultSum(result);
*/
//=================== дз ============\\
/*
let text = '(Name: Dima Marks = [4,2,1,2]),(Name: Egor Marks = [4,2,5,5]),(Name: Kirill Marks = [2,4,1,2])';
let reg = /\s[a-z]+\s/gi;
let reg_Num = /\d\,\d\,\d\,\d/g;
let result = text.match(reg);
let result_Num = text.match(reg_Num);
console.log(result);
console.log(result_Num);
let arr = [];
arr.push([result[0]]);
arr[0].push(result_Num[1]);
arr.push([result[1]]);
arr[1].push(result_Num[1]);
arr.push([result[2]]);
arr[2].push(result_Num[2]);
console.log(arr);
let num = [];
num.push(result_Num[0]);
console.log(num);
*/
//=============дз===========\\
/*
const date = new Date();
const hour = date.getHours();
const minute = date.getMinutes();
const time = date.toTimeString();
const day = date.getDay();
const days = ['Воскресеные', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];
const month = date.getMonth();
const months = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'];
const year = date.getFullYear();
const time_Fun = () => {
   if (time > '06:00:00' && time < '12:00:00') {
      console.log('Утро');
   } else if (time > '12:00:00' && time < '18:00:00') {
      console.log('День')
   } else if (time > '18:00:00' && time < '24:00:00') {
      console.log('Вечер')
   } else if (time > '24:00:00' && time < '06:00:00') {
      console.log('Ночь');
   }
}
console.log('1 - Посмотреть время');
console.log('2 - Посмотреть день');
console.log('3 - Посмотреть месяц');
console.log('4 - Посмотреть год');
console.log('5 - Узнать время суток');
console.log('6 - Выйти');
let exit = false;
while (!exit) {
   let menu = +prompt('Меню');
   switch (menu) {
      case 1:
         console.log(hour + ':' + minute);
         break;
      case 2:
         console.log(days[day]);
         break;
      case 3:
         console.log(months[month]);
         break;
      case 4:
         console.log(year);
         break;
      case 5:
         time_Fun();
         break;
      case 6:
         exit = true;
         console.log('Вы вышли')
         break;
   }
}
*/
/*
const months = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];
let myDate = new Date();
let today = myDate.getDate();
let date_foo = () => {
   for (item of events) {
      if (item.Date >= today && item.Date <= today + 3)
         console.log(item);
   }
}
console.log('1 - Добавить событие');
console.log('2 - Посмотреть события на сегодня');
console.log('3 - Посмотреть события на ближайшие 3 дня');
console.log('4 - Удалить события');
console.log('5 - Выйти');
let events = [''];
let exit = false;
while (!exit) {
   let menu = +prompt('Меню');
   switch (menu) {
      case 1:
         let year = myDate.getFullYear();
         let month = myDate.getMonth();
         let date = +prompt('Дата', 0);
         let event = prompt('Событие');
         events[events.length] = { Year: year, Month: months[month], Date: date, Event: event };
         break;
      case 2:
         for (item of events) {
            console.log(item);
         }
         break;
      case 3:
         date_foo();
         break;
      case 4:
         let date_del = +prompt('выберите дату для удаление событие');
         events.forEach((item, index) => {
            if (item.Date === date_del) {
               events.splice(index, index - 1);
            }
         })
         break;
      case 5:
         exit = true;
         console.log('Вы вышли');
         break;
   }
}
*/
//Создать эпилепсию.Когда включается сайт.Весь его задний фон должен меняться 10 разными цветами каждую 1 секунду.
//DZ\\
/*
const colors = ['red', 'black', 'white', 'green', 'pink', 'blue', 'yellow', 'brown', 'gray', 'orange', 'lime', 'blueviolet', 'cyan', 'coral'];
function rand() {
   let random = Math.floor(Math.random() * colors.length);
   let randColors = document.body.style.background = colors[random];
}
let i = 0;
let int = setInterval(() => {
   rand()
   i++;
   if (i > 25) {
      clearInterval(int)
   }
}, 500);
*/
//Создать класс для генерации сложных объектов.див, p, img.Если div + 1 + 1 ввести текст (p) изменить шрифт цвет img ссылки поменять картинку размер картинки
/*
class Block {
   constructor(type) {
      this.type = type;
   }
   setRemove() {
      let rem = prompt('какой тег хотите удалить?');
      document.querySelector(rem).remove();
   }
   tagCreat() {
      if (this.type == 'div') {
         let question = prompt("сколько div вы хотите создать?");
         for (let i = 0; i < question; i++) {
            let tagDiv = document.createElement('div');
            tagDiv.className = prompt('className');
            document.body.prepend(tagDiv);
         }
      } else if (this.type == 'p') {
         let question_Two = prompt("сколько p вы хотите создать?");
         for (let i = 0; i < question_Two; i++) {
            let tagP = document.createElement('p');
            tagP.textContent = prompt('text');
            document.body.prepend(tagP);
         }
      } else if (this.type == 'img') {
         let question_Tree = prompt("сколько img вы хотите создать?");
         for (let i = 0; i < question_Tree; i++) {
            let tagImg = document.createElement('img');
            tagImg.src = prompt('src');
            tagImg.className = prompt('className');
            tagImg.style = prompt(style);
            document.body.prepend(tagImg);
         }
      }
   }
}
let block = new Block(prompt('div/p/img?'));
block.tagCreat();
*/
//DZ\\
/*
let date = new Date;
date.setHours(12, 00, 06)
const stopTime = setInterval(() => {
   const times = document.getElementById("timer").innerHTML = new Date(date -= 1000).toLocaleTimeString();
   if (times <= '12:00:00') {
      clearInterval(stopTime)
      document.querySelector('h1 span').style.display = 'unset'
   }
}, 1000);
*/

//DZ
/*
let show = () => {
   let i = document.querySelector('.info');
   let scroll_H = i.scrollHeight;
   let client_H = i.clientHeight;
   if (client_H < scroll_H) {
      i.style.height = `${scroll_H}px`;
      document.querySelector('#text').textContent = 'свернуть';
   } else if (scroll_H > '300') {
      i.style.height = `200px`;
      document.querySelector('#text').textContent = 'розвернуть';
   }
}
*/
//DZ\\
/*
let show = () => {
   let text = document.querySelector('.text').value;
   let nameCls = document.querySelector('.class').value;
   let tagP = document.createElement('p');
   tagP.className = nameCls;
   tagP.textContent = text;
   document.body.append(tagP);
}
let showStyle = () => {
   let cls = document.querySelector('.class-style').value;
   let stl = document.querySelector(`.${cls}`);
   let text_Stl = document.querySelector('.text-style').value;
   let text_Stl_Fs = document.querySelector('.text-style-fs').value;
   stl.style.color = text_Stl;
   stl.style.fontSize = `${text_Stl_Fs}px`;
}
*///DZ
/*
function changestyle() {
   let act = document.querySelector('.action');
   if (act.style.visibility == 'visible') {
      act.style.visibility = 'hidden';
      setTimeout(changestyle, 700);
   } else {
      act.style.visibility = 'visible';
      setTimeout(changestyle, 1000);
   }
}
setTimeout(changestyle);
*/
//Football
/*
field.onclick = function (event) {

   // координаты поля относительно окна браузера
   let fieldCoords = this.getBoundingClientRect();

   // мяч имеет абсолютное позиционирование (position:absolute), поле - относительное (position:relative)
   // таким образом, координаты мяча рассчитываются относительно внутреннего, верхнего левого угла поля
   let ballCoords = {
      top: event.clientY - fieldCoords.top - field.clientTop - ball.clientHeight / 2,
      left: event.clientX - fieldCoords.left - field.clientLeft - ball.clientWidth / 2
   };

   // запрещаем пересекать верхнюю границу поля
   if (ballCoords.top < 0) ballCoords.top = 0;

   // запрещаем пересекать левую границу поля
   if (ballCoords.left < 0) ballCoords.left = 0;


   // // запрещаем пересекать правую границу поля
   if (ballCoords.left + ball.clientWidth > field.clientWidth) {
      ballCoords.left = field.clientWidth - ball.clientWidth;
   }

   // запрещаем пересекать нижнюю границу поля
   if (ballCoords.top + ball.clientHeight > field.clientHeight) {
      ballCoords.top = field.clientHeight - ball.clientHeight;
   }

   ball.style.left = ballCoords.left + 'px';
   ball.style.top = ballCoords.top + 'px';
}
*/