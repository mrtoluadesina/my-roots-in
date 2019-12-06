import { colors } from "../../constants/colors";

export const buttonShadows = {
  shadowColor: colors.rootShadow,
  justifyContent: "center",
  alignItems: "center",
  shadowOffset: {
    width: 0,
    height: 4
  },
  shadowOpacity: 0.4,
  shadowRadius: 15,
  elevation: 3
};

export const buttonStyle = {
  fullWidth: {
    marginTop: 50,
    width: "70%",
    height: 52,
    backgroundColor: colors.rootGreenDark,
    ...buttonShadows
  },
  textColor: {
    color: colors.rootWhite,
    fontSize: 14,
    fontFamily: "Helvetica-Bold"
  }
};
