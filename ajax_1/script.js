var btn = document.getElementById('request');
var content = document.getElementById('texto');
var request = new XMLHttpRequest();

request.open('GET', 'mitexto.txt', true); //El tercer parametro "true" se puede omitir, ya que por defecto
//AJAX permite que sea asincrono, si queremos que sea sincrono el tercer parametro debe ser false.

request.onreadystatechange = function(){
    if(request.readyState === 4){
        content.style.border = '1px solid #e8e8e8';
        if(request.status == 200){
            content.innerHTML = request.responseText;
            console.log(request.responseText);
        }
        else{
            content.innerHTML = "An error has been ocurred when you sent the pet";
        }
    }
}

btn.addEventListener('click', function(){
    this.style.display = 'none';
    request.send();
    console.log("He enviado la peticion")
});