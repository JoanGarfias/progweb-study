navigator.mediaDevices.getUserMedia({audio: true, video:true}).then((stream) => {
    console.log(stream);
    let video = document.getElementById('camarela');
    video.srcObject = stream;
    })
    .catch((err) => console.log(err));

const video = document.getElementById('camarela');
    const canvas = document.getElementById('canvas');
    const btn = document.getElementById('capturar');
    navigator.mediaDevices.getUserMedia({ video: true, audio: false })
    .then((stream) => {
        video.srcObject = stream;
    })
    .catch((err) => console.error("Error accediendo a la cámara: ", err));
    btn.addEventListener("click", () => {
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;

    const ctx = canvas.getContext('2d');
    ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
    const imagen = canvas.toDataURL('image/jpeg');

    const enlace = document.createElement('a');
    enlace.href = imagen;
    enlace.download = 'captura.jpg';
    enlace.click();
});