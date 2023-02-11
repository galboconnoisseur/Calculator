import React, { useMemo } from 'react'
import { BUTTON_SIZES, COLORS } from '../../constants';
import { ButtonStyled } from './ButtonStyled'

type ButtonType = {
  label: string
  value?: string
  onClick?: (v: string) => void
  buttonColor?: keyof typeof COLORS
  buttonSize?: keyof typeof BUTTON_SIZES
};

const Button = ({
  label,
  onClick,
  value = label,
  buttonColor = 'lightGray',
  buttonSize = 'short'
}: ButtonType) => {

  const handleClick = () => {
    onClick && onClick(value)
  }

    return (
      <ButtonStyled onClick={handleClick} bgColor={buttonColor} buttonSize={buttonSize}>
        {label}
      </ButtonStyled>
    )
};

export default Button;