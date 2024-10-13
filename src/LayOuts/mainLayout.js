import React from "react";
import { View, Text } from "react-native";

const MainLayOut = ({ children }) => {
    return (
        <View style={{ }}> 
            <View style={{ height: 60, backgroundColor: '#f8f8f8' }}> 
                <Text>BarN</Text>
            </View>

            <View style={{ height: 50, backgroundColor: '#e0e0e0' }}> 
                <Text>File Bar</Text>
            </View>

            <View style={{ flex: 1 }}>
                {children}
            </View>

            <View style={{ height: 60, backgroundColor: '#f8f8f8' }}> 
                <Text>Footer</Text>
            </View>
        </View>
    );
};

export default MainLayOut;
