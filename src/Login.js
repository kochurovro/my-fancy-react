import React from 'react';
import Blocker from './Blocker'

class Login extends React.Component {
    constructor(props) {
      super(props);
      this.state = {'isHidden': false, 'login': '', 'pass':''}
    }
    
    handleChangeLogin(e) {
      this.setState({login: e.target.value});
    }

    handleChangePass(e) {
      this.setState({pass: e.target.value});
    }

    handleBlockerChange(e) {
      this.setState({'isHidden': e})
    }

    handleSubmit(event) {
      alert('submited');
    }

    handleClickClear(e) {
     this.setState({'login':'', pass:'', isHidden: false});
    }

    render() {
      const isChecked = this.state.isHidden;
      const isLogin = this.state.login;
      const isPass = this.state.pass;
      return (
        <div>
          <form onSubmit={(e) => this.handleSubmit(e)}>
            <input type="text" placeholder="login" onChange={(e) => this.handleChangeLogin(e)} value={isLogin} />
            <input type="password" placeholder="password" onChange={(e) => this.handleChangePass(e)}  value={isPass} />
            <input type="button" value="Clear" onClick={(e) => this.handleClickClear(e)} />
            <input type="submit" value="Submit" hidden={isChecked} />
          </form>
          <Blocker isChecked={isChecked} onCheckedChange={(e) => this.handleBlockerChange(e)}/>
        </div>
);
    }
}

export default Login;
