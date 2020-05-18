import { StyleSheet, Dimensions } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 44,
    paddingHorizontal: 16,
    paddingBottom: 46
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingRight: 46,
    marginBottom: 42,
  },
  title: {
    fontSize: 34,
    fontWeight: "bold"
  },
  goalsTitle: {
    fontSize: 22,
    marginBottom: 16,
    fontWeight: "bold"
  },
  bigButton: {
    position: "absolute",
    left: Dimensions.get("window").width / 2 - 39,
    bottom: 48
  },
  bigButtonIcon: {
    width: 78,
    height: 78
  }
});

export default styles;
