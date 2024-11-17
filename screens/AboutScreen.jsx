import React from "react";
import { Text, StyleSheet } from "react-native";
import MainLayout from "../layouts/MainLayout";

function AboutScreen() {
    const currentDate = new Date().toLocaleDateString();

    return (
        <MainLayout>
            <Text style={styles.title}>Todo List App</Text>
            <Text style={styles.text}>Created by: Your Name</Text>
            <Text style={styles.text}>Date: {currentDate}</Text>
        </MainLayout>
    );
}

const styles = StyleSheet.create({
    title: {
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 20,
        textAlign: "center",
    },
    text: {
        fontSize: 16,
        marginBottom: 10,
        textAlign: "center",
    },
});

export default AboutScreen;
