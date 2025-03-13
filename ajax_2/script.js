var btn = document.getElementById('request');
var content = document.getElementById('texto');
let fragmento = document.createDocumentFragment();
var request = new XMLHttpRequest();

request.open('GET', 'https://jsonplaceholder.typicode.com/posts', true); //El tercer parametro "true" se puede omitir, ya que por defecto
//AJAX permite que sea asincrono, si queremos que sea sincrono el tercer parametro debe ser false.

request.onreadystatechange = function(){
    console.log(request);
    if(request.readyState === 4){
        content.style.border = '1px solid #e8e8e8';
        if(request.status == 200){
            content.innerHTML = request.responseText;
            let json = JSON.parse(request.responseText);
            console.log(json);
            console.log(request.responseText);

            json.forEach(j => {
                const li = document.createElement("li");
                li.innerHTML = `${j.id} ${j.title}`;
                fragmento.appendChild(li);
            });

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