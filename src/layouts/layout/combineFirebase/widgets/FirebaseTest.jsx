import React, { useState } from "react";
import firebase from '../../../../stores/firebase';
import moment from 'moment';
import _ from 'lodash';

const FirebaseTest = () => {

    const [formState, setFormState] = useState({
        username: '',
        currentItem: ''
    })

    const [client, setClient] = useState({
        id: '5e3ac7368a1d373b403f998d',
        name: 'AndrejBaldBoy',
        avatar: "https://firebasestorage.googleapis.com/v0/b/dentalconciergeportal.appspot.com/o/avatars%2Fclient%2F5e3ac7368a1d373b403f998d?alt=media&token=63e6a8c8-58e0-457a-a7d3-c16ba4e1c4e4"
    })

    const [vendor, setVendor] = useState({
        id: "5e3a1fc9adb8a00017da2d15",
        name: "TestVendor",
        avatar: "https://firebasestorage.googleapis.com/v0/b/dentalconciergeportal.appspot.com/o/avatars%2Fvendor%2F5e3a1fc9adb8a00017da2d15?alt=media&token=751a6b31-fff1-4b66-8c6a-f1b70e38c740"
    })

    const [ data, setData ] = useState({
        type:'text',
        content:'I am from firebase'
    })

    const handleChange = e =>{
        setFormState({
            ...formState,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = () => {

        const clientRef = firebase.database().ref('messages/');
    
        const clientRoom = {
            content:['room']
        }

        clientRef.child('clients').on('value', (snapshost)=>{
            if(snapshost.hasChild(client.id)){
                // clientRef.child('clients').child(client.email).set(null)
            }else{
                clientRef.child('clients').child(client.id).set(clientRoom)
            }
        })  
        // clientRef.child('clients').child(client.email).remove();
        // const itemsRef = firebase.database().ref('items/');
        // const item = {
        //     title: formState.currentItem,
        //     user: formState.username,
        //     content: []
        // }        
        // itemsRef.child('mike').on('value', (snapshost)=>{            
        //     if(snapshost.hasChild(item.user)){
        //         console.log('yes')
        //     }else{
        //         itemsRef.child('mike').child(item.user).set(item)
        //     }
            
        // }) 

        setFormState({
            username:'',
            currentItem:''
        })
        console.log(formState);
    }

    const deleteClient = () => {
        const clientRef = firebase.database().ref('messages/');
        clientRef.child('clients').child(client.id).remove();
        // clientRef.child('clients').child(client.id).set({})            
    }

    const deleteVendor = () => {
        const clientRef = firebase.database().ref('messages/');
        clientRef.child('vendors').child(vendor.id).remove();
        // clientRef.child('clients').child(client.id).set({})           
    }

    const createChatRoom = () => {
        
        // create realtime room
        const realtimeRoomRef = firebase.database().ref('realtimeRoom/')
        const roomID = (client.name+vendor.name).replace(/\s+/g, '');
        realtimeRoomRef.once('value', (snapshost)=>{
            if(!snapshost.hasChild(roomID)){
                realtimeRoomRef.child(roomID).child('client').set({
                    type:'text',
                    content:'empty'
                });
                realtimeRoomRef.child(roomID).child('vendor').set({
                    type:'text',
                    content: 'empty'
                });
            }
        });

        // create client and vendor room
        const roomRef = firebase.database().ref('messages/');
        
        // create client room
        console.log('create client_skin');
        console.log(moment());
        const client_skin = {
            id: vendor.id,
            otherUser: {
                name: vendor.name,
                avatar: vendor.avatar,
                active: true,
                lastActivity: '2020-01-24T19:04:33.475+00:00',
            },
            messages:[
                {
                    id: client.id,
                    sender: {
                        authUser: true,
                        name: client.name,
                        avatar: client.avatar
                    },
                    content: 'How are you ? I want to work with you ! ',
                    contentType: 'text',
                    created_at: '2020-01-24T19:04:33.475+00:00'
                }
            ],
            unread: 0,
            created_at: '2020-01-24T19:04:33.475+00:00',
        }

        roomRef.child('clients').once('value', (snapshost)=>{
            if(!snapshost.hasChild(client.id)){
                roomRef.child('clients').child(client.id).set({content:[client_skin]})
            }
        })

        // create vendor room
        console.log('create vendor_skin');
        // console.log(moment());
        const vendor_skin = {
            id: client.id,
            otherUser: {
                name: client.name,
                avatar: client.avatar,
                active: true,
                lastActivity: '2020-01-24T19:04:33.475+00:00',
            },
            messages:[
                {
                    id: client.id,
                    sender: {
                        authUser: false,
                        name: client.name,
                        avatar: client.avatar
                    },
                    content: 'How are you ? I want to work with you ! ',
                    contentType: 'text',
                    created_at: '2020-01-24T19:04:33.475+00:00'
                }
            ],
            unread: 0,
            created_at: '2020-01-24T19:04:33.475+00:00',
        }
        roomRef.child('vendors').once('value', (snapshost)=>{
            if(!snapshost.hasChild(vendor.id)){
                roomRef.child('vendors').child(vendor.id).set({content:[vendor_skin]})
            }
        })
    }   

    const addClientMessage = () => {
        setData({
            type:'text',
            content:formState.username
        })
        const roomRef = firebase.database().ref('messages/');
        //write client message            

        roomRef.child('clients').child(client.id).once('value',(snapshost)=>{
            let clientChat = snapshost.val();   
            // console.log(snapshost.val())     
            // console.log(clientChat)
            let other_index = _.findIndex(clientChat.content, function(o) { return o.id == vendor.id; });
            const messages = _.get(clientChat, `content[${other_index}].messages`);
            // console.log('messages', messages);
            
            const new_message = {
                id: client.id,
                sender: {
                    authUser: true,
                    name: client.name,
                    avatar: client.avatar
                },
                content: data.content,
                contentType: data.type,
                created_at: '2020-01-24T19:04:33.475+00:00'
            }

            const update_message = [...messages, new_message];
            const newState = _.update(clientChat, `content[${other_index}].messages`, ()=>update_message)
            // console.log(newState);
            roomRef.child('clients').child(client.id).set(newState)                    
        })    

        // write vendor message
        roomRef.child('vendors').child(vendor.id).once('value',(snapshost)=>{
            let vendorChat = snapshost.val();   
            // console.log(snapshost.val())     
            // console.log(vendorChat)
            let other_index = _.findIndex(vendorChat.content, function(o) { return o.id == client.id; });
            const messages = _.get(vendorChat, `content[${other_index}].messages`);
            // console.log('messages', messages);
            
            const new_message = {
                id: client.id,
                sender: {
                    authUser: false,
                    name: client.name,
                    avatar: client.avatar
                },
                content: data.content,
                contentType: data.type,
                created_at: '2020-01-24T19:04:33.475+00:00'
            }

            const update_message = [...messages, new_message];
            const newState = _.update(vendorChat, `content[${other_index}].messages`, ()=>update_message)
            // console.log(newState);
            roomRef.child('vendors').child(vendor.id).set(newState)                    
        })         
    }

    const addVendorMessage = () => {
        setData({
            type:'text',
            content:formState.username
        })
        const roomRef = firebase.database().ref('messages/');

        // write vendor message
        roomRef.child('vendors').child(vendor.id).once('value',(snapshost)=>{
            let vendorChat = snapshost.val();   
            console.log(snapshost.val())     
            console.log(vendorChat)
            let other_index = _.findIndex(vendorChat.content, function(o) { return o.id == client.id; });
            const messages = _.get(vendorChat, `content[${other_index}].messages`);
            console.log('messages', messages);
            
            const new_message = {
                id: vendor.id,
                sender: {
                    authUser: true,
                    name: vendor.name,
                    avatar: vendor.avatar
                },
                content: data.content,
                contentType: data.type,
                created_at: '2020-01-24T19:04:33.475+00:00'
            }

            const update_message = [...messages, new_message];
            const newState = _.update(vendorChat, `content[${other_index}].messages`, ()=>update_message)
            console.log(newState);
            roomRef.child('vendors').child(vendor.id).set(newState)                    
        }) 
        
        // write client message
        roomRef.child('clients').child(client.id).once('value',(snapshost)=>{
            let clientChat = snapshost.val();   
            console.log(snapshost.val())     
            console.log(clientChat)
            let other_index = _.findIndex(clientChat.content, function(o) { return o.id == vendor.id; });
            const messages = _.get(clientChat, `content[${other_index}].messages`);
            console.log('messages', messages);
            
            const new_message = {
                id: vendor.id,
                sender: {
                    authUser: false,
                    name: client.name,
                    avatar: client.avatar
                },
                content: data.content,
                contentType: data.type,
                created_at: '2020-01-24T19:04:33.475+00:00'
            }

            const update_message = [...messages, new_message];
            const newState = _.update(clientChat, `content[${other_index}].messages`, ()=>update_message)
            console.log(newState);
            roomRef.child('clients').child(client.id).set(newState)                    
        }) 
    }
    
    const writeClient = () => {
        setData({
            type:'text',
            content:formState.username
        })

        const realtimeRoomRef = firebase.database().ref('realtimeRoom/')
        const roomID = (client.name+vendor.name).replace(/\s+/g, '');
        realtimeRoomRef.child(roomID).child('client').set({
            type:'text',
            content:data.content
        })
    }

    const writeVendor = () => {

        setData({
            type:'text',
            content:formState.username
        })

        const realtimeRoomRef = firebase.database().ref('realtimeRoom/')
        const roomID = (client.name+vendor.name).replace(/\s+/g, '');
        realtimeRoomRef.child(roomID).child('vendor').set({
            type:'text',
            content:data.content
        })
    }
    
    const getClientMessage = () => {
        const roomRef = firebase.database().ref('messages/');
        roomRef.child('clients').child(client.id).once('value',(snapshost)=>{
            let clientChat = snapshost.val();   
            console.log(clientChat.content)                               
        }) 

    }
    
    const getVendorMessage = () => {
        const roomRef = firebase.database().ref('messages/');
        roomRef.child('vendors').child(vendor.id).once('value',(snapshost)=>{
            let clientChat = snapshost.val();   
            console.log(clientChat.content)                               
        }) 
    }   

    return( 
        <div>
            <input type="text" name="username" placeholder="What's your name?" onChange={handleChange} value={formState.username} />
            <input type="text" name="currentItem" placeholder="What are you bringing?" onChange={handleChange} value={formState.currentItem} />
            <button onClick={createChatRoom}>createClientChatRoom</button>
            <button onClick={addClientMessage}>addClientMessage</button>
            <button onClick={addVendorMessage}>addVendorMessage</button>
            <button onClick={deleteClient}>DeleteClient</button>
            <button onClick={deleteVendor}>deleteVendor</button>
            <button onClick={getClientMessage}>getClientMessage</button>
            <br></br>
            <button onClick={writeVendor}>writeVendor</button> 
            <button onClick={writeClient}>writeClient</button>            
        </div>
    )
}

export default FirebaseTest;