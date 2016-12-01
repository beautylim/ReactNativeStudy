/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {AppRegistry,Text,View,StyleSheet,Image,ScrollView,TextInput,ListView} from 'react-native';

class Greeting extends Component{
  render(){
     return (
       <Text> Hello {this.props.name}!</Text>
      );

  }
}

class Blink extends Component{
  constructor(props){
    super(props);
    this.state = {showText:true};

    setInterval(() => {
      this.setState({showText:!this.state.showText});

    },1000);

  }

  render(){
    let display = this.state.showText?this.props.text:' ';
    return(
      <Text>{display}</Text>
      );

  }

}

class ReactStudyProject extends Component{
  render(){
    return (
      <View style={{alignItems:'center'}}>
      <Greeting name='Rose' ></Greeting>
      <Greeting name='Jack' ></Greeting>
      <Blink text='I love to blink' />
      <Blink text='Yes blinking is so great' />

      <Text style={styles.red}>just red</Text>
      <Text style={styles.bigBlue}>just bigblue</Text>
      <Text style={[styles.bigBlue, styles.red]}>bigblue, then red</Text>
      <Text style={[styles.red, styles.bigBlue]}>red, then bigblue</Text>
      </View>
    );
  }
}

class FiexedDimensionBasics extends Component{
  render(){
    return(
        <View>
          <View style = {{width:50,height:50,backgroundColor:'powderblue'}}/>
          <View style = {{width:100,height:100,backgroundColor:'skyblue'}}/>
          <View style = {{width:150,height:150,backgroundColor:'steelblue'}}/>
        </View>
      );
  }

};

class FlexDimensionsBasics extends Component{
  render(){
    return (
      <View style ={{flex:1}}>
        <View style={{flex:1,backgroundColor:'powderblue'}}/>
        <View style={{flex:2,backgroundColor:'skyblue'}}/>
        <View style={{flex:3,backgroundColor:'steelblue'}}/>
      </View>
    );

  }

};

class FlexDirection extends Component{
  render(){
    return(
      <View style={{flex:1,flexDirection:'row'}}>
        <View style={{flex:1,backgroundColor:'powderblue'}}/>
        <View style={{flex:2,backgroundColor:'skyblue'}}/>
        <View style={{flex:3,backgroundColor:'steelblue'}}/>
      </View>
    );
  }

};

//Justify Content 'flex-start, center, flex-end, space-around, space-between' default strtch
class JustifyContentBasic extends Component{
  render(){
    return(
      <View style={{flex:1,flexDirection:'column',justifyContent:'space-around'}}>
        <View style={{width:50,height:50,backgroundColor:'powderblue'}}/>
        <View style={{width:50,height:50,backgroundColor:'skyblue'}}/>
        <View style={{width:50,height:50,backgroundColor:'steelblue'}}/>
      </View>
    );
  }

};

//alignItems Content 'flex-start, center, flex-end, stretch
class AlignItemsBasic extends Component{
  render(){
    return(
      <View style={{flex:1,flexDirection:'column',justifyContent:'center',alignItems:'flex-end'}}>
        <View style={{width:50,height:50,backgroundColor:'powderblue'}}/>
        <View style={{width:50,height:50,backgroundColor:'skyblue'}}/>
        <View style={{width:50,height:50,backgroundColor:'steelblue'}}/>
      </View>
    );
  }

};

const styles = StyleSheet.create({
  bigBlue:{
    color:'blue',
    fontWeight:'bold',
    fontSize:30
  },
  red:{
    color:'red'
  }
});

class TextInputBasic extends Component{
  constructor(props){
    super(props);
    this.state = {text:''};
  }

  render(){
    return (
      <View style={{padding:10}}>
       <TextInput style={{height:40}} placeholder = "Type here to translate" onChangeText={(text) => this.setState({text})}/>
       <Text style={{padding:10,fontSize:42}}>
         {this.state.text.split(' ').map((word) => word && '*').join(' ')}
       </Text>
      </View>
    );
  }
};

class ScrollViewBasic extends Component{
  render(){
    return (
      <ScrollView>
        <Text style={{fontSize:96}}>Scroll me Please</Text>
         <Image source={require('./images/summer.jpg')} />
         <Image source={require('./images/Dawn.jpg')} /> 
         <Image source={require('./images/summer.jpg')} />
         <Image source={require('./images/Dawn.jpg')} /> 
          <Image source={require('./images/summer.jpg')} />
         <Image source={require('./images/Dawn.jpg')} /> 
         <Image source={require('./images/summer.jpg')} />
         <Image source={require('./images/Dawn.jpg')} /> 
         <Text style={{fontSize:80}}>React Native</Text>
      </ScrollView>
    );
  }
};

class ListViewBasic extends Component{
  constructor(props){
    super(props);
    const ds = new ListView.DataSource({rowHasChanged:(r1,r2) => r1 !== r2});//bug,把DataSource写成Datasource了
    this.state = {
      dataSource:ds.cloneWithRows([
        'John','Joel','James','Jimmy','Jackson','Jillian','Julie','Devin'
        ])
    };
  }

  render(){
    return (
    <View>
      <ListView dataSource={this.state.dataSource} renderRow={(rowData) => <Text>{rowData}</Text>} />
    </View>
    ); //忘记写return （）；了
  }
};

AppRegistry.registerComponent('ReactStudyProject', () => ListViewBasic);
