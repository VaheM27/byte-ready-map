import { React, useState } from "react";
import { MapContainer, TileLayer, Popup, Circle } from "react-leaflet";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut, Pie, PolarArea } from "react-chartjs-2";
import PieChart from "./components/map";
import { UserData } from "./Data";
import icon from "./assets/icon.png";

import "leaflet/dist/leaflet.css";
import "./App.css";

function App() {
  const center = [51.505, -0.09];
  const firstPosition = [51.5, -0.06];
  const secondPosition = [51.49508901692658, -0.08337167702239126];
  const thirdPosition = [51.499417177413534, -0.10418561890014542];
  const lastPosition = [51.50219553301563, -0.09834913208596228];
  const marker = [51.49, -0.08];
  const fillBlueOptions = { fillColor: "" };
  const fillRedOptions = { fillColor: "red" };
  const fillYellowOptions = { fillColor: "yellow" };

  ChartJS.register(ArcElement, Tooltip, Legend);

  const data = {
    labels: [
      "Man",
      "Women",
      "Costumers",
      "Registered",
      "Service",
      "Restaurants",
    ],
    datasets: [
      {
        label: "Percent",
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: [
          "#b30000",
          "#0d88e6",
          "#00b7c7",
          "#5ad45a",
          "#8be04e",
          "#ebdc78",
        ],
        borderColor: [
          "#b30000",
          "#0d88e6",
          "#00b7c7",
          "#5ad45a",
          "#8be04e",
          "#ebdc78",
        ],
        borderWidth: 1,
      },
    ],
  };

  const newData = {
    labels: [
      "Man",
      "Women",
      "Costumers",
      "Registered",
      "Service",
      "Restaurants",
    ],
    datasets: [
      {
        label: "Percent",
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: [
          "#ea5545",
          "#ede15b",
          "#bdcf32",
          "#87bc45",
          "#27aeef",
          "#b33dc6",
        ],
        borderColor: ["black"],
        borderWidth: 1,
      },
    ],
  };

  const [userData, setUserData] = useState({
    labels: UserData.map((data) => data.year),
    datasets: [
      {
        label: "Users Gained",
        data: UserData.map((data) => data.userGain),
        backgroundColor: [
          "rgba(75,192,192,1)",
          "#ecf0f1",
          "#50AF95",
          "#f3ba2f",
          "#2a71d0",
        ],
        borderColor: "black",
        borderWidth: 2,
      },
    ],
  });
  const [usersData, setUsersData] = useState({
    labels: UserData.map((data) => data.year),
    datasets: [
      {
        label: "Users Gained",
        data: UserData.map((data) => data.userGain),
        backgroundColor: [
          "rgba(75,192,192,1)",
          "#ecf0f1",
          "#50AF95",
          "#f3ba2f",
          "#2a71d0",
        ],
        borderWidth: 2,
      },
      {
        label: "Users Gained",
        data: UserData.map((data) => data.userGain),
        backgroundColor: [
          "#ea5545",
          "#ede15b",
          "#bdcf32",
          "#87bc45",
          "#27aeef",
          "#b33dc6",
        ],
        borderWidth: 2,
      },
      {
        label: "Users Gained",
        data: UserData.map((data) => data.userGain),
        backgroundColor: [
          "#bd7ebe",
          "#ffb55a",
          "#ffee65",
          "#beb9db",
          "#fdcce5",
          "#8bd3c7",
        ],
        borderWidth: 2,
      },
      {
        label: "Users Gained",
        data: UserData.map((data) => data.userGain),
        backgroundColor: [
          "rgba(75,192,192,1)",
          "#ecf0f1",
          "#50AF95",
          "#f3ba2f",
          "#2a71d0",
        ],
        borderWidth: 2,
      },
    ],
  });

  return (
    <MapContainer
      center={center}
      zoom={13}
      style={{ width: "100vw", height: "100vh" }}
    >
      <TileLayer
        url="https://api.maptiler.com/maps/basic-v2/256/{z}/{x}/{y}.png?key=pIJuSIkDBC9cDDsGoz7E"
        attribution='<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>'
      />

      <Circle center={marker} radius={200}>
        <Popup>
          <div className="flex">
            <img className="img" src={icon} alt="icon" />
            <h1 className="title">Here is Pizza Hut.</h1>
          </div>
        </Popup>
      </Circle>

      <Circle center={center} pathOptions={fillBlueOptions} radius={200}>
        <Popup className="popup">
          <Pie className="pie" data={data} />
        </Popup>
      </Circle>

      <Circle center={firstPosition} pathOptions={fillRedOptions} radius={200}>
        <Popup className="popup">
          <Doughnut className="pie" data={data} />
        </Popup>
      </Circle>

      <Circle center={firstPosition} pathOptions={fillRedOptions} radius={200}>
        <Popup className="popup">
          <Doughnut className="pie" data={newData} />
        </Popup>
      </Circle>

      <Circle center={thirdPosition} pathOptions={fillRedOptions} radius={200}>
        <Popup className="popup">
          <PolarArea className="pie" data={newData} />
        </Popup>
      </Circle>

      <Circle center={secondPosition} pathOptions={fillRedOptions} radius={200}>
        <Popup className="popup">
          <Pie className="pie" data={usersData} />
        </Popup>
      </Circle>

      <Circle
        center={lastPosition}
        pathOptions={fillYellowOptions}
        radius={200}
      >
        <Popup className="popup">
          <div style={{ width: 280 }}>
            <PieChart chartData={userData} />
          </div>
        </Popup>
      </Circle>
    </MapContainer>
  );
}
export default App;
