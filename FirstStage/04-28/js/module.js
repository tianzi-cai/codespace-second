// export var firstName ='Bill';
// export var lastName ='Gates';
// export var year =2020;

var firstName ='Bill';
var lastName ='Gates';
var year =2020;

var obj ={
    name:'cai',
    age:18
}

function greeting(){
    console.log('hello world');
}

export{lastName,obj,greeting as fun};