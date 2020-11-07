import React from 'react'

const MenuButton = props => {
    const { side, background, action, title } = props;
    const borderRadius = side === 'left' ? '50px 0px 0px 0px' : '0px 50px 0px 0px';
    const borderColor = side === 'left' ? {borderTop: '2px solid white', borderLeft: '2px solid white'} : {borderTop: '2px solid white', borderRight: '2px solid white'}

    return (
        <span style={{ borderRadius, background, ...borderColor }} onClick={action}>
          {title}
        </span>
    )
}

export default MenuButton
