import { pool } from "../database"

export const getPost = async (req,res)=>{
    try {
        const response = await pool.query('select *from fc_listar_post()');
        return res.status(200).json(response.rows);
    } catch (e) {
        return res.status(500).json('error al listar Posts');
    }
};

export const getPostId = async (req,res)=>{
    try {
        const id = parseInt(req.params.id);
        const response = await pool.query('select *from fc_listar_post_id($1)', [id]);
        return res.status(200).json(response.rows);
    } catch (e) {
        return res.status(500).json('error al listar Posts');
    }
};

export const crearPost = async (req,res)=>{
    try {
        const {titulo, descripcion} = req.body
        await pool.query('select *from fc_create_post($1,$2)', [titulo, descripcion]);
        return res.status(200).json({
            message: 'Post registrado correctamente...!'
        });
    } catch (e) {
        return res.status(500).json('error al registrar Post...!');
    }
};

export const updatePost = async (req,res)=>{
    try {
        const id = parseInt(req.params.id);
        const {titulo, descripcion} = req.body
        await pool.query('select *from fc_update_post($1, $2, $3)', [titulo, descripcion, id]);
        return res.status(200).json({
            message: 'Post modificado correctamente...!'
        });
    } catch (e) {
        return res.status(500).json('error al modifcar Post...!');
    }
};

export const deletePost = async (req,res)=>{
    try {
        const id = parseInt(req.params.id);
        await pool.query('select *from fc_delete_post($1)', [id]);
        return res.status(200).json({
            message: 'Post eliminado correctamente...!'
        });
    } catch (e) {
        return res.status(500).json('error al eleminar Post...!');
    }
};