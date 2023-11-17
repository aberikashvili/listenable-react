import { useState } from "react";
import { geoCentroid } from "d3-geo";
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
} from "react-simple-maps";

import allStates from "../../../public/map/usa.json";

import {
  Box,
  Button,
  Checkbox,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import "./demographicsStyle.scss";
import Filter from "../../../public/icons/Filter.svg";

import states from "../../../public/map/usa.json";
import DataTable from "./DataTable";
import AgeGenderChart from "./AgeGenderChart";
import RetencionRate from "./RetencionRate";

const geoUrl = "https://cdn.jsdelivr.net/npm/us-atlas@3/states-10m.json";

const offsets = {
  VT: [50, -8],
  NH: [34, 2],
  MA: [30, -1],
  RI: [28, 2],
  CT: [35, 10],
  NJ: [34, 1],
  DE: [33, 0],
  MD: [47, 10],
  DC: [49, 21],
};

const MapChart = () => {
  const [selectedState, setSelectedState] = useState("");
  const [hoveredState, setHoveredState] = useState(null);
  const handleMouseEnter = (geo: any) => {
    setHoveredState(geo.id);
  };

  const handleMouseLeave = () => {
    setHoveredState(null);
  };

  const handleClick = (
    event: React.MouseEvent<HTMLTableRowElement, MouseEvent>,
    id: string
  ) => {
    setSelectedState(id);
  };
  return (
    <Box className="main_container">
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Typography
          sx={{ fontSize: "16px", fontWeight: "700", margin: "16px 15px" }}
        >
          Location
        </Typography>
        <Box className="date_filter">
          <img src={Filter} alt="" />
          <Button variant="outlined" size="small" sx={{ color: "#808080" }}>
            Chart
          </Button>
          <Button variant="outlined" size="small" sx={{ color: "#808080" }}>
            1Jan 2022 to 16 Sep 2022
          </Button>
        </Box>
      </Box>

      <Box className="map_container">
        <ComposableMap
          projection="geoAlbersUsa"
          className="map"
          projectionConfig={{ scale: 1350 }}
        >
          <Geographies geography={geoUrl}>
            {({ geographies }) => (
              <>
                {geographies.map((geo) => (
                  <Geography
                    key={geo.rsmKey}
                    stroke="#FFF"
                    geography={geo}
                    onMouseEnter={() => handleMouseEnter(geo)}
                    onMouseLeave={handleMouseLeave}
                    style={{
                      default: {
                        fill:
                          geo.id === hoveredState ? "lightgrey" : "lightblue",
                        stroke: geo.id === hoveredState ? "#FF5722" : "#607D8B",
                        strokeWidth: 0.75,
                        outline: "none",
                      },
                      hover: {
                        fill: geo.id === hoveredState ? "lightblue" : "#FFC107",
                        stroke: "#FF5722",
                        strokeWidth: 1,
                        outline: "none",
                      },
                      pressed: {
                        fill: geo.id === hoveredState ? "blue" : "#FFC107",
                        // stroke: "#FF5722",
                        strokeWidth: 2,
                        outline: "none",
                      },
                    }}
                  />
                ))}
                {geographies.map((geo) => {
                  const centroid = geoCentroid(geo);
                  const cur = allStates.find((s) => s.val === geo.id);
                  return (
                    <g key={geo.rsmKey + "-name"}>
                      {cur &&
                        centroid[0] > -160 &&
                        centroid[0] < -67 &&
                        Object.keys(offsets).indexOf(cur.id) === -1 && (
                          <Marker coordinates={centroid}>
                            <text y="2" fontSize={7} textAnchor="middle">
                              {cur.id}
                            </text>
                          </Marker>
                        )}
                    </g>
                  );
                })}
              </>
            )}
          </Geographies>
        </ComposableMap>

        <Box className="states_info">
          <Paper sx={{ width: "182px", height: "263px", overflow: "hidden" }}>
            <TableContainer sx={{ maxHeight: 400 }}>
              <Table stickyHeader>
                <TableHead>
                  <TableRow>
                    <TableCell>State</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {states.map((state) => {
                    return (
                      <TableRow
                        hover
                        role="checkbox"
                        onClick={(event) => handleClick(event, state.id)}
                        key={state.id}
                        sx={{ cursor: "pointer" }}
                      >
                        <TableCell padding="checkbox">
                          <Checkbox
                            checked={state.id === selectedState}
                            color="secondary"
                          />
                          {state.name}
                        </TableCell>
                      </TableRow>
                    );
                  })}
                </TableBody>
              </Table>
            </TableContainer>
          </Paper>
          <Paper sx={{ width: "366px", height: "263px", overflow: "hidden" }}>
            <DataTable states={states} />
          </Paper>
        </Box>
      </Box>
      <Box className="charts">
        <Box className="age_gender">
          <Box className="chart_description">
            <Typography
              sx={{ marginRight: "33px", fontSize: "16px", fontWeight: "700" }}
            >
              Age and Gender
            </Typography>
            <Box sx={{ display: "flex", gap: "30px" }}>
              <Box sx={{ display: "flex", alignItems: "center", gap: "6px" }}>
                <div
                  style={{
                    width: "16px",
                    height: "16px",
                    border: "4px solid #FFB264",
                  }}
                ></div>
                <Typography>Male</Typography>
              </Box>
              <Box sx={{ display: "flex", alignItems: "center", gap: "6px" }}>
                <div
                  style={{
                    width: "16px",
                    height: "16px",
                    border: "4px solid #FF6482",
                  }}
                ></div>
                <Typography>Female</Typography>
              </Box>
              <Box sx={{ display: "flex", alignItems: "center", gap: "6px" }}>
                <div
                  style={{
                    width: "16px",
                    height: "16px",
                    border: "4px solid #009C99",
                  }}
                ></div>
                <Typography>Other</Typography>
              </Box>
            </Box>
          </Box>
          <Box
            className="chart_details"
            sx={{
              display: "flex",
              width: "100%",
              justifyContent: "space-between",
            }}
          >
            <Box sx={{ width: "60%" }}>
              <AgeGenderChart />
            </Box>
            <Box sx={{ width: "40%" }}>
              <RetencionRate />
            </Box>
          </Box>
        </Box>
        <Box className="retention_rate"></Box>
      </Box>
    </Box>
  );
};

export default MapChart;
