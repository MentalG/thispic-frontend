import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getColorsData } from '../../store/selectors/colors';
import { addColor } from '../../store/actions/colors';
import { getImages } from '../../store/actions/images';
import Dot from '../Dot';
import AddDot from '../AddDot';
import './styles.scss';

const Navbar = (props) => {
  const dispatch = useDispatch();
  const [isAddOpen, setIsAddOpen] = useState(false);
  const { secondary, dominant, palitra } = useSelector(getColorsData);
  const secondaryReversed = [...secondary].reverse();
  const gradient = `linear-gradient(90deg, ${dominant} 40%, ${secondaryReversed.map(
    ({ color, id }) => `${color} ${95 - id * 10}%`
  )})`;

    useEffect(() => {
      dispatch(getImages({dominant, secondary}))
    },[dominant, secondary, dispatch])

  const addDot = (color) => {
    dispatch(addColor(color));
  };

  const renderNavbarLeft = () => {
    return (
      <div className='navbar_left'>
        <Dot color={dominant} palitra={palitra} />
      </div>
    );
  };

  const renderNavbarRight = () => {
    return (
      <div
        className='navbar_right'
        onMouseEnter={() => setIsAddOpen(true)}
        onMouseLeave={() => setIsAddOpen(false)}
      >
        <div className='dots_container'>
          {isAddOpen && secondary.length < 5 ? (
            <AddDot palitra={palitra} secondary={secondary} addDot={addDot} />
          ) : null}
          {secondaryReversed.map(({ color, id }) => {
            return <Dot color={color} palitra={palitra} key={id} count={id} />;
          })}
        </div>
      </div>
    );
  };

  return (
    <div className='navbar' style={{ background: gradient }}>
        {renderNavbarLeft()}
        {renderNavbarRight()}
    </div>
  );
};

export default Navbar;
