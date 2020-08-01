import api from './api';

class Service {
  constructor({ route }) {
    this.route = route;
  }

  store(data) {
    return api
      .post(this.route, data)
      .then((response) => ({
        data: response.data,
        ok: true,
        status: response.data.status,
      }))
      .catch((error) => ({
        ok: false,
        message: error.response.data.message || 'Route not found',
      }));
  }
}

export default Service;
