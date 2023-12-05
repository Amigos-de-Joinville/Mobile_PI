import api from "../apis/api";
class LoginApi {
  async login(username, password) {
    try {
      const { data } = await api.post("/token/", {
        email: username,
        password,
      });
      return Promise.resolve(data);
    } catch (error) {
      return Promise.error(error);
    }
  }
}

export default new LoginApi();
