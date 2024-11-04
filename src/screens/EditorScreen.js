import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import MainLayOut from "../LayOuts/mainLayout";
import UIEditor from "../components/uiEditor";

const EditorScreen = () => {
    return (
      <View style={styles.container}>

        <View style={styles.header}>
          <Text>Header</Text>
        </View>
  
        <View style={styles.fileBar}>
          <Text>File Bar</Text>
        </View>
  
        <View style={styles.content}>
          <UIEditor />
        </View>
  
        <View style={styles.footer}>
          <Text>Footer</Text>
        </View>
      </View>
    );
  };
  
  const styles = StyleSheet.create({
    container: {
      flex: 1, 
      justifyContent: 'flex-start', 
      backgroundColor: '#fff', 
      
    },
    header: {
      width: '100%',
      height: 20, 
      backgroundColor: '#2d3338',
      justifyContent: 'center',
      alignItems: 'center',
      borderBottomColor: "#fff7f1",
      borderBottomWidth: 0.3
    },
    fileBar: {
      width: '100%',
      height: 30, 
      backgroundColor: '#14181a',
      justifyContent: 'center',
      alignItems: 'center',
      borderBottomColor: "#fff7f1",
      borderBottomWidth: 0.3
    },
    content: {
      flex: 1, 
      backgroundColor: '#f5f5f5', 
    },
    footer: {
      width: '100%',
      height: 10, 
      backgroundColor: '#000000',
      justifyContent: 'center',
      alignItems: 'center',
      borderTopColor: "#fff7f1",
      borderTopWidth: 0.3
    },
  });
  
  export default EditorScreen;