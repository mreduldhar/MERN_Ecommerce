const app = require('./app');

const port = process.env.PORT || 8080;



app.listen(port, async () => {
	console.log(`Server is running on port ${port}`);
});