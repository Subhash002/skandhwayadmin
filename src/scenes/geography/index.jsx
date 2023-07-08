import { useTheme } from "@emotion/react";
import { mockGeographyData as data } from "../../data/mockData";
import { tokens } from "../../Theme";
import Header from "../../components/Header";
import { Box } from "@mui/material";
import { ResponsiveChoroplethCanvas } from "@nivo/geo";
import { geoFeatures } from "../../data/mockGeoFeature";
const Geography = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box m="20px">
      <Header
        title="Get Overall Picture Of the Sales"
        subTitle="Composition or distribution of a whole Products"
      />
      <Box
        height="75vh"
        border={`1px solid ${colors.grey[100]}`}
        borderRadius="4px"
      >
        <ResponsiveChoroplethCanvas
          data={data}
          features={geoFeatures.features}
          margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
          colors="RdBu"
          domain={[0, 1000000]}
          unknownColor="#101b42"
          label="properties.name"
          valueFormat=".2s"
          projectionTranslation={[0.5, 0.5]}
          projectionRotation={[0, 0, 0]}
          enableGraticule={true}
          graticuleLineColor="rgba(0, 0, 0, .2)"
          borderWidth={0.5}
          borderColor="#101b42"
          theme={{
            // added
            axis: {
              domain: {
                line: {
                  stroke: colors.grey[100],
                },
              },
              legend: {
                text: {
                  fill: colors.grey[100],
                },
              },
              ticks: {
                line: {
                  stroke: colors.grey[100],
                  strokeWidth: 1,
                },
                text: {
                  fill: colors.grey[100],
                },
              },
            },
            legends: {
              text: {
                fill: colors.grey[100],
              },
            },
            tooltip: {
              container: {
                background: "#11110f",
                color: "#ffffff",
                fontSize: 12,
              },
            },
          }}
          legends={[
            {
              anchor: "bottom-left",
              direction: "column",
              justify: true,
              translateX: 20,
              translateY: -60,
              itemsSpacing: 0,
              itemWidth: 92,
              itemHeight: 18,
              itemDirection: "left-to-right",
              itemOpacity: 0.85,
              symbolSize: 18,
            },
          ]}
        />
      </Box>
    </Box>
  );
};

export default Geography;
