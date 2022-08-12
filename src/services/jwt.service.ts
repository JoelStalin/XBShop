import { /* inject, */ BindingScope, injectable} from '@loopback/core';
import {keys as llaves} from '../config/.keys';
import {Users} from '../models/users.model';
var jwt = require('jsonwebtoken');


@injectable({scope: BindingScope.TRANSIENT})
export class JwtService {
  constructor(/* Add @inject to inject parameters */) { }
  gentoken(Users: Users) {
    let keySecurity = llaves.Keys;
    let jwtToken = jwt.sign({
      exp: llaves.Token,
      data: {
        id: Users.id,
        user: Users.userName,
        role: Users.userRole
      }

    }, keySecurity);
    return jwtToken;
  }
  /*
   * Add service methods here
   */
}
