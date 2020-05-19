import { StyleSheet, Dimensions } from "react-native";
import {white, violet, grey, black, grey2} from "../../styles/colors";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(18, 18, 18, 0.2)",
    justifyContent: "flex-end"
  },
  wrapper: {
    backgroundColor: white,
    height: Dimensions.get("window").height - 120,
    borderTopLeftRadius: 32,
    borderTopRightRadius: 32,
    paddingTop: 28,
    paddingBottom: 34
  },
  row: {
    paddingHorizontal: 16,
    borderColor: grey,
    borderBottomWidth: 0.5
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingBottom: 36,
  },
  headerTitle: {
    fontSize: 22,
    fontWeight: "bold"
  },
  doneButton: {
    color: violet,
    fontSize: 17
  },
  inputContainer: {
    paddingVertical: 16,
    paddingHorizontal: 16,
  },
  inputContainerRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between"
  },
  gradientsContainer: {
    paddingHorizontal: 16,
    paddingVertical: 28
  },
  gradientWrapper: {
    marginRight: 16
  },
  gradient: {
    width: 62,
    height: 62,
    borderRadius: 31
  },
  checkIcon: {
    width: 18,
    height: 18,
    backgroundColor: black,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 9,
    position: "absolute",
    bottom: 0,
    right: 0
  },
  inputLabel: {
    flexDirection: "row",
    alignItems: "center"
  },
  inputIcon: {
    width: 20,
    height: 20,
    resizeMode: "contain",
    marginRight: 12
  },
  inputLabelText: {
    fontWeight: "bold",
    fontSize: 17,
  },
  arrowStyles: {
    width: 6,
    height: 12,
    resizeMode: "contain",
  },
  inputValueText: {
    color: grey2,
    fontSize: 17,
    marginRight: 12
  }
});

export default styles;
