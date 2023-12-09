const args = process.argv;
let intervals = args.slice(2);

console.log('This is an array of the given times in seconds: ', intervals);

const milliseconds = []
console.log("This is the new empty array: ", milliseconds);

for (let i = 0; i < intervals.length; i++) {
  convertedToSeconds = intervals[i] * 1000;
  console.log('This is the number of milliseconds: ', convertedToSeconds);
  milliseconds.push(convertedToSeconds);
};

console.log('this is the new array with converstion done:', milliseconds);

negativeNumbersAndNaNRemoved = milliseconds.filter(millisecond => millisecond >=0 || millisecond === NaN);

console.log("this is the same array with negative values and non numbers removed: ", negativeNumbersAndNaNRemoved);


const timer = (delays) => {
  for (const delay of delays) {
    setTimeout(() => {
      process.stdout.write('\x07');
    }, delay);
  }
};

timer(negativeNumbersAndNaNRemoved);