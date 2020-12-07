import React, { Component } from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/dist/FontAwesome';

export default class Cards extends Component {
  render() {
    return (

      <ScrollView>

        <View style={{...styles.container, backgroundColor:this.props.bg}} >

          <View style={styles.col}>
            <Icon name={this.props.icon} size={30} color={this.props.bg == "red" ? "#fff": "red"} />

            <TouchableOpacity onPress={this.props.onPress}>
              <Icon style={{marginLeft: 50}} name="dots-vertical" size={30} color="#b8b8aa" />
            </TouchableOpacity> 
          </View>

          <Text style={styles.title}>
            {this.props.title}
          </Text>

          <Text style={{...styles.number, color:this.props.bg == "red" ? "#fff" : "#000"}}>
            {this.props.number}
          </Text>
          
        </View>

      </ScrollView>
    )
  }
}


const styles = StyleSheet.create({
  container:{
    height:180,
    width:130,
    borderRadius:30,
    padding:15,
    marginLeft:20,
    marginRight: 20,
    marginBottom: 20,
  },
  col: {
      flexDirection:"row"
  },
  title:{
      marginTop:30,
      textAlign:"center",
      color:"#b8b8aa",
      fontWeight:"bold",
      fontSize:12
  },
  number:{
      fontWeight:'bold',
      textAlign:"center",
      fontSize:19,
  }
})
