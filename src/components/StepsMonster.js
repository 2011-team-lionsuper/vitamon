import React from "react";
import { Image, StyleSheet } from "react-native";
import { Block } from "galio-framework";

function StepsMonster({ monsterStatus }) {
  return (
    <Block>
      {monsterStatus === "start" && (
        <Image
          style={styles.startImage}
          source={require("../../assets/stepsstart.png")}
        />
      )}
      {monsterStatus === "middle" && (
        <Image
          style={styles.middelImage}
          source={require("../../assets/stepsmiddle.png")}
        />
      )}
      {monsterStatus === "warning" && (
        <Image
          style={styles.middleImage}
          source={require("../../assets/stepswarning.png")}
        />
      )}
      {monsterStatus === "complete" && (
        <Image
          style={styles.completeImage}
          source={require("../../assets/stepscomplete.png")}
        />
      )}
    </Block>
  );
}

const styles = StyleSheet.create({
  startImage: { flex: 1, height: 200, width: 200 },
  middleImage: { flex: 1, height: 275, width: 275 },
  completeImage: { flex: 1, height: 300, width: 300 },
});

export default StepsMonster;
