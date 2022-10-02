import app from "./create-server";
import path from "path";

const [host, port] = ["localhost", 3000];

app.set("views", path.join(__dirname, "./website/views"));
app.set("view engine", "pug");
app.listen(port, () => {
  console.log(`listening at ${host}:${port}`);
});
