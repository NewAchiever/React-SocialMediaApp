import Topbar from "../../components/topbar/topbar"
import Sidebar from "../../components/sidebar/Sidebar"
import Rightbar from "../../components/rightbar/Rightbar"
import Feed from "../../components/feed/Feed"
import "./profile.css"

export default function Profile() {
  return (
    <>
   <Topbar/>
   <div className="profile">
    <Sidebar/>
    <div className="profileRight">
    <div className="profileRightTop">
        <div className="profileCover">


            <img src="/assets/person/3.jpg" alt="" className="profileCoverImg" />
            <img src="/assets/person/7.jpg" alt="" className="profileUserImg" />
            
        </div>
        <div className="profileInfo">
                <h4 className="profileInfoName">Rohit Sharma</h4>
                <span className="profileInfoDesc">Indian Cricket Team Captian</span>
            </div>
    </div>
    <div className="profileRightBottom">
    
    <Feed/>
    <Rightbar/> 
    </div>
    </div>
   </div>
  </>
  )
}
