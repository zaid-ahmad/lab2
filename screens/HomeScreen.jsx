import React from "react";
import { Button } from "react-native";
import MainLayout from "../layouts/MainLayout";
import ToDoList from "../components/ToDoList";
import ToDoForm from "../components/ToDoForm";

function HomeScreen({ navigation }) {
    const [tasks, setTasks] = React.useState([
        "Do laundry",
        "Go to gym",
        "Walk dog",
    ]);

    const addTask = (taskText) => {
        if (taskText.trim() === "" || tasks.includes(taskText)) {
            return;
        }
        setTasks([...tasks, taskText.trim()]);
    };

    return (
        <MainLayout>
            <ToDoList tasks={tasks} />
            <ToDoForm addTask={addTask} />
            <Button
                title='Go to About'
                onPress={() => navigation.navigate("About")}
            />
        </MainLayout>
    );
}

export default HomeScreen;
