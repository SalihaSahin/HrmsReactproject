import React, {useState} from "react";
import { Menu,Container } from 'semantic-ui-react'
import SignedOut from "./SignedOut";
import SignedIn from "./SignedIn";
import { useHistory } from "react-router-dom";

export default function Navi() {
    const [isAuthenticated, setAuthenticated] = useState(true)
const history=useHistory()

function handleSignOut(){
  setAuthenticated(false)
 history.push("/")//çıkış yaptıktan sonra anasayfaya gitmesi için
}

function handleSignIn(){
  setAuthenticated(true)
}
    return (
        <div>
      <Menu inverted >
      <Container>
      <Menu.Item
          name="home"
        />
        <Menu.Item
          name="messages"
        />
        <Menu.Menu position="right">
         
          {isAuthenticated ? <SignedIn signOut={handleSignOut}></SignedIn>: <SignedOut signIn={handleSignIn}></SignedOut>}
        </Menu.Menu>
      </Container>
      </Menu>
        </div>
    )
}
