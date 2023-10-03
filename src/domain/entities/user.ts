import { v4 as uuid } from 'uuid';

class User {
  id: string;
  name: string;
  email: string;
  createdAt: Date;
  updatedAt: Date;

  constructor(name: string, email: string) {
    this.id = uuid();
    this.name = name;
    this.email = email;
    this.createdAt = new Date();
    this.updatedAt = new Date();
  }
}

export { User}
