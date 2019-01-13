import React, {Component} from 'react';
import {Body, Card, CardItem, Text,Icon,Right,Left,List,ListItem} from "native-base";

class LastActionItem extends Component {
    state = {};
    render() {
        return (
            <Card>
                <CardItem>
                    <Icon type={"MaterialIcons"} style={{color:this.props.roomColor,fontSize:30}} name='room' />
                    <Body>
                        <Text style={{fontWeight: 'bold',fontSize:18}}>
                            { this.props.roomName }
                        </Text>
                        <Text>
                            { this.props.roomDate }
                        </Text>
                    </Body>
                </CardItem>
            </Card>
        );
    }
}

export default LastActionItem;
