import {MigrationInterface, QueryRunner} from "typeorm";

export class relationTable1623481581812 implements MigrationInterface {
    name = 'relationTable1623481581812'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("CREATE TABLE `restaurant_hashtags_hashtag` (`restaurantId` varchar(36) NOT NULL, `hashtagId` varchar(36) NOT NULL, INDEX `IDX_caa62f67d6b91307f345c9082c` (`restaurantId`), INDEX `IDX_85a9229a078d566a51e91a4731` (`hashtagId`), PRIMARY KEY (`restaurantId`, `hashtagId`)) ENGINE=InnoDB");
        await queryRunner.query("CREATE TABLE `brand_hashtags_hashtag` (`brandId` varchar(36) NOT NULL, `hashtagId` varchar(36) NOT NULL, INDEX `IDX_b2d68e1e3587394d2d59619029` (`brandId`), INDEX `IDX_90257a141492c8922a7d26b039` (`hashtagId`), PRIMARY KEY (`brandId`, `hashtagId`)) ENGINE=InnoDB");
        await queryRunner.query("ALTER TABLE `restaurant_hashtags_hashtag` ADD CONSTRAINT `FK_caa62f67d6b91307f345c9082cc` FOREIGN KEY (`restaurantId`) REFERENCES `restaurant`(`id`) ON DELETE CASCADE ON UPDATE CASCADE");
        await queryRunner.query("ALTER TABLE `restaurant_hashtags_hashtag` ADD CONSTRAINT `FK_85a9229a078d566a51e91a47313` FOREIGN KEY (`hashtagId`) REFERENCES `hashtag`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION");
        await queryRunner.query("ALTER TABLE `brand_hashtags_hashtag` ADD CONSTRAINT `FK_b2d68e1e3587394d2d59619029b` FOREIGN KEY (`brandId`) REFERENCES `brand`(`id`) ON DELETE CASCADE ON UPDATE CASCADE");
        await queryRunner.query("ALTER TABLE `brand_hashtags_hashtag` ADD CONSTRAINT `FK_90257a141492c8922a7d26b0397` FOREIGN KEY (`hashtagId`) REFERENCES `hashtag`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `brand_hashtags_hashtag` DROP FOREIGN KEY `FK_90257a141492c8922a7d26b0397`");
        await queryRunner.query("ALTER TABLE `brand_hashtags_hashtag` DROP FOREIGN KEY `FK_b2d68e1e3587394d2d59619029b`");
        await queryRunner.query("ALTER TABLE `restaurant_hashtags_hashtag` DROP FOREIGN KEY `FK_85a9229a078d566a51e91a47313`");
        await queryRunner.query("ALTER TABLE `restaurant_hashtags_hashtag` DROP FOREIGN KEY `FK_caa62f67d6b91307f345c9082cc`");
        await queryRunner.query("DROP INDEX `IDX_90257a141492c8922a7d26b039` ON `brand_hashtags_hashtag`");
        await queryRunner.query("DROP INDEX `IDX_b2d68e1e3587394d2d59619029` ON `brand_hashtags_hashtag`");
        await queryRunner.query("DROP TABLE `brand_hashtags_hashtag`");
        await queryRunner.query("DROP INDEX `IDX_85a9229a078d566a51e91a4731` ON `restaurant_hashtags_hashtag`");
        await queryRunner.query("DROP INDEX `IDX_caa62f67d6b91307f345c9082c` ON `restaurant_hashtags_hashtag`");
        await queryRunner.query("DROP TABLE `restaurant_hashtags_hashtag`");
    }

}
