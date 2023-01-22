import {computed, makeAutoObservable, observable} from 'mobx';
import {CountryInfo, getCountryByName} from "../../../api/apiService";

 class CountriesModel {
  @observable found_countries: CountryInfo[] = [];
  constructor() {
    makeAutoObservable(this);
  }

  @computed addFoundCountries(countries: CountryInfo[]) {
    this.found_countries = countries
  }

  @computed async getSearchCountriesAsync(value: string) {
    const countries = await getCountryByName(value)
    await this.addFoundCountries(countries)
  }

  public foundCountries(): CountryInfo[] | undefined {
    if (this.found_countries.length != 0) {
      return this.found_countries;
    }
  }

}
export default new CountriesModel()