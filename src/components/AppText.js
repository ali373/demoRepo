import React from "react";
import { Text, View } from "react-native";

import defaultStyles from "./styles";

function AppText({ children, style }) {
  return (
    <Text style={[defaultStyles.text, style]} numberOfLines={5} >
      {children}
    </Text>
  );
}

export default AppText;
