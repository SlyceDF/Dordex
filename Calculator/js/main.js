function getValue() {
var x = eval(document.getElementById('input').value);
document.getElementById('output').innerHTML = x;
var enter = new Audio('audio/restart.mp3');
enter.play();
};
function root(x, n) {
    try {
      var negate = n % 2 == 1 && x < 0;
      if(negate)
        x = -x;
      var possible = Math.pow(x, 1 / n);
      n = Math.pow(possible, n);
      if(Math.abs(x - n) < 1 && (x > 0 == n > 0))
        return negate ? -possible : possible;
    } catch(e){}
  };
