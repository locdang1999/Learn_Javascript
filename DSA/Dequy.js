var valN = 1
var tt = "";

function nameTest(val) {
  for (var i = 0; i < val.length; i++) {
    var te = val.slice(i, i + valN);
    if(te.length < valN){
      break; 
    }
    if (tt === "") {
      tt += te
    } else {
        tt = tt + ", " + te
    }
  }
  if(valN < val.length){
    valN ++;
    nameTest(val);
  }
}
nameTest("ABCD");
console.log(tt);