import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'
import { WhiteSpace, WingBlank } from '@ant-design/react-native'

export default class Movie extends React.Component {
  render () {
    return (
      <View style={styles.container}>
        <Text>Add movie details here!</Text>
        <Button
          title='Back Home'
          onPress={() => this.props.navigation.navigate('Home')}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
})
