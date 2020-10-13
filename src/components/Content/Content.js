import React from 'react';
import { useSelector } from 'react-redux';
import { getImagesData } from '../../store/selectors/images';
import './styles.scss';

const Content = (props) => {
  const { data } = useSelector(getImagesData);
  const API_PREFIX = process.env.REACT_APP_API_PREFIX;

  return (
    <div className='content_container'>
      {data?.map(({ imageUrl, name, hash }, key) => {
        const url = `${API_PREFIX}/${imageUrl}`;

        return (
            <div className='picture_container' key={key} onClick={() => window.open(`${API_PREFIX}/images/${hash}`)}>
              <img src={url} alt={name} />
          </div>
        );
      })}
    </div>
  );
};

export default Content;
