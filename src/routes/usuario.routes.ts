import { Router } from "express";
import { delete_usuario, get_usuario_id, get_usuarios, post_usuario, put_usuario } from "../controllers/usuario.controller";


const router_usuario = Router();

router_usuario.get(`/`, get_usuarios);
router_usuario.get(`/:id`, get_usuario_id);
router_usuario.post(`/`, post_usuario);
router_usuario.put(`/:id`, put_usuario);
router_usuario.delete(`/:id`, delete_usuario);

export default router_usuario;