import { StyleSheet } from "react-native";
import { grey, white } from "../../styles/colors";

const styles = StyleSheet.create({
  container: {
    backgroundColor: white,
    width: "100%"
  },
  background: {
    justifyContent: "flex-end"
  },
  buttons: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    paddingVertical: 5,
    borderBottomWidth: 1,
    borderColor: grey
  }
});

export default styles;
