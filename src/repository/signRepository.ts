import connection from "../database.js";

export default  async function signUp(name, email, hashedPassword, birthday){

    await connection.query(
        `
          INSERT INTO users (name, email, password, birthday) VALUES ($1, $2, $3, $4)
        `,
        [name, email, hashedPassword, birthday]
    );

}

