import { obtenerUsuarios } from "../../../utils/localStorage";

const formLogin = document.getElementById("form-login");

formLogin?.addEventListener("submit", (evento) => {
    evento.preventDefault();
    
    const email = (document.getElementById("email") as HTMLInputElement).value;
    const password = (document.getElementById("password") as HTMLInputElement).value;
    const usuarios = obtenerUsuarios();
    
    
    const usuarioEncontrado = usuarios.find((usuario) => 
        usuario.email === email && usuario.password === password
    );
    if (usuarioEncontrado) {
        localStorage.setItem("userData", JSON.stringify(usuarioEncontrado));
        if (usuarioEncontrado.rol === "admin") {
            window.location.href = "../../admin/admin.html";
        } else {
            window.location.href = "../../client/index.html";
        }
    } else {
        alert("Email o contraseña incorrectos");
    }
});
