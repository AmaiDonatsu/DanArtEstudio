import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Modal } from "react-native";
import { change_color, show_color_mixer, } from '../../redux/actions/draw';
import { connect, useDispatch } from "react-redux";
import ColorMix from "./colorMix";
import Slider from '@react-native-community/slider';


const ColorMixer = ({ draw }) => {
    const r = draw.r;
    const g = draw.g;
    const b = draw.b;
    console.log(r)
    const visible_color_mixer = draw.show_color_mixer;

    const dispatch = useDispatch();

    const handleColorChange = (channel, value) => {
        console.log("hchchc")
        dispatch(change_color(channel, value));
    };

    const handleShowModal = (e) => {
        dispatch(show_color_mixer(e))
    }

    return (
        <View style = {styles.container}>

            <Modal
                visible={visible_color_mixer}
                animationType="slide"
                transparent={true}
            >
                <View style={styles.overlay}>
                    <View style={styles.modalContainer}>
                        <TouchableOpacity onPress={() => handleShowModal(false)} style={styles.closeButton}>
                            <Text>Cerrar</Text>
                        </TouchableOpacity>

                        <View>
                            <ColorMix r={r} g={g} b={b} w={160} h={160} hex_text_color={"#000000"}/>
                        </View>
                        
                        <Slider
                            style={{width: 200, height: 40}}
                            minimumValue={0}
                            maximumValue={255}
                            minimumTrackTintColor="#ff0000"
                            maximumTrackTintColor="#000000"
                            value={r}
                            step={1}
                            onValueChange={value => handleColorChange('r', value)}
                        />

                        <Slider
                            style={{width: 200, height: 40}}
                            minimumValue={0}
                            maximumValue={255}
                            minimumTrackTintColor="#00ff00"
                            maximumTrackTintColor="#000000"
                            value={g}
                            step={1}
                            onValueChange={value => handleColorChange('g', value)}
                        />

                        <Slider
                            style={{width: 200, height: 40}}
                            minimumValue={0}
                            maximumValue={255}
                            minimumTrackTintColor="#0000ff"
                            maximumTrackTintColor="#000000"
                            value={b}
                            step={1}
                            onValueChange={value => handleColorChange('b', value)}
                        />

                    </View>
                </View>
            </Modal>

            <View style = {styles.colorShowContainer}>
                <TouchableOpacity onPress={e => handleShowModal(true)}>  
                    <View>
                        <ColorMix r={r} g={g} b={b} w={100} h={100} hex_text_color={"#ffffff"}/>
                    </View>
                </TouchableOpacity>
            </View>
            
        </View>
    );
};

const mapStateToProps = state => ({
    draw: state.Draw,
})

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        alignItems: 'center',

    },

    colorShowContainer: {
        margin: 10,
        backgroundColor: '#212429',
        height: 150,
        width: 150,
        flexDirection: 'column',
        alignItems: 'center',
        alignContent: 'center'

    },

    overlay: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.5)', 
        justifyContent: 'center', 
        alignItems: 'center', 
    },
    modalContainer: {
        width: '20%', 
        height: '50%', 
        backgroundColor: 'white',
        borderRadius: 10,
        padding: 20,
        alignItems: 'center', 
    },
    closeButton: {
        marginBottom: 10, 
    },

    colorShow: {
        
    },

});

export default connect(mapStateToProps, {

})(ColorMixer);
