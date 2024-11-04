import { CREATE_NEW_LAYER, SELECT_LAYER } from "./types";



export const createLayer = layerName => async dispatch => {
    try {
        dispatch({
            type: CREATE_NEW_LAYER,
            payload: layerName
        })

    } catch (err) {
        console.log(`error in createLayer: ${err}`);
    };
};

export const selectLayer = layerPosition => async dispatc => {
    try {
        dispatc({
            type: SELECT_LAYER,
            payload: layerPosition,
        });
        
    } catch (err) {
        console.log(`Error in selectLayer: ${err}`);
    };
};
