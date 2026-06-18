import express from "express";
import {createTodo,getMyTodos,updateTodo,deleteTodo} from '../controller/todo.controller.js';
import { isAuthenticated } from "../middleware/auth.middleware.js";



const router=express.Router()
router.post("/create",isAuthenticated,createTodo);
router.patch("/:id",isAuthenticated,updateTodo)
router.delete("/:id",isAuthenticated,deleteTodo)
router.get("/my-todos",isAuthenticated,getMyTodos);



export default router;