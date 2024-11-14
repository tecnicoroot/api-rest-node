import mysql from 'mysql'

const conexao = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: '',
    database: 'dbcopa'  
})

conexao.connect()
/**
 * Executa um código sql com oui sem valores
 * @param {string} sql que será executado
 * @param {string=id । [selecao, id]} valores a serem repassadas para o sql
 * @param {string} mensagemReject mensagem
 * @returns Objeto de seleção
 */
export const search = (sql, valores='', mensagemReject) => {
    return new Promise((resolve, reject) => {
        conexao.query(sql, valores, (error, result) => {
            if(error) return reject(mensagemReject)
            const rows = JSON.parse(JSON.stringify(result))    
            return resolve(rows)
        })

    })
}

export default conexao