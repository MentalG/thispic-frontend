import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useDropzone } from 'react-dropzone';
import { getDroppedOrSelectedFiles } from 'html5-file-selector'
import { setImage } from '../../store/actions/images';
import classNames from 'classnames/bind';
import UploadIcon from '../ui-kit/icons/UploadIcon';
import CloseIcon from '../ui-kit/icons/CloseIcon';
import styles from './styles.scss';

const Upload = (props) => {
  const dispatch = useDispatch();
  const { getRootProps, getInputProps } = useDropzone({accept: 'image/jpeg, image/png', maxFiles: 1});
  const [acceptedFiles, setAcceptedFiles] = useState([]);
  const [isHover, setIsHover] = useState(false);
  const classBind = classNames.bind(styles);

  const uploadHandle = (e) => {
    const formData = new FormData();
    const name = e.target.parentNode.children[2].value;

    formData.append('productImage', acceptedFiles[0])
    formData.append('name', name)

    dispatch(setImage(formData));
  }

  const onDrop = (e) => {
      getDroppedOrSelectedFiles(e).then(file => setAcceptedFiles([file[0].fileObject]))
  }

  const imageHover = classBind(
    { acceptedFile: true },
    { acceptedFile_hover: isHover }
  );

  const iconClose = classBind(
    { acceptedFile_closeIcon: true },
    { acceptedFile_closeIcon_visible: isHover }
  );

  const renderUpload = () => {
    return (
      <div {...getRootProps({ className: 'dropzone', onDrop})}>
        <input {...getInputProps({onChange: onDrop})} />
        <UploadIcon size={128} color={'white'} />
      </div>
    );
  };

  const renderFile = () => {
    return acceptedFiles.map((file) => {
      return (
        <div
          className='acceptedFile_container'
          onMouseEnter={() => setIsHover(true)}
          onMouseLeave={() => setIsHover(false)}
          onClick={() => setAcceptedFiles([])}
          key={file.name}
        >
          <img
            className={imageHover}
            src={URL.createObjectURL(file)}
            alt={'file'}
          />
          <CloseIcon size={64} color={'white'} className={iconClose}/>
        </div>
      );
    });
  };

  return (
    <section className='upload_container'>
      <span id='upload_title'>Upload</span>
      {!!acceptedFiles.length ? renderFile() : renderUpload()}
      <input placeholder='Name' type='text' />
      <div id='Upload_button' onClick={(e) => uploadHandle(e)}>
          <span>Upload</span>
      </div>
    </section>
  );
};

export default Upload;
