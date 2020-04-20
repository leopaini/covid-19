import React from "react";
import coronaImage from "./images/image.png";
import { Cards, Chart, CountryPicker } from "./components";
import { IAppProps, IAppState, IApiData } from "./interfaces";

import { fetchData } from "./api";

import styles from "./App.module.css";

class App extends React.Component<IAppProps, IAppState> {
  state = { data: {} as IApiData, country: "" };

  async componentDidMount() {
    const fetchedData = await fetchData();
    this.setState({ data: fetchedData });
  }

  handleChange = async (country: string) => {
    const fetchedData = await fetchData(country);
    this.setState({ data: fetchedData, country });
  };

  render() {
    const { data, country } = this.state;

    return (
      <div className={styles.container}>
        <img src={coronaImage} alt="COVID-19" className={styles.image} />
        <Cards data={data} />
        <CountryPicker handleChange={this.handleChange} />
        <Chart data={data} country={country} />
      </div>
    );
  }
}

export default App;
