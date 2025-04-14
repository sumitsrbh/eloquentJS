var argumentsLength = function (...args) {
  return args.reduce((params) => ++params, 0)
}
