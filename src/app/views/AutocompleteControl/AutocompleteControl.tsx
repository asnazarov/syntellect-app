import {FC} from "react";
import styleInput from '../../../components/UI/Input/input.module.scss'
import style from './autocompleteControl.module.scss'
import {ViewPropsType} from "../../@types/AutocompleteControl";
import {observer} from "mobx-react";
import Input from "../../../components/UI/Input/Input";

const AutocompleteControl: FC<ViewPropsType> = observer((props) => {

  return (
    <div className={style.wrapper}>
      {Object.keys(props.itemSelection).length
        ? <div className={`${styleInput.input} ${style.text}`} onClick={() => props.onHandleItem(props.id || '')}>
          <img src={props.itemSelection.flag} alt="flag"/>
          <p>{props.itemSelection.name}</p>
          <p>{props.itemSelection.fullName}</p>
        </div>
        : <Input onChange={props.getSearchCountriesAsync}
                 onClick={props.onClick}
                 id={props.id}
                 value={props.values}
        />
      }

      {props.values != '' &&
        <ul className={style.list}>
          {props.foundCountries?.slice(0, props.maxLengthSelect).map((el, ind) => {
            return (
              <li className={style.item} key={ind} onClick={() => props.onHandleSelection(el, props.id || '')}>
                <img src={el.flag} alt="flag"/>
                <p>{el.name}</p>
                <p>{el.fullName}</p>
              </li>
            )
          })}
        </ul>
      }

    </div>
  )
})

export default AutocompleteControl