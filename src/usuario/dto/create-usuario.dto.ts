export class CreateUsuarioDto {
    nombre: string;
    nombreUsuario: string;
    contrasenia: string;
    rolId: number;
    fechaBorrado?: Date | null;
}
