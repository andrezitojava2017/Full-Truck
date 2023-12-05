import * as SQLite from 'expo-sqlite';

const openDatabase = () => {
    return SQLite.openDatabase('db.fulltruck')
}

export const db = openDatabase();