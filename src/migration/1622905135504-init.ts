import {MigrationInterface, QueryRunner} from "typeorm";

export class init1622905135504 implements MigrationInterface {
    name = 'init1622905135504'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("CREATE TABLE `restaurant` (`id` varchar(36) NOT NULL, `name` varchar(150) NOT NULL, `brandId` varchar(36) NULL, `positionPosition_latitude` double NOT NULL, `positionPosition_longitude` double NOT NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB");
        await queryRunner.query("CREATE TABLE `hashtag` (`id` varchar(36) NOT NULL, `name` varchar(100) NOT NULL, UNIQUE INDEX `IDX_347fec870eafea7b26c8a73bac` (`name`), PRIMARY KEY (`id`)) ENGINE=InnoDB");
        await queryRunner.query("CREATE TABLE `brand` (`id` varchar(36) NOT NULL, `name` varchar(150) NOT NULL, `ownerOwner_name` varchar(100) NOT NULL, `ownerOwner_telephone` int NOT NULL, `ownerOwner_address` varchar(300) NOT NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB");
        await queryRunner.query("ALTER TABLE `restaurant` ADD CONSTRAINT `FK_54aa6c489e67a91328c2e18cd12` FOREIGN KEY (`brandId`) REFERENCES `brand`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `restaurant` DROP FOREIGN KEY `FK_54aa6c489e67a91328c2e18cd12`");
        await queryRunner.query("DROP TABLE `brand`");
        await queryRunner.query("DROP INDEX `IDX_347fec870eafea7b26c8a73bac` ON `hashtag`");
        await queryRunner.query("DROP TABLE `hashtag`");
        await queryRunner.query("DROP TABLE `restaurant`");
    }

}
