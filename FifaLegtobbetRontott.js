const MongoClient = require('mongodb').MongoClient;
const url = "mongodb+srv://brudaskata:Godiva01@cluster0.ma09f0r.mongodb.net/Team11";

async function LegtobbetRontott() {
    try {
        const client = await MongoClient.connect(url);
        console.log("Sikeres csatlakozás!");

        const db = client.db('FifaAdatbazis');
        const collection = db.collection('FifaKollekcio');

        const result = await collection
            .find({ valtozas: { $lt: 0 } })
            .sort({ valtozas: 1 })
            .limit(1)
            .project({ _id: 0, nev: 1, valtozas: 1 })
            .toArray();

        if (result.length > 0) {
            for (const csapat of result) {
                console.log(`Legtöbb helyezést rontó csapat: ${csapat.nev}, változás mértéke: ${csapat.valtozas}`);
            }
        }
        client.close();
    } catch (err) {
        console.error("Hiba történt a csatlakozás vagy lekérdezés közben:", err);
    }
}

LegtobbetRontott();
