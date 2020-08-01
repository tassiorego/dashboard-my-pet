import Service from './Service';

class Auth extends Service {
  constructor() {
    super({ route: '/sessions' });
  }
}

export default new Auth();
