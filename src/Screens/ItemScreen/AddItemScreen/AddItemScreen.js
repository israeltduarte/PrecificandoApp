import React, { useEffect, useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import RNPickerSelect from "react-native-picker-select";
import itemService from "../../../API/Services/ItemService";

// const fetchItems = async () => {
//   let userId = "PR_ITUser_4cc52a1e-539b-4a53-ac1c-a3df7045bb34";

//   let apiItems = await itemService
//     .getAllUserItems(userId)
//     .then(async function response() {
//       return response;
//     })
//     .catch(function (error) {
//       console.log("error");
//     });

//   console.log(apiItems.);

//   return apiItems;
// };

export default function AddItemScreen() {
  const [selectedItem, setSelectedItem] = useState("");
  const [quantity, setQuantity] = useState("");
  const [totalValue, setTotalValue] = useState("");
  const [items, setItems] = useState([]);

  useEffect(() => {
    const getItems = async () => {
      await itemService
        .getAllUserItems("PR_ITUser_4cc52a1e-539b-4a53-ac1c-a3df7045bb34")
        .then((response) => {
          const transformedItems = response.data.map((item) => {
            return {
              id: item.id,
              description: item.description,
              measurement: item.measurement,
              created: item.created,
              updated: item.updated,
              inStock: item.inStock,
            };
          });
          setItems(transformedItems);
        })
        .catch((error) => {
          throw new Error(error);
        });
    };

    getItems();
  }, []);

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
        <RNPickerSelect
          onValueChange={(value) => setSelectedItem(value)}
          items={items.map((item) => ({
            key: item.id,
            value: item.id,
            label: item.description,
          }))}
          value={selectedItem}
        />
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
