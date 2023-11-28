const db = require('./db.js');

class Controller {
    async create(req, res){
        const {name, title, price, img} = req.body;
        const newItem = await db.query(`INSERT INTO scr (name, title, price, img) values ($1, $2, $3, $4) RETURNING *`, [name, title, price, img]);
        res.json(newItem.rows[0]);
    }
    async get(req, res){
        const items = await db.query(`SELECT id, name, title, price, img FROM scr`);
        res.json(items.rows);
        console.log('get items', items.rows[0]);        
    }
    async delete(req, res){
        const id = req.params.id;
        const deleted = await db.query(`DELETE FROM scr WHERE id = $1`, [id]);
        res.json(deleted.rows);
    }
    async getOne(req, res){
        const id =  req.params.id;
        const item = await db.query(`SELECT id, name, title, price, img FROM scr WHERE id = $1`, [id]);
        res.json(item.rows);
    }
}

module.exports = new Controller();