import { getRepository, Repository } from 'typeorm';

import { User } from '../../../users/entities/User';
import { Game } from '../../entities/Game';

import { IGamesRepository } from '../IGamesRepository';

export class GamesRepository implements IGamesRepository {
  private repository: Repository<Game>;

  constructor() {
    this.repository = getRepository(Game);
  }

  async findByTitleContaining(param: string): Promise<Game[]> {
    const findTitle = await this.repository
      // .createQueryBuilder()
      // .select('games')
      // .from(Game, 'games')
      // .where(`lower(games.title) like lower('%:title%')`, {title: param})
      // .getMany()
      .query(`select * from public.games g where lower(g.title) like lower('%${param}%')`)
    
      return findTitle;
  }

  async countAllGames(): Promise<[{ count: string }]> {
    return await this.repository.query('select count(distinct g.title) from public.games g'); // Complete usando raw query
  }

  async findUsersByGameId(id: string): Promise<User[]> {
    const usersGames = await this.repository
      // .createQueryBuilder('users')
      // .leftJoinAndSelect('users_games_games', 'gu', 'user.id = gu."usersId"')
      // .leftJoinAndSelect('games', 'g', 'gu."usersId" = g.id')
      // .where(`users.id = :id`, {id: id})
      // .getRawMany()
      .query(`select u.* from public.users u 
      inner join public.users_games_games ugg on u.id = ugg."usersId"
      inner join public.games g on ugg."gamesId" = g.id
      where g.id  = '${id}'`)

    return usersGames;
  }
}
