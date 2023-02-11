import styled from 'styled-components'
import { BUTTON_SIZES, COLORS } from '../../constants'

type ButtonStyledType = {
  bgColor: keyof typeof COLORS
  buttonSize: keyof typeof BUTTON_SIZES
}

export const ButtonStyled = styled.button<ButtonStyledType>`
  border-radius: 100px;
  height: 50px;
  font-size: 18px;
  padding-left: ${({ buttonSize }) => buttonSize === 'long' && '18px'};
  text-align: ${({ buttonSize }) => buttonSize === 'long' ? 'left' : 'center'};
  width: ${({ buttonSize }) => BUTTON_SIZES[buttonSize]};
  background-color: ${({ bgColor }) => COLORS[bgColor]};
  color: ${({ bgColor }) => bgColor === 'lightGray' ? '#000000' : '#FFFFFF'};
`

