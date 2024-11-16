import NavScrollExample from "./companents/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { Container } from "react-bootstrap";
import Home from "./screens/Home";
import AuthScreen from "./screens/authScreen";
import RegisterScreen from "./screens/Register";
import { useState } from "react";
function App() {

  const [user, setUser] = useState(null)


  return (
    <Router>
      <NavScrollExample user={user} setUser={setUser}></NavScrollExample>
      <main>
        <Container>
          <Routes>
            <Route path="/" element={<Home user={user}/>}> </Route>
            <Route path="/auth" element={<AuthScreen setUser={setUser}/>} ></Route>
            <Route path="/register" element={<RegisterScreen setUser={setUser}/>}></Route>
          
          </Routes>
        </Container>
      </main>
    </Router>
  );
}

export default App;
