import React from "react";


export interface ViewPropsType {
  inputValues: InputStateType
  onInputClear: (e: React.FormEvent<HTMLButtonElement>) => void
  onInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onInputDefaultText: (e: React.FormEvent<HTMLButtonElement>) => void
  onAlertInput: (e: React.FormEvent<HTMLButtonElement>) => void
}

export interface InputStateType {
  input_1: string,
  input_2: string
}

export interface ControllerProps {

}