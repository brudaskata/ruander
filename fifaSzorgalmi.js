const csapatAdat = [
"Anglia;4;0;1662", 
"Argentína;10;0;1614", 
"Belgium;1;0;1752", 
"Brazília;3;-1;1719", 
"Chile;17;-3;1576", 
"Dánia;14;-1;1584", 
"Franciaország;2;1;1725", 
"Hollandia;13;3;1586", 
"Horvátország;8;-1;1625", 
"Kolumbia;9;-1;1622", 
"Mexikó;12;0;1603", 
"Németország;16;-1;1580", 
"Olaszország;15;1;1583", 
"Peru;19;0;1551", 
"Portugália;5;1;1643", 
"Spanyolország;7;2;1631", 
"Svájc;11;0;1604", 
"Svédország;18;0;1560", 
"Szenegál;20;0;1546", 
"Uruguay;6;-1;1639"
];

function ObjektumFeltoto(feltoltendoElem){
	const beolvasottAdat=[];
    for(let i=0;i<feltoltendoElem.length;i++){
    	let objektum={};
        let daraboltAdatSor=feltoltendoElem[i].split(';');
        objektum.nev=daraboltAdatSor[0];
        objektum.helyezes=daraboltAdatSor[1];
        objektum.valtozas=daraboltAdatSor[2];
        objektum.pontszam=Number(daraboltAdatSor[3]);
        beolvasottAdat.push(objektum);
    }
    return beolvasottAdat;
}
const fifaAdatok=ObjektumFeltoto(csapatAdat);
document.write("<table border=\"1\">");
document.write("<tr><th>Név</th><th>Helyezés</th><th>Változás</th><th>Pontszám</th></tr>");
for(let i=0;i<fifaAdatok.length;i++){
	document.write(`<tr><td>${fifaAdatok[i].nev}</td><td>${fifaAdatok[i].helyezes}</td><td>${fifaAdatok[i].valtozas}</td><td>${fifaAdatok[i].pontszam}</td></tr>`);
}
document.write("</table>");


document.write(`<br>A ranglistán ${fifaAdatok.length} csapat szerepel.`)
//VAGY
function CsapatokSzama(){
	document.write(`<br>A ranglistán ${fifaAdatok.length} csapat szerepel.`)
	}
CsapatokSzama();

let osszpontszam=0;
for (let i=0; i<fifaAdatok.length; i++)
{
	osszpontszam=osszpontszam+fifaAdatok[i].pontszam;
}
document.write("<br>A résztvevő csapatok átlag pontszáma:")
function AtlagpontSzam(){
	return atlagpontszam=osszpontszam/fifaAdatok.length;
	}
document.write(AtlagpontSzam());
	

document.write("<br>Átlagnál több pontot elérő csapatok: ");
function AtlagnalTobbPontotEleroCsapatok(){
for (let i=0; i<fifaAdatok.length; i++){ 
	if(fifaAdatok[i].pontszam>atlagpontszam){
		document.write(fifaAdatok[i].nev+",");
		}
	}
}
AtlagnalTobbPontotEleroCsapatok();
