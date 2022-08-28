const TodoTask=require('../models/phonebook')


module.exports={
    getEdit:(req, res) => {
        const id = req.params.id;
        PhoneBook.find({}, (err, tasks) => {
            res.render("edit.ejs", { todoTasks: tasks, idTask: id });
        });
    }, deleteTask:(req, res) => {
        const id = req.params.id;
        PhoneBook.findByIdAndRemove(id, err => {
            if (err) return res.send(500, err);
            res.redirect("/");
        });
    },
    updateTask:(req, res) => {
        const id = req.params.id;
        PhoneBook.findByIdAndUpdate(
            id,
            {
                name: req.body.name,
                phoneNumber: req.body.phoneNumber,
                relationship:req.body.relationship
            },

            err => {
                if (err) return res.status(500).send(err);
                res.redirect("/");
            });
    }
}