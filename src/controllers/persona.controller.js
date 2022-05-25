import { pool } from "../database";


export const getPersona = async (req, res) => {
    try {
        const response = await pool.query('select *from fc_listar_persona()');
        return res.status(200).json(response.rows);
    } catch (error) {
        console.log(error);
        return res.status(500).json('Hubo un error al listar las personas');
    }
};


export const crearPersona = async (req, res) => {
    try {
        const { apellidos, nombres, dir, tel} = req.body;
        const response = await pool.query('select *from fc_create_persona($1,$2,$3,$4)', [apellidos, nombres, dir,tel]);
        return res.status(200).json({
            message: 'Persona creada con exito',
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json('Hubo un error al crear la persona');
    }
};

