import React, { Component } from 'react';
import firebase from '../../../../stores/firebase';

class FunFriends extends Component {
    state = {
        currentItem: '',
        username: '',
        items: []
      }
    
    componentDidMount(){
        const itemsRef = firebase.database().ref('items');
        itemsRef.on('value', (snapshost)=>{
            let items = snapshost.val();
            let newstate = [];
            for(let item in items){
                newstate.push({
                    id: item,
                    title: items[item].title,
                    user: items[item].user
                })
            }
            this.setState({
                items:newstate
            })
        })
    }

    handleChange = e =>{
        this.setState({
            [e.target.name]: e.target.value
        })
        console.log(this.state.username);
    }

    handleSubmit = e =>{
        e.preventDefault();
        const itemsRef = firebase.database().ref('items');
        const item = {
            title: this.state.currentItem,
            user: this.state.username
        }
        itemsRef.push(item);
        this.setState({
            username:'',
            currentItem:''
        })
    }

    removeItem = itemId =>{
        const itemRef = firebase.database().ref(`items/${itemId}`);
        itemRef.remove();
    }
    render() { 
        return ( 
            <div className="app">
                <header>
                    <div className="wrapper">
                        <h3>Fun Found Friendscmd</h3>
                    </div>
                </header>
                <div className="container">
                    <section className="add-item">
                        <form onSubmit={this.handleSubmit}>
                            <input type="text" name="username" placeholder="What's your name?" onChange={this.handleChange} value={this.state.username} />
                            <input type="text" name="currentItem" placeholder="What are you bringing?" onChange={this.handleChange} value={this.state.currentItem} />
                            <button>Add Item</button>
                        </form>
                    </section>
                    <section className="display-item">
                        <div className="wrapper">
                            <ul>
                                {
                                    this.state.items.map((item)=>{
                                        return(
                                            <li key={item.id}>
                                                <h5>{item.title}</h5>
                                                <p>brought by: {item.user}</p>
                                                <button onClick={() => this.removeItem(item.id)}>Remove Item</button>
                                            </li>
                                        )
                                    })
                                }
                            </ul>
                        </div>
                    </section>
                </div>
            </div>
         );
    }
}
 
export default FunFriends;