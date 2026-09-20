
import { useState } from "react";

const Todo = () => {

    const [task, setTask] = useState("");
    const [tasks, setTasks] = useState([]);

    function addTask() {

        if (task.trim() === "") return;

        const newTask = {
            id: Date.now(),
            title: task,
            completed: false
        };

        setTasks([...tasks, newTask]);
        setTask("");
    }

    function deleteTask(id) {

        setTasks(tasks.filter((task) => task.id !== id));

    }

    function completeTask(id) {

        setTasks(
            tasks.map((task) =>
                task.id === id
                    ? { ...task, completed: !task.completed }
                    : task
            )
        );

    }

    return (
        <div>
            <h1 className="text-center font-bold text-2xl">Todo List</h1>

            <div className="text-center mt-3">

                <input
                    type="text"
                    placeholder="Enter your task"
                    className="p-3 border rounded-2xl w-1/2"
                    value={task}
                    onChange={(e) => setTask(e.target.value)}
                />

                <button onClick={addTask}
                className="border rounded-xl p-2 ml-2 cursor-pointer hover:text-green-500"
                >
                    Add Task
                </button>

                <div className="border-2 p-5 m-4 rounded-2xl border-slate-400">

                    {tasks.map((task) => (

                        <div key={task.id}>

                            <input
                                type="checkbox"
                                className="m-2 cursor-pointer"
                                checked={task.completed}
                                onChange={() => completeTask(task.id)}
                            />

                            <span
                                style={{
                                    textDecoration: task.completed
                                        ? "line-through"
                                        : "none"
                                }}
                            >
                                {task.title}
                            </span>

                            <button onClick={() => deleteTask(task.id)}
                            className="border rounded-xl p-2 cursor-pointer mt-2 ml-3 hover:text-red-400"
                                >
                                Delete
                            </button>

                        </div>

                    ))}

                </div>

            </div>
        </div>

    )
}

export default Todo;