import { useState } from "react";

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
import PopEpisodes from "./PopEpisodes";
import PopSegments from "./PopSegments";
import DatePicker from "./DatePicker";
import Map from "../Map/Map";


const Demographics = () => {
  const [selectedState, setSelectedState] = useState("");


  const handleClick = (
    _event: React.MouseEvent<HTMLTableRowElement, MouseEvent>,
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
          <Button
            variant="outlined"
            sx={{
              color: "#808080",
              border: "1px solid  #F0F0F0",
              fontSize: "12px",
              width: "42px",
              height: "26px",
            }}
          >
            {" "}
            <img src={Filter} alt="filter" width="19px" />
          </Button>

          <Button
            variant="outlined"
            sx={{
              color: "#808080",
              border: "1px solid  #F0F0F0",
              fontSize: "12px",
              width: "42px",
              height: "26px",
            }}
          >
            Chart
          </Button>
          <DatePicker />
        </Box>
      </Box>

      <Box className="map_container">
        {/* <ComposableMap
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
                  const cur:any = allStates.find((s:any) => s.val === geo.id);
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
        </ComposableMap> */}
          <Map/>
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
            <Box sx={{ display: "flex", alignItems: "center", width: "60%" }}>
              <Typography
                sx={{
                  marginRight: "33px",
                  fontSize: "16px",
                  fontWeight: "700",
                }}
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
            <Box sx={{ display: "flex", alignItems: "center", width: "40%" }}>
              <Typography
                sx={{
                  marginRight: "33px",
                  fontSize: "16px",
                  fontWeight: "700",
                }}
              >
                Retencion Rate
              </Typography>
            </Box>
          </Box>
          <Box
            className="chart_details"
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Box>
              <AgeGenderChart />
            </Box>
            <Box
              sx={{
                width: "1px",
                height: "199px",
                backgroundColor: " #EAEAEA;",
              }}
            ></Box>
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <RetencionRate />
            </Box>
          </Box>
        </Box>
      </Box>
      <Box
        className="segments"
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          marginTop: "13px",
        }}
      >
        <PopEpisodes />
        <PopSegments />
      </Box>
    </Box>
  );
};

export default Demographics;
