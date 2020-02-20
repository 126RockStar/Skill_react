import React, { useState, useEffect } from "react";
import firebase from '../../../../stores/firebase';

const FirebaseMonitor = () => {

    const [ myData, setMyData ] = useState({
        user:'',
        title:''
    })

    useEffect(()=>{
        const itemsRef = firebase.database().ref('items/');
        
        itemsRef.child('mike').on('value', (snapshost)=>{            
            // if(snapshost.exists()){
            //     console.log('yes')
            //     let items = snapshost.val();
            //     setMyData({
            //         user: items.user,
            //         title: items.title
            //     })

            // }else{
            //     console.log('no')
            // }
            if(snapshost.hasChild('bbc')){
                console.log('yes')
            }else{
                console.log('no')
            }
            
        })
    },[])

    useEffect(()=>{
        console.log('Firebase Changed');
        console.log(myData)
    }, [myData])

    return( 
        <div>
            sdfqfds
            <div>{myData.user}</div>
            <div>{myData.title}</div>
        </div>
    )
}

export default FirebaseMonitor;