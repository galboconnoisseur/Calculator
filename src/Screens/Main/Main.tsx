import React, { useState } from 'react'
import Button from '../../Components/Button';
import { OPERATORS } from '../../constants';
import { ButtonContainer, ButtonRow, MainStyled, NumberDisplay } from './MainStyled'

const MainScreen = () => {
    const [currentDigit, setCurrentDigit] = useState<string>('0')
    const [operationQueue, setOperationQueue] = useState<string[]>([])
    const [hasHitEqual, setHasHitEqual] = useState<boolean>(false)
    const isNumber = (x: string) => x >= '0' && x <= '9'

    const getValue = (val: string) => {
      if (hasHitEqual) {
        setHasHitEqual(false);
        setCurrentDigit(`${val}`)
      } else {
        setCurrentDigit(currentDigit === '0' ? `${val}` : `${currentDigit}${val}`)
      }
    }
    const clear = () => {
      setCurrentDigit('0')
      setOperationQueue(['0'])
    }
    const add = () => {
      const newQueue = [...operationQueue]
      newQueue.push(currentDigit)
      newQueue.push("+")
      setOperationQueue(newQueue)
      setCurrentDigit('0')
    }
    const subtract = (x: number, y: number) => {

    }
    const mult = (x: number, y: number) => {

    }
    const divide = (x: number, y: number) => {

    }
    const equal = () => {
      const newQueue = [...operationQueue]
      newQueue.push(currentDigit)

      let sum = parseInt(newQueue[0]);

      for (let i = 1; i < newQueue.length; i++) {
        if (!isNumber(newQueue[i])) {
          console.log(sum);
          switch (newQueue[i]) {
            case '+':
              sum = sum + parseInt(newQueue[i + 1])
              break
            case '-':
              sum = sum - parseInt(newQueue[i + 1])
              break
            case 'x':
              sum = sum * parseInt(newQueue[i + 1])
              break
            case '/':
              sum = sum / parseInt(newQueue[i + 1])
              break
          }
        }
      }
      setCurrentDigit(`${sum}`)
      setOperationQueue(['0'])
      setHasHitEqual(true);
    }
    return (
      <MainStyled>
        <NumberDisplay>
          {currentDigit}
        </NumberDisplay>
        <ButtonContainer>
          <ButtonRow>
            <Button onClick={clear} label="AC" buttonColor="lightGray" />
            <Button label="+/-" buttonColor="lightGray" />
            <Button label="%" buttonColor="lightGray" />
            <Button label="/" buttonColor="orange" />
          </ButtonRow>
          <ButtonRow>
            <Button onClick={getValue} label="7" buttonColor="darkGray" />
            <Button onClick={getValue} label="8" buttonColor="darkGray" />
            <Button onClick={getValue} label="9" buttonColor="darkGray" />
            <Button label="x" buttonColor="orange" />
          </ButtonRow>
          <ButtonRow>
            <Button onClick={getValue} label="3" buttonColor="darkGray" />
            <Button onClick={getValue} label="4" buttonColor="darkGray" />
            <Button onClick={getValue} label="6" buttonColor="darkGray" />
            <Button label="-" buttonColor="orange" />
          </ButtonRow>
          <ButtonRow>
            <Button onClick={getValue} label="1" buttonColor="darkGray" />
            <Button onClick={getValue} label="2" buttonColor="darkGray" />
            <Button onClick={getValue} label="3" buttonColor="darkGray" />
            <Button onClick={add} label="+" buttonColor="orange" />
          </ButtonRow>
          <ButtonRow>
            <Button onClick={getValue} label="0" buttonColor="darkGray" buttonSize="long" />
            <Button label="." buttonColor="darkGray" />
            <Button onClick={equal} label="=" buttonColor="orange" />
          </ButtonRow>
        </ButtonContainer>
      </MainStyled>
    )
};

export default MainScreen;