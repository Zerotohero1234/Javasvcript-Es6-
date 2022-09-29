// spread Operator

const Colors = ['green','blue','white']
const allColors = ['red','yellow',...Colors]
const newColors = ['black','gray']

// allColors.push(newColors) [ 'red', 'yellow', 'green', 'blue', 'white', [ 'black', 'gray' ] ]
allColors.push(...newColors)
console.log(allColors);