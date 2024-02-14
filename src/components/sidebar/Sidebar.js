import "./sidebar.css"
import { RssFeed, HelpOutline, WorkOutline, Event, School, Bookmark, Group, PlayCircleFilledOutlined, Chat } from "@material-ui/icons"
import {Users} from "../../dummyData";
import CloseFriend from "../closeFriend/CloseFriend"
export default function Sidebar() {
  return (
    <div className="sidebar">
        <div className="sidebarWrapper">
            <ul className="sidebarList">
                <li className="sidebarListItem">
                    <RssFeed className="sidebarIcon"/>
                    <span className="sidebarListItemList">Feed</span>
                </li>
                <li className="sidebarListItem">
                    <Chat className="sidebarIcon"/>
                    <span className="sidebarListItemList">Chats</span>
                </li>
                <li className="sidebarListItem">
                    <HelpOutline className="sidebarIcon"/>
                    <span className="sidebarListItemList">Questions</span>
                </li>
                <li className="sidebarListItem">
                    <WorkOutline className="sidebarIcon"/>
                    <span className="sidebarListItemList">Jobs</span>
                </li>
                <li className="sidebarListItem">
                    <Event className="sidebarIcon"/>
                    <span className="sidebarListItemList">Events</span>
                </li>
                <li className="sidebarListItem">
                    <School className="sidebarIcon"/>
                    <span className="sidebarListItemList">Courses</span>
                </li>
                <li className="sidebarListItem">
                    <Bookmark className="sidebarIcon"/>
                    <span className="sidebarListItemList">Bookmarks</span>
                </li>
                <li className="sidebarListItem">
                    <Group className="sidebarIcon"/>
                    <span className="sidebarListItemList">Groups</span>
                </li>
                <li className="sidebarListItem">
                    <PlayCircleFilledOutlined className="sidebarIcon"/>
                    <span className="sidebarListItemList">Videos</span>
                </li>
            </ul>
            <button className="sidebarButton">Show More</button>
            <hr className="sidebarHr" />
            <ul className="sidebarFriendList">
                {Users.map(u=>(
                    <CloseFriend key={u.id}user={u}/>
                ))}
                
            </ul>
        </div>
    </div>
  )
}
