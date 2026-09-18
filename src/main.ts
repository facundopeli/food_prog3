const rutaActual = window.location.pathname;

if (rutaActual.includes("auth")) {
  // no hacemos nada, dejamos pasar
} else {
    const userData = localStorage.getItem("userData");

    if (!userData) {
      window.location.href = "/src/pages/auth/login/login.html";
    }else {
      const usuario = JSON.parse(userData);

      if (rutaActual.includes("admin") && usuario.rol !== "admin") {
        window.location.href = "/src/pages/auth/login/login.html";
      }
    }
}
