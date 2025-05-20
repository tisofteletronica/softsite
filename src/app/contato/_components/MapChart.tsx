'use client'
import { geoCentroid } from "d3-geo";
import {
  Annotation,
  ComposableMap,
  Geographies,
  Geography,
  Marker
} from "react-simple-maps";

import { useState } from "react";
import brTopoJson from "../../../config/br-topo.json";

const GeographiesAny = Geographies as any; // Ignora a verificação de tipos

const statesWithAnnotations = {
  BR_DF: {
    annotation: { x: -10, y: -15 },
    tag: { fontSize: 14, x: 4, y: 0 }
  },
  BR_RN: {
    annotation: { x: 28, y: 0 },
    tag: { fontSize: 14, x: 4, y: 0 }
  },
  BR_PB: {
    annotation: { x: 32, y: 0 },
    tag: { fontSize: 14, x: 4, y: 0 }
  },
  BR_PE: {
    annotation: { x: 50, y: 0 },
    tag: { fontSize: 14, x: 4, y: 0 }
  },
  BR_AL: {
    annotation: { x: 30, y: 0 },
    tag: { fontSize: 14, x: 4, y: 0 }
  },
  BR_SE: {
    annotation: { x: 25, y: 0 },
    tag: { fontSize: 14, x: 4, y: 0 }
  },
  BR_ES: {
    annotation: { x: 20, y: 0 },
    tag: { fontSize: 14, x: 4, y: 0 }
  },
  BR_RJ: {
    annotation: { x: 25, y: 0 },
    tag: { fontSize: 14, x: 4, y: 0 }
  }
};

const geographyStyle = {
  fill: "#ECEFF1",
  backgroundColor: "yellow",
  stroke: "#FFF",
  strokeWidth: 1,
  outline: "none",
  cursor: "pointer",
  transition: "all .2s"
};

type StateAnnotations = typeof statesWithAnnotations;
type StateKeys = keyof StateAnnotations;

interface MapProps {
  handleState: (uf: string) => void;
}

export function MapChart({ handleState }: MapProps) {
  // Estado local para armazenar o estado clicado
  const [clickedStateId, setClickedStateId] = useState<string | null>(null);

  // Função para lidar com o clique no estado
  const handleStateClick = (geoId: string) => {
    setClickedStateId(geoId);
    handleState(geoId);
  };

  
  const renderGeograph = (dataSource: string | Record<string, any> | string[] | undefined, countryId: string, countryColor: string) => {
      return (
      
        <GeographiesAny geography={dataSource}>
          {({ geographies }) => (
            <>
              {geographies.map((geo) => {
                const geoId = geo.properties.id;
                const isClicked = clickedStateId === geoId;

                return (
                  <Geography
                    key={geo.rsmKey + "-Geography"}
                    stroke="#FFF"
                    geography={geo}
                    onClick={() => handleStateClick(geoId)}
                    style={{
                      default: {
                        ...geographyStyle,
                        fill: isClicked ? "#c93f04" : countryColor,
                      },
                      hover: {
                        ...geographyStyle,
                        fill: "#c93f04"
                      },
                      pressed: {
                        ...geographyStyle,
                        fill: "#484848"
                      },
                    }}
                  />
                );
              })}

              {geographies.map((geo) => {
                const centroid = geoCentroid(geo);
                const geoId = geo.properties.id;
                const annotationKey = `${countryId}_${geoId}` as StateKeys;
                const annotationOffset = statesWithAnnotations[annotationKey];
                const tagPosition = annotationOffset?.tag || {
                  x: 2,
                  y: 0,
                  fontSize: 10
                };
                const isClicked = clickedStateId === geoId;
                return (
                  <g
                    key={`${geo.rsmKey}-Marker`}
                    style={{ pointerEvents: "none" }}
                  >
                    {annotationOffset ? (
                      <Annotation
                        connectorProps={{
                          stroke: "#484848"
                        }}
                        subject={centroid}
                        dx={annotationOffset.annotation.x}
                        dy={annotationOffset.annotation.y}
                      >
                        <text
                          x={tagPosition.x}
                          y={tagPosition.y}
                          fontSize={10}
                          alignmentBaseline="middle"
                          fill={isClicked ? "#484848" : "#484848"}
                        >
                          {geoId}
                        </text>
                      </Annotation>
                    ) : (
                      <Marker coordinates={centroid}>
                        <text
                          x={tagPosition.x}
                          y={tagPosition.y}
                          fontSize={tagPosition.fontSize}
                          textAnchor="middle"
                            fill={isClicked ? "#fff" : "#484848"}
                        >
                          {geoId}
                        </text>
                      </Marker>
                    )}
                  </g>
                );
              })}
            </>
          )}
        </GeographiesAny>
      );
    };

    return (
      <div className="w-full h-full">
        <ComposableMap
          projection="geoMercator"
          projectionConfig={{
            scale: 800,
            center: [-54, -15]
          }}
          width={600}
          height={600}
        >
          {renderGeograph(brTopoJson, "BR", "#dfdfe7")}
        </ComposableMap>
      </div>
    );
}
