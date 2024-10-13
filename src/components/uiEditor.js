import React from "react";
import { View, Text, StyleSheet } from "react-native";
import ColorMixer from "./editorComponents/colorMixer";
import Canvas from "./editorComponents/canvas";

const UIEditor = () => {
    return(
        <View style={styles.container}>
            <View style={styles.barraL}>
                <Text>
                    barra L
                </Text>
            </View>


            <View style={styles.canvas_container}>
                <View>
                    <Canvas />
                </View>
            </View>

            <View style={styles.barraR}>
                <View>
                    <ColorMixer />
                </View>
            </View>

        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        flexDirection: 'row'
    },

    barraL: {
        backgroundColor: '#212429',
        width: 200,
    },

    canvas_container: {
        flex: 1,
        backgroundColor: "#7f7f7f",
        justifyContent: 'center',
        alignItems:'center'
    },

    barraR: {
        backgroundColor: '#000000',
        width: 200,
    },
})


export default UIEditor;

