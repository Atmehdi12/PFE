/*import { Injectable } from '@nestjs/common';

export type User = {
  userId: number;
  userName: string;
  password: string;
};

// FIXME: This is a mockup, replace with a reel database
const users: User[] = [
  {
    userId: 1,
    userName: 'Alice',
    password: 'topsecret', //FIXME: Use a hash instead
  },
  {
    userId: 2,
    userName: 'Bob',
    password: '123abc',
  },
];

@Injectable()
export class UsersService {
  async findUserByName(username: string): Promise<User | undefined> {
    return users.find((user) => user.userName === username);
  }
}*/

import { Injectable } from '@nestjs/common';

// This should be a real class/interface representing a user entity
export type User = any;

@Injectable()
export class UsersService {
  private readonly users = [
    {
      userId: 1,
      username: 'john',
      password: 'changeme',
    },
    {
      userId: 2,
      username: 'maria',
      password: 'guess',
    },
  ];

  async findOne(username: string): Promise<User | undefined> {
    return this.users.find((user) => user.username === username);
  }
}
