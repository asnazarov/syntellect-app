import React, {FC} from "react";
import style from './button.module.scss'

type ButtonType = {
  value: string
  theme: 'dark' | 'light' | ''
  id?: string
  disabled?: boolean
  onClick: (e: React.FormEvent<HTMLButtonElement>) => void
}

const Button: FC<ButtonType> = (props) => {

  return <button className={`${style.button} ${style[`button_${props.theme}`]}`}
                 onClick={props.onClick}
                 type="button"
                 disabled={props.disabled}
                 id={props.id}>
    {props.value}</button>

}

export default Button