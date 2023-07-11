var MongoClient = require('mongodb').MongoClient;
var url = "mongodb+srv://brudaskata:Godiva01@cluster0.ma09f0r.mongodb.net/Team11";

//find()
async function Fifa1600Lekeres() {
    try {
        const client = await MongoClient.connect(url);
        console.log("Sikeres csatlakozás!");

        const db = client.db('FifaAdatbazis');
        const collection = db.collection('FifaKollekcio');

        const osszesAdat = await collection.find({ pontszam: { $gt: 1600 } }).toArray();
        console.log("Kétszázezer feletti fizetések:", osszesAdat);

        client.close();
    } catch (err) {
        console.error("Hiba történt a csatlakozás vagy lekérdezés közben:", err);
    }
}

Fifa1600Lekeres();