// Задание 1

function User(name = prompt("Введите Ваше имя:"), age = prompt("Введите Ваш возраст:")) {
    this.name = name;
    this.age = age;
    this.getUserData = function () {
        if (this.name === null || this.age === null || this.age < 18) {
            return "ERROR getUserData";
         } else {
            return (`Имя: ${this.name}; Возраст: ${this.age}`)
        }
    }
}

function createUser() {
    const user1 = new User()
    console.log(user1.getUserData());
}

// Задание 2

const Owner = function (name = prompt("Введите имя владельца авто:"), phone = prompt("Введите контактный телефон:")) {
    this.name = name;
    this.phone = phone;
}

const Cars = function (model = prompt("Модель авто:") , year = prompt("Год выпуска:") , transmission = prompt("Тип коробки передач:")) {
    this.model = model;
    this.year = year;
    this.transmission = transmission;
    this.getCarInfo = function () {
        if (this.model === null || this.year === null || this.transmission === null) {
            return false;
        } else {
            return (`Модель авто: ${this.model}; Год выпуска: ${this.year}; Тип коробки передач: ${this.transmission}`)
        }
    }
    this.setOwner = new Owner();
}

function createCardCar() {
    const firstCar = new Cars();
    console.log(firstCar.getCarInfo());
    console.log(firstCar.setOwner)
    console.log(firstCar)
}

/*function createCardCar2() {
    const secondCar = new Cars();
    console.log(secondCar.getCarInfo());
    console.log(secondCar.setOwner)
    console.log(secondCar)
}
createCardCar2();*/
















