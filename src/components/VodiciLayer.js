import React, { useState } from "react";

import { Source, Layer } from "@urbica/react-map-gl";
import { Drawer, List, ListItem } from "@material-ui/core";

import { highlightedVodic, standardVodic } from "../styleConstants";
import { mapLineData } from "../helperFunctions";
import vodicImage from "../images/vodicImage.svg";

import "./VodiciLayer.css";

function VodiciLayer(props) {
  const [selectedLayerId, setSelectedLayerId] = useState("");

  return (
    <>
      {props.zoom < 18.5 &&
        props.vodici.map((vodic) => (
          <React.Fragment key={vodic.id}>
            <Source
              key={vodic.name + "-" + vodic.id}
              id={vodic.name + "-" + vodic.id}
              type="geojson"
              data={mapLineData(vodic)}
            ></Source>
            <Layer
              source={vodic.name + "-" + vodic.id}
              id={vodic.name + "-" + vodic.id + "-layer"}
              type="line"
              paint={
                selectedLayerId === vodic.name + "-" + vodic.id + "-layer"
                  ? highlightedVodic
                  : standardVodic
              }
              onEnter={(event) => {
                setSelectedLayerId(event.features[0].layer.id);
              }}
              onLeave={() => setSelectedLayerId("")}
              onClick={() => {
                props.setSelectedElementDrawerId(vodic.id);
              }}
            />
            <Drawer
              anchor="left"
              open={vodic.id === props.selectedElementDrawerId}
              onClose={() => props.setSelectedElementDrawerId(0)}
            >
              <List>
                <ListItem className="drawer-item">
                  <img alt={vodic.name} src={vodicImage} />
                </ListItem>
                <ListItem>
                  <p>
                    <strong>NAME:</strong> {vodic.name}
                  </p>
                </ListItem>
                <ListItem>
                  <p>
                    <strong>LENGTH:</strong> {vodic.length}
                  </p>
                </ListItem>
              </List>
            </Drawer>
          </React.Fragment>
        ))}
      {props.zoom >= 18.5 &&
        props.vodiciDetailed.map((vodic) => (
          <React.Fragment key={vodic.id}>
            <Source
              key={vodic.name + "-" + vodic.id}
              id={vodic.name + "-" + vodic.id}
              type="geojson"
              data={mapLineData(vodic)}
            ></Source>
            <Layer
              source={vodic.name + "-" + vodic.id}
              id={vodic.name + "-" + vodic.id + "-layer"}
              type="line"
              paint={
                selectedLayerId === vodic.name + "-" + vodic.id + "-layer"
                  ? highlightedVodic
                  : standardVodic
              }
              onEnter={(event) => {
                setSelectedLayerId(event.features[0].layer.id);
              }}
              onLeave={() => setSelectedLayerId("")}
              onClick={() => {
                props.setSelectedElementDrawerId(vodic.id);
              }}
            />
            <Drawer
              anchor="left"
              open={vodic.id === props.selectedElementDrawerId}
              onClose={() => props.setSelectedElementDrawerId(0)}
            >
              <List>
                <ListItem className="drawer-item">
                  <img alt={vodic.name} src={vodicImage} />
                </ListItem>
                <ListItem>
                  <p>
                    <strong>NAME:</strong> {vodic.name}
                  </p>
                </ListItem>
                <ListItem>
                  <p>
                    <strong>LENGTH:</strong> {vodic.length}
                  </p>
                </ListItem>
              </List>
            </Drawer>
          </React.Fragment>
        ))}
    </>
  );
}

export default VodiciLayer;
