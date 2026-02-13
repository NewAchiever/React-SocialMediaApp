import "./topbar.css"
import { Search, Person, Chat, Notifications } from "@mui/icons-material";
import TopbarProfileImgMenu from "../topbarProfileImgMenu/TopbarProfileImgMenu";
import NotificationWindow from "../notificationWindow/NotificationWindow";
import { useState, useRef, useEffect } from "react";

export default function Topbar({data}) {
  
  const [showProfileMenu, setShowProfileMenu] = useState(false);
  const [showFriendReqNotification, setShowFriendReqNotification] = useState(false);
  const [showChatNotification, setShowChatNotification] = useState(false);
  const [showOtherNotification, setShowOtherNotification] = useState(false);

  const profileMenuRef = useRef(null);
  const frndReqNotifRef = useRef(null);
  const chatNotifRef = useRef(null);
  const otherNotifRef = useRef(null);

  const handleProfileMenu = () => {
    setShowProfileMenu(!showProfileMenu);
  }

  const handleFriendReqNotification = () => {
    setShowFriendReqNotification(!showFriendReqNotification);
  }

  const handleChatNotification = () => {
    setShowChatNotification(!showChatNotification);
  }

  const handleOtherNotification = () => {
    setShowOtherNotification(!showOtherNotification);
  }

  const handleClickOutside = (event) => {
    
    if (profileMenuRef.current && !profileMenuRef.current.contains(event.target)) {
      setShowProfileMenu(false);
    }
    if (frndReqNotifRef.current && !frndReqNotifRef.current.contains(event.target)) {
      console.log(frndReqNotifRef);  
      setShowFriendReqNotification(false);
    }
    if (chatNotifRef.current && !chatNotifRef.current.contains(event.target)) {
      setShowChatNotification(false);
    }
    if (otherNotifRef.current && !otherNotifRef.current.contains(event.target)) {
      setShowOtherNotification(false);
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
            <div className="topbarIconItem" onClick={handleFriendReqNotification}>
              <Person/>
              <span className="topbarIconBadge">1</span>
              {showFriendReqNotification && <NotificationWindow notificationId={2} innerRef={frndReqNotifRef}/>}
            </div>
            <div className="topbarIconItem" onClick={handleChatNotification}>
              <Chat/>
              <span className="topbarIconBadge">1</span>
              {showChatNotification && <NotificationWindow  notificationId={3} innerRef={chatNotifRef}/>}
            </div>
            <div className="topbarIconItem" onClick={handleOtherNotification}>
              <Notifications/>
              <span className="topbarIconBadge">1</span>
              {showOtherNotification && <NotificationWindow  notificationId={1} innerRef={otherNotifRef}/>}
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
