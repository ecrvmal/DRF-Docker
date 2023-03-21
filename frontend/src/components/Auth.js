import React from "react"
import '../App.css';

class LoginForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {"login":'',"password":''}
    }


    handleChange(event) {
    this.setState(
            {
        [event.target.name] : event.target.value
            }
        )
    }

    handleSubmit(event) {
        this.props.get_token(this.state.login,this.state.password)
        event.preventDefault()
        }

    render() {
        return(
               <form  onSubmit={(event) => this.handleSubmit(event)}>
               <div className="input_line">
                    <p className="input_field1"> Login      </p>
                    <input  className="input_field2" type="text" name="login" placeholder="login" value={this.state.login}
                           onChange={(event) => this.handleChange(event)}/>
               </div>
               <div className="input_line">
                    <p  className="input_field1" > Password  </p>
                    <input  className="input_field2" type="password" name="password" placeholder="password" value={this.state.password}
                           onChange={(event) => this.handleChange(event)}/>
               </div>
               <div className="input_line">
                    <input  className="input_field1" type="submit" value="Login"/>
               </div>
                </form>
        );
    }

}

export default LoginForm