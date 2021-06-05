import {MigrationInterface, QueryRunner} from "typeorm";

export class relationName1622905229366 implements MigrationInterface {
    name = 'relationName1622905229366'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `restaurant` DROP COLUMN `positionPosition_latitude`");
        await queryRunner.query("ALTER TABLE `restaurant` DROP COLUMN `positionPosition_longitude`");
        await queryRunner.query("ALTER TABLE `brand` DROP COLUMN `ownerOwner_name`");
        await queryRunner.query("ALTER TABLE `brand` DROP COLUMN `ownerOwner_telephone`");
        await queryRunner.query("ALTER TABLE `brand` DROP COLUMN `ownerOwner_address`");
        await queryRunner.query("ALTER TABLE `restaurant` ADD `positionLatitude` double NOT NULL");
        await queryRunner.query("ALTER TABLE `restaurant` ADD `positionLongitude` double NOT NULL");
        await queryRunner.query("ALTER TABLE `brand` ADD `ownerName` varchar(100) NOT NULL");
        await queryRunner.query("ALTER TABLE `brand` ADD `ownerTelephone` int NOT NULL");
        await queryRunner.query("ALTER TABLE `brand` ADD `ownerAddress` varchar(300) NOT NULL");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `brand` DROP COLUMN `ownerAddress`");
        await queryRunner.query("ALTER TABLE `brand` DROP COLUMN `ownerTelephone`");
        await queryRunner.query("ALTER TABLE `brand` DROP COLUMN `ownerName`");
        await queryRunner.query("ALTER TABLE `restaurant` DROP COLUMN `positionLongitude`");
        await queryRunner.query("ALTER TABLE `restaurant` DROP COLUMN `positionLatitude`");
        await queryRunner.query("ALTER TABLE `brand` ADD `ownerOwner_address` varchar(300) NOT NULL");
        await queryRunner.query("ALTER TABLE `brand` ADD `ownerOwner_telephone` int NOT NULL");
        await queryRunner.query("ALTER TABLE `brand` ADD `ownerOwner_name` varchar(100) NOT NULL");
        await queryRunner.query("ALTER TABLE `restaurant` ADD `positionPosition_longitude` double NOT NULL");
        await queryRunner.query("ALTER TABLE `restaurant` ADD `positionPosition_latitude` double NOT NULL");
    }

}
