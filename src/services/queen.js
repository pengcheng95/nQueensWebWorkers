angular.module('n-queens')
  .service('queen', function() {
    this.runQueen = function(num, setValues) {
      var values = [];
      var all = (1 << num) - 1;
      let count = 0;

      for (let i = 0; i < num; i++) {
        var cols = 2 ** i;
        var ld = 2 ** (i + 1);
        var rd = 0;
        if (i > 0) {
          rd = 2 ** (i - 1);
        }
        var myWorker = new Worker('/src/services/queenWorker.js');
        myWorker.postMessage([ld, cols, rd, all]);
        myWorker.onmessage = (e) => {
          var single = {};
          single.count = e.data.count;
          single.time = e.data.time;
          values.push(single);
          setValues(values); // This is where setValues is called
        };
        
      }
    }
  });