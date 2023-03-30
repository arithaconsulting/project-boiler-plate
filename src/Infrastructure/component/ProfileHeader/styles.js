import { StyleSheet } from "react-native";
import { scale } from "../../utils/screenUtility";
import colors from "../../assets/colors/colors";
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    padding: scale(10),
    justifyContent: "space-between",
    borderRadius: scale(5),
    borderColor: colors.White_Smoke,
    borderWidth: scale(2),
  },
  profilePic: {
    marginTop: scale(30),
    marginLeft: scale(-15),
  },
  userName: {
    fontFamily: "Montserrat-Medium",
    fontSize: scale(12),
    color: colors.Sapphire,
  },
  email: {
    fontFamily: "Montserrat-Regular",
    fontSize: scale(9),
    color: colors.Sapphire,
  },
  status: {
    fontFamily: "SourceSansPro-Regular",
    fontSize: scale(11),
    color: colors.Salmon,
  },
  editContainer: {
    backgroundColor: colors.PattensBlue,
    paddingHorizontal: scale(10),
    paddingVertical: scale(5),
    borderRadius: scale(20),
    marginTop: scale(5),
  },
  edit: {
    fontSize: scale(13),
    color: colors.PacificBlue,
  },
});

export default styles;
