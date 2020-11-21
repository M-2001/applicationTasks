

const description = {
    demand: true,
            alias:'d',
            desc:'put task '
}

const complete = {
    default:true,
            alias :'c',
            desc:'check like complete'
}

const argv = require('yargs')
    .command('create','create a object to do',{
        description
    })
    .command('put','put state of tasks',{
        description,
        complete
    })
    .command('delete', 'delete a task',{
        description
    })
    .help()
    .argv;

    module.exports = { 
        argv
    }
