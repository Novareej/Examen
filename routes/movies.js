
const express = require('express');
const router = express.Router();
const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

router.get('/', async function (req, res, next) {
    const movies = await prisma.movies.findMany({ take: 10,skip:0 })
  res.send({
    data: movies,
    pagination: {
        count: 200, // Total des enregistrements
        take: 10,   // Nombre d'éléments sélectionnés
        skip: 160   // Décalage à partir duquel on prend les  données
    }
});
});




module.exports = router;


