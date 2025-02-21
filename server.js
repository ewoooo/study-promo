import express from "express";
import { fileURLToPath } from "url";
import { dirname } from "path";

const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

app.use(express.static(__dirname + "/public"));
app.use(express.static(__dirname + "/src"));

app.listen(8081, () => {
	console.log("서버 주소: http://localhost:1234");
});
app.get("/", function (req, res) {
	const main = __dirname + "./index.html";
	res.sendFile(main);
});
