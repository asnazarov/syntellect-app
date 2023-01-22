import Views from '../views/ButtonControls'
import React, {FC, useState} from "react";
import {ControllerProps, InputStateType} from "../@types/ButtonControlsType";

const ButtonControls:FC<ControllerProps> = () => {

  const [inputValues, setInputValues] = useState<InputStateType>({
    input_1: '',
    input_2: ''
  })

  const onInputClear = (e: React.FormEvent<HTMLButtonElement>) => {
    const id: string = e.currentTarget.id
    setInputValues({...inputValues, [`input_${id}`]: ''})
  }

  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const id: string = e.currentTarget.id
    const value: string = e.target.value
    setInputValues({...inputValues, [`input_${id}`]: value})
  }

  const onInputDefaultText = (e: React.FormEvent<HTMLButtonElement>) => {
    const id: string = e.currentTarget.id
    setInputValues({...inputValues, [`input_${id}`]: 'Hello world!'})
  }

  const onAlertInput = (e: React.FormEvent<HTMLButtonElement>): void => {
    const id: string = e.currentTarget.id
    const value: string = inputValues[`input_${id}` as keyof InputStateType]
    if (value != '') return alert(value)
  }

  return (
    <Views
      inputValues={inputValues}
      onInputClear={onInputClear}
      onInputChange={onInputChange}
      onInputDefaultText={onInputDefaultText}
      onAlertInput={onAlertInput}
    />
  )
}

export default ButtonControls