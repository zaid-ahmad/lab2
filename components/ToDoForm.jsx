import React, { useState, useEffect } from "react";
import { View, TextInput, Button, StyleSheet } from "react-native";

const ToDoForm = ({ addTask }) => {
    const [taskText, setTaskText] = useState("");
    const [availableTasks, setAvailableTasks] = useState([]);

    useEffect(() => {
        const loadTasks = async () => {
            try {
                const response = require("../data/tasks.json");
                setAvailableTasks(response.tasks);
            } catch (error) {
                console.error("Error loading tasks:", error);
            }
        };

        loadTasks();
    }, []);

    const handleAddTask = () => {
        if (taskText.trim()) {
            addTask(taskText);
            setTaskText("");
        }
    };

    const handleGenerateRandomTask = () => {
        if (availableTasks.length > 0) {
            const randomIndex = Math.floor(
                Math.random() * availableTasks.length
            );
            const randomTask = availableTasks[randomIndex];
            setTaskText(randomTask);
        }
    };

    return (
        <View style={styles.form}>
            <TextInput
                style={styles.input}
                placeholder='Add a new task...'
                value={taskText}
                onChangeText={setTaskText}
                returnKeyType='done'
                onSubmitEditing={handleAddTask}
            />
            <View style={styles.buttonContainer}>
                <Button
                    title='Add'
                    onPress={handleAddTask}
                    disabled={!taskText.trim()}
                />
                <Button
                    title='Random Task'
                    onPress={handleGenerateRandomTask}
                    disabled={availableTasks.length === 0}
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    form: {
        marginHorizontal: 20,
        marginTop: 20,
        marginBottom: 20,
        padding: 10,
        backgroundColor: "#f8f8f8",
        borderRadius: 10,
    },
    input: {
        borderWidth: 1,
        borderColor: "#ccc",
        borderRadius: 5,
        paddingHorizontal: 10,
        paddingVertical: 8,
        marginBottom: 10,
        fontSize: 16,
        backgroundColor: "#fff",
    },
    buttonContainer: {
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
    },
});

export default ToDoForm;
