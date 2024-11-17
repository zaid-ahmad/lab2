import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Header = () => {
    return (
        <View style={styles.header}>
            <Text style={styles.headerText}>Todo List</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    header: {
        backgroundColor: "#f8f8f8",
        padding: 15,
        borderBottomWidth: 1,
        borderBottomColor: "#ddd",
    },
    headerText: {
        fontSize: 20,
        fontWeight: "bold",
        textAlign: "center",
    },
});

export default Header;
