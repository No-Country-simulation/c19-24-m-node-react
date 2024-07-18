// controllers/matchController.js
import Pet from '../models/pet2Model.js';
import Match from '../models/matchModel.js'; 

// Crear un nuevo match
export const createMatch = async (req, res) => {
    try {
        const { petId, userId } = req.body;

        const pet = await Pet.findById(petId);
        if (!pet) {
            return res.status(404).json({ message: 'Mascota no encontrada' });
        }

        const match = await Match.create({ pet1Id: petId, userId });
        return res.status(201).json(match);
    } catch (error) {
        return res.status(500).json({ message: 'Error creando el match', error });
    }
};

// Obtener todos los matches
export const getMatches = async (req, res) => {
    try {
        const matches = await Match.find().populate('pet1Id userId');
        return res.status(200).json(matches);
    } catch (error) {
        return res.status(500).json({ message: 'Error obteniendo los matches', error });
    }
};

// Obtener un match específico
export const getMatchById = async (req, res) => {
    try {
        const { id } = req.params;
        const match = await Match.findById(id).populate('pet1Id userId');

        if (!match) {
            return res.status(404).json({ message: 'Match no encontrado' });
        }

        return res.status(200).json(match);
    } catch (error) {
        return res.status(500).json({ message: 'Error obteniendo el match', error });
    }
};

// Eliminar un match
export const deleteMatch = async (req, res) => {
    try {
        const { id } = req.params;
        const match = await Match.findById(id);

        if (!match) {
            return res.status(404).json({ message: 'Match no encontrado' });
        }

        await match.remove();
        return res.status(204).send(); // Sin contenido
    } catch (error) {
        return res.status(500).json({ message: 'Error eliminando el match', error });
    }
};
