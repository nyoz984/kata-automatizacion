const newman = require('newman');
const path = require('path');
const fs = require('fs');

// Asegurar que la carpeta 'newman' existe
const reportDir = path.join(__dirname, 'newman');
if (!fs.existsSync(reportDir)) {
    fs.mkdirSync(reportDir);
}

const collections = [
    { name: 'Run_1', file: 'FakeStoreAPI.postman_collection.json' },
    { name: 'Run_2', file: 'FakeStoreAPI.postman_collection.json' }
];

function runCollection(collection) {
    return new Promise((resolve, reject) => {
        newman.run({
            collection: require(`./${collection.file}`),
            environment: require('./FakeStoreAPI.postman_environment.json'),
            reporters: ['html'],
            reporter: { html: { export: path.join(reportDir, `report_${collection.name}.html`) } }
        }, (err, summary) => {
            if (err) {
                reject(err);
            } else {
                console.log(`\n🔹 Respuestas de ${collection.name}:`);
                console.log(JSON.stringify(summary.run.executions, null, 2)); // 📜 Imprimir respuestas en consola
                resolve();
            }
        });
    });
}

// Ejecutar todas las colecciones en paralelo
Promise.all(collections.map(runCollection))
    .then(() => console.log('\n✅ Todas las ejecuciones terminaron'))
    .catch((err) => console.error('❌ Error en la ejecución:', err));
