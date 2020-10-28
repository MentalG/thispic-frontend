import React from 'react';
import { useDropzone } from 'react-dropzone';
import UploadIcon from '../ui-kit/icons/UploadIcon';
import './styles.scss';

const Upload = (props) => {
  const { acceptedFiles, getRootProps, getInputProps } = useDropzone();

  //   const files = acceptedFiles.map((file) => (
  //     <li key={file.path}>
  //       {file.path} - {file.size} bytes
  //     </li>
  //   ));

  return (
    <section className='upload_container'>
      <span id='upload_title'>Upload</span>
      <div {...getRootProps({ className: 'dropzone' })}>
        <input {...getInputProps()} />
        <UploadIcon size={128} color={'white'} />
      </div>
    </section>
  );
};

export default Upload;
