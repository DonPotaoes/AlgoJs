function getAge(date)
{ 
    var diff = Date.now() - date.getTime();
    var age = new Date(diff); 
    return Math.abs(age.getUTCFullYear() - 1970);
}
var resultat = (getAge(new Date(2003, 2, 6)));

    if(resultat < 18)
    {
       return console.log(resultat+" ans. Vous n'êtes pas un adulte");
    }
    else
    {
       return console.log(resultat+" ans. Vous êtes un adulte");
    }
    
