import React,{forwardRef} from 'react'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import './Card.css'

//forwardRef is a higher-order-function
const Messages=forwardRef(({message,name},ref)=> {
    const isUser=name===message.name
   
    return (
    <div ref={ref} className={`message__card ${isUser && 'message__user'}`}>
    <Card className={isUser ? 'message__userCard':'message__guestCard'}>
      <CardContent>
        <Typography  color="white" variant="h5" component="h2">
          {!isUser && `${message.name } : `}  {message.message}
         
        </Typography>
      </CardContent>
     </Card>
     </div>
  );
})
            
        
    


export default Messages
