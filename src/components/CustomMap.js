import React from "react";
import { useEffect, useState } from "react";

import MapGL, { NavigationControl } from "@urbica/react-map-gl";

import { TOKEN } from "../mapboxToken";
import {
  dalekovodi,
  stupovi,
  izolatori,
  vodici,
  vodiciDetailed,
  zastitnaUzad,
} from "../dummyData";
import DalekovodiLayer from "./DalekovodiLayer";
import IzolatoriLayer from "./IzolatoriLayer";
import VodiciLayer from "./VodiciLayer";
import StupoviLayer from "./StupoviLayer";
import ZastitnaUzadLayer from "./ZastitnaUzadLayer";

import "./CustomMap.css";

function CustomMap() {
  const [mapData, setMapData] = useState({
    viewport: {
      latitude: 45.878827,
      longitude: 15.98904,
      zoom: 13,
      bearing: 0,
      pitch: 0,
      width: "100vw",
      height: "100vh",
    },
  });
  const [displayData, setDisplayData] = useState({});
  const [isDisplayDataLoaded, setDisplayDataLoaded] = useState(false);
  const [selectedElementDrawerId, setSelectedElementDrawerId] = useState(0);

  useEffect(() => {
    setDisplayData({
      dalekovodi: dalekovodi,
      izolatori: izolatori,
      stupovi: stupovi,
      vodici: vodici,
      vodiciDetailed: vodiciDetailed,
      zastitnaUzad: zastitnaUzad,
    });

    setDisplayDataLoaded(true);
  }, []);

  return (
    <MapGL
      className="map"
      {...mapData.viewport}
      onViewportChange={(viewport) => setMapData({ viewport })}
      mapStyle="mapbox://styles/mapbox/dark-v10"
      accessToken={TOKEN}
      maxZoom={18.5}
      cursorStyle="default"
    >
      <>
        <div className="navigation-control">
          <NavigationControl
            className="navigation-control"
            onViewportChange={(viewport) => setMapData({ viewport })}
          />
        </div>
        {isDisplayDataLoaded && (
          <>
            {/* DALEKOVODI */}
            {mapData.viewport.zoom < 18.5 && (
              <DalekovodiLayer
                dalekovodi={displayData.dalekovodi}
                selectedElementDrawerId={selectedElementDrawerId}
                setSelectedElementDrawerId={setSelectedElementDrawerId}
              />
            )}

            {/* STUPOVI */}
            {mapData.viewport.zoom >= 18.5 && (
              <StupoviLayer
                stupovi={displayData.stupovi}
                selectedElementDrawerId={selectedElementDrawerId}
                setSelectedElementDrawerId={setSelectedElementDrawerId}
              />
            )}

            {/* IZOLATORI */}
            {mapData.viewport.zoom >= 18.5 && (
              <IzolatoriLayer
                izolatori={displayData.izolatori}
                selectedElementDrawerId={selectedElementDrawerId}
                setSelectedElementDrawerId={setSelectedElementDrawerId}
              />
            )}

            {/* VODICI */}
            <VodiciLayer
              zoom={mapData.viewport.zoom}
              vodici={displayData.vodici}
              vodiciDetailed={displayData.vodiciDetailed}
              selectedElementDrawerId={selectedElementDrawerId}
              setSelectedElementDrawerId={setSelectedElementDrawerId}
            />

            {/* ZASTITNA UZAD */}
            {mapData.viewport.zoom >= 18.5 && (
              <ZastitnaUzadLayer
                zastitnaUzad={displayData.zastitnaUzad}
                selectedElementDrawerId={selectedElementDrawerId}
                setSelectedElementDrawerId={setSelectedElementDrawerId}
              />
            )}
          </>
        )}
      </>
    </MapGL>
  );
}

export default CustomMap;
