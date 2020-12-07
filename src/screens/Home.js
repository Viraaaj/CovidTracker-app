import React, { Component } from 'react';
import { Text, View, StyleSheet, Image, Button, ImageBackground } from 'react-native';
// import Icon from 'vector-icons/Iconicons';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import { ScrollView } from "react-native-gesture-handler";
import Deck from "../components/Deck";
import Cards from "../components/Cards";
// import Chart from "../components/Chart";
import Buttons from "../components/Buttons";
 
const DATA = [
  {
    id: 1,
    title: "TOTAL COVID19 CASES",
    number: "46,110,801",
  },
  {
    id: 2,
    title: "TOTAL DEATHS",
    number: "1,195,930",
  },
  {
    id: 1,
    title: "TOTAL RECOVERED",
    number: "30,858,057",
  },
]

export default class Home extends Component {

  renderCard(item){
    return(

    <ScrollView>

    <View key={item.id} style={styles.cardContainer} >
      <View style={styles.card}>
        <View>
          <Text style={styles.title} >
            {item.title}
          </Text>

          {/* <Icon name="ios-remove" size={40} color="red" style={{marginTop: 25}} /> */}

          <Text style={styles.number} >
            {item.number}
          </Text>
        </View>

        <View>
          {/* <Icon name="md-options" size={24} color="#fff" /> */}
          <Text style={styles.textCovid}>
            COVID-19
          </Text>
        </View>
      </View>
    </View>
    </ScrollView>

    );
  }

  renderNoMoreCards() {
    return(
      <View title="All Done!">
        <Text style={styles.noCard}>
          No More Cards Here!
        </Text>

        <Button backgroundColor="#00000" title="Get More!" />
      </View>
    )
  }




        render() {
          return (

            <ScrollView>

              <View style={styles.container}>

                  <ImageBackground source={require("../images/unnamed.jpg")} style={styles.map}>

                    <View style={styles.col}>

                      {/* <View style={{width:"50%"}}>
                        <Icon name="md-remove" color="#fff" size={26} />
                        <Icon name="md-remove" color="#fff" size={26} style={styles.minusIcon} />
                      </View> */}

                      <View style={styles.avatarContainer}> 
                        <Image source={require("../images/profileAditya.jpg")} style={styles.avatar} />
                      </View>

                    </View>

                    <Text style={styles.textDash}>
                      COVID-19 DASHBOARD
                    </Text>

                    <View style={styles.colContainer}>
                      <Text style={styles.textGlobal}>
                        GLOBAL
                      </Text>
                      <Text style={styles.textIndia}>
                        INDIA
                      </Text>
                      <View style={styles.reloadContainer}>
                        <Icon name="md-refresh" size={24} color="red" />
                      </View>
                    </View>

                  </ImageBackground>

                  <Deck data={DATA} renderCard={this.renderCard} renderNoMoreCards={this.renderNoMoreCards} />

                  <ScrollView style={{marginTop:180}} showsHorizontalScrollIndicator={false} horizontal>

                    <Cards onPress={ () => this.props.navigation.navigate('Detail')}
                    icon="md-pulse" title="TOTAL CASES" bg="red" number="46,110,801" />

                    <Cards icon="md-pulse" title="RECOVERED" bg="red" number="30,858,057" />

                    <Cards icon="md-pulse" title="DEATHS" bg="red" number="1,195,930" />

                  </ScrollView>

                  <View style={{marginBottom:34}}>
                    <Buttons name="ASYMPTOMATIC" number="80% of infections are asymptomatic" />

                    <Buttons name="SYMPTOMATIC" number="15% of infections are symptomatic" />
                  </View>

              </View>
            </ScrollView>
          )
        }
      }


      const styles = StyleSheet.create({
        container:{
            flex:1,
            backgroundColor:"#1c2732"
        },
        cardContainer:{
            height:150,
            width:320,
            alignSelf:"center",
            backgroundColor:"#6A706E",
            borderRadius:30
        },
        card:{
            height:150,
            width:260,
            paddingTop:20,
            paddingHorizontal:30,
            backgroundColor:'#2b3240',
            borderRadius:30,
            flexDirection:'row'
        },
        title:{
            color:"#6A706E",
            width:100,
            fontSize:14,
            fontWeight:"bold"
        },
        number:{
            color:"#FFF",
            width:100,
            fontSize:18,
            fontWeight:"bold",
            marginTop:30,
        },
        textCovid:{
            transform:[{ rotate : "-90deg"}],
            color:"#3a4b4f",
            fontSize:14,
            width:90,
            marginLeft: 120,
            fontWeight:'bold',
            marginTop:30
        },
        noCard:{
            marginBottom:10,
            color:'#FFF',
            alignSelf:"center"
        },
        map:{
            height:200,
            paddingTop:25,
            paddingHorizontal:20,
            marginBottom:15
        },
        col:{
            flexDirection:'row'
        },
        minusIcon:{
            marginTop:-20,
            marginLeft:5
        },
        avatarContainer:{
            width:"50%",
            alignItems:'flex-end',
        },
        avatar:{
            width:40,
            height:40,
            borderRadius:20
        },
        textDash:{
            color:"#FFF",
            fontSize:20,
            alignSelf:'center',
            marginTop:15,
            fontWeight:'bold'
        },
        colContainer:{
            flexDirection:"row",
            paddingHorizontal:30,
            marginTop:40,
            alignItems:'center',
        },
        textGlobal:{
            fontWeight:"bold",
            fontSize:16,
            color:"red",
            marginLeft: 10,
        },
        textIndia:{
            fontWeight:"bold",
            fontSize:16,
            paddingHorizontal:30,
            color:"#6a706e"
        },
        reloadContainer:{
            backgroundColor:"#FFF",
            elevation:2,
            width:40,
            height:40,
            borderRadius:20,
            alignItems:'center',
            justifyContent:"center",
            marginLeft:80
        }
    
    
    });
