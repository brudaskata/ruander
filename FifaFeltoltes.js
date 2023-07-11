var MongoClient = require('mongodb').MongoClient;
var url = "mongodb+srv://brudaskata:Godiva01@cluster0.ma09f0r.mongodb.net/Team11";


async function FifaFeltoltes() {
    try {
        const client = await MongoClient.connect(url);
        console.log("Sikeres csatlakozás!");

        const db = client.db('FifaAdatbazis');
        const collection = db.collection('FifaKollekcio');

        var FifaAdatok = [
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
            "Uruguay;6;-1;1639",
        ];

        const ujAdatok = objektumFeltolto(FifaAdatok);

        const result = await collection.insertMany(ujAdatok);
        console.log("Dokumentumok sikeresen beszúrva:", result.insertedCount);

        client.close();
    } catch (err) {
        console.error("Hiba történt a csatlakozás vagy beszúrás közben:", err);
    }
}
function objektumFeltolto(FifaAdatok) {
    const beolvasottAdatok = [];
    for (let i = 0; i < FifaAdatok.length; i++) {
        const darabolandoSor = FifaAdatok[i].split(';');
        const objektum = {
            csapat: darabolandoSor[0],
            helyezes: Number(darabolandoSor[1]),
            valtozas: Number(darabolandoSor[2]),
            pontszam: Number(darabolandoSor[3]),
        };
        beolvasottAdatok.push(objektum);
    }
    return beolvasottAdatok;
}

FifaFeltoltes();