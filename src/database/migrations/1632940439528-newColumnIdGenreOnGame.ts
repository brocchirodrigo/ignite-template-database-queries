import {MigrationInterface, QueryRunner, TableColumn} from "typeorm";

export class newColumnIdGenreOnGame1632940439528 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.addColumn(
        'games',
        new TableColumn({
          name: 'genre_id',
          type: 'uuid',
          isNullable: true,
        }),
      );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.dropColumn('games', 'genre_id');
    }

}
