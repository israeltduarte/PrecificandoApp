import { useFocusEffect } from "@react-navigation/native";
import React, { useState } from "react";
import {
  Alert,
  Button,
  Modal,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import itemService from "../../../API/Services/ItemService";

export default function AddItemScreen({ navigation }) {
  const [description, setDescription] = useState("");
  const [measurement, setMeasurement] = useState("");
  const [isSuccessModalVisible, setIsSuccessModalVisible] = useState(false);

  useFocusEffect(
    React.useCallback(() => {
      setDescription("");
      setMeasurement("");
    }, [])
  );

  const handleAddItem = async () => {
    try {
      if (!description || !measurement) {
        Alert.alert("Validation Error", "Please fill in both fields.");
        return;
      }

      const newItem = {
        userId: "PR_ITUser_4cc52a1e-539b-4a53-ac1c-a3df7045bb34",
        description: description,
        measurement: measurement,
        inStock: false,
      };

      const response = await itemService.createItem(newItem);

      if (response.status === 201) {
        setIsSuccessModalVisible(true);
        setTimeout(() => {
          setIsSuccessModalVisible(false);
        }, 2000);
      } else {
        throw new Error("Failed to add item. Please try again.");
      }
    } catch (error) {
      console.error("Error adding item:", error);
      Alert.alert("Error", "An error occurred. Please try again later.");
    }
  };

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
      paddingHorizontal: 20,
    },
    title: {
      fontSize: 24,
      fontWeight: "bold",
      marginBottom: 20,
    },
    inputContainer: {
      marginBottom: 15,
    },
    label: {
      fontSize: 16,
      marginBottom: 5,
    },
    input: {
      width: 250,
      minHeight: 40,
      borderWidth: 1,
      borderColor: "#ccc",
      borderRadius: 5,
      paddingHorizontal: 10,
    },
    modalContainer: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "rgba(0, 0, 0, 0.5)",
    },
    modalContent: {
      width: "80%",
      height: 100,
      backgroundColor: "white",
      padding: 20,
      borderRadius: 10,
      alignItems: "center",
      justifyContent: "center",
    },
    successText: {
      fontSize: 18,
      color: "green",
    },
  });

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Add New Item</Text>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Description</Text>
        <TextInput
          style={styles.input}
          placeholder="Description"
          value={description}
          onChangeText={(text) => setDescription(text)}
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Measurement</Text>
        <TextInput
          style={styles.input}
          placeholder="Measurement"
          value={measurement}
          onChangeText={(text) => setMeasurement(text)}
        />
      </View>
      <Button title="Add Item" onPress={handleAddItem} />

      <Modal
        animationType="slide"
        transparent={true}
        visible={isSuccessModalVisible}
        onRequestClose={() => setIsSuccessModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.successText}>Item added successfully</Text>
          </View>
        </View>
      </Modal>
    </View>
  );
}
