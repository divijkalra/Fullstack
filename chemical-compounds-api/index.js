const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { Compound } = require('./models');

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.get('/api/compounds', async (req, res) => {
    const compounds = await Compound.findAll();
    res.json(compounds);
});

app.get('/api/compounds/:id', async (req, res) => {
    const compound = await Compound.findByPk(req.params.id);
    res.json(compound);
});

app.post('/api/compounds', async (req, res) => {
    const compound = await Compound.create(req.body);
    res.json(compound);
});

app.put('/api/compounds/:id', async (req, res) => {
    await Compound.update(req.body, {
        where: { id: req.params.id },
    });
    const compound = await Compound.findByPk(req.params.id);
    res.json(compound);
});

app.delete('/api/compounds/:id', async (req, res) => {
    await Compound.destroy({
        where: { id: req.params.id },
    });
    res.json({ message: 'Compound deleted' });
});

app.listen(3001, () => {
    console.log('Server is running on port 3001');
});
