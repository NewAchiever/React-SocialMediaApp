import "./topbar.css"
import { Search, Person, Chat, Notifications } from "@mui/icons-material";
import TopbarProfileImgMenu from "../topbarProfileImgMenu/TopbarProfileImgMenu";
import { useState, useRef, useEffect } from "react";

export default function Topbar({data}) {
  
  const [showProfileMenu, setShowProfileMenu] = useState(false);

  const profileMenuRef = useRef(null);

  const handleProfileMenu = () => {
    setShowProfileMenu(!showProfileMenu);
  }

  const handleClickOutside = (event) => {
    
    if (profileMenuRef.current && !profileMenuRef.current.contains(event.target)) {
      setShowProfileMenu(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

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
            <input type="text" placeholder="Search for anything" className="searchInput" id="" />
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
          <div className="topBarProfileMenu" onClick={handleProfileMenu} ref={profileMenuRef}>
            <img src="/assets/person/p_pic.jpg" alt=""  className="topbarImg" />
            { showProfileMenu && <TopbarProfileImgMenu/> }
          </div>
        </div>
</>
        ) : (<></>)
      }
        
      </div>
  )
}
