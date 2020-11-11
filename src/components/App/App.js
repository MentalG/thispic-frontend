import React, { useState, useEffect, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { getAuthData } from '../../store/selectors/auth';
import { getImagesData } from '../../store/selectors/images';
import Navbar from '../Navbar';
import Content from '../Content';
import Notification from '../ui-kit/Notification';

const App = () => {
  const [isNotification, setIsNotification] = useState(false);
  const [notificationProps, setNotificationProps] = useState({});
  const { authNotification } = useSelector(getAuthData);
  const { imagesNotification } = useSelector(getImagesData);
  
  const timeout = ms => new Promise(resolve => setTimeout(resolve, ms));
  
  const pushNotification = async (props) => {
    setIsNotification(true);
    setNotificationProps(props);
    await timeout(5000);
    setIsNotification(false);
  };

  const memorizedPush = useCallback(pushNotification, [])

  useEffect(() => {
    if (!!authNotification.message.primary.length) memorizedPush(authNotification)
    if (!!imagesNotification.message.primary.length) memorizedPush(imagesNotification)
  }, [authNotification, imagesNotification, memorizedPush])
  
  return (
    <div className='App'>
      <Notification {...notificationProps} isNotification={isNotification} setIsNotification={setIsNotification}/>
        <Navbar />
        <Content />
    </div>
  );
};

export default App;
