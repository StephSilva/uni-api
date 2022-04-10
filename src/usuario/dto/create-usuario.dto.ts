export class CreateUsuarioDto {
  nombre: string;
  apellidoPaterno: string;
  apellidoMaterno: string;
  correo: string;
  password: string;
  rolId: string;
}

export class FilterOptionsDto {
  rolId?: string;
  activo?: boolean;
}
