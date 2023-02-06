import {MigrationInterface, QueryRunner} from "typeorm";

export class tableUserAndProductsAndBuyCar1675720081295 implements MigrationInterface {
    name = 'tableUserAndProductsAndBuyCar1675720081295'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" ALTER COLUMN "createdOn" SET DEFAULT 'Mon Feb 06 2023'`);
        await queryRunner.query(`ALTER TABLE "user" ALTER COLUMN "updatedOn" SET DEFAULT 'Mon Feb 06 2023'`);
        await queryRunner.query(`ALTER TABLE "buy_car" ALTER COLUMN "createdOn" SET DEFAULT 'Mon Feb 06 2023'`);
        await queryRunner.query(`ALTER TABLE "buy_car" ALTER COLUMN "updatedOn" SET DEFAULT 'Mon Feb 06 2023'`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "buy_car" ALTER COLUMN "updatedOn" SET DEFAULT '2023-02-06 00:00:00'`);
        await queryRunner.query(`ALTER TABLE "buy_car" ALTER COLUMN "createdOn" SET DEFAULT '2023-02-06 00:00:00'`);
        await queryRunner.query(`ALTER TABLE "user" ALTER COLUMN "updatedOn" SET DEFAULT '2023-02-06 00:00:00'`);
        await queryRunner.query(`ALTER TABLE "user" ALTER COLUMN "createdOn" SET DEFAULT '2023-02-06 00:00:00'`);
    }

}
