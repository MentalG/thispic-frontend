import React from 'react'

const MenuButton = props => {
    const { side, background, action, title } = props;
    const borderRadius = side === 'left' ? '50px 0px 0px 0px' : '0px 50px 0px 0px';

    return (
        <span style={{ borderRadius, background }} onClick={action}>
          {title}
        </span>
    )
}

export default MenuButton
