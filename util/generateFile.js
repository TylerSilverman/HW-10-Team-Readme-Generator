// const http = require ("http");

function generateFile (response) {
    return `

    ## Directory:
    ${response.Directory}

    ## name
    ${response.name}

    ## idNumber
    ${response.idNumber}

    ## Email
    ${response.email}

    `;
}

module.exports = generateFile;
