import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 10,
  },
  image: {
    height: 50,
    width: 50,
    marginRight: 10,
    borderRadius: 25,
  },
  badgeContainer: {
    position: "absolute",
    alignItems: "center",
    justifyContent: "center",
    height: 20,
    width: 20,
    top: 10,
    left: 45,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "white",
    backgroundColor: "#3777f0",
  },
  badgeText: {
    color: "white",
    fontSize: 12,
  },
  rightContainer: {
    flex: 1,
    justifyContent: "center",
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  name: {
    marginBottom: 3,
    fontSize: 18,
    fontWeight: "bold",
  },
  text: {
    color: "grey",
  },
});

export default styles;
