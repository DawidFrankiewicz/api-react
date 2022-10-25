const express = require('express');
const mongodb = require('mongodb');

const router = express.Router();

// Get videos
router.get('/', async (req, res) => {
	const videos = await loadvideosCollection();
	res.send(await videos.find({}).toArray());
});

// Add Post
router.post('/', async (req, res) => {
	const videos = await loadvideosCollection();
	await videos.insertOne({
		url: req.body.url,
		createdAt: new Date()
	});
	res.status(201).send();
});

// Delete Post
router.delete('/:id', async (req, res) => {
	const videos = await loadvideosCollection();
	await videos.deleteOne({ _id: new mongodb.ObjectId(req.params.id) });
	res.status(200).send();
});

async function loadvideosCollection() {
	const client = await mongodb.MongoClient.connect(
		'mongodb://api_db_user:api_db_passXYZ@mongo_container:27017', {

			useNewUrlParser: true
		});
	return client.db('nodejs_api').collection('videos');
}

module.exports = router;