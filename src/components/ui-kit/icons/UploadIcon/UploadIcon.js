import React from 'react'

const UploadIcon = props => {
    const { size, color, className, isAnimate = false } = props;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={size} height={size} fill={color} className={className}>
        <defs />
        <path d='M18 17h-2.5a.5.5 0 010-1H18c2.757 0 5-2.243 5-5a4.983 4.983 0 00-4.697-4.981.5.5 0 01-.426-.288A6.503 6.503 0 0012 2C8.785 2 6.023 4.395 5.575 7.57A.5.5 0 015.08 8C2.794 8 1 9.794 1 12s1.794 4 4 4h3.5a.5.5 0 010 1H5c-2.757 0-5-2.243-5-5a5.006 5.006 0 014.656-4.988C5.348 3.556 8.433 1 12 1a7.508 7.508 0 016.653 4.044A5.985 5.985 0 0124 11c0 3.309-2.691 6-6 6z' />
        <path d='M12 20a.5.5 0 01-.5-.5v-7.75a.5.5 0 011 0v7.75a.5.5 0 01-.5.5z' />
        <path d='M14.5 14.5a.502.502 0 01-.354-.146L12 12.207l-2.146 2.146a.5.5 0 01-.707-.707l2.5-2.5a.5.5 0 01.707 0l2.5 2.5a.5.5 0 01-.354.854zM15.5 23h-7c-.827 0-1.5-.673-1.5-1.5v-2a.5.5 0 011 0v2a.5.5 0 00.5.5h7a.5.5 0 00.5-.5v-2a.5.5 0 011 0v2c0 .827-.673 1.5-1.5 1.5z' />
        {isAnimate ? <animateTransform attributeType="XML" attributeName="transform" type="scale" values="1;1.1;1" additive="sum" begin="0s" dur="1.5s" repeatCount="1"/> : null}
      </svg>
    )
}

export default UploadIcon
