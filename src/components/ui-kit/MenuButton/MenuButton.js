import React from 'react'

const MenuButton = props => {
    const { side, background, action, title, color } = props;
    const borderRadius = side === 'left' ? '50px 0px 0px 0px' : '0px 50px 0px 0px';
    const borderColor = side === 'left' ? {borderTop: `2px solid ${color}`, borderLeft: `2px solid ${color}`} : {borderTop: `2px solid ${color}`, borderRight: `2px solid ${color}`}

    return (
        <span style={{ borderRadius, background, color, ...borderColor }} onClick={action}>
          {title}
        </span>
    )
}

export default MenuButton
