import {MigrationInterface, QueryRunner} from "typeorm";

export class dateColumns1623483344470 implements MigrationInterface {
    name = 'dateColumns1623483344470'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `restaurant` ADD `createdAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6)");
        await queryRunner.query("ALTER TABLE `restaurant` ADD `updatedAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6)");
        await queryRunner.query("ALTER TABLE `restaurant` ADD `deletedAt` datetime(6) NULL");
        await queryRunner.query("ALTER TABLE `hashtag` ADD `createdAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6)");
        await queryRunner.query("ALTER TABLE `hashtag` ADD `updatedAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6)");
        await queryRunner.query("ALTER TABLE `hashtag` ADD `deletedAt` datetime(6) NULL");
        await queryRunner.query("ALTER TABLE `brand` ADD `createdAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6)");
        await queryRunner.query("ALTER TABLE `brand` ADD `updatedAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6)");
        await queryRunner.query("ALTER TABLE `brand` ADD `deletedAt` datetime(6) NULL");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `brand` DROP COLUMN `deletedAt`");
        await queryRunner.query("ALTER TABLE `brand` DROP COLUMN `updatedAt`");
        await queryRunner.query("ALTER TABLE `brand` DROP COLUMN `createdAt`");
        await queryRunner.query("ALTER TABLE `hashtag` DROP COLUMN `deletedAt`");
        await queryRunner.query("ALTER TABLE `hashtag` DROP COLUMN `updatedAt`");
        await queryRunner.query("ALTER TABLE `hashtag` DROP COLUMN `createdAt`");
        await queryRunner.query("ALTER TABLE `restaurant` DROP COLUMN `deletedAt`");
        await queryRunner.query("ALTER TABLE `restaurant` DROP COLUMN `updatedAt`");
        await queryRunner.query("ALTER TABLE `restaurant` DROP COLUMN `createdAt`");
    }

}
