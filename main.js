// Задание 1

function User(name, age) {
    this.setDataUser = function () {
        name = prompt("Введите Ваше имя:");
        age = prompt("Введите Ваш возраст:");
        if (name === null || age === null || age < 18) {
            return false;
        } else {
            this.name = name;
            this.age = age
        }
    }
    this.getUserData = function () {
        console.log(`Имя: ${this.name}; Возраст: ${this.age}`)
    }
}

function createUser() {
    const user1 = new User();
    user1.setDataUser();
    user1.getUserData();
}

// Задание 2

function Car(model, year, price) {
    this.setDataCar = function () {
        model = prompt("Модель авто:");
        year = prompt("Год выпуска:");
        price = prompt("Цена:");
        if (model === null || year === null || price === null) {
            return false;
        } else {
            this.model = model;
            this.year = year;
            this.price = price;
        }
    }
    this.getCarData = function () {
        console.log(`Модель авто: ${this.model}; Год выпуска: ${this.year}; Цена: ${this.price}`)
    };
    this.setUser = function (user) {
        console.log(user)
    };
}

function createCardCar() {
    const currentCar = new Car();
    currentCar.setDataCar();
    currentCar.getCarData();
    const currentUser = new User();
    currentUser.setDataUser()
    currentCar.setUser(currentUser);
}


















