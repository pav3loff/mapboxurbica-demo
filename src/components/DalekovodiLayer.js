import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Drawer, List, ListItem } from "@material-ui/core";
import { Marker } from "@urbica/react-map-gl";
import { faBolt } from "@fortawesome/free-solid-svg-icons";

import "./DalekovodiLayer.css";

function DalekovodiLayer(props) {
  return (
    <>
      {props.dalekovodi.map((dalekovod) => (
        <React.Fragment key={dalekovod.id}>
          <Marker
            offset={[0, 5]} // Icon at center
            longitude={dalekovod.longitude}
            latitude={dalekovod.latitude}
          >
            <FontAwesomeIcon
              className="bolt-icon"
              icon={faBolt}
              size="lg"
              color="yellow"
              border
              onClick={() => {
                props.setSelectedElementDrawerId(dalekovod.id);
              }}
            />
          </Marker>
          <Drawer
            anchor="left"
            open={dalekovod.id === props.selectedElementDrawerId}
            onClose={() => props.setSelectedElementDrawerId(0)}
          >
            <List>
              <ListItem>
                <p>
                  <strong>NAME:</strong> {dalekovod.name}
                </p>
              </ListItem>
              <ListItem>
                <p>
                  <strong>VOLTAGE:</strong> {dalekovod.voltage}
                </p>
              </ListItem>
            </List>
          </Drawer>
        </React.Fragment>
      ))}
    </>
  );
}

export default DalekovodiLayer;
