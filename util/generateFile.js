// const http = require ("http");

function generateFile (response) {
    return `

    ## Directory:
    ${answer.role}

    ## name
    ${answer.name}

    ## idNumber
    ${answer.idNumber}

    ## Email
    ${answer.email}

    `;
}

module.exports = generateFile;
