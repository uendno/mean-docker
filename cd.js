const cd = require('/Users/uendno/Sourcecode/cdjs-agent');

cd.stages([
    cd.stage('Build', () => {   
        return cd.steps()
            .then(cd.shell('docker-compose build'))
    }),

    cd.stage('Deploy', () => {
        return cd.steps()
            .then(cd.shell('docker-compose up'))
    })
])