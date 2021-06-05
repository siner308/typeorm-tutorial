import {MigrationInterface, QueryRunner} from "typeorm";

export class relationName1622905360219 implements MigrationInterface {
    name = 'relationName1622905360219'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `restaurant` DROP COLUMN `positionPosition_latitude`");
        await queryRunner.query("ALTER TABLE `restaurant` DROP COLUMN `positionPosition_longitude`");
        await queryRunner.query("ALTER TABLE `brand` DROP COLUMN `ownerOwner_name`");
        await queryRunner.query("ALTER TABLE `brand` DROP COLUMN `ownerOwner_telephone`");
        await queryRunner.query("ALTER TABLE `brand` DROP COLUMN `ownerOwner_address`");
        await queryRunner.query("ALTER TABLE `restaurant` ADD `position_latitude` double NOT NULL");
        await queryRunner.query("ALTER TABLE `restaurant` ADD `position_longitude` double NOT NULL");
        await queryRunner.query("ALTER TABLE `brand` ADD `owner_name` varchar(100) NOT NULL");
        await queryRunner.query("ALTER TABLE `brand` ADD `owner_telephone` int NOT NULL");
        await queryRunner.query("ALTER TABLE `brand` ADD `owner_address` varchar(300) NOT NULL");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `brand` DROP COLUMN `owner_address`");
        await queryRunner.query("ALTER TABLE `brand` DROP COLUMN `owner_telephone`");
        await queryRunner.query("ALTER TABLE `brand` DROP COLUMN `owner_name`");
        await queryRunner.query("ALTER TABLE `restaurant` DROP COLUMN `position_longitude`");
        await queryRunner.query("ALTER TABLE `restaurant` DROP COLUMN `position_latitude`");
        await queryRunner.query("ALTER TABLE `brand` ADD `ownerOwner_address` varchar(300) NOT NULL");
        await queryRunner.query("ALTER TABLE `brand` ADD `ownerOwner_telephone` int NOT NULL");
        await queryRunner.query("ALTER TABLE `brand` ADD `ownerOwner_name` varchar(100) NOT NULL");
        await queryRunner.query("ALTER TABLE `restaurant` ADD `positionPosition_longitude` double NOT NULL");
        await queryRunner.query("ALTER TABLE `restaurant` ADD `positionPosition_latitude` double NOT NULL");
    }

}
