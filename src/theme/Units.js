import { Dimensions } from "react-native"
import { initialWindowMetrics } from "react-native-safe-area-context"

export const units = {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height - initialWindowMetrics.insets.top 
}

const defaultValues = {
    height: 844,
    width: 390
}

export const getRH = (number) => {
    return (number * units.height) / defaultValues.height
}

export const getRW= (number) => {
    return (number * units.width) / defaultValues.width
}