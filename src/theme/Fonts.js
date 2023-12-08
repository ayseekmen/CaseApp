import { Dimensions } from "react-native";

const type = {
    boldItalic: 'Rubik-BoldItalic',
    regular: 'Rubik-Regular',
    semiBold: "Rubik-SemiBold",
    extraBold: "Rubik-ExtraBold",
    light: "Rubik-Light",
    medium: "Rubik-Medium",
    bold: "Rubik-Bold"
};

const units = {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height
}

const defaultValues = {
    height: 812,
    width: 375
}

const size = punto => {
    return units.height / (defaultValues.height / punto)
};

export default {
    type,
    size,
};