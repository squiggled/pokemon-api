import Chart from "react-apexcharts";
function FavsChart({ stats }) {
  const data = {
    options: {
      colors: [
        "#F8B4B4",
        "#fdba74",
        "#FCE96A",
        "#84E1BC",
        "#76A9FA",
        "#AC94FA",
      ],
      fontFamily: ["sans", "system-ui"],
      chart: {
        id: "stats-chart",
      },
      plotOptions: {
        bar: {
          distributed: true,
          horizontal: true,
        },
      },
      xaxis: {
        categories: ["HP", "Atk", "Def", "SpAtk", "SpDef", "Spd"],
      },
    },
    series: [
      {
        name: "pokemon-stats",
        data: [
          stats[0]["base_stat"],
          stats[1]["base_stat"],
          stats[2]["base_stat"],
          stats[3]["base_stat"],
          stats[4]["base_stat"],
          stats[5]["base_stat"],
        ],
      },
    ],
  };
  return (
    <>
      <Chart
        options={data.options}
        series={data.series}
        type="bar"
        width={400}
      />
    </>
  );
}
export default FavsChart;
