const LengedaryModel = require('../models/legendaryModel');
const controller={
    getOneLegendary:(request,response) => {
        const model = new LengedaryModel ('123','Pineco', 'Bagworm', 'bug');
        return response.json(model)           
    },
    getAllLegendary: (request,response) => {
        const legendary1 = new LengedaryModel ('123','Pineco', 'Bagworm', 'bug');
        const legendary2 = new LengedaryModel ('124','Vic', 'Bagworm', 'bug');
        const legendary3 = new LengedaryModel ('125','Miguel', 'Bagworm', 'bug');
        const legendary4 = new LengedaryModel ('123','Tiago', 'Bagworm', 'bug');
        return response.json([
            legendary1,
            legendary2,
            legendary3,
            legendary4
        ]);

    }

 
    }


module.exports = controller