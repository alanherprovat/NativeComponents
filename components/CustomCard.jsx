import { StyleSheet, View } from 'react-native'
import * as React from 'react';
import { Avatar, Button, Card, Text } from 'react-native-paper';
const LeftContent = props => <Avatar.Icon {...props} icon="folder" />

const CustomCard = ({children,style}) => {
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

export default CustomCard

const styles = StyleSheet.create({
    card: {
        flex: 1,
        margin: 8,
        width: '90%',
        justifyContent:'center',
        alignItems:'center',
        // shadowColor: '#000',         // Shadow color
        // shadowOffset: { width: 0, height: 0 }, // Shadow offset for x and y
        // shadowOpacity: 0.25,         // Opacity to create a soft shadow
        shadowRadius: 4,             // Blurring of the shadow
        elevation: 4,                // Elevation for Android shadow
        borderRadius: 10,            // Custom border radius
        backgroundColor: 'rgba(255, 255, 255, 0.8)',
        borderWidth: 1,
        borderColor: 'rgba(210, 206, 206, 1)'
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
  