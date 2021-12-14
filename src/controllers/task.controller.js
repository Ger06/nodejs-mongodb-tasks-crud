import Task from "../models/Task";

export const renderTask = async (req, res) => {
  const tasks = await Task.find().lean();
  res.render("index", { tasks: tasks });
};

export const createTask = async (req, res) => {
  try {
    const task = Task(req.body);
    await task.save();

    res.redirect("/");
  } catch (error) {
    console.log(error);
  }
};

export const renderTaskEdit = async (req, res) => {
  const { id } = req.params;
  const task = await Task.findById(id).lean(); // sin el lean() es un objeto de mongodb con lean objeto javascript
  res.render("edit", { task });
};

export const editTask = async (req, res) => {
  try {
    const { id } = req.params;
    const task = await Task.findByIdAndUpdate(id, req.body);
    res.redirect("/");
  } catch (error) {
    console.log(error);
  }
};

export const deleteTask = async (req, res) => {
  try {
    const { id } = req.params;
    const task = await Task.findByIdAndDelete(id);
    res.redirect("/");
  } catch (error) {
    console.log(error);
  }
};

export const taskToggleDone = async (req, res) => {
  const { id } = req.params;
  const task = await Task.findById(id);
  task.done = !task.done;
  await task.save();
  res.redirect("/");
};
