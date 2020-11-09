import React, { useState } from "react";

import { Drawer, List, ListItem } from "@material-ui/core";
import { Layer, Source } from "@urbica/react-map-gl";

import { highlightedZastitnoUze, standardZastitnoUze } from "../styleConstants";
import { mapLineData } from "../helperFunctions";

function ZastitnaUzadLayer(props) {
  const [selectedLayerId, setSelectedLayerId] = useState("");

  return (
    <>
      {props.zastitnaUzad.map((zastitnoUze) => (
        <React.Fragment key={zastitnoUze.id}>
          <Source
            key={zastitnoUze.name + "-" + zastitnoUze.id}
            id={zastitnoUze.name + "-" + zastitnoUze.id}
            type="geojson"
            data={mapLineData(zastitnoUze)}
          ></Source>
          <Layer
            source={zastitnoUze.name + "-" + zastitnoUze.id}
            id={zastitnoUze.name + "-" + zastitnoUze.id + "-layer"}
            type="line"
            paint={
              selectedLayerId ===
              zastitnoUze.name + "-" + zastitnoUze.id + "-layer"
                ? highlightedZastitnoUze
                : standardZastitnoUze
            }
            onEnter={(event) => {
              setSelectedLayerId(event.features[0].layer.id);
            }}
            onLeave={() => setSelectedLayerId("")}
            onClick={() => {
              props.setSelectedElementDrawerId(zastitnoUze.id);
            }}
          />
          <Drawer
            anchor="left"
            open={zastitnoUze.id === props.selectedElementDrawerId}
            onClose={() => props.setSelectedElementDrawerId(0)}
          >
            <List>
              <ListItem>
                <p>
                  <strong>NAME:</strong> {zastitnoUze.name}
                </p>
              </ListItem>
              <ListItem>
                <p>
                  <strong>LENGTH:</strong> {zastitnoUze.length}
                </p>
              </ListItem>
            </List>
          </Drawer>
        </React.Fragment>
      ))}
    </>
  );
}

export default ZastitnaUzadLayer;
