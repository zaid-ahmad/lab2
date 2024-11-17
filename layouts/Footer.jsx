import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Footer = () => {
    return (
        <View style={styles.footer}>
            <Text style={styles.footerText}>© 2024 Todo List App</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    footer: {
        backgroundColor: "#f8f8f8",
        padding: 10,
        borderTopWidth: 1,
        borderTopColor: "#ddd",
    },
    footerText: {
        textAlign: "center",
        color: "#666",
    },
});

export default Footer;
