import React, { useContext } from 'react'
import { CalcContext } from '../context/CalcContext'

const getStyleName = btn => {
  const className = {
    '=': 'equals',
    'x': 'opt',
    '-': 'opt',
    '+': 'opt',
    '/': 'opt',
  }
  return className[btn]
}

const Button = ({ value }) => {
  const { calc, setCalc } = useContext(CalcContext);

  //click comma
  const commaClick = () => {
    setCalc({
      ...calc,
      num: 77
      // num: !calc.num.toString().includes('.') ? calc.num + value : calc.num
    })
  }
  const resetClick = () => {
    setCalc({
      sign: '', num: 0, res: 0
    })
  }



  const handleButtonClick = () => {
    const results = {
      '.': commaClick,
      'C': resetClick
    }
    return results[value]()
  }
  return (
    <button onClick={handleButtonClick} className={`${getStyleName(value)} button`}>{value}</button>
  );

}

export default Button;