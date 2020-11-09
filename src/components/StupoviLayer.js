import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Drawer, List, ListItem } from "@material-ui/core";
import { Marker } from "@urbica/react-map-gl";
import { faSquare } from "@fortawesome/free-solid-svg-icons";

import yStupImage from "../images/yStupImage.svg";
import dunavStupImage from "../images/dunavStupImage.svg";
import jelaStupImage from "../images/jelaStupImage.svg";

import "./StupoviLayer.css";

function StupoviLayer(props) {
  return (
    <>
      {props.stupovi.map((stup) => (
        <React.Fragment key={stup.id}>
          <Marker
            offset={[7, 0]} // Icon at center
            longitude={stup.longitude}
            latitude={stup.latitude}
          >
            <FontAwesomeIcon
              className="bolt-icon"
              icon={faSquare}
              size="lg"
              color={
                stup.type === "JELA"
                  ? "green"
                  : stup.type === "Y-STUP"
                  ? "white"
                  : "orange"
              }
              onClick={() => {
                props.setSelectedElementDrawerId(stup.id);
              }}
            />
          </Marker>
          <Drawer
            anchor="left"
            open={stup.id === props.selectedElementDrawerId}
            onClose={() => props.setSelectedElementDrawerId(0)}
          >
            <List>
              <ListItem className="drawer-item">
                <img
                  alt={stup.name}
                  src={
                    stup.type === "JELA"
                      ? jelaStupImage
                      : stup.type === "Y-STUP"
                      ? yStupImage
                      : dunavStupImage
                  }
                />
              </ListItem>
              <ListItem>
                <p>
                  <strong>NAME:</strong> {stup.name}
                </p>
              </ListItem>
              <ListItem>
                <p>
                  <strong>TYPE:</strong> {stup.type}
                </p>
              </ListItem>
              <ListItem>
                <p>
                  <strong>HEIGHT:</strong> {stup.height}
                </p>
              </ListItem>
              <ListItem>
                <p>
                  <strong>DALEKOVOD ID:</strong> {stup.dalekovodId}
                </p>
              </ListItem>
            </List>
          </Drawer>
        </React.Fragment>
      ))}
    </>
  );
}

export default StupoviLayer;
