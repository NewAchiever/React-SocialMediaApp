import Topbar from "../../components/topbar/topbar"
import Sidebar from "../../components/sidebar/Sidebar"
import Rightbar from "../../components/rightbar/Rightbar"
import Feed from "../../components/feed/Feed"
import Login from "../login/Login"
import Register from "../register/Register"
import "./home.css"

export default function Home({data}) {
    return (
      <>
      { data.isUserLoggedIn? (
        <>
          <Topbar data={data}/>
          <div className="homeContainer">
            <Sidebar/>
            <Feed/>
            <Rightbar/> 
          </div>
        </>
      ):(<Register/>) 
    }
  </>
  );
}
