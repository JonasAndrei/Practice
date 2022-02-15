import React, { useState } from 'react';
import { FlatList, SafeAreaView, View } from 'react-native';

import Screen from '../components/Screen';
import ListItem from '../components/ListItem';
import ListItemSeperator from '../components/ListItemSeperator';
import ListItemDeleteAction from '../components/ListItemDeleteAction';

const initialMessages = [
    {
        id: 1,
        title: 'T1',
        description: 'D1',
        image: require('../assets/avatar.png')
    },
    {
        id: 2,
        title: 'T2',
        description: 'D2',
        image: require('../assets/avatar.png')
    }
]

function MessagesScreen(props) {

    const [messages, setMessages] = useState(initialMessages);

    const [refreshing, setRefreshing] = useState(false);

    const handleDelete = (message) => {
        setMessages(messages.filter((m) => m.id !== message.id));
    }

    return (
        <Screen>
            <FlatList
                data={messages}
                keyExtractor={message => message.id.toString()}
                renderItem={({ item }) => 
                    <ListItem 
                        title={item.title}
                        subTitle={item.description}
                        image={item.image}
                        onPress={() => console.log(item)}
                        renderRightActions={ListItemDeleteAction}
                    />}
                    ItemSeparatorComponent={ListItemSeperator}    
                    refreshing={refreshing}
                    onRefresh={() => {
                        setMessages([
                            {
                                id: 2,
                                title: 'T2',
                                description: 'D2',
                                image: require('../assets/avatar.png')
                            }
                        ])
                    }}           
            />
        </Screen>
    );
}

export default MessagesScreen;