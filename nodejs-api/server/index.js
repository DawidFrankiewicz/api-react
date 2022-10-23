const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

// Middleware
app.use(bodyParser.json());
app.use(cors());

const videos = require('./routes/api/videos');

app.get('/', (req, res) => {
	res.send('Hello World! Node api server is up! Go to /api/post to see the posts data.');
});

app.use('/api/videos', videos);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));