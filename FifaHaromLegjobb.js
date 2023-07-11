const MongoClient = require('mongodb').MongoClient;
const url = "mongodb+srv://brudaskata:Godiva01@cluster0.ma09f0r.mongodb.net/Team11";

async function FifaHaromLegjobb() {
    try {
        const client = await MongoClient.connect(url);
        console.log("Sikeres csatlakozás!");

        const db = client.db('FifaAdatbazis');
        const collection = db.collection('FifaKollekcio');

        const rendszerezesBeallitasai = { pontszam: -1 };

        const result = await collection
            .find({}, { projection: { _id: 0 }, sort: rendszerezesBeallitasai })
            .limit(3)
            .toArray();

        console.log(result);

        client.close();
    } catch (err) {
        console.error("Hiba történt a csatlakozás vagy lekérdezés közben:", err);
    }
}

FifaHaromLegjobb();
