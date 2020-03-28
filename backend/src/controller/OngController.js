const crypto = require('crypto');
//importando a conexção com o banco de dados
const connection = require('../database/connection');

module.exports = {
    async index(request, response){
        const ongs = await connection('ongs').select('*');
    
        return response.json(ongs);
    },

    async create(request, response){
        const { name, email, whatsapp, city, uf } = request.body;

        // Pega o id gerado em random e transforma ele em uma String Hexadecimal
        const id = crypto.randomBytes(4).toString('HEX');
    
        // Quando o node chegar nesse cod ele vai realizar um await(aguardar) o cod finalizar para então continuar
        await connection('ongs').insert({
            id,
            name,
            email,
            whatsapp,
            city,
            uf,
        })
    
        return response.json({ id });
    }
};