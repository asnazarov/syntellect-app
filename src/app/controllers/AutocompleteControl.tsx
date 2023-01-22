import View from '../views/AutocompleteControl/AutocompleteControl'
import {CountryInfo, getCountryByName} from "../../api/apiService";
import React, {FC, useState} from "react";
import {ControllerProps, InputStateType, ItemSelectionType} from "../@types/AutocompleteControl";
import stylesApp from '../../App.module.scss'


const AutocompleteControl: FC<ControllerProps> = (props) => {

  const [inputValues, setInputValues] = useState<InputStateType>({
    input_1: '',
    input_2: ''
  })

  const [itemSelection, setItemSelection] = useState<ItemSelectionType>({
    input_1: {},
    input_2: {}
  } as ItemSelectionType)
  const [foundCountries, setFoundCountries] = useState<CountryInfo[] | undefined>([])

  const getSearchCountriesAsync = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const id: string = e.currentTarget.id
    const value: string = e.target.value
    setInputValues({...inputValues, [`input_${id}`]: value})
    await props.viewModel.getSearchCountriesAsync(e.target.value)
    const result = props.viewModel.foundCountries()
    setFoundCountries(result)
  }

  const onHandleSelection = (item: CountryInfo, id: string) => {
    setInputValues({...inputValues, [`input_${id}`]: ''})
    setItemSelection({...itemSelection, [`input_${id}`]: item})
  }

  const onHandleItem = (id: string) => {
    setItemSelection({...itemSelection, [`input_${id}`]: {}})
  }

  const onHandleClick = () => {
    setInputValues({input_1: '', input_2: ''})
  }

  return (
    <form className={stylesApp.form}>
      <View
        values={inputValues.input_1}
        itemSelection={itemSelection.input_1}
        foundCountries={foundCountries}
        maxLengthSelect={3}
        id="1"
        onClick={onHandleClick}
        onHandleSelection={onHandleSelection}
        onHandleItem={onHandleItem}
        getSearchCountriesAsync={getSearchCountriesAsync}
      />
      <View
        values={inputValues.input_2}
        itemSelection={itemSelection.input_2}
        foundCountries={foundCountries}
        maxLengthSelect={10}
        id="2"
        onClick={onHandleClick}
        onHandleSelection={onHandleSelection}
        onHandleItem={onHandleItem}
        getSearchCountriesAsync={getSearchCountriesAsync}
      />
    </form>

  )
}

export default AutocompleteControl