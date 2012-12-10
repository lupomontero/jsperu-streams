var baudio = require('baudio');
var b = baudio();

var beats = [
  [ 1, 0, 1, 0 ],
  [ 1, 0, 1, 1 ],
  [ 1, 0, 0, 0, 0, 50, 25, 20, 0, 0, 10, -30, -400, -500 ],
  [ 1, 0, 0, 0, 0, 1, 0, 1 ],
  [ 0, 0, 0, 0, 0, 0, 0, 0 ]
];

var bars = [ 0, 0, 0, 1, 2, 2, 2, 3, 2, 2, 2, 3, 4, 4 ];
var currBar = 0;
var step = 0;

b.push(function (t, i) {
  var ret = 0, beat = beats[bars[currBar]];
  if (!beat) { return; }
  if (i % 10000 === 0) {
    ret = beat[step];
    step += 1;
    if (step === beat.length) { step = 0; currBar += 1; }
  } else if (i % 1000 === 0) {
    ret = 0.2;
  } else if (step % 4 === 0) {
    ret = 100;
  }

  return ret;
});

b.push(function (t, i) { return 0.1; });

b.play();

