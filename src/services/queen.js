angular.module('n-queens')
  .service('queen', function() {
    this.runQueen = function(num, setValues) {
      var values = [];
      var temp = '';
      for (let i = 0; i < num; i++) {
        temp = temp + '1';
      }

      var all = parseInt(temp, 2) || 0;
      let count = 0;

      for (let i = 0; i < num; i++) {
        var cols = 2 ** i;
        var ld = 2 ** (i + 1);
        var rd = 0;
        if (i > 0) {
          rd = 2 ** (i - 1);
        }
        var myWorker = new Worker('/src/services/queenWorker.js');
        myWorker.onmessage = (e) => {
          var single = {};
          single.count = e.data;
          count += e.data;
          values.push(single);
          setValues(values); // This is where setValues is called
        };
        myWorker.postMessage([ld, cols, rd, all]);
      }
      // return values;
    }
  });