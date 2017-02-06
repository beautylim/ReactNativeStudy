/**
 * Created by limin on 17/2/6.
 */
import React, { Component } from 'react';
import {
    // AppRegistry,
    StyleSheet,
    Text,
    View,
    ListView,
    TabBarIOS,
    NavigatorIOS,
    Navigator
} from 'react-native';

export default class MySelfComponent extends Component{
    constructor(props){
        super(props);
        this.state = {title:''};
    }

    render(){
        return(
            <View style={{flex:1, alignItems :'center',justifyContent:'center'}}>
                <Text style={{color:'yellow'}}>Hello, {this.state.title} </Text>
            </View>
        );
    }

    componentDidMount() {
        this.setState({title: this.props.name});
    }

}

// AppRegistry.registerComponent('MySelfComponent',()=>MySelfComponent);