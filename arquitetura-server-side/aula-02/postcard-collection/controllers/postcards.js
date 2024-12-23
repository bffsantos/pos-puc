const fs = require('fs');
const { v4: uuidv4 } = require('uuid');
const { MongoClient, ObjectId } = require('mongodb');

const url = 'mongodb://localhost:8080';
const dbName = 'postcardsDB';
const collectionName = 'postcards';

function listAll(res) {
    fs.readFile(postcardsPath, 'utf8', (err, data) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ error: 'Failed to read postcards data.' });
        }

        const postcards = JSON.parse(data);
        res.json(postcards);
    });
}

function listPostcardById(res, req){
    const postId = req.params.id;

    fs.readFile(postcardsPath, 'utf8', (err, data) => {
        if (err) {
          console.error(err);
          return res.status(500).json({ error: 'Failed to read postcards data.' });
        }
    
        const postcards = JSON.parse(data);
        const postcard = postcards.find((post) => post.id === postId);
    
        if (!postcard) {
          return res.status(404).json({ error: 'Postcard not found.' });
        }
    
        res.json(postcard);
      });
}

function addNewPostcard(res, req){
    const { name, cidade, pais, descricao, imageUrl } = req.body;
    //const imageUrl = `https://picsum.photos/400/300`; // Gerador automático de imagens
    
    const newPostcard = {
    id: uuidv4(),
    name,
    cidade,
    pais,
    descricao,
    imageUrl,
    };

    fs.readFile(postcardsPath, 'utf8', (err, data) => {
    if (err) {
        console.error(err);
        return res.status(500).json({ error: 'Failed to read postcards data.' });
    }

    const postcards = JSON.parse(data);
    postcards.push(newPostcard);

    fs.writeFile(postcardsPath, JSON.stringify(postcards, null, 2), (err) => {
        if (err) {
        console.error(err);
        return res.status(500).json({ error: 'Failed to add new postcard.' });
        }

        res.status(201).json(newPostcard);
        });
    });
}

function removePostcardById(res, req){
    const { id } = req.params;

    fs.readFile(postcardsPath, 'utf8', (err, data) => {
        if (err) {
        console.error(err);
        return res.status(500).json({ error: 'Failed to read postcards data.' });
        }

        let postcards = JSON.parse(data);
        const postcardIndex = postcards.findIndex((item) => item.id === id);

        if (postcardIndex === -1) {
        return res.status(404).json({ error: 'Postcard not found.' });
        }

        postcards = postcards.filter((item) => item.id !== id);

        fs.writeFile(postcardsPath, JSON.stringify(postcards, null, 2), (err) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ error: 'Failed to delete postcard.' });
        }

        res.status(204).end();
        });
    });
}

async function listAllMongo(res){
    const client = new MongoClient(url);

    try{
        await client.connect();
        const db = client.db(dbName);
        const collection = db.collection(collectionName);
        const postcards = await collection.find().toArray();
        res.json(postcards);
    } catch (error){
        console.error(error);
        res.status(500).json({error : 'Failed to read postcard data.' });
    } finally {
        await client.close();
    }
}

async function addNewPostcardMongo(res, req){
    const { name, cidade, pais, descricao, imageUrl } = req.body;
    //const imageUrl = `https://picsum.photos/400/300`; // Gerador automático de imagens
    
    const newPostcard = {
    id: uuidv4(),
    name,
    cidade,
    pais,
    descricao,
    imageUrl,
    };

    const client = new MongoClient(url);

    try{
        await client.connect();
        const db = client.db(dbName);
        const collection = db.collection(collectionName);
        const result = await collection.insertOne(newPostcard);
        newPostcard._id = result.insertedId;
        res.status(201).json(newPostcard);
    } catch (error){
        console.error(error);
        res.status(500).json({error : 'Failed to add new postcard.' });
    } finally {
        await client.close();
    }
}

//funcoes locais com JSON
exports.listAll = listAll;
exports.listPostcardById = listPostcardById;
exports.addNewPostcard = addNewPostcard;
exports.removePostcardById = removePostcardById;

//funcoes mongo
exports.addNewPostcardMongo = addNewPostcardMongo;
exports.listAllMongo = listAllMongo;