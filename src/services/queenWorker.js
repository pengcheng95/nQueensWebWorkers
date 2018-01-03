self.addEventListener('message', function(e) {
  let response = {
    count: 0,
    time: 0
  }
  let start = new Date();
  var findSolutions = function(ld, cols, rd, all) {
    let poss = ~(ld | cols | rd) & all;
    if (cols === all) {
      response.count++;
    }
    while (poss) {
      let negPoss = poss * -1;
      let bit = poss & negPoss;
      poss = poss - bit;
      findSolutions((ld | bit) << 1, cols | bit, (rd | bit) >> 1, all);
    }
  };
  findSolutions(e.data[0], e.data[1], e.data[2], e.data[3]);
  let end = new Date();
  response.time = end - start
  console.log(start, end)
  self.postMessage(response);
  self.close();
}, false);