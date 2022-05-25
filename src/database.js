import { Pool } from 'pg'

export const pool = new Pool({
    host:'ec2-3-231-82-226.compute-1.amazonaws.com',
    user:'dewtywaqoroimx',
    password:'f92cde866a30ca86b339b9152ae40b8d657105b091be40388c7c501d0de1b914',
    database:'d9dp66jckbuf4h',
    port:5432,
    ssl:{rejectUnauthorized:false}
});