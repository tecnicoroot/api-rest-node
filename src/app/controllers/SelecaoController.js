import SelecaoRepository from "../repositories/SelecaoRepository.js"


class SelecaoController{


    async index(req, res) {
        const rows = await SelecaoRepository.findAll()

        res.status(200).send(rows)
        
    }

    async show(req, res) {
        const id = req.params.id
        const row = await SelecaoRepository.findBuId(id)

        res.status(200).send(row)
    }

    async store(req, res) {
        const selecao = req.body
        const row = await SelecaoRepository.create(selecao)
        res.status(200).send(row)
        
    }

    async update(req, res) {
        const selecao = req.body
        const id = req.params.id
        const row = await SelecaoRepository.update(id, selecao)
        res.status(200).send(row)
        
    }

    async delete(req, res) {
        const id = req.params.id
        const row = await SelecaoRepository.delete(id)
        res.status(200).send(row)
    }


}

export default new SelecaoController()