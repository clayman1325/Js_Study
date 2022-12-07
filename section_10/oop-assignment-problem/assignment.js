class Course {
  constructor (title, lenght, price) {
    this.title = title,
    this.lenght = lenght,
    this.#setPrice = price;
  }

  set #setPrice(value) {
    if(value < 0){
      console.log("Please set the price value to a positive numver")
      this.price = 0;
      return
    }

    this.price = value
  }

  get getPrice() {
    return `$${this.price}`
  }

  summary () {
    return `the ${this.title} course cost  ${this.price} and will take ${this.lenght} months`;
  }
  priceLenghtRatio () {
    return this.price/this.lenght;
  }
}

const robotics = new Course("robotics", 6, -12000000)
const algorithms = new Course("algorithm", 2, -300000)

console.log(robotics.summary(), algorithms.summary())
console.log(robotics.priceLenghtRatio(), algorithms.priceLenghtRatio())

class PracticalCourse extends Course {
  constructor(title, lenght, price, numOfExcercises) {
    super(title, lenght, price)
    this.numOfExcercises = numOfExcercises;
  }
}

class TheoreticalCourse extends Course {
  constructor(title, lenght, price) {
    super(title, lenght, price)
  }
  publish () {
    console.log("testing  a  new method")
  }
}
const practical = new PracticalCourse("robotics", 6, 12000000, 100)
const theoretical = new TheoreticalCourse("algorithm", 2, 300000)

console.log(practical.summary(), theoretical.summary())
console.log(practical.priceLenghtRatio(), theoretical.priceLenghtRatio())
console.log(practical.numOfExcercises, theoretical.publish())
console.log(theoretical.publish())
console.log(practical.getPrice)
