import { MoreVert } from "@mui/icons-material"
import "./post.css"
import {Users} from "../../dummyData"
import { useState } from "react";

export default function Post({post}) {
  const [like, setLike] = useState(post.like)
  const [isLiked, setIsLiked] = useState(false)
  const likeHandler =()=>{
    setLike(isLiked ? like-1:like+1)
    setIsLiked(!isLiked)
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
            <div className="postTopRight">
              <MoreVert/>
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
              <span className="postCommentText">{post.comment} Comments</span>
            </div>
          </div>
        </div>
    </div>
  )
}
