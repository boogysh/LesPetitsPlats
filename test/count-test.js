const t0 = performance.now();
// countFor();
countWhile();
const t1 = performance.now();
console.log(`time: ${t1 - t0} milliseconds.`);

function countFor() {
  for (let i = 0; i < 100000000; i++) {} //
}
function countWhile() {
  let i = 0;
  while (i < 100000000) {
    i++;
  }
}

// }
//chrome
//for: 10k - 0.1ms
//for: 100k - 0.5-0.7ms
//for: 1M- 0.8-1ms
//for: 10M- 4-5ms
//for: 1B - 360-370ms
//for: 10B - 7.7s
//while: 1B - 368ms
//while: 10B - 8.5 - 7.7 - 8.0 - 8.4
//--------
//firefox
//for: 10k- <1ms
//for: 100k- <1ms
//for: 1M- 1ms
//for: 10M- 3-4ms
//for: 1B- 327ms
//for: 10B- 24.5-25s
//while: 1B - 321-327ms
//while: 10B - 26.4s

//------------------------------------
//chrome
//for: 0.1B - 39-40 ms  max:54ms
//while: 0.1B - 37-38 ms max:

//firefox
//for: 0.1B - 32-33 ms
