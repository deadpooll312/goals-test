import { StyleSheet, Dimensions } from "react-native";
import { white } from "../../styles/colors";

const styles = StyleSheet.create({
  container: {
    marginRight: 7,
    width: Dimensions.get("window").width / 3 * 2,
    borderRadius: 32,
  },
  wrapper: {
    paddingTop: 26,
    paddingHorizontal: 16,
    paddingBottom: 22
  },
  gradient: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    borderRadius: 32
  },
  header: {
    flexDirection: "row",
    marginBottom: 72,
    alignItems: "center"
  },
  title: {
    marginBottom: 88,
    fontSize: 22,
    fontWeight: "bold",
    color: white
  },
  icon: {
    marginRight: 10
  },
  untilText: {
    color: white,
    fontSize: 13
  },
  footer: {
    flexDirection: "row",
    alignItems: "center"
  },
  circular: {
    marginRight: 16
  },
  footerText: {
    fontSize: 13,
    color: white,
    marginBottom: 2
  },
  footerTextOpacity: {
    marginBottom: 0,
    opacity: 0.5
  },
  points: {
    fontSize: 17,
    color: white
  }
});

export default styles;
