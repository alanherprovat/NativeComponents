import { StyleSheet, View,Dimensions } from 'react-native'
import * as React from 'react';
import { Avatar, Button, Card, Text } from 'react-native-paper';
const { width } = Dimensions.get('window');


const HeaderAfterLogin = ({children,style}) => {
    return (
        <Card
          mode="contained"
          style={[styles.card,style]}
        >
          <Card.Content style={styles.content}>
             {children}
          </Card.Content>
          
        </Card>
  )
}

export default HeaderAfterLogin

const styles = StyleSheet.create({
    card: {
        flex: 1,
        margin: 8,
        width: '100%',
        // justifyContent:'space-between',
        // alignItems:'center',
        backgroundColor: '#FFFFFF',
        borderWidth: 1,
        borderColor: '#000000',
        borderRadius:0,
        height:'auto'
      
    },
      
    cardContent: {
    // flex:1,
    // justifyContent:'center',
    // alignItems:'center'
    },
    content: {
     justifyContent:'center',
     alignItems:'center'
    },
   
  });