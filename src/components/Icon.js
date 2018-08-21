import React from 'react';

const Icon = (props) => {

  let iconCustomClassName = ''

  if (props.icon.includes('polojasno')) {
    iconCustomClassName = 'polojasno'
  }

  if (props.icon.includes('slunce')) {
    iconCustomClassName = 'slunce'
  }

  if (props.icon.includes('mraky')) {
    iconCustomClassName = 'mraky'
  }

  return (
    <img src={props.icon} className={`temperature-icon ${iconCustomClassName}`} alt="day one icon" />
  )
}

export default Icon;
