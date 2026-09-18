import type { IUser } from "../../../types/user";
import { guardarUsuarios, obtenerUsuarios } from "../../../utils/localStorage";

const formRegistro = document.getElementById("form-registro");

formRegistro?.addEventListener("submit", (evento) => {
    evento.preventDefault();
    const email = (document.getElementById("email") as HTMLInputElement).value;
    const password = (document.getElementById("password") as HTMLInputElement).value;
    const nuevoUsuario: IUser = {
        email: email,
        password: password,
        rol: "client",
    };
    const usuarios = obtenerUsuarios();

    const emailYaExiste = usuarios.find((usuario) => usuario.email === email);
    if (emailYaExiste) {
        alert("Ese email ya está registrado");
        return;
    } else {
        guardarUsuarios([...usuarios, nuevoUsuario]);
        alert("Usuario registrado con éxito");
        window.location.href = "../login/login.html";
    }
});
