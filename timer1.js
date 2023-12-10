const args = process.argv;
let intervals = args.slice(2);

const milliseconds = [];

for (let i = 0; i < intervals.length; i++) {
  let convertedToMilliseconds = 0;
  convertedToMilliseconds = intervals[i] * 1000;
  milliseconds.push(convertedToMilliseconds);
}

let negativeNumbersAndNaNRemoved = milliseconds.filter(millisecond => millisecond >= 0 || millisecond === NaN);

const timer = (delays) => {
  for (const delay of delays) {
    setTimeout(() => {
      process.stdout.write('\x07');
    }, delay);
  }
};

timer(negativeNumbersAndNaNRemoved);