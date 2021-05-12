import React from 'react';
import { Text, View, TouchableOpacity, TextInput, Image, StyleSheet, Alert, KeyboardAvoidingView } from 'react-native';
import {Header} from 'react-native-elements';
import db from '../config'


export default class WriteStoryScreen extends React.Component {
    constructor(){
        super();
        this.state={
          Title: '',
          Author: '',
          Story: '',
        }
    }

    submitStory = ()=>{
      db.collection("Stories").add({
          Title: this.state.title,
          Author: this.state.author,
          Story: this.state.story
      })
      this.setState({
          Title: "",
          Author: "",
          Story: ""
      })
      Alert.alert('Story Submited');
  }

    render() {
        return (
            <KeyboardAvoidingView  style={styles.container} behavior="padding" enabled>
               
               <Header
                 backgroundColor={'#ffc0cb'}
                 centerComponent={{
                  text: 'Story Hub',
                  style: { color: 'black', fontSize: 18, fontFamily: 'ArialRoundedMTBold' },
                 }}
               />

               <TextInput style={styles.inputBox} placeholder={'Story Title'} 
                    onChangeText={(text) => {
                    this.setState({
                        Title : text,
                    });
                    }}
                />
               <TextInput style={styles.inputBox}  placeholder={'Author'} 
                    onChangeText={(text) => {
                            this.setState({
                                Author : text,
                            });
                            }}
               />
               <TextInput style={styles.inputBox2}  placeholder={'Write your story'}
                    onChangeText={(text) => {
                        this.setState({
                            Story : text,
                        });
                        }}
               />

               <TouchableOpacity 
                    style={styles.submitButton}
                    onPress={this.submitStory}
                    >
                        <Text style={styles.buttonText}> Submit </Text>
               </TouchableOpacity>

               </KeyboardAvoidingView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    inputBox:{
        width: 200,
        height: 40,
        borderWidth: 1.5,
        fontSize: 20,
        marginTop: 10,
        marginBottom: 10,
    },
    inputBox2: {
        width: 200,
        height: 200,
        borderWidth: 1.5,
        fontSize: 20,
        marginTop: 10,
        marginBottom: 10,
    },
    submitButton:{
        backgroundColor: '#ffc0cb',
        padding: 10,
        margin: 10,
        borderRadius: 15,
    },
    buttonText:{
        fontSize: 15,
        textAlign: 'center',
        marginTop: 10,
        marginBottom: 10,
    },
})










