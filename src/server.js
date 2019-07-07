const server = require('express');
const routes = require('./routes');

const app = server();
const port = process.env.PORT || 8080;


app.use(routes);

app.listen(port, (err) => {
    console.log(`Server start listening on http://localhost:${port}`)
});
