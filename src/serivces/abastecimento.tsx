import * as SQLite from 'expo-sqlite';
import { db } from './SQLite'


type Abastecimento = {
    qtdLitros: string;
    preco: string;
    combustivel: string;
    kilometragem: string;
}
export const criarTabelaAbastecimento = () => {

    db.transaction((transaction) => {
        transaction.executeSql("CREATE TABLE IF NOT EXISTS abastecimento " +
            "(id INTEGER PRIMARY KEY AUTOINCREMENT," +
            "litros TEXT," +
            "preco TEXT," +
            "combustivel TEXT," +
            "kilometragem TEXT);", [], () => {
                console.log('tabela abastecimento criada com sucesso!')
            }, () => {
                console.error('ocorreu um erro')
                return false;
            })
    })

}

export const novoAbastecimento = (abastecimento: Abastecimento) => {

    try {
        return new Promise<number | null>((resolve) => {

            const sql = 'INSERT INTO abastecimento (litros, preco, combustivel, kilometragem) VALUES(?,?,?,?);'
            db.transaction((transaction) => {
                transaction.executeSql(sql, [abastecimento.qtdLitros, abastecimento.preco, abastecimento.combustivel, abastecimento.kilometragem], (_, results) => {
                    resolve(results.rowsAffected);

                }, (_, error) => {
                    console.log('ocorreu um erro na inserção dos dados\n' + error)
                    return false
                })
            })
        })
    } catch (error) {
        console.log('erro do trycatch executado')
    }

}

export const listaAbastecimento = async () => {
    return new Promise<any[]>((resolve) => {
        db.transaction((transaction) => {
            const sql = 'SELECT * FROM abastecimento'
            transaction.executeSql(sql, [], (_, results) => {
                console.log(results.rows._array)
                resolve(results.rows._array)
            }, (_, error) => {
                console.log(error)
                return false;
            })
        })
    })

}

export const dropTable = () => {
    db.transaction((transaction) => {
        transaction.executeSql("DROP TABLE abastecimento", [], () => {
            console.log("tabela abastecimento apagada!")
        }, (_, error) => {
            console.log('ocorreu um erro \n' + error)
            return false;
        })
    })
}