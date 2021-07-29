import React from 'react';
import { Image } from 'react-native';
import {View, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right } from 'native-base';

function IMCard() {
    return (
        <View>
            <Card>
                <CardItem>
                    <Left>
                        <Thumbnail source={{ uri:'https://i.pravatar.cc/300?img=12' }} />
                        <Body>
                            <Text>Micheal</Text>
                            <Text note>Java Developer</Text>
                        </Body>
                    </Left>
                </CardItem>
                <CardItem cardBody>
                    <Image source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1TkllByqLH6G2xhljsG7QIkt0yfDPmPBN9POdNQwjw7oHgBScbeyEuzNl-rM6Su5wV60&usqp=CAU' }} style={{ height: 200, width: null, flex: 1 }} />
                </CardItem>
                <CardItem>
                    <Left>
                        <Button transparent>
                            <Icon active name="thumbs-up" />
                            <Text>12 Likes</Text>
                        </Button>
                    </Left>
                    <Right>
                        <Button transparent>
                            <Icon active name="chatbubbles" />
                            <Text>4 Comments</Text>
                        </Button>
                    </Right>
                </CardItem>
            </Card>
        </View>
    )
}

export default IMCard
