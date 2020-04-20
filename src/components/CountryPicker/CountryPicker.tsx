import React from "react";
import { fetchCountries } from "../../api";
import { ICountryPickerProps, ICountryData } from "../../interfaces";
import { NativeSelect, FormControl } from "@material-ui/core";

import styles from "./CountryPicker.module.css";

const CountryPicker: React.SFC<ICountryPickerProps> = props => {
  const { handleChange } = props;
  const [countries, setCountries] = React.useState<ICountryData[]>([]);

  React.useEffect(() => {
    const fetchAPI = async () => {
      setCountries(await fetchCountries());
    };
    fetchAPI();
  }, []);

  return (
    <FormControl className={styles.formControl}>
      <NativeSelect defaultValue="" onChange={e => handleChange(e.target.value)}>
        <option value="">Global</option>
        {countries.map((country: ICountryData, index: number) => (
          <option key={index} value={country.name}>
            {country.name}
          </option>
        ))}
      </NativeSelect>
    </FormControl>
  );
};

export default CountryPicker;
