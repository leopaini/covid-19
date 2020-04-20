import React from "react";
import { fetchDailyData } from "../../api";
import { Line, Bar } from "react-chartjs-2";
import { IChartProps, IDailyData } from "../../interfaces";

import styles from "./Chart.module.css";

const Chart: React.SFC<IChartProps> = props => {
  const { data, country } = props;
  const [dailyData, setDailyData] = React.useState<IDailyData[]>([]);

  React.useEffect(() => {
    const fetchAPI = async () => {
      const data = await fetchDailyData();
      setDailyData(data);
    };
    fetchAPI();
  }, []);

  const lineChart = dailyData.length ? (
    <Line
      data={{
        labels: dailyData.map((el: IDailyData) => el.reportDate),
        datasets: [
          {
            data: dailyData.map((el: IDailyData) => el.confirmed.total),
            label: "Infected",
            borderColor: "#3333ff",
            fill: true
          },
          {
            data: dailyData.map((el: IDailyData) => el.deaths.total),
            label: "Deaths",
            borderColor: "red",
            backgroundColor: "rgba(255, 0, 0, 0.5)",
            fill: true
          }
        ]
      }}
    />
  ) : null;

  const barChar = data.confirmed ? (
    <Bar
      data={{
        labels: ["Infected", "Recovered", "Deaths"],
        datasets: [
          {
            label: "People",
            backgroundColor: [
              "rgba(0, 0, 255, 0.5)",
              "rgba(0, 255, 0, 0.5)",
              "rgba(255, 0, 0, 0.5)"
            ],
            data: [data.confirmed.value, data.recovered.value, data.deaths.value]
          }
        ]
      }}
      options={{
        legend: { display: false },
        title: { display: true, text: `Current state in ${country}` }
      }}
    />
  ) : null;

  return <div className={styles.container}>{country ? barChar : lineChart}</div>;
};

export default Chart;
