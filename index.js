const { Contract, PersonInterface } = require('./interfaces')

class Person extends Contract {
  constructor () {
    super(PersonInterface)
  }
  isRunning () {
    return true
  }
  isSleeping () {
    return false
  }
  whatLikes () {
    return ['eat', 'walk']
  }

}

const nacho = new Person
