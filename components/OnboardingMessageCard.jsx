import { StyleSheet, View } from 'react-native'
import * as React from 'react';
import { Avatar, Button, Card, Text } from 'react-native-paper';
const LeftContent = props => <Avatar.Icon {...props} icon="folder" />

const OnboardingMessageCard = ({children,style}) => {
  return (
        <Card
          mode="contained"
          style={[styles.card,style]}
          contentStyle={styles.cardContent}
        >
          <Card.Content style={styles.content}>
            {/* <Text style={styles.body}> */}
             {children}
            {/* </Text> */}
          </Card.Content>
          
        </Card>
  )
}

export default OnboardingMessageCard

const styles = StyleSheet.create({
    card: {
      flex: 1,
      margin: 16,
      width:'90%',
      shadowRadius: 3.84,
      borderRadius: 10,       // Custom border radius
      backgroundColor: '#FFF0F1', // Custom background color
      borderWidth:1,
      borderColor:'#CC0A13'
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
  