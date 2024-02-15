






const students = require('../models/studentModel')

exports.register = async (req, res) => {
    const { name, address, mobile, email, gender, dob, course } = req.body
    console.log(name, address, mobile, email, gender, dob, course);
    try {
        const existingUser = await students.findOne({ email })
        if (existingUser) {
            res.status(406).json("Already registered")
        } else {
            const newStudent = new students({
                name, address, mobile, email, gender, dob, course
            })
            await newStudent.save()
            res.status(200).json("Registered successfully")
        }
    } catch (error) {
        res.status(401).json(error)
    }

}

exports.details = async (req, res)=>{
    try {
        const studentDetails = await students.find()
        console.log(studentDetails);
        res.status(200).json(studentDetails)
    } catch (error) {
        res.status(401).json(error)
    }
}