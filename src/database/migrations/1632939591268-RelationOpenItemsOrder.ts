import {MigrationInterface, QueryRunner, TableForeignKey} from "typeorm";

export class RelationOpenItemsOrder1632939591268 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.createForeignKey(
        'open_items',
        new TableForeignKey({
          name: 'OpenItemsForeignKey',
          columnNames: ['order_id'],
          referencedColumnNames: ['id'],
          referencedTableName: 'orders',
          onDelete: 'SET NULL',
          onUpdate: 'CASCADE',
        }),
      );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.dropForeignKey('open_items', 'OpenItemsForeignKey');
    }

}
