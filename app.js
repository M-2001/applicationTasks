//const argv = require('yargs').argv;

const argv = require('./config/yargs').argv;

const ToDo = require('./To-Do/to-Do');

const colors = require('colors');
const toDo = require('./To-Do/to-Do');

let command = argv._[0];


switch (command) {
    case 'create':
        let task = ToDo.create(argv.description);
        console.log(task);
        break;

    case 'list':
        let list = ToDo.getList();
        for (let task of list){
            console.log('====por hacer===='.green);
            console.log(task.description);
            console.log('Status: ', task.complete);
            console.log('========='.green);
        }

        break;
    case 'put':
        let put = ToDo.put(argv.description, argv.complete);
        console.log(put);
        break;


    case 'delete':
        let del = ToDo.del(argv.description);
        console.log(del);

        break;

    default:
        console.log('command not found');
        break;
}