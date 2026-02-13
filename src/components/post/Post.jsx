import { MoreVert } from "@mui/icons-material"
import "./post.css"
import PostMenu from "../postMenu/PostMenu";
import Comments from "../comment/Comments"
import {Users} from "../../dummyData"
import { useState, useEffect, useRef } from "react";

export default function Post({post}) {
  const [like, setLike] = useState(post.like)
  const [isLiked, setIsLiked] = useState(false)
  const likeHandler =()=>{
    setLike(isLiked ? like-1:like+1)
    setIsLiked(!isLiked)
  }
  const [showComments, setShowComments] = useState(false);
  const [showPostMenu, setShowPostMenu] = useState(false);

  const postMenuRef = useRef(null);

  const handlePostMenu = () => {
    setShowPostMenu(!showPostMenu);
  }

  const handleClickOutside = (event) => {
    if (postMenuRef.current && !postMenuRef.current.contains(event.target)) {
      setShowPostMenu(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleCommentsSection = () => {
    setShowComments(!showComments);
  }


  return (
    <div className="post">
        <div className="postWrapper">
          <div className="postTop">
            <div className="postTopLeft">
              <img src={Users.filter((u) => u.id === post.userId)[0].profilePicture} alt="" className="postProfileImg" />
              <span className="postUsername">{Users.filter((u) => u.id === post.userId)[0].username}</span>
              <span className="postDate">{post.date}</span>
            </div>
            <div className="postTopRight" onClick={handlePostMenu} ref={postMenuRef}>
              <MoreVert/>
              {showPostMenu && <PostMenu/>}
            </div>
          </div>
          <div className="postCenter">
            <div className="postText">{post?.desc}</div>
            <img src={post.photo} alt="" className="postImg" />
          </div>
          <div className="postBottom">
            <div className="postBottomLeft">
              <img src="/assets/like0.png" alt="" onClick={likeHandler} className="likeIcon" />
              <img src="/assets/like1.png" alt="" className="likeIcon" />
              <div className="postLikeCounter">{like} people Liked it.</div>
            </div>
            <div className="postBottomRight">
              <span className="postCommentText" onClick={handleCommentsSection}>{post.comment} Comments</span>
              {showComments && <Comments postId={post.id} closeComments={handleCommentsSection}/>}
            </div>
          </div>
        </div>
    </div>
  )
}
