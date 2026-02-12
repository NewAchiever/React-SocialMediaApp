import Home from "./pages/home/Home";
import Profile from "./pages/profile/Profile";
import Register from "./pages/register/Register"
import  {dummydata}  from "./dummy";
function App() {
  return <Home data={dummydata}/>
}

export default App;