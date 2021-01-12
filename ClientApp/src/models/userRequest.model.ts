import { User } from './user.model' ;

export class UserRequest{
  user: User;
  success: boolean;

  constructor(success:boolean, user:User)
  {
    this.success = success;
    this.user = user;
  }
}
