import {MigrationInterface, QueryRunner} from "typeorm";

export class base1685428755787 implements MigrationInterface {
    name = 'base1685428755787'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`tipo_pago\` (\`id\` int NOT NULL AUTO_INCREMENT, \`fechaCreacion\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`fechaBorrado\` datetime(6) NULL, \`nombre\` varchar(255) NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`tipo_trabajo\` (\`id\` int NOT NULL AUTO_INCREMENT, \`fechaCreacion\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`fechaBorrado\` datetime(6) NULL, \`nombre\` varchar(255) NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`trabajo_realizado\` (\`id\` int NOT NULL AUTO_INCREMENT, \`fechaCreacion\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`fechaBorrado\` datetime(6) NULL, \`cantidad\` int NOT NULL, \`precio\` int NOT NULL, \`tipoTrabajoId\` int NOT NULL, \`detalleFacturaId\` int NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`tipo_empleado\` (\`id\` int NOT NULL AUTO_INCREMENT, \`fechaCreacion\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`fechaBorrado\` datetime(6) NULL, \`nombre\` varchar(255) NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`empleado\` (\`id\` int NOT NULL AUTO_INCREMENT, \`fechaCreacion\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`fechaBorrado\` datetime(6) NULL, \`nombre\` varchar(255) NOT NULL, \`apellido\` varchar(255) NOT NULL, \`telefono\` varchar(255) NOT NULL, \`cedula\` varchar(255) NOT NULL, \`tipoEmpleadoId\` int NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`detalle_factura\` (\`id\` int NOT NULL AUTO_INCREMENT, \`fechaCreacion\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`fechaBorrado\` datetime(6) NULL, \`subtotal\` int NULL, \`iva\` int NULL, \`total\` int NULL, \`clienteId\` int NOT NULL, \`empleadoId\` int NOT NULL, \`tipoPagoId\` int NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`cliente\` (\`id\` int NOT NULL AUTO_INCREMENT, \`fechaCreacion\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`fechaBorrado\` datetime(6) NULL, \`nombre\` varchar(255) NOT NULL, \`ruc\` varchar(255) NOT NULL, \`telefono\` varchar(255) NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`usuario\` (\`id\` int NOT NULL AUTO_INCREMENT, \`fechaCreacion\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`fechaBorrado\` datetime(6) NULL, \`nombre\` varchar(255) NOT NULL, \`nombreUsuario\` varchar(255) NOT NULL, \`contrasenia\` varchar(255) NOT NULL, \`rolId\` int NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`rol\` (\`id\` int NOT NULL AUTO_INCREMENT, \`fechaCreacion\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`fechaBorrado\` datetime(6) NULL, \`nombre\` varchar(255) NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`trabajo_realizado\` ADD CONSTRAINT \`FK_c5f6b8521e789856462dff2794e\` FOREIGN KEY (\`tipoTrabajoId\`) REFERENCES \`tipo_trabajo\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`trabajo_realizado\` ADD CONSTRAINT \`FK_49c0f266fb2f98d71c66b7507fe\` FOREIGN KEY (\`detalleFacturaId\`) REFERENCES \`detalle_factura\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`empleado\` ADD CONSTRAINT \`FK_58374bb32bbac46365ac2ca0c1d\` FOREIGN KEY (\`tipoEmpleadoId\`) REFERENCES \`tipo_empleado\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`detalle_factura\` ADD CONSTRAINT \`FK_423c2d1038d24e83ace727d9c70\` FOREIGN KEY (\`clienteId\`) REFERENCES \`cliente\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`detalle_factura\` ADD CONSTRAINT \`FK_b7aed44c8114e3bedfc9a069184\` FOREIGN KEY (\`tipoPagoId\`) REFERENCES \`tipo_pago\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`detalle_factura\` ADD CONSTRAINT \`FK_33129b681cf2bf44120f8196c08\` FOREIGN KEY (\`empleadoId\`) REFERENCES \`empleado\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`usuario\` ADD CONSTRAINT \`FK_611daf5befc024d9e0bd7bdf4da\` FOREIGN KEY (\`rolId\`) REFERENCES \`rol\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`usuario\` DROP FOREIGN KEY \`FK_611daf5befc024d9e0bd7bdf4da\``);
        await queryRunner.query(`ALTER TABLE \`detalle_factura\` DROP FOREIGN KEY \`FK_33129b681cf2bf44120f8196c08\``);
        await queryRunner.query(`ALTER TABLE \`detalle_factura\` DROP FOREIGN KEY \`FK_b7aed44c8114e3bedfc9a069184\``);
        await queryRunner.query(`ALTER TABLE \`detalle_factura\` DROP FOREIGN KEY \`FK_423c2d1038d24e83ace727d9c70\``);
        await queryRunner.query(`ALTER TABLE \`empleado\` DROP FOREIGN KEY \`FK_58374bb32bbac46365ac2ca0c1d\``);
        await queryRunner.query(`ALTER TABLE \`trabajo_realizado\` DROP FOREIGN KEY \`FK_49c0f266fb2f98d71c66b7507fe\``);
        await queryRunner.query(`ALTER TABLE \`trabajo_realizado\` DROP FOREIGN KEY \`FK_c5f6b8521e789856462dff2794e\``);
        await queryRunner.query(`DROP TABLE \`rol\``);
        await queryRunner.query(`DROP TABLE \`usuario\``);
        await queryRunner.query(`DROP TABLE \`cliente\``);
        await queryRunner.query(`DROP TABLE \`detalle_factura\``);
        await queryRunner.query(`DROP TABLE \`empleado\``);
        await queryRunner.query(`DROP TABLE \`tipo_empleado\``);
        await queryRunner.query(`DROP TABLE \`trabajo_realizado\``);
        await queryRunner.query(`DROP TABLE \`tipo_trabajo\``);
        await queryRunner.query(`DROP TABLE \`tipo_pago\``);
    }

}
