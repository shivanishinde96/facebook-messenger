import React, { Component } from 'react'

class Login extends Component {
    userData;
    constructor(props){
        super(props)
        this.state={
            email:'',
            password:''

        }
    }
    componentDidMount(){
        this.userData=JSON.parse(localStorage.getItem('user'))
      
      if(localStorage.getItem('user')){
          if(this.userData.email===this.userData.password)
        this.setState({
          
          email:this.userData.email,
          password:this.userData.password,
          
      })
    }
      else{
        this.setState({
          
          email:'',
          password:'',
          
        })
      }
    }

     //store data
     componentDidUpdate(nextProps,nextState){
        localStorage.setItem('user',JSON.stringify(nextState.user))
      }

      onSubmit(e){
          e.preventDefault()
          this.setState({
              email:'',
              password:''
          })
      }
  
    
  render() {
    return (
      <div className="container">
        <form onSubmit={this.onSubmit}>
        <div className="form-group">
            <label>Email</label>
            <input type="email" className="form-control" value={this.state.email} onChange={this.onChangeEmail} required/>
        </div>
        <div className="form-group">
          <label>Password</label>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      </div>
    )
  }
}

export default Login