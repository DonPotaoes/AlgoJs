exports.mytodolist = function(){
return "start todolist";
}

var dico = new Map();

var t1 = "faire un truc";
var t2 = "faire un autre truc";
var t3 = "refaire un truc";
var test = "tache 1";

dico.set("tache 1", t1);
dico.set("tache 2", t2);
dico.set("tache 3", t3);
dico.size;

exports.searchtask = function(){
    return dico.get(test);
}

exports.showall = function(){
    for (var[key,value]of dico){
        console.log(key+":"+value);
    }
}