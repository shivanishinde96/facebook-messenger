import React,{useState,useEffect} from 'react'
import './App.css'
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input'
import InputLabel from '@material-ui/core/InputLabel'
import Messages from './Messages'
import db from './firebase'
import firebase from 'firebase'
import FlipMove from 'react-flip-move'
import SendIcon from '@material-ui/icons/Send';
import IconButton from '@material-ui/core/IconButton';

function App() {
    const [input,setInput]=useState('')
    const [messages,setMessages]=useState([{name:'',message:''}])
    const [name,setName]=useState('')

    //useState=variable in React
    //useEffect=run code on a condition in React

    useEffect(() => {
        //run code here
        //if its blank inside [],this code runs once when the app component loads
        setName(prompt('Please enter your name'))
    }, [])//condition

    const sendMessage=(e)=>{
        e.preventDefault()
        //this is es6 trick.
        //here we are spreading the messages and appending the input to the end
        //for example if the array consists of ['Hi','Hello','Whats up']
        //then we don't want to replace the hi,hello with whats up
        //we want to keep the hi,hello messages also
        //so we use spread operator and then append input to the end
        //which adds the new input and also keeps the old array elements
        db.collection('messenger').add({
            message:input,
            name:name,
            timestamp:firebase.firestore.FieldValue.serverTimestamp()
        })
        //setMessages([...messages,{name:name,text:input}])
        setInput('')
    }

    useEffect(() => {
        db.collection('messenger').
        orderBy('timestamp','desc').onSnapshot(snapshot=>{
            setMessages(snapshot.docs.map(doc=>({id:doc.id,message:doc.data()})))
        })
    }, []);

    return (
        <div className='App'>
            <img className='App__image' src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQzJkXJOTBbiqoiSPm99ZMs5jpE5yNreLW6hg&usqp=CAU' alt='messenger'/>
           <h1>Hello {name} </h1>
           <form className='App__form'>
            <FormControl className='App__formControl'>
               <Input className='App__inputfield' placeholder='Enter a Message...' value={input} onChange={e=>setInput(e.target.value)} />
                <IconButton className='App__iconbutton' disabled={!input} variant="contained" color='primary' type='submit' onClick={sendMessage} >
                    <SendIcon/>
                </IconButton>
                
            </FormControl>
            </form>
           
            {/*create input field*/}
            {/* button */}
            {/* messages themseleves*/}
            <FlipMove>
                {messages.map(({id,message})=>(
                <Messages key={id} name={name} message={message}/>))}
            </FlipMove>
           
        </div>
    )
}

export default App
