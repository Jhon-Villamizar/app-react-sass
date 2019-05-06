const Base = require('../models/base');
const Balcon = require('../models/balcon');
const serviceCtrl = {};

serviceCtrl.getBases = async (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    const bases = await Base.find(); 
    res.json(bases);
}
serviceCtrl.getBalcones = async (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    const balcones = await Balcon.find(); 
    res.json(balcones);
}

serviceCtrl.getBase = async (req, res) => {
    const base = await Base.findById(req.params.id);
    res.json(base);
}
serviceCtrl.getBalcon = async (req, res) => {
    const balcon = await Balcon.findById(req.params.id);
    res.json(balcon);
}

serviceCtrl.postBase = async (req, res) => {
    const base = new Base({
        property: req.body.property,
        type: req.body.type,
        reference: req.body.reference,
        areamt2: req.body.areamt2,
        pricemt2: req.body.pricemt2,
        totalprice: req.body.totalprice
    });
    await base.save();
    res.json({Base: 'Creado'});
}
serviceCtrl.postBalcon = async (req, res) => {
    const balcon = new Balcon({
        property: req.body.property,
        type: req.body.type,
        reference: req.body.reference,
        areamt2: req.body.areamt2,
        pricemt2: req.body.pricemt2,
        totalprice: req.body.totalprice
    });
    await balcon.save();
    res.json({Balcon: 'Creado'});
}

serviceCtrl.putBase = async (req, res) => {
    const { id } = req.params;
    const base = {
        property: req.body.property,
        type: req.body.type,
        reference: req.body.reference,
        areamt2: req.body.areamt2,
        pricemt2: req.body.pricemt2,
        totalprice: req.body.totalprice
        
    };
    await Base.findByIdAndUpdate(id, {$set: base}, {new: true});
    res.json({Base: 'Editado'});
}
serviceCtrl.putBalcon = async (req, res) => {
    const { id } = req.params;
    const balcon = {
        property: req.body.property,
        type: req.body.type,
        reference: req.body.reference,
        areamt2: req.body.areamt2,
        pricemt2: req.body.pricemt2,
        totalprice: req.body.totalprice
        
    };
    await Balcon.findByIdAndUpdate(id, {$set: balcon}, {new: true});
    res.json({Balcon: 'Editado'});
}

serviceCtrl.deleteBase = async (req, res) => {
    await Base.findByIdAndRemove(req.params.id);
    res.json({Base: 'Eliminado'})
}
serviceCtrl.deleteBalcon = async (req, res) => {
    await Balcon.findByIdAndRemove(req.params.id);
    res.json({Balcon: 'Eliminado'})
}

module.exports = serviceCtrl;