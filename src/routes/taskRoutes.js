import { Router } from 'express';

const taskRoutes = () => {
    const router = Router();

    // GET all tasks
    router.get('/', (req, res) => {
        res.json({ message: 'Get all tasks' });
    });

    // GET task by ID
    router.get('/:id', (req, res) => {
        res.json({ message: `Get task ${req.params.id}` });
    });

    // POST create new task
    router.post('/', (req, res) => {
        res.json({ message: 'Create new task', data: req.body });
    });

    // PUT update task
    router.put('/:id', (req, res) => {
        res.json({ message: `Update task ${req.params.id}`, data: req.body });
    });

    // DELETE task
    router.delete('/:id', (req, res) => {
        res.json({ message: `Delete task ${req.params.id}` });
    });

    return router;
};

export default taskRoutes;