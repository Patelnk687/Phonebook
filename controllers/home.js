//path to the model aka mongoose schema
const TodoTask=require('../models/phonebook')

module.exports={
    getIndex : async (req, res) => {
        try {
            const tasks = await
            PhoneBook.find()
                res.render("index.ejs", {
                     todoTasks: tasks });
            } catch (err) {
            if (err) return res.status(500).send(err);
        }
    }, createTask: async (req, res) => {
        const todoTask = new TodoTask(
            {
                name: req.body.name,
                phoneNumber: req.body.phoneNumber,
                relationship:req.body.relationship
            });
        try {
            await todoTask.save();
            console.log(todoTask)
            res.redirect("/");
        } catch (err) {
            if (err) return res.status(500).send(err);
            res.redirect("/");
        }
    }
} 