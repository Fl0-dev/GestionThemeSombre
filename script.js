//récupération des éléments
var btn = document.querySelector('#mode');
var span = document.querySelector('span');

//fonction du bouton
btn.addEventListener('click',()=>{
    //récupération des class du body
    var classesDuBody = document.body.classList;
    //si dark on change le thème
    if(classesDuBody.contains('dark')){
        document.body.classList.remove('dark');
        span.textContent ="Thème sombre";
        localStorage.setItem('theme','clair');
    }else{
        modeSombre();
    }
})
function modeSombre() {
    document.body.classList.add('dark');
    span.textContent ="Thème clair";
    localStorage.setItem('theme','sombre');
}
