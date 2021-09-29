import {MigrationInterface, QueryRunner, TableForeignKey} from "typeorm";

export class RelationGamesGenres1632940571953 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.createForeignKey(
        'games',
        new TableForeignKey({
          name: 'GenresForeignKey',
          columnNames: ['genre_id'],
          referencedColumnNames: ['id'],
          referencedTableName: 'genres',
          onDelete: 'SET NULL',
          onUpdate: 'CASCADE',
        }),
      );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.dropForeignKey('games', 'GenresForeignKey');
    }

}
