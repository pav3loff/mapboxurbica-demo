import React from "react";

import { faCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Drawer, List, ListItem } from "@material-ui/core";
import { Marker } from "@urbica/react-map-gl";

import izolatorImage from "../images/izolatorImage.svg";

import "./IzolatoriLayer.css";

function IzolatoriLayer(props) {
  return (
    <>
      {props.izolatori.map((izolator) => (
        <React.Fragment key={izolator.id}>
          <Marker
            key={izolator.id}
            longitude={izolator.longitude}
            latitude={izolator.latitude}
          >
            <FontAwesomeIcon
              className="izolator-icon"
              icon={faCircle}
              size="xs"
              color="#32c979"
              onClick={() => {
                props.setSelectedElementDrawerId(izolator.id);
              }}
            />
          </Marker>
          <Drawer
            anchor="left"
            open={izolator.id === props.selectedElementDrawerId}
            onClose={() => props.setSelectedElementDrawerId(0)}
          >
            <List>
              <ListItem className="drawer-item">
                <img alt={izolator.name} src={izolatorImage} />
              </ListItem>
              <ListItem>
                <p>
                  <strong>NAME:</strong> {izolator.name}
                </p>
              </ListItem>
              <ListItem>
                <p>
                  <strong>DALEKOVOD ID:</strong> {izolator.dalekovodId}
                </p>
              </ListItem>
            </List>
          </Drawer>
        </React.Fragment>
      ))}
    </>
  );
}

export default IzolatoriLayer;
