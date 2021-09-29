import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class openItems1632938750067 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.createTable(
        new Table({
          name: 'open_items',
          columns: [
            {
              name: 'id',
              type: 'uuid',
              isPrimary: true,
            },
            {
              name: 'item',
              type: 'varchar',
            },
            {
              name: 'order_id',
              type: 'uuid',
              isNullable: true,
            },
            {
              name: 'amount_item',
              type: 'money',
            },
            {
              name: 'quantity_item',
              type: 'int',
            },
            {
              name: 'createdAt',
              type: 'timestamp',
              default: 'now()',
            },
            {
              name: 'updatedAt',
              type: 'timestamp',
              default: 'now()',
            },
          ],
        }),
      );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.dropTable('open_items')
    }

}
