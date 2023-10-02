import { Picker } from "@react-native-picker/picker";
import React, { useEffect, useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import itemService from "../../../API/Services/ItemService";

export default function AddItemScreen() {
  const [selectedItem, setSelectedItem] = useState("");
  const [quantity, setQuantity] = useState("");
  const [totalValue, setTotalValue] = useState("");
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetchItems();
  }, []);

  const fetchItems = async () => {
    let userId = "PR_ITUser_4cc52a1e-539b-4a53-ac1c-a3df7045bb34";

    try {
      const response = await itemService.getAllUserItems(userId);
      if (response.status === 200) {
        const itemsData = response.data;
        setItems(itemsData);
      } else {
        throw new Error("Failed to fetch items.");
      }
    } catch (error) {
      console.error("Error fetching items:", error);
      // Handle error fetching items
    }
  };

  const handleMoveStock = () => {
    console.log("Selected Item:", selectedItem);
    console.log("Quantity:", quantity);
    console.log("Total Value:", totalValue);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Movimentar Estoque</Text>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Item</Text>
        <Picker
          selectedValue={selectedItem}
          onValueChange={(itemValue) => setSelectedItem(itemValue)}
        >
          <Picker.Item label="Selecione um item" value="" />
          {items.map((item) => (
            <Picker.Item key={item.id} label={item.name} value={item.id} />
          ))}
        </Picker>
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Quantidade</Text>
        <TextInput
          style={styles.input}
          placeholder="Quantidade"
          keyboardType="numeric"
          value={quantity}
          onChangeText={(text) => setQuantity(text)}
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Valor Total</Text>
        <TextInput
          style={styles.input}
          placeholder="Valor Total"
          keyboardType="numeric"
          value={totalValue}
          onChangeText={(text) => setTotalValue(text)}
        />
      </View>
      <Button title="Mover Estoque" onPress={handleMoveStock} />
    </View>
  );
}

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
});
