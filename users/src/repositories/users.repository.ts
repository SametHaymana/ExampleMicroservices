import { Users } from '../models/user.model';
import { seq } from '../services/db.services';

interface IUserUpdateInput {
  name?: string;
  surname?: string;
  email?: string;
  password?: string;
  type?: number;
}

interface IUserCreateInput extends IUserUpdateInput {
  id: string;
}

interface IUserRepository {
  getAll(page: number, pageSize: number): Promise<Users[]>;
  getById(id: string): Promise<Users | null>;
  create(createParams: IUserCreateInput): Promise<Users>;
  update(id: string, userParams: IUserUpdateInput): Promise<void>;
  delete(id: string): Promise<void>;
}

export class UserRepository implements IUserRepository {
  async getAll(page: number, pageSize: number): Promise<Users[]> {
    const users = await Users.findAll({
      order: [['updatedAt', 'DESC']],
      limit: page,
      offset: (page - 1) * pageSize,
    });

    return users;
  }
  async getById(id: string): Promise<Users | null> {
    {
      const user = await Users.findByPk(id);
      return user;
    }
  }
  async create(createParams: IUserCreateInput): Promise<Users> {
    const user = await Users.create({
      id: createParams.id,
      name: createParams.name,
      surname: createParams.surname,
      email: createParams.email,
      password: createParams.password,
      type: createParams.type,
    });

    await user.save();

    return user;
  }
  async update(id: string, userParams: Users): Promise<void> {
    await Users.update(userParams, {
      where: {
        id,
      },
    });
  }
  async delete(id: string): Promise<void> {
    await Users.destroy({ where: { id } });
  }
}
