var btn = document.getElementById('request');
var content = document.getElementById('texto');
let fragmento = document.createDocumentFragment();
var request = new XMLHttpRequest();

request.open('GET', 'https://randomuser.me/api/?results=10', true);

request.onreadystatechange = function() {
    if (request.readyState === 4) {
        content.style.border = '1px solid #e8e8e8';
        if (request.status == 200) {
            let json = JSON.parse(request.responseText);

            json.results.forEach(j => {
                const li = document.createElement("li");
                li.className = 'elem';

                const img = document.createElement("img");

                li.innerHTML = `${j.name.title} ${j.name.first} ${j.name.last}`;
                img.src = j.picture.large;
                img.className = 'elem';

                li.appendChild(img);
                fragmento.appendChild(li);
            });

            content.appendChild(fragmento);
        } else {
            content.innerHTML = "An error has occurred while sending the request";
        }
    }
}

btn.addEventListener('click', function(){
    this.style.display = 'none';
    request.send();
    console.log("He enviado la petición");
});