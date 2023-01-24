//function keszito(){
//document.write ("Brudás Katalin<br>");
//document.write ("Junior frontend<br>");
//document.write ("Team#11");
//}
//keszito();

document.write("<hr>");

function hatvanyozo(szam,hatvany){
	return eredmeny=Math.pow(szam, hatvany);
}
document.write(hatvanyozo(2,3)+"<br>");
document.write(hatvanyozo(5,3));

document.write("<hr>");

function parosLetrehoz(alsoHatar, felsoHatar){
let generaltSzam=Math.round(Math.random()*(felsoHatar-alsoHatar))+alsoHatar;
	if (generaltSzam%2==0){
	return generaltSzam;
    }
	else if(generaltSzam!=felsoHatar){
	return generaltSzam+1;
	}
	else{
	return generaltParosSzam-1;
	}
    }

document.write(parosLetrehoz(1,100));
document.write ("<hr>");

function testTomegIndex(suly, magassag){
let TTI=suly/magassag**2; 
	if(TTI<16){
		return "sulyosSovanysag";
	}
	else if(TTI<17){
		return "mersekeltSovanysag";
	}
	else if(TTI<18.5){
		return "enyheSovanysag";
	}
	else if(TTI<25){
		return "normalisTestsuly";
	}
	else if(TTI<30){
		return "tulsulyos";
	}
	else if(TTI<35){
		return "IfokuElhizas";
	}
	else if(TTI<40){
		return "IIfokuElhizas";
	}
	else{
		return "IIIfokuSulyosElhizas";
	}
}

document.write(testTomegIndex(200,2)+"<br>");
document.write(testTomegIndex(45,1.5)+"<br>");
document.write(testTomegIndex(25,1.2));

document.write("<hr>");

function egeszOsztoE(szam,oszto){
	if(szam%oszto==0){
	return (true);
	}
	else{
	return (false);
	}
		}
        
document.write(egeszOsztoE(25,5)+"<br>");
document.write(egeszOsztoE(1050,7)+"<br>");
document.write(egeszOsztoE(2048,3));
