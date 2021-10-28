import model from "../../models/userModel.js";
import connection from "../../mysql/dbManager.js";
import { expect, jest, test } from "@jest/globals";

const mockUser = {
  username: "mock",
  password: "1234",
  rol: "user",
};

describe("userModel testing", () => {
  // espiamos el metodo query del modulo dbManager.js

  const spyConnectioQuery = jest.spyOn(connection, "query");
  beforeEach(() => {
    spyConnectioQuery.mockReset();
  })

  describe("testing register method", () => {
      
      test("should invoke query method with user parameters", async () => {
          // espiamos el metodo query del modulo dbManager.js - query devuelve un Promise
        const query = "call insert_user_movies(?,?,?)";
        spyConnectioQuery.mockImplementation(() => Promise.resolve([]));

        const result = await model.createUser(mockUser);
        expect(spyConnectioQuery).toBeCalledWith(query, [
            mockUser.username,
            mockUser.password,
            mockUser.rol
      ]);
    });
    test("should return inserted user when valis user id", async () => {

      // el valor de retorno de query -> hay que trataralo 
      // mySql > select username into result from movies.user where username = p_username; 
      spyConnectioQuery.mockImplementation(() => Promise.resolve([{username:'ricard'}]));
      const result = await model.createUser(mockUser);
      //parsera result para que de "{username:'ricard'}" 
      expect(result[0].username).toBe("ricard");        
     
    });

    test("should throw an error with message", async () => {

        // Para comprobar si ha ido mal, debemos validar el Promise.reject() 
        spyConnectioQuery = jest.spyOn(connection, "query").mockImplementation(() => Promise.reject([{}]));

        try {
            await model.createUser(mockUser);
        } catch (error) {
            expect(error).toBeTruthy()
            
        }
                          
      });


  });
  describe("testing login method", () => {
  
    //OJO!!! no esta implemntado en models/modelUser.js
      test("should invoke query method with user parameters", async () => {
        const query = "xxxxxx";
        spyConnectioQuery.mockImplementation(() => Promise.resolve([]));

        const result = await model.createUser(mockUser);
        expect(spyConnectioQuery).toBeCalledWith(query, [
            mockUser.username,
            mockUser.password,
            mockUser.rol
        ]);
      });

      test("should return 1 when username and password are correct", async () => {
        spyConnectioQuery.mockImplementation(() => Promise.resolve(1));
        const result = await model.getUser(mockUser);
        expect(result).toBe(1);
      });

   });

});
