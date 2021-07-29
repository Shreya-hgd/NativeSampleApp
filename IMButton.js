import React from 'react'
import { View, Button, Text } from 'native-base';

function IMButton() {
    return (
        <View>
            <Button block info style={{ marginHorizontal: 20, marginTop: 20 }}>
                <Text >Login In</Text>
            </Button>
        </View>
    )
}

export default IMButton
