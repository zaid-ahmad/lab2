/**
 * My To Do List App
 *
 * @format
 */

import React, { useState } from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import ToDoList from "../components/ToDoList";
import ToDoForm from "../components/ToDoForm";

function App() {
    const [tasks, setTasks] = useState(["Do laundry", "Go to gym", "Walk dog"]);

    const addTask = (taskText) => {
        if (taskText.trim() === "" || tasks.includes(taskText)) {
            return;
        }
        setTasks([...tasks, taskText.trim()]);
    };

    return (
        <SafeAreaView style={styles.container}>
            <ToDoList tasks={tasks} />
            <ToDoForm addTask={addTask} />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
    },
});

export default App;
