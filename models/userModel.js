// tenemos un data donde almacenar los users
import users from "../data/users.js";

class User {
  createUser(user) {
    users.push(user);
    return users.find((element) => element.username == user.username);
  }

  loginUser(user) {
    return users.find((element) => 
        element.username == user.username && element.password == user.password
    );
    
  }
}

export default new User();
