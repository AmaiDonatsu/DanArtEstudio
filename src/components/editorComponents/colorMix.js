import React from "react";
import { View, Text } from "react-native";
import { rgbToHex } from "../../utils/color";

const ColorMix = ({r, g, b ,w, h, hex_text_color}) => {
    return(
        <View> 
            <View style={{
                backgroundColor: `rgb(${r}, ${g}, ${b} )`,
                height: h,
                width: w,
                margin: 5
            }}>

            </View>

            <Text style={{color: hex_text_color}}>
                {rgbToHex(r,g,b)}
            </Text>
        </View>
    );
};

export default ColorMix;

