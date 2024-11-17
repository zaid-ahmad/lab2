import React, { useState } from "react";
import { View, TextInput, Button, StyleSheet } from "react-native";

const ToDoForm = ({ addTask }) => {
    const [taskText, setTaskText] = useState("");

    const handleAddTask = () => {
        addTask(taskText);
        setTaskText(""); // Clear input after adding task
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
            <Button
                title='Add'
                onPress={handleAddTask}
                disabled={!taskText.trim()} // Disable button if input is empty
            />
        </View>
    );
};

const styles = StyleSheet.create({
    form: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginHorizontal: 20,
        marginTop: 20,
        marginBottom: 20,
        padding: 10,
        backgroundColor: "#f8f8f8",
        borderRadius: 10,
    },
    input: {
        flex: 1,
        borderWidth: 1,
        borderColor: "#ccc",
        borderRadius: 5,
        paddingHorizontal: 10,
        paddingVertical: 8,
        marginRight: 10,
        fontSize: 16,
        backgroundColor: "#fff",
    },
});

export default ToDoForm;
