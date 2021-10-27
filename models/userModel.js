// tenemos un data donde almacenar los users
import users from '../data/users.js';

// instancia la clase MySqlManager por lo tanto acceso a los metodos de conexión
import connection from '../mysql/dbManager.js';

class User{
    async createUser(user){

        try {
            
            const result = await connection.query(
                `call insert_user_movies(?,?,?)`,
                [user.username,user.password,user.rol] 
            );
           // users.push(user);
           // ../data/users.js
           // return users.find(element => element.username == user.username);
           return result;

        } catch (error) {
            throw error;
        }

    }
    getUser(user){
        return users.find(element => (element.username == user.username))
    }
}

export default new User();
