import CountriesModel from "./domian/CountriesModel";

export default class Store {
  static type = {
    COUNTRIES_MODEL: 'countries'
  };

  public getStores = () => ({
    [Store.type.COUNTRIES_MODEL]: CountriesModel
  });
}
