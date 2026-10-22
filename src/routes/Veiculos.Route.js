import { Router } from "express";
import { veiculosServices } from "../services/veiculos.Services.js";

export const veiculosRouter = Router();

veiculosRouter.get("/", async (_req, res) => {
    try {
        const veiculos = await veiculosServices.getall();
        res.status(200).json(veiculos);
    }catch (error) {
        res.status(500).json({error: "Erro ao encontrar os veiculos"})
    }
});

veiculosRouter.get("/:id", async (req, res) => {
    try {
        const veiculoId = req.params.id
        const veiculo = await veiculosServices.getById(veiculoId);
        res.status(200).json(veiculo);
    }catch (error) {
        res.status(404).json({error: "Erro ao encontrar o veiculo"})
    }
});

veiculosRouter.post("/", async (req, res) => {
    try {
        const veiculo = await veiculosServices.create(req.body);
         res.status(201).json(veiculo);
    }catch (error) {
        res.status(400).json({error: "Erro ao criar o veiculo"})
    }
});

veiculosRouter.delete("/:id", async (req, res) => {
    try {
        const veiculoId = req.params.id
        const veiculo = await veiculosServices.delete(veiculoId);
         res.status(200).json(veiculo);
    }catch (error) {
        res.status(500).json({error: "Erro ao deletar o veiculo"})
    }
});

veiculosRouter.put("/:id", async (req, res) => {
    try {
        const veiculoId = req.params.id
        const veiculo = await veiculosServices.updatePut(veiculoId, req.body);
        res.status(200).json(veiculo);
    } catch (error) {
        res.status(500).json({error: "Erro ao atualizar o veiculo"})
    }
});