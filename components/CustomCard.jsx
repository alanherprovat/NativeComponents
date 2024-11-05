import { StyleSheet, View } from 'react-native'
import * as React from 'react';
import { Avatar, Button, Card, Text } from 'react-native-paper';
const LeftContent = props => <Avatar.Icon {...props} icon="folder" />

const CustomCard = ({children,style}) => {
  return (
        <Card
          mode="contained"
          style={[styles.card,style]}
          contentStyle={styles.cardContent}
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
        margin: 16,
        width: '90%',
        shadowColor: '#000',         // Shadow color
        shadowOffset: { width: 0, height: 0 }, // Shadow offset for x and y
        shadowOpacity: 0.25,         // Opacity to create a soft shadow
        shadowRadius: 4,             // Blurring of the shadow
        elevation: 4,                // Elevation for Android shadow
        borderRadius: 10,            // Custom border radius
        backgroundColor: 'rgba(255, 255, 255, 0.77)',
        borderWidth: 1,
        borderColor: '#FFFFFF'
    },
      
    cardContent: {
    flex:1
    },
    content: {
    //   gap: 8,                // Space between title and body
    },
    title: {
      fontSize: 24,
      fontWeight: 'bold',
      color: '#1a1a1a',      // Custom text color
      marginBottom: 8,
    },
    body: {
      fontSize: 24,
      color: '#CC0A13',         // Custom text color
      lineHeight: 24,
    },
  });
  