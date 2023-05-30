import { Connection } from 'typeorm';
import { Factory, Seeder } from 'typeorm-seeding';
import { faker } from '@faker-js/faker';
import { Empleado } from '../../empleado/entities/empleado.entity';
import { Usuario } from '../../usuario/entities/usuario.entity';
import { Rol } from '../../rol/entities/rol.entity';
import { TipoEmpleado } from '../../tipo-empleado/entities/tipo-empleado.entity';
import { TrabajoRealizado } from '../../trabajo-realizado/entities/trabajo-realizado.entity';
import { TipoTrabajo } from '../../tipo-trabajo/entities/tipo-trabajo.entity';
import { DetalleFactura } from '../../detalle-factura/entities/detalle-factura.entity';
import { TipoPago } from '../../tipo-pago/entities/tipo-pago.entity';
import { Cliente } from '../../cliente/entities/cliente.entity';

export class InitDbSeed implements Seeder {
    public async run(factory: Factory, connection: Connection): Promise<void> {
        await connection
            .createQueryBuilder()
            .insert()
            .into(Rol)
            .values([
                { id: 1, nombre: "Contador" },
                { id: 2, nombre: "Programador" },
                { id: 3, nombre: "Gerente" },
            ])
            .execute();

        await connection
            .createQueryBuilder()
            .insert()
            .into(Usuario)
            .values([
                {
                    id: 1,
                    nombre: 'Stephanie Silva',
                    rolId: 1,
                    nombreUsuario: "sofia",
                    contrasenia: "sofia123",
                },
                {
                    id: 2,
                    nombre: 'Joaquin Mayorga',
                    rolId: 2,
                    nombreUsuario: "joaquin",
                    contrasenia: "joaquin123",
                }
            ])
            .execute();

        await connection
            .createQueryBuilder()
            .insert()
            .into(Cliente)
            .values([
                {
                    id: 1,
                    nombre: "SEVASA",
                    telefono: "88880288",
                    ruc: "2134567890154",
                }
            ])
            .execute();

        await connection
            .createQueryBuilder()
            .insert()
            .into(TipoEmpleado)
            .values([{
                id: 1,
                nombre: "Gerente"
            }, {
                id: 2,
                nombre: "Asistente de gerente"
            }, {
                id: 3,
                nombre: "Contador"
            }])
            .execute();

        await connection
            .createQueryBuilder()
            .insert()
            .into(TipoPago)
            .values([{
                id: 1,
                nombre: "Efectivo"
            }, {
                id: 2,
                nombre: "Deposito"
            }])
            .execute();


        await connection
            .createQueryBuilder()
            .insert()
            .into(Empleado)
            .values([{
                id: 1,
                nombre: faker.name.firstName(),
                apellido: faker.name.lastName(),
                cedula: faker.random.alphaNumeric(12),
                telefono: faker.phone.number(),
                tipoEmpleadoId: 1
            }, {
                id: 2,
                nombre: faker.name.firstName(),
                apellido: faker.name.lastName(),
                cedula: faker.random.alphaNumeric(12),
                telefono: faker.phone.number(),
                tipoEmpleadoId: 1
            }, {
                id: 3,
                nombre: faker.name.firstName(),
                apellido: faker.name.lastName(),
                cedula: faker.random.alphaNumeric(12),
                telefono: faker.phone.number(),
                tipoEmpleadoId: 1
            }])
            .execute();

        await connection
            .createQueryBuilder()
            .insert()
            .into(TipoTrabajo)
            .values([
                {
                    id: 1,
                    nombre: "Cambio de valvulas"
                },
                {
                    id: 2,
                    nombre: "Manholes"
                },
                {
                    id: 3,
                    nombre: "Reparacion del eje"
                },
                {
                    id: 4,
                    nombre: "Reparacion de las patas de embanque"
                },
                {
                    id: 5,
                    nombre: "Cambio de piezas"
                }
            ])
            .execute();


        let facturaId = 0;
        for (const item of Array(100).fill("")) {
            facturaId = facturaId + 1;
            await connection
                .createQueryBuilder()
                .insert()
                .into(DetalleFactura)
                .values({
                    id: facturaId,
                    clienteId: 1,
                    empleadoId: 1,
                    tipoPagoId: 1,
                    iva: 150,
                    subtotal: 250,
                    total: 400,
                })
                .execute();
            for (const item of Array(25).fill("")) {
                await connection
                    .createQueryBuilder()
                    .insert()
                    .into(TrabajoRealizado)
                    .values({
                        cantidad: 1,
                        precio: parseFloat(faker.finance.amount()),
                        tipoTrabajoId: 1,
                        detalleFacturaId: facturaId
                    })
                    .execute();
            }
        }
    }
}
