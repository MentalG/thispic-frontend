import React, { useState, useEffect, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { getAuthData } from '../../store/selectors/auth';
import Navbar from '../Navbar';
import Content from '../Content';
import Notification from '../ui-kit/Notification';

const App = () => {
  const [isNotification, setIsNotification] = useState(false);
  const [notificationProps, setNotificationProps] = useState({});
  const { notification } = useSelector(getAuthData);
  
  const timeout = ms => new Promise(resolve => setTimeout(resolve, ms));
  
  const pushNotification = async (props) => {
    setIsNotification(true);
    setNotificationProps(props);
    await timeout(5000);
    setIsNotification(false);
  };

  const memorizedPush = useCallback(pushNotification, [])

  useEffect(() => {
    if (!!notification.message.primary.length) memorizedPush(notification)
  }, [notification, memorizedPush])
  
  return (
    <div className='App'>
      <Notification {...notificationProps} isNotification={isNotification} setIsNotification={setIsNotification}/>
        <Navbar />
        <Content />
    </div>
  );
};

export default App;
