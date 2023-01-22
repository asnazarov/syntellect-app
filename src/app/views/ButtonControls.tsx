import {FC} from "react";
import style from '../../App.module.scss'
import {ViewPropsType} from "../@types/ButtonControlsType";
import Button from "../../components/UI/Button/Button";
import Input from "../../components/UI/Input/Input";

const ButtonControls: FC<ViewPropsType> = (props) => {

  return (
    <>
      <form className={style.form}>
        <Input onChange={props.onInputChange}
               value={props.inputValues.input_1}
               id="1"/>
        <Button onClick={props.onInputClear}
                disabled={props.inputValues.input_1 === ''}
                value='Clear'
                theme='dark'
                id='1'
        />
        <Button onClick={props.onInputDefaultText}
                value='Hello world'
                theme='light'
                id='1'
        />
      </form>
      <form className={style.form}>
        <Button onClick={props.onAlertInput}
                disabled={props.inputValues.input_2 === '' || !Number.isInteger(Number(props.inputValues.input_2))}
                value="Number"
                theme="light"
                id="2"
        />
        <Input onChange={props.onInputChange}
               value={props.inputValues.input_2}
               id="2"/>
        <Button onClick={props.onAlertInput}
                disabled={props.inputValues.input_2 === ''}
                value="Text"
                theme='dark'
                id='2'
        />
      </form>
    </>
  )
}

export default ButtonControls