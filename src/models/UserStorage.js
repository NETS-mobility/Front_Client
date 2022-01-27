"use strict";

const db = require("../config/db");

class UserStorage{
    static async getUserInfo(id) {
        return new Promise((resolve, reject) => {
            const query = "SELECT * FROM user WHERE user_id = ?;";
            db.query(query, [id], (err, data) => {
                if (err) reject(`${err}`);
                resolve(data[0]);
            });
        });
    }

    static async save(userInfo) {
        return new Promise((resolve, reject) => {
            const query = "INSERT INTO user(user_id, user_password, user_name, user_phone) VALUES(?, ?, ?, ?);";
            db.query(query, [userInfo.id, userInfo.password, userInfo.name, userInfo.phone], (err) => {
                if (err) reject(`${err}`);
                resolve({ success: true });
            });
        });
    }
}

module.exports = UserStorage;