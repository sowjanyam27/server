const express = require('express')

const app = express()

const port = 3000


function render (favorite) {
    const document = `<html>
      <head>
        <title>My favorite movie</title>
      </head>
  
      <body>
        <h1>${favorite}</h1>
      </body>
    </html>`
  
    return document
}

app.get(
    '/movie/:title',
    (request , response) => {
        const favorite = `My Favorite movie is ${request.params.title} `
        const page = render(favorite)

        response.send(page)
    }
)
app.listen (
    port ,
    () => {
        console.log(`lisenting to the port ${port} `)
    }
)

