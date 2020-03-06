function InterfaceContractError(message) {
    this.name = 'InterfaceContractError'
    this.message = (message || '')
}
InterfaceContractError.prototype = Error.prototype

class Contract {
  constructor (Interface) {
    Error
    this.mustBePresent(Interface)
  }

  mustBePresent (Interface) {
    Interface.forEach((method) => {
      if (typeof this.constructor.prototype[method] !== 'function') {
        throw new InterfaceContractError(`Must implement ${method} method in ${this.constructor.name}`)
      }
    })
  }
}

module.exports = Contract
