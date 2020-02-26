const express = require("express");

process.env.NODE_ENV = process.env.NODE_ENV || "development";

process.env.PORT = process.env.PORT || 3000;

const app = express();

/*
 * =======================================================================
 * ================ REACT config                     =====================
 * =======================================================================
 */

app.use("/", express.static("public"));

/*
 * =======================================================================
 * ============== normal express routes go here   ========================
 * =======================================================================
 */

app.get("/banana", (request, response) => {
  response.send("ehllo");
});

/*
 * =======================================================================
 * ==============   react express route           ========================
 * =======================================================================
 */

app.get("/react", (req, res) => {
  const myHtml = `
    <html>
    <head>
      <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
      <link rel="stylesheet" type="text/css" href="/styles.css">
      <script src="https://kit.fontawesome.com/b6c2f93973.js" crossorigin="anonymous">
      </script>
    </head>
      <body>
        <h1 class="text-center my-5">Kanye's Timeline</h1>
        <div id="app"></div>
        <script type="text/javascript" src="/main.js"></script>
        <script src="https://unpkg.com/react-popper/dist/index.umd.js"></script>
      </body>
    </html>
  `;
  res.send(myHtml);
});

/*
 * =======================================================================
 * ============                     LISTEN                   =============
 * =======================================================================
 */

app.listen(process.env.PORT, () => {
  console.log(
    `ssssserver is now running on http://localhost:${process.env.PORT}`
  );
});
