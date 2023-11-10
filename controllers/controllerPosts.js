const posts = require('../db/posts')

function index (req, res) {

    res.format({
        html: () => {        
            res.type("html")
            const html = [`<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous">
            <h1>Lista dei</h1>`];

            html.push("<ul class=''>");

            posts.forEach(post => {
                html.push(`<li>
                    <h2>${post.title}</h2>
                    <p>${post.content}</p>
                    <image>${post.image}</image>
                    <badge>${post.tags}</badge>
                </li>`)
            });

            res.send(html.join(""));
        },
        json: () => {
            res.type("json").send({
                message: "Hello World!",
            });
        },
        default: () => {
            res.status(406).send("Not Acceptable");
        },
    })
}

module.exports = {
  index,
}