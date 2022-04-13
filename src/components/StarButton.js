import React, { Component } from 'react';
import { Button } from 'native-base';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

export default class StarButton extends Component {
  
    state = {
        name:0,
        iconName: "star-o", iconColor: '#4DC5D6'
    }

    call = ()=>{
    // 使用 this.setState() 修改狀態
        if (this.state.name ==0) {
            this.setState(
                {
                    name: 1,
                    iconName: "star", iconColor: '#4DC5D6'
                }
            );
        } else {
            this.setState(
                {
                    name: 0,
                    iconName: "star-o", iconColor: '#4DC5D6'
                }
            );
        }
    }

    render() {
        return (
            <>
                <Button
                    onPress={this.call}
                    backgroundColor="transparent"
                    size="10"
                    justifyContent="center"
                    alignItems='center'
                >
                    <FontAwesome
                        name= {this.state.iconName}
                        size={25}
                        style={{
                            color: this.state.iconColor, 
                            margin:0,
                            marginRight:0,
                        }} 
                    />
                </Button>
            </>
        )
    }
}