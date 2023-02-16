<script>
//1.feladat
function hosszEllenor(szoveg)
{
for(let i=0; i<szoveg.length; i++)
if(szoveg.length>8){
return true;
}
return false;
}

document.write(hosszEllenor("teszt"));
document.write("<br>");
document.write(hosszEllenor("feladatteszt"));

//2.feladat 
function tajSzamEllenor(szamsor){
	for(let i=0; i<szamsor.length; i++){
		if(szamsor.length==9){
		return true;
	}
		return false;
	}

}
document.write("<hr>");
document.write(tajSzamEllenor("083472187"));
/*2. feladat befejezetlen része
let osszegParos=0;
let osszegParatlan=0;
	for(let i=0; i<szamsor.length; i++){
      }*/


//3. feladat
function tombTerjedelem(vizsgaltTomb) {
  let maxErtek = vizsgaltTomb[0];
  let minErtek = vizsgaltTomb[0];
   for (let i=1; i<vizsgaltTomb.length; i++) {
    if (vizsgaltTomb[i] > maxErtek) {
      maxErtek = vizsgaltTomb[i];
    }
    if (vizsgaltTomb[i] < minErtek) {
      minErtek = vizsgaltTomb[i];
    }
  }

  return maxErtek - minErtek;
}
document.write("<hr>")
document.write(tombTerjedelem([3,5,10,16,9]));

//4-5. feladat
const Dolgozok = [{
        nev: "Koaxk Ábel",
        kor: 23,
        fizetes: 400000,
        beosztas: "Rendszergazda"
    },
    {
        nev: "Zsíros B. Ödön",
        kor: 45,
        fizetes: 1200000,
        beosztas: "Ügyvezető Igazgató"
    },
    {
        nev: "Meg Győző",
        kor: 32,
        fizetes: 600000,
        beosztas: "Marketing Manager"
    },
    {
        nev: "Békés Csaba",
        kor: 63,
        fizetes: 180000,
        beosztas: "Takarító"
    },
    {
        nev: "Pofá Zoltán",
        kor: 25,
        fizetes: 300000,
        beosztas: "Biztonsági Őr"
    },
    {
        nev: "Fejet Lenke",
        kor: 22,
        fizetes: 220000,
        beosztas: "Irodai Titkár"
    },
    {
        nev: "Vak Cina",
        kor: 30,
        fizetes: 500000,
        beosztas: "Üzem Orvos"
    }
]
//4. feladat
function legidosebbDolgozo(objektum)
{
let legidosebb=0;
	for(i=0; i<objektum.length;i++)
    {
		if(objektum[i].kor>objektum[legidosebb].kor)
        {
			legidosebb=i;
		}
	}	
    return legidosebb;
 }

document.write("<hr>")
document.write(`A legidősebb objektum elem indexe: ${legidosebbDolgozo(Dolgozok)}`);

//5.feladat részmegoldás
let osszfizetes=0;
for (let i=0; i<Dolgozok.length; i++)
{
	osszfizetes=osszfizetes+Dolgozok[i].fizetes;
}
document.write("<br>A dolgozók átlagfizetése:")
function Atlagfizetes(Dolgozok){
	return atlagfizetes=Math.floor(osszfizetes/Dolgozok.length);
	}
    
document.write(Atlagfizetes(Dolgozok));

document.write("<br>Átlag alatti fizetések: ");

function AtlagalattiFizetesek(){
for (let i=0; i<Dolgozok.length; i++){ 
	if(Dolgozok[i].fizetes<atlagfizetes){
		document.write(Dolgozok[i].fizetes+",");
		}
	}
  }
AtlagalattiFizetesek();

	
</script>

