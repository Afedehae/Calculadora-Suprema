function Bhaskara() {
  var a = document.getElementById('varA').value;
  var b = document.getElementById('varB').value;
  var c = document.getElementById('varC').value;
  var delta = (b**2)-4*a*c;
  if (delta < 0){
    document.getElementById('answer').innerHTML = ('Não é possivel realizar a equação')
  } else {
  var delt = Math.sqrt(delta);
  var x = (-b+delt)/(2*a);
  var y = (-b-delt)/(2*a);
  document.getElementById('answer').innerHTML = ('O valor de delta é ' + delta + '<br>' + 'O valor de X¹ é ' + x + '<br>' + 'O valor de X² é ' + y);
}
}
function PitagorasH(){
  var a = document.getElementById('varA').value;
  var b = document.getElementById('varB').value;
  var aa = a**2;
  var bb = b**2;
  var c = aa + bb;
  var x = Math.sqrt(c);
  document.getElementById('answer').innerHTML = (x);
}
function PitagorasQ(){
  var a = document.getElementById('varA2').value;
  var b = document.getElementById('varB2').value;
  var aa = (a**2);
  var bb = (b**2);
  var c = (aa-bb)
  var x = Math.sqrt(c);
  document.getElementById('answer2').innerHTML = (x);
}
function Juroscompostos(){
  var a = document.getElementById('varA').value;
  var b = document.getElementById('varB').value;
  var c = document.getElementById('varC').value;
  var b = (b/100);
  var b = ++b;
  var d = (b**c);
  var e = a*d;
  document.getElementById('answer').innerHTML = ("O montante será de: " + e)
}
