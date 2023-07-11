var MongoClient = require('mongodb').MongoClient;
var url = "mongodb+srv://brudaskata:Godiva01@cluster0.ma09f0r.mongodb.net/Team11";


async function FifakollekcioLetrehozas() {
    try {
        const client = await MongoClient.connect(url);
        const db = client.db('FifaAdatbazis');
        await db.createCollection('FifaKollekcio');
        console.log("A FifaKollekcio collection létrejött a FifaAdatbazis adatbázisban.");
        client.close();
    } catch (err) {
        console.error("Hiba történt a collection létrehozása közben:", err);
    }
}

FifakollekcioLetrehozas();