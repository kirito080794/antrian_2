import "../script.js";
import variabel, { color } from "../componen/variabel.js";

const style = getComputedStyle(document.body);
const primCol = style.getPropertyValue("--color");

const labels = [
  "Januari",
  "Februari",
  "Maret",
  "April",
  "Mei",
  "Juni",
  "Juli",
  "Agustus",
  "September",
  "Oktober",
  "November",
  "Desember",
];
const data = {
  labels: labels,
  datasets: [
    {
      label: "Layanan A",
      data: [30, 65, 59, 80, 81, 56, 55, 90],
      fill: false,
      borderColor: "rgb(255, 0, 0)",
      backgroundColor: "rgb(255, 0, 0)",
    },
    {
      label: "Layanan B",
      data: [90, 15, 49, 70, 31, 96, 45, 120],
      fill: false,
      borderColor: "rgb(255, 251, 0)",
      backgroundColor: "rgb(255, 251, 0)",
    },
    {
      label: "Layanan C",
      data: [15, 20, 11, 19, 20, 20, 19, 25],
      fill: false,
      borderColor: "rgb(47, 0, 255)",
      backgroundColor: "rgb(47, 0, 255)",
    },
  ],
};

const config = {
  type: "line",
  data: data,
  options: {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        ticks: {
          // For a category axis, the val is the index so the lookup via getLabelForValue is needed
          callback: function (val, index) {
            // Hide every 2nd tick label
            return index % 1 === 0 ? this.getLabelForValue(val) : "";
          },
        },
      },
    },
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Grafik Pengunjung Perbulan",
      },
    },
  },
};

let ctx = document.getElementById("chart");

let _chart = new Chart(ctx, config);

trigger();

variabel.thema.addEventListener("change", trigger);

function trigger() {
  Chart.defaults.color = color;
  _chart.options.scales.x.ticks.color = color;
  _chart.options.scales.y.ticks.color = color;
  _chart.update();
}
