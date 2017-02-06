/**
 * Created by limin on 17/2/6.
 */
import React, { Component } from 'react';
import {
    AppRegistry,
    Text,
    View,
    NavigatorIOS,
    Navigator,
    TouchableHighlight
} from 'react-native';

import  HistoryComponent from './HistoryComponent'
export default class HomePageComponent extends Component{


    constructor(props){
        super(props);
        this.state = {title:''};
        this._onFoward = this._onFoward.bind(this);
    }

    _onFoward(){
        this.props.navigator.push({title:'历史记录测试',component:HistoryComponent,barTintColor:'#ffffcc',passProps:{name:'历史记录测试'}});
    }

    render(){
        return(
            <View style={{flex:1, alignItems :'center',justifyContent:'center'}}>
                <TouchableHighlight onPress={this._onFoward}>
                <Text style={{color:'blue'}}>Hello, {this.state.title} </Text>
                </TouchableHighlight>
            </View>
        );
    }

    componentDidMount() {
        this.setState({title: this.props.name});
    }

}

// AppRegistry.registerComponent('HomePageComponent',()=>HomePageComponent);