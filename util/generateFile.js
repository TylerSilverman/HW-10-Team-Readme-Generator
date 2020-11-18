const http = require ("http");
function generateFile (response) {
    return `



    ${response.name}
    ${response.id}
    ${response.email}



    `;
}

module.exports = generateFile;
