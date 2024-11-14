import { search } from '../../app/database/conexao.js'

class SelecaoRepository{

    create (selecao) {
        const sql = "INSERT INTO `selecoes` SET ?;"
        return search(sql, selecao, "Não foi possivel cadastrar")
    }

    findAll() {
        const sql = "SELECT * FROM selecoes;"
        return search(sql, "Não foi possivel encontrar")
    }

    findBuId(id) {
        const sql = "SELECT * FROM selecoes WHERE id = ?;"
        return search(sql, id, "Não foi possivel encontrar")
    }

    update(id, selecao) {
        const sql = "UPDATE `selecoes` SET ? where id=?;"
        return search(sql, [selecao, id], "Não foi possivel atualizar")
    }

    delete(id) {
        const sql = "DELETE FROM selecoes WHERE id = ?;"
        return search(sql, id, "Não foi possivel apagar")
    }

}

export default new SelecaoRepository