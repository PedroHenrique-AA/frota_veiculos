import { Router } from "express";
import { veiculosServices } from "../services/veiculos.Services.js";

export const veiculosRouter = Router();

veiculosRouter.get("/", async (req, res) => {
    try {
        const veiculos = await veiculosServices.getall();
        res.json(veiculos);
    }catch (error) {
    
        console.error ("erro ao encontrar veiculos");
    }
});
veiculosRouter.get("/:id", async (req, res) => {
    try {
        const veiculoId = req.params.id
        const veiculos = await veiculosServices.getById(veiculoId);
        res.json(veiculos);
    }catch (error) {
    
        console.error ("erro ao encontrar id");
    }
});
veiculosRouter.post("/", async (req, res) => {
    try {
        const veiculos = await veiculosServices.create(req.body);
         res.status(201).json(veiculos);
    }catch (error) {
        console.error ("erro ao criar veiculo");
    }
});
veiculosRouter.delete("/:id", async (req, res) => {
    try {
        const veiculoId = req.params.id
        const veiculo = await veiculosServices.delete(veiculoId);
         res.status(201).json(veiculo);
    }catch (error) {
        console.error ("erro ao deletar veiculo");
    }
});