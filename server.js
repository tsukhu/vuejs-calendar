require("dotenv").config({ silent: true });

const express = require("express");
const app = express();
const path = require("path");
const fs = require("fs");
const http = require("http");

app.use("/public", express.static(path.join(__dirname, "public")));

let renderer;

app.get("/", (req, res) => {
  let template = fs.readFileSync(path.resolve("./index.html"), "utf-8");
  let contentMarker = '<!--APP-->';
  if (renderer) {
    renderer.renderToString({}, (err, html) => {
      if (err) {
        console.log(err);
      } else {
     //   console.log(html);
        res.send(template.replace(contentMarker,`${html}`));
      }
    });
  } else {
    res.send('<p> Awaiting Compilation ... </p>');
  }
  
});

const server = http.createServer(app);

if (process.env.NODE_ENV === "development") {
  const reload = require("reload");
  const reloadServer = reload(server, app);
  require("./webpack-dev-middleware").init(app);
  require("./webpack-server-compiler").init(function(bundle) {
    renderer = require("vue-server-renderer").createBundleRenderer(bundle);
  });
}

server.listen(process.env.PORT, function() {
  console.log(`Example app listening on port ${process.env.PORT}!`);
  if (process.env.NODE_ENV === "development") {
    require("open")(`http://localhost:${process.env.PORT}`);
  }
});
