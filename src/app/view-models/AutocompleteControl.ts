import CountriesModel from "../models/domian/CountriesModel";

export const autocompleteControlViewModel = (model: typeof CountriesModel): typeof CountriesModel=> {

  return {
    found_countries: model.found_countries,
    getSearchCountriesAsync: async (value: string) => {
      await model.getSearchCountriesAsync(value);
    },
    addFoundCountries: () => {},
    foundCountries: () => model.foundCountries()
  }
}