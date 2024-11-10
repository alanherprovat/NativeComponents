import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const ServiceReqCard = ({ CardStyle,data }) => {
  return (
    <View style={[styles.cardContainer, data?.currStatus ==="Completed"?{backgroundColor:"#0F7C4B"}:null]}>
      <View style={styles.leftBorder} />
      <View style={styles.card}>
        <View style={styles.content}>
          {/* Left-aligned main content */}
          <View style={styles.mainContent}>
            <Text style={styles.title}>{data?.Request_Type}</Text>
            {data?.ReqAmount &&  <Text style={styles.amount}>BDT {data?.ReqAmount}</Text>}
            {data?.ScriptName &&  <Text style={styles.amount}>{data?.ScriptName}</Text>}
            {data?.WithdrawAmount &&  <Text style={styles.amount}>BDT {data?.WithdrawAmount}</Text>}
            <Text style={[styles.status,data?.currStatus ==="Completed"?{color:"#24834A"}:null]}>{data?.currStatus ==="Completed"?data?.currStatus:data?.currStatus+"..."}</Text>
          </View>
          
          {/* Right-aligned date content */}
          <View style={styles.dateContent}>
            <Text style={styles.dateText}>Request Date: 24 Oct 2024</Text>
            <Text style={styles.dateText}>Exp. Completion Date: 01 Jan 2025</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default ServiceReqCard;

const styles = StyleSheet.create({
  cardContainer: {
    flexDirection: 'row',
    width: '90%',
    margin: 8,
    alignSelf: 'center',
    alignItems: 'center',
    borderRadius: 12,
    backgroundColor: '#FF8000',
  },
  leftBorder: {
    width: 4.5,
    backgroundColor: '#FF8000',
    borderTopLeftRadius: 12,
    borderBottomLeftRadius: 12,
  },
  card: {
    flex: 1,
    shadowRadius: 4,
    elevation: 4,
    borderRadius: 8,
    backgroundColor: '#F4F4F4',
    padding: 16,
  },
  content: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  mainContent: {
    flex: 1,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    fontWeight: '700',
    color: '#000000',
    marginBottom: 4,
   
  },
  amount: {
    fontSize: 16,
    color: '#000000',
    fontWeight: '400',
  },
  status: {
    fontSize: 16,
    color: '#D0D00B',
    marginTop: 4,
  },
  dateContent: {
    width:200,
    alignItems: 'flex-start',
    flexWrap:'wrap',
    gap:3
  },
  dateText: {
    fontSize: 14,
    color: '#000000',
    fontWeight: '400',
  },
});
