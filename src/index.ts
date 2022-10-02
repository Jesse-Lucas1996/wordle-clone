import app from "./create-server";
import path from "path";

const [host, port] = ["http://localhost", 3000 || process.env.PORT];

app.set("views", path.join(__dirname, "./website/views"));
app.set("view engine", "pug");
app.listen(port, () => {
  console.log(`listening at ${host}:${port}`);
});
