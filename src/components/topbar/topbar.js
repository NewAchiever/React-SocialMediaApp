import "./topbar.css"
import { Search, Person, Chat, Notifications } from "@mui/icons-material";
export default function Topbar({data}) {
  
  return (
      <div className="topbarContainer">
        <div className="topbarLeft">
          <span className="topbarLogo">Sociallly</span>
        </div>
        { data.isActiveUser ? (
          <>
                  <div className="topbarCenter">
          <div className="searchBar">
            <Search className="topbarsearchIcon"/>
            <input type="text" Placeholder="Search for anything" class="searchInput" id="" />
          </div>
        </div>
        <div className="topbarRight">
          <div className="topbarLinks">
            <span className="topbarLink">Homepage</span>
            <span className="topbarLink">Timeline</span>
          </div>

          <div className="topbarIcons">
          <div className="topbarIconItem">
            <Person/>
            <span className="topbarIconBadge">1</span>
          </div>
          <div className="topbarIconItem">
            <Chat/>
            <span className="topbarIconBadge">1</span>
          </div>
          <div className="topbarIconItem">
            <Notifications/>
            <span className="topbarIconBadge">1</span>
          </div>
          </div>
          <img src="/assets/person/p_pic.jpg" alt="" className="topbarImg" />

        </div>
</>
        ) : (<></>)
      }
        
      </div>
  )
}
