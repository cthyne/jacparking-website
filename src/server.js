const { PORT = 5000 } = process.env;

const app = require("./app");
const listener = () => console.log(`Totally Listening on Port ${PORT}!`);
app.listen(PORT, listener);
