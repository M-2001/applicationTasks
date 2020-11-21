

const fs = require('fs');

let ListToDo = [];

const saveData=()=>{
    let data = JSON.stringify(ListToDo);

    fs.writeFile('bd/bd.json', data, (err)=>{
        if(err) throw new Error('Data no save!!!', err);
    })
}

const loadDb = () => {
    try{
        ListToDo = require('../bd/bd.json');
    } catch(error){
        ListToDo = [];
    }
}

const create = (description) => {
    loadDb();
    let ToDo = {
        description,
        complete: false
    };
    ListToDo.push(ToDo);
    saveData();
    return ToDo;
}

const getList = () => {
    loadDb();

    return ListToDo;
}

const put = (description, complete= true)=>{
    loadDb();

    let index = ListToDo.findIndex(task=>{
        return task.description === description
    });
    if (index >= 0) {
        ListToDo[index].complete = complete;
        saveData();
        return true;
    }else{
        return false;
    }
}

const del = (description)=>{
    loadDb();
    let newList= ListToDo.filter(task=> task.description !== description);
    if (ListToDo.length === newList.length) {
        return false;
    }else{
        ListToDo = newList;
        saveData();
        return true;
    }

}

module.exports = {
    create,
    getList,
    put,
    del
}