import api from "../apis/api";
class LoginApi {
  async login(username, password) {
    console.log("oi");
    try {
      const { data } = await api.post("/token/", {
        username,
        password,
      });
      console.log("aaaa");
      return Promise.resolve(data);
    } catch (error) {
      console.log(error);
      return Promise.error(error);
    }
  }
}

export default new LoginApi();
