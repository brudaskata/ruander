function CsakAFele(szoveg){
let feleszoveg='';
for (let i=0; i<szoveg.length; i+=2){
feleszoveg=feleszoveg+szoveg[i];
}
return feleszoveg;
}

document.write(CsakAFele("valami")+"<br>");
document.write(CsakAFele("Ez egy jó feladat"));
document.write("<hr>");

function Tabusito(szoveg, tabukarakter){
let hianyosszoveg='';
	for (let i=0; i<szoveg.length;i++){
		if(szoveg[i]!==tabukarakter){
			hianyosszoveg=hianyosszoveg+szoveg[i];
		}
	}
    return hianyosszoveg;
    }
document.write(Tabusito("modulzáró","ó")+"<br>");
document.write(Tabusito("bakancslista","a"));
document.write("<hr>")

let maganhangzotomb=[];
maganhangzotomb.push("a");
maganhangzotomb.push("á");
maganhangzotomb.push("e");
maganhangzotomb.push("é");
maganhangzotomb.push("i");
maganhangzotomb.push("í");
maganhangzotomb.push("u");
maganhangzotomb.push("ú");
maganhangzotomb.push("ü");
maganhangzotomb.push("ű");
maganhangzotomb.push("ö");
maganhangzotomb.push("ő");
maganhangzotomb.push("o");
maganhangzotomb.push("ó");

function MaganhangzoTabusito(szoveg) {
  let nincsmaganhangzo = '';
  for (let i=0;i<szoveg.length;i++) {
    if (!maganhangzotomb.includes(szoveg[i].toLowerCase())) {
      nincsmaganhangzo+=szoveg[i];
    }
  }
  return nincsmaganhangzo;
}

document.write(MaganhangzoTabusito("modulzáró")+"<br>");
document.write(MaganhangzoTabusito("bakancslista")+"<br>");
document.write(MaganhangzoTabusito("Almafa"));

