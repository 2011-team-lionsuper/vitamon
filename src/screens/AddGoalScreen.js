import React, { useState } from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import AddGoalForm from "../components/AddGoalForm";
import { connect } from "react-redux";
import { addGoalToUser } from "../store/allTheUsersGoals";
import SelectBox from "react-native-multi-selectbox";

function AddGoalScreen({ navigation, user, addGoal }) {
  const [goalId, setGoalId] = useState(1);
  const [quantity, setQuantity] = useState("0");
  const [numberOfDays, setNumberOfDays] = useState("0");
  const [selected, setSelected] = useState("Steps");
  const [descriptionOfQty, setDescriptionOfQty] = useState(
    "How many steps do you want to walk daily?"
  );
  const goalTypes = [
    {
      item: "Steps",
      id: 1,
    },
    {
      item: "Water",
      id: 2,
    },
  ];

  const goalChanger = () => {
    return (val) => {
      if (val.id === 1) {
        setGoalId(1);
        setSelected(val.item);
        setDescriptionOfQty("How many steps do you want to walk daily?");
      } else {
        setGoalId(2);
        setSelected(val.item);
        setDescriptionOfQty(
          "How many water bottles do you want to drink daily?"
        );
      }
    };
  };
  const onAddGoalButtonPress = async () => {
    try {
      let newGoal = {
        userId: user.id,
        goalId: goalId,
        quantity: Number(quantity),
        numberOfDays: Number(numberOfDays),
        completedDays: 0,
      };
      await addGoal(newGoal);
      navigation.navigate("Goals");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View>
      <Text style={styles.buttonText}>Add Your Goal</Text>
      <View style={{ margin: 30 }}>
        <View style={{ width: "100%", alignItems: "center" }}></View>
        <Text style={{ fontSize: 20, paddingBottom: 10 }}>
          Select Your Goal
        </Text>
        <SelectBox
          label={selected}
          options={goalTypes}
          value={goalId}
          onChange={goalChanger()}
          hideInputFilter={false}
        />
        <View style={{ height: 40 }} />
      </View>
      <AddGoalForm
        descriptionOfQty={descriptionOfQty}
        quantity={quantity}
        numberOfDays={numberOfDays}
        onQuantityChange={(newQuantity) => setQuantity(newQuantity)}
        onNumberOfDaysChange={(newNumberOfDays) =>
          setNumberOfDays(newNumberOfDays)
        }
        onPress={() => onAddGoalButtonPress()}
      />
    </View>
  );
}
const mapState = (state) => {
  return {
    user: state.user,
  };
};
const mapDispatch = (dispatch) => {
  return {
    addGoal: (newGoal) => {
      dispatch(addGoalToUser(newGoal));
    },
  };
};

const styles = StyleSheet.create({
  buttonText: {
    color: "#333333",
    fontSize: 18,
  },
});

export default connect(mapState, mapDispatch)(AddGoalScreen);
