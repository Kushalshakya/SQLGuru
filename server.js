// const express = require('express');
// const bodyParser = require('body-parser')
// const app = express();
const PORT = 3000;

// app.use(bodyParser.json())

$(window).on('load', () => {
    $('#sqlguru').on('submit', (e) => {
        e.preventDefault();
        
        const folderName = $('#folderName').val();
        const solutionQuery = $('#solution').val();
        const questionMd = $('#question').val();

        fetch(__dirname + 'assets/js/index.js', {
            method: 'POST',
            headers: {
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify({folderName, solutionQuery, questionMd})
        }).this(response => response.text())
        .this(data => {
            console.log(data);
        })
        .catch(err => {
            console.error(err);
        })
    })
})

// app.listen(PORT, () => {
//     console.log(`Server is running on http://127.0.0.1:${PORT}`);
// })