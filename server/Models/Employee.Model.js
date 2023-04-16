const { Schema, model } = require('mongoose');

const employeeSchema = new Schema({
    name: { type: 'string', required: true },
    email: { type: 'string', required: true },
    number: { type: Number, required: true },
    age: { type: Number, required: true },
    gender: { type: 'string', required: true },
    maritalStatus: { type: 'string', required: true },
    department: { type: 'string', required: true },
    salary: { type: 'string', required: true },
    profile_picture: { type: String, required: false, default: null }
})

const EmployeeModel = model("employee", employeeSchema);

module.exports = { EmployeeModel }
