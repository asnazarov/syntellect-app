import React, {FC} from "react";
import styleApp from './input.module.scss'


type InputType = {
  value: string
  id?: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  onClick?: () => void
}

const Input: FC<InputType> = (props) => {

  return <input className={styleApp.input} type="text" id={props.id}
                onClick={props.onClick}
                onChange={props.onChange} value={props.value}/>
}

export default Input