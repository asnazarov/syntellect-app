import {Component} from "react";
import {inject} from "mobx-react";
import Controller from '../controllers/AutocompleteControl'
import {autocompleteControlViewModel} from "../view-models/AutocompleteControl";
import CountriesModel from "../models/domian/CountriesModel";
import Models from '../models'



const AutocompleteControl = () => {

  return <Controller viewModel={autocompleteControlViewModel(CountriesModel)}/>;
}

export default AutocompleteControl