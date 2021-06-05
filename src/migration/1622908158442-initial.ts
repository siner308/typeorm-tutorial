import {MigrationInterface, QueryRunner} from "typeorm";

export class initial1622908158442 implements MigrationInterface {
    name = 'initial1622908158442'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("CREATE TABLE `restaurant` (`id` varchar(36) NOT NULL, `brand_id` varchar(255) NOT NULL, `name` varchar(150) NOT NULL, `position_latitude` double NOT NULL, `position_longitude` double NOT NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB");
        await queryRunner.query("CREATE TABLE `hashtag` (`id` varchar(36) NOT NULL, `name` varchar(100) NOT NULL, UNIQUE INDEX `IDX_347fec870eafea7b26c8a73bac` (`name`), PRIMARY KEY (`id`)) ENGINE=InnoDB");
        await queryRunner.query("CREATE TABLE `brand` (`id` varchar(36) NOT NULL, `name` varchar(150) NOT NULL, `owner_name` varchar(100) NOT NULL, `owner_telephone` varchar(20) NOT NULL, `owner_address` varchar(300) NOT NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB");
        await queryRunner.query("ALTER TABLE `restaurant` ADD CONSTRAINT `FK_6b058c459522b614a82ca200d17` FOREIGN KEY (`brand_id`) REFERENCES `brand`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `restaurant` DROP FOREIGN KEY `FK_6b058c459522b614a82ca200d17`");
        await queryRunner.query("DROP TABLE `brand`");
        await queryRunner.query("DROP INDEX `IDX_347fec870eafea7b26c8a73bac` ON `hashtag`");
        await queryRunner.query("DROP TABLE `hashtag`");
        await queryRunner.query("DROP TABLE `restaurant`");
    }

}
