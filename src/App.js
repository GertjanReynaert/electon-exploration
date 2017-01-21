import React, { Component } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  height: 100%;
  display: flex;
`;

const Login = styled.div`
  background-color: papayawhip;
  width: ${({ authenticated }) => ( authenticated ? 50 : 100 )}%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: width .2s ease-in-out;
`;

const LoginForm = styled.div``;

const Formitem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Label = styled.label`
  color: saddlebrown;
`;

const Input = styled.input`
  border: 2px solid transparent;
  border-radius: 5px;
  padding: 10px 20px;
  margin: 0 0 10px 20px;
  color: saddlebrown;
  font-size: 16px;

  &:focus {
    border: 2px solid saddlebrown;
    outline: none;
  }
`;

const Submit = styled.button`
  border: 2px solid sandybrown;
  border-radius: 5px;
  color: saddlebrown;
  background-color: navajowhite;
  padding: 10px 20px;
  font-size: 18px;
  font-family: sans-serif;
  cursor: pointer;

  &:hover {
    background-color: sandybrown;
    color: navajowhite;
  }

  &:focus {
    border-color: saddlebrown;
    outline: none;
  }
`;

const Records = styled.div`
  display: flex;
  overflow: hidden;
  background-color: palevioletred;
  width: ${({ authenticated }) => ( authenticated ? 50 : 0 )}%;
  transition: width .2s ease-in-out;

  align-items: center;
  justify-content: center;
`;

const List = styled.div`
  width: 80%;
  max-height: 85%;
  overflow-x: hidden;
  overflow-y: scroll;

  border: 2px solid indianred;
  border-radius: 5px;
`;

const ListItem = styled.a`
  display: flex;
  align-items: center;
  justify-content: flex-start;

  background: lightcoral;
  color: firebrick;

  padding: 10px 20px;

  cursor: pointer;

  &:hover {
    background: firebrick;
    color: lightcoral;
  }

  &:nth-child(n) {
    border-bottom: 1px solid indianred;
  }

  &:last-child {
    border-bottom: none;
  }
`;

const RecordCode = styled.strong`
  margin-right: 20px;
`;

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      authenticated: false,
    }
  }

  render() {
    const onClick = () => this.setState({ authenticated: true});

    return (
      <Container>
        <Login authenticated={this.state.authenticated}>
          <LoginForm>
            <Formitem>
              <Label htmlFor="username">Username</Label>
              <Input type="text" id="username" autoFocus/>
            </Formitem>
            <Formitem>
              <Label htmlFor="password">Password</Label>
              <Input type="password" id="password"/>
            </Formitem>
            <Formitem>
              <div></div>
              <Submit onClick={onClick}>Login</Submit>
            </Formitem>
          </LoginForm>
        </Login>
        <Records authenticated={this.state.authenticated}>
          <List>
            {
              [1,6,3,4,5,2,7,8,13,22].map(index => (
                <ListItem>
                  <RecordCode>100{index}</RecordCode>
                  <p>{'lorem ipsum '.repeat(index)}</p>
                </ListItem>
              ))
            }
          </List>
        </Records>
      </Container>
    );
  }
}

export default App;
