import React, { useState } from "react";
import { Button, Text, TextInput, View } from "react-native";

const AddItemScreen = ({ navigation }) => {
  const [description, setDescription] = useState("");
  const [measurement, setMeasurement] = useState("");

  const handleAddItem = () => {
    console.log("handleAddItem");
    // Perform item addition logic here, e.g., make an API request
    // You can use the description and measurement state values

    // After successfully adding the item, navigate back to the previous screen
    navigation.goBack();
  };

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Add New Item</Text>
      <TextInput
        placeholder="Description"
        value={description}
        onChangeText={(text) => setDescription(text)}
      />
      <TextInput
        placeholder="Measurement"
        value={measurement}
        onChangeText={(text) => setMeasurement(text)}
      />
      <Button title="Add Item" onPress={handleAddItem} />
      <Button
        title="Go to About"
        onPress={() => navigation.navigate("about")}
      />
    </View>
  );
};

export default AddItemScreen;
