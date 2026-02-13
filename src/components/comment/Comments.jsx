import React from 'react';
import CloseIcon from '@mui/icons-material/Close';
import SendIcon from '@mui/icons-material/Send';
import './comment.css';
import {dummyComments} from '../../dummyData';

export default function Comments({postId, closeComments}) {
  const comments = dummyComments.find(comments => comments.postId === postId).comments;
  
  return (
    <div className='commentsSection'>
      <div className='commentsSectionHeading'>
        <span className='commentsHeading'>Comments</span>
        <CloseIcon onClick={closeComments} className='closeIcon'/>
      </div>
      <div className='commentsWrapper'>
          {comments.map((ea) => (
            
            <div className='commentsRow'>
              <div className='commentsProfileImgWrapper'><img src="assets/person/p_pic.jpg" className='commentsProfileImg' alt="logo"/></div>
              <div className='commentsUsernameNdCommentsWrapper'>
                <div className='commentsUsername'>{ea.userName}</div>
                <div className='commentsContent'>{ea.comment}</div>
              </div>
            </div>
          ))}       
      </div>
      <div className='addCommentSection'>
          <input type='text' className='inputComment' placeholder='Add your comment...'/>
          <SendIcon className='sendIcon'/>
      </div>
    </div>
  )
}
