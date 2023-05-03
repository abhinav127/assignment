function fibonacciMemorized() {
    const cache = {};
  
    function fibonacci(n) {
      if (n in cache) {
        return cache[n];
      }
      if (n <= 1) {
        return n;
      }
      const result = fibonacci(n - 1) + fibonacci(n - 2);
      cache[n] = result;
      return result;
    }
  
    return fibonacci;
  }
  
  const fib = fibonacciMemorized();
  
  function generateFibonacciSeries(count) {
    let series = [];
    for (let i = 0; i < count; i++) {
      series.push(fib(i));
    }
    return series;
  }
  
  
  function start()
  {
      let number = 50; // integer number
      let output = generateFibonacciSeries(number);
      console.log(output);
  }
  
  // start the app
  start();


  //Output
  /* [
  0, 1,  1,  2,  3,
  5, 8, 13, 21, 34
]
*/
  