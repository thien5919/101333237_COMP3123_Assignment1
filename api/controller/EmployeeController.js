const Employeee = require('../model/Employee');

exports.getAllEmployees = async (req, res) => {
    try{
        const employees = await Employee.find();
        res.status(200).json(employees);
    }
    catch(err){
        res.status(500).json({message: err.message});
    }
}
exports.createEmployee = async (req, res) => {
    const {first_name, last_name, email, position, salary, date_of_joining, department} = req.body;
    try{
        const employee = new Employee({first_name, last_name, email, position, salary, date_of_joining, department});
        await employee.save();
        res.status(201).json({message: "Employee created successfully!", employee_id: employee._id});
    }catch(err){
        res.status(500).json({status: false, message: err.message});
    }
};
exports.getEmployeeById = async (req, res) => {
    // consider code her
    try{
        const employee = await Employee.findById(req.params);
        if(!employee){
            res.status(404).json({status: false, message: "Employee not found!"});
        }
        res.status(200).json(employee);
    }
    catch(err){
        res.status(500).json({status: false, message: err.message});
    }
};
exports.updateEmployeeById = async (req, res) => {
    const {eid} = req.params;
    try{
        const updatedEmployee = await Employee.findeByIdAndUpdate(eid, req.body, {new: true});
        if(!employee){
            res.status(404).json({status: false, message: "Employee not found!"});
        }
        res.status(200).json({status: true, message: "Employee updated successfully!"});
    }
    catch(err){
        res.status(500).json({status: false, message: err.message});
    }
};
exports.deleteEmployeeById = async (req, res) => {
    const {eid} = req.params;
    try{
        const employee = await Employee.findByIdAndDelete(eid);
        if(!employee){
            res.status(404).json({status: false, message: "Employee not found!"});
        }
        res.status(200).json({status: true, message: "Employee deleted successfully!"});
    }
    catch(err){
        res.status(500).json({status: false, message: err.message});
    }
};