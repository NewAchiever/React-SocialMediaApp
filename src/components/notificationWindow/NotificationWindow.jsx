import React from 'react';
import './notificationWindow.css';
import {Notifications} from '../../dummyData';

export default function NotificationWindow({notificationId, innerRef}) {
  const notifications = Notifications.filter(notif => notif.notificationId === notificationId);
  console.log(notifications);
  return (
    <div className='notificationsSection' ref={innerRef}>
      <div className='notificationsSectionHeading'>
        <span className='notificationsHeading'>Notifications</span>
      </div>
      <div className='notificationsWrapper'>
        { 
            notifications.map((ea) => (
                
                <div className='notification'>
                    <div className='notificationLogoContainer'><img alt="logo" className='notificationLogo' src={`../assets/notification/${ea.notificationId}.jpg`}/></div>
                    <div className='notificationContent'><span>{ea.message}</span></div>
                </div>
              
            ))
        }
       </div>     
    </div>
  )
}
