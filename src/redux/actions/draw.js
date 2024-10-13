import { CHANGE_COLOR, SHOW_COLOR_MIXER } from "./types";
import redux from 'redux';


export const change_color = (chanel, value) => async dispatch => {
    try {
        dispatch({
            type:CHANGE_COLOR,
            payload: {
                key: chanel,
                value: value,  
            },
        })

    } catch (e) {
        console.log(`Error al intentar cambiar el color: ${e}`);
    };

};

export const show_color_mixer = show => async dispatch => {
    dispatch({
        type: SHOW_COLOR_MIXER,
        payload: show
    })
};