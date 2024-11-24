document.getElementById('registroForm').addEventListener('submit', function(event) {

    const nombre = document.getElementById('nombre').value.trim();
    const correo = document.getElementById('correo').value.trim();
    const imagen = document.getElementById('imagen').files.length;
    const contrasenia = document.getElementById('contrasenia').value.trim();


    if (nombre === '' || correo === '' || imagen === 0 || contrasenia === '') {
        event.preventDefault();
        alert('Todos los campos son obligatorios');
        return;
    }
});

function mostrarImagen(event) {
    let imagen = document.getElementById('ver-imagen');
    imagen.src = URL.createObjectURL(event.target.files[0]);
}
