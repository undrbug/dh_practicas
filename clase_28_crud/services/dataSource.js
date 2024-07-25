const path = require('path');
const fs = require('fs');


const filePath = path.join(__dirname, '../users.json');
// const array = fs.readFileSync(filePath, 'utf-8');

const dataSource = {
    usersArray: [],
    init: function() {
        const usersList = fs.readFileSync(filePath, 'utf-8');
        if (usersList != '') {
            this.usersArray = JSON.parse(usersList);
        }
    },
    save: function() {
        fs.writeFileSync(path.join(filePath), JSON.stringify(this.usersArray));
    },
    create: function(user) {
        this.usersArray.push(user);
        this.save();
    },
    update: function(user) {
        const index = this.usersArray.findIndex(u => u.id == user.id);
        this.usersArray[index] = user;
        this.save();
    },
    delete: function(id) {
        const index = this.usersArray.findIndex(u => u.id == id);
        this.usersArray.splice(index, 1);
        this.save();
    },
    find: function(id) {
        return this.usersArray.find(u => u.id == id);
    },
    findAll: function() {
        return this.usersArray;
    }
}

module.exports = dataSource;