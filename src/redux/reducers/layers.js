import { CREATE_NEW_LAYER, SELECT_LAYER } from "../actions/types";


const initialState = {
    layers: [],
};

export default function Layers (state = initialState, action)  {
    const { type, payload } = action;

    switch(type){
        case CREATE_NEW_LAYER:
            const layerName = payload;

            const newLayer = {
                'name': layerName,
                'position': 0,
                'is_selected': true,
                'draw': '',
            };

            return {
                ...state,
                layers: [...state.layers, newLayer],
            };

            case SELECT_LAYER:
                const layerToBeEditeder = state.layers.find(layer => layer.position === payload);
                
                if(layerToBeEditeder) {
                    const newLayers = state.layers.map(layer => {
                    if (layer.position === payload) {
                        return { ...layer, is_selected: true };
                    } else if (layer.position === lastLayerSelected.position) {
                        return { ...layer, is_selected: false };
                    } else {
                        return layer;
                    }
                    });
                
                    return {
                        ...state,
                        layers: newLayers
                    };
                } else {
                    return state;
                };

                

        default:
            return state
    }

}


