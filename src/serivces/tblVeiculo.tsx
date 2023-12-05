import { db } from './SQLite'

type Veiculo = {
    modelo: string,
    placa: string,
    km: string
}

export const criarTabelaRegistroDeVeiculo = () => {
    db.transaction((transaction) => {
        transaction.executeSql("CREATE TABLE IF NOT EXISTS veiculo " +
            "(id INTEGER PRIMARY KEY AUTOINCREMENT, modelo TEXT, placa TEXT, kmInicial TEXT);")
    })
}

export const adicionaVeiculo = async (veiculo: Veiculo) => {
    try {
        return new Promise<string>((resolve, reject) => {
            db.transaction((transaction) => {
                transaction.executeSql(
                    'INSERT INTO veiculo (modelo, placa, kmInicial) VALUES (?,?,?);',
                    [veiculo.modelo, veiculo.placa, veiculo.km],
                    (_, result) => {
                        if (result.rowsAffected > 0) {
                            resolve('Veiculo Adicionado com sucesso!!');
                        } else {
                            reject(new Error('Erro ao adicionar veiculo'));
                        }
                    },
                    (_, error) => {

                        reject(error); // Rejeita a Promise com o erro retornado pelo SQLite
                        return false;
                    }
                );
            });
        });
    } catch (error) {
        throw new Error('Erro na inserção do veículo: ' + error.message);
    }
};

export const buscarDadosVeiculo = async () => {

    return new Promise<any>((resolve) => {

        db.transaction((transaction) => {
            transaction.executeSql("SELECT * FROM veiculo;", [], (transaction, results) => {

                resolve(results.rows._array)
            })
        })
    })
}