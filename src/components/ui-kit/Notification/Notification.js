import React from 'react';
import CloseIcon from '../icons/CloseIcon';
import ArrowIcon from '../icons/ArrowIcon';
import TickIcon from '../icons/TickIcon';
import './styles.scss';

const Notification = (props) => {
  const { isNotification, message, type, setIsNotification } = props;
  let messageColor = '';
  let icon = <div></div>;

  switch (type) {
    case 'success':
      messageColor = 'rgba(48,86,65,1)';
      icon = <TickIcon size={16} color={'white'} className='icon_tick' />
      break;
    case 'error':
      messageColor = 'rgba(104,40,90,1)';
      icon = <CloseIcon size={16} color={'white'} className='icon_error' />
      break;
    default:
      messageColor = 'rgba(32,43,94,1)';
      icon = <ArrowIcon size={16} color={'white'} className='icon_arrow' />
      break;
  }

  const background = `linear-gradient(60deg, rgba(27,28,43,1) 0%, ${messageColor} 100%)`;
  const notificationClass = isNotification
    ? 'notification_container'
    : 'notification_container_hide';

  return (
    <div className={notificationClass} style={{ background }}>
      <div className='icon_container'>
        <div className='icon_wrapper' style={{ background: `${messageColor}` }}>
          {icon}
        </div>
      </div>
      <div className='message_container'>
        <span id='message_primary'>{message?.primary}</span>
        <span id='message_secondary'>{message?.secondary}</span>
      </div>
      <div id='icon_close_container'>
        <div onClick={() => setIsNotification(false)}>
          <CloseIcon size={16} color='white' className='icon_close' />
        </div>
      </div>
    </div>
  );
};

export default Notification;
