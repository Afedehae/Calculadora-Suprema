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
  document.getElementById('answer').innerHTML = ('O valor da hipotenusa é: <br> ' + x);
}
function PitagorasQ(){
  var a = document.getElementById('varA2').value;
  var b = document.getElementById('varB2').value;
  var aa = (a**2);
  var bb = (b**2);
  var c = (aa-bb)
  var x = Math.sqrt(c);
  document.getElementById('answer2').innerHTML = ('O valor do outro quareto é: <br>' + x);
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
function Tempojuros(){
  var capital = document.getElementById('varA2').value;
  var juros = document.getElementById('varB2').value;
  var juros = (juros/100)
  var montante = document.getElementById('varC2').value;
  var juross = ++juros;
  var monca = (montante/capital);
  var logjuros = Math.log10(juross);
  var moncalog = Math.log10(monca);
  var x = (moncalog/logjuros);
  document.getElementById('answer2').innerHTML = ("Vai levar " + x + " Meses");
}

function Calorespecifico(){
  var a = document.getElementById('varA').value;
  var b = document.getElementById('varB').value;
  var c = document.getElementById('varC').value;
  var a = (a/b);
  var a = (a/c);
  document.getElementById('answer').innerHTML = ('O calor especifico é: <br>' + a + ' cal/g°C')
}
function Variaçãotemperatura(){
  var a = document.getElementById('varA2').value;
  var b = document.getElementById('varB2').value;
  var c = document.getElementById('varC2').value;
  var d = (c/a);
  document.getElementById('answer2').innerHTML = ('A variação de temperatura foi: <br>' + d + ' C°')
}
function Variaçãocalor() {
  var a = document.getElementById('varA3').value;
  var b = document.getElementById('varB3').value;
  var c = document.getElementById('varC3').value;
  var d = (c*a);
  document.getElementById('answer3').innerHTML = ('A variação de calor foi: <br>' + d + ' Cal')

}
