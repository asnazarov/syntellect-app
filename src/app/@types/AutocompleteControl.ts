import React from "react";
import {CountryInfo} from "../../api/apiService";
import CountriesModel from "../models/domian/CountriesModel";


export interface ControllerProps {
  viewModel: typeof CountriesModel;
}

export interface InputStateType {
  input_1: string,
  input_2: string
}

export interface ItemSelectionType {
  input_1: CountryInfo,
  input_2: CountryInfo
}

export interface ViewPropsType {
  values: string
  itemSelection: CountryInfo
  maxLengthSelect: number
  id?: string
  onClick?: () => void
  foundCountries: CountryInfo[] | undefined
  onHandleSelection: (item: CountryInfo, id: string) => void
  onHandleItem: (id: string) => void
  getSearchCountriesAsync: (e: React.ChangeEvent<HTMLInputElement>) => void;
}