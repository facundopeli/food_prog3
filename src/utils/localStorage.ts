import type { IUser } from "../types/user";

export function guardarUsuarios(usuarios: IUser[]): void {
    localStorage.setItem("users", JSON.stringify(usuarios));
}

export function obtenerUsuarios(): IUser[] {
    const datos = localStorage.getItem("users");
    if (datos) {
        return JSON.parse(datos);
    } else {
        return [];
  }
}

