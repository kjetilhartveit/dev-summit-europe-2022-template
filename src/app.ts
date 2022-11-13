import Map from "@arcgis/core/Map";
import MapView from "@arcgis/core/views/MapView";
import SceneView from "@arcgis/core/views/SceneView";
import FeatureLayer from "@arcgis/core/layers/FeatureLayer";
import SceneLayer from "@arcgis/core/layers/SceneLayer";

import SimpleRenderer from "@arcgis/core/renderers/SimpleRenderer";
import UniqueValueRenderer from "@arcgis/core/renderers/UniqueValueRenderer";
import MeshSymbol3D from "@arcgis/core/symbols/MeshSymbol3D";
import SolidEdges3D from "@arcgis/core/symbols/edges/SolidEdges3D";
import FillSymbol3DLayer from "@arcgis/core/symbols/FillSymbol3DLayer";
import LineSymbol3D from "@arcgis/core/symbols/LineSymbol3D";
import PathSymbol3DLayer from "@arcgis/core/symbols/PathSymbol3DLayer";
import PolygonSymbol3D from "@arcgis/core/symbols/PolygonSymbol3D";
import WebStyleSymbol from "@arcgis/core/symbols/WebStyleSymbol";
import LineStylePattern3D from "@arcgis/core/symbols/patterns/LineStylePattern3D";
import LineCallout3D from "@arcgis/core/symbols/callouts/LineCallout3D";
import PointSymbol3D from "@arcgis/core/symbols/PointSymbol3D";
import LabelSymbol3D from "@arcgis/core/symbols/LabelSymbol3D";
import TextSymbol3DLayer from "@arcgis/core/symbols/TextSymbol3DLayer";
import ObjectSymbol3DLayer from "@arcgis/core/symbols/ObjectSymbol3DLayer";
import ExpressionInfo from "@arcgis/core/popup/ExpressionInfo";
import Search from "@arcgis/core/widgets/Search";
import Home from "@arcgis/core/widgets/Home";
import LayerList from "@arcgis/core/widgets/LayerList";

import PopupTemplate from "@arcgis/core/PopupTemplate";

import { when } from "@arcgis/core/core/reactiveUtils";
import { Chart, registerables } from "chart.js";

// Layers
const streetsUrl =
  "https://services2.arcgis.com/cFEFS0EWrhfDeVw9/arcgis/rest/services/Berlin_Equal_Street_Names/FeatureServer";
const buildingsUrl =
  "https://tiles.arcgis.com/tiles/P3ePLMYs2RVChkJx/arcgis/rest/services/Buildings_Berlin/SceneServer";

const districtsUrl =
  "https://services2.arcgis.com/jUpNdisbWqRpMo35/arcgis/rest/services/BerlinRBS_Ortsteile_2017/FeatureServer";

const treesUrl =
  "https://services2.arcgis.com/jUpNdisbWqRpMo35/arcgis/rest/services/Baumkataster_Berlin/FeatureServer";

/********************************************************************
 * Step 1 - Add map with basemap *
 ********************************************************************/

// // set the shaded relief renderer parameters
// const renderer = new RasterShadedReliefRenderer({
//   altitude: 45,
//   azimuth: 315,
//   hillshadeType: hillshadeType,
//   zFactor: 1,
//   scalingType: "adjusted",
//   colorRamp: colorRamp
// });

// const layer = new ImageryTileLayer({
//   url: treesUrl,
//   renderer: renderer
// });

const map = new Map({
  //basemap: "hybrid",
  basemap: "dark-gray-vector",
  ground: 'world-elevation'
  // layers: [layer]
  // TODO: add elevation
});

const berlinCoords = {
  longitude: 13.404954,
  latitude: 52.520008
};

const view = new SceneView({
  container: document.querySelector("#viewDiv") as HTMLDivElement,
  center: [berlinCoords.longitude, berlinCoords.latitude],
  // zoom: 4,
  scale: 2500,
  map: map,

  /* camera: {
    tilt: 70,
    // fov: 150,
    position: {
      z: 100,
      longitude: berlinCoords.longitude,
      latitude: berlinCoords.latitude
    }
  },*/

  environment: {
    atmosphereEnabled: false,
    starsEnabled: false,
  }
});

/**************************************************
 * Step 2 - Add a trees layer with a web style symbol *
 **************************************************/

const treesRenderer = new SimpleRenderer({
  symbol: new WebStyleSymbol({
    name: "Populus",
    styleName: "EsriRealisticTreesStyle",
  }),
});

const treesLayer = new FeatureLayer({
  title: "Berlin trees",
  // TODO: make the layer more performant by adding minScale,
  url: treesUrl,
  outFields: ["*"],
  elevationInfo: {
    mode: "on-the-ground",
  },
  renderer: treesRenderer,
});

map.add(treesLayer);

/**************************************************
 * Step 3 - Change the streets renderer to show a 3D line *
 **************************************************/
const FEMALE_COLOR = "red";
const MALE_COLOR = "blue";

const femaleStreetSymbol = {
  value: "F",
  symbol: new LineSymbol3D({
    symbolLayers: [
      new PathSymbol3DLayer({
        profile: "quad",
        material: {
          color: FEMALE_COLOR,
        },
        width: 10,
        height: 3,
      }),
    ],
  }),
};

const maleStreetSymbol = {
  value: "M",
  symbol: new LineSymbol3D({
    symbolLayers: [
      new PathSymbol3DLayer({
        profile: "quad",
        material: {
          color: MALE_COLOR,
        },
        width: 10,
        height: 3,
      }),
    ],
  }),
};

const streetsLayer = new FeatureLayer({
  title: "Berlin streets",
  url: streetsUrl,
  outFields: ["*"],
  elevationInfo: {
    mode: "on-the-ground",
  },
  renderer: new UniqueValueRenderer({
    field: "gender",
    uniqueValueInfos: [femaleStreetSymbol, maleStreetSymbol],
  }),
});

map.add(streetsLayer);

/**************************************************
 * Step 4 - Add districts and 3D labels *
 **************************************************/

const districtsLayer = new FeatureLayer({
  title: "Berlin district boundaries",
  url: districtsUrl,
  outFields: ["*"],
  elevationInfo: {
    mode: "on-the-ground",
  },
  renderer: new SimpleRenderer({
    symbol: new PolygonSymbol3D({
      symbolLayers: [
        new FillSymbol3DLayer({
          outline: {
            color: "white",
            size: "2px",
            pattern: new LineStylePattern3D({
              style: "dash", 
            }),
            patternCap: "round",
          },
        }),
      ],
    }),
  }),
});

const districtsLabelLayer = new FeatureLayer({
  title: "Berlin district names",
  url: districtsUrl,
  outFields: ["*"],
  elevationInfo: {
    mode: "relative-to-scene",
  },
  labelingInfo: [
    {
      labelExpression: "[nam]",
      symbol: new LabelSymbol3D({
        symbolLayers: [
          new TextSymbol3DLayer({
            material: {
              color: "white",
            },
            halo: {
              size: 1,
              color: [50, 50, 50],
            },
            size: 10,
          }),
        ],
      }),
    },
  ],
  renderer: new SimpleRenderer({
    symbol: new PointSymbol3D({
      symbolLayers: [
        new ObjectSymbol3DLayer({
          width: 1,
          height: 1,
          depth: 1,
          resource: { primitive: "sphere" },
          material: { color: "white" },
        }),
      ],
      verticalOffset: {
        screenLength: 100,
        maxWorldLength: 200,
        minWorldLength: 100,
      },
      callout: new LineCallout3D({
        size: 1.5,
        color: [150, 150, 150],
        border: {
          color: [50, 50, 50],
        },
      }),
    }),
  }),
});

map.add(districtsLayer);
map.add(districtsLabelLayer);

/**************************************************
 * Step 5 - Add 3D buildings with edges rendering *
 **************************************************/

const buildingSymbol = new MeshSymbol3D({
  symbolLayers: [
    new FillSymbol3DLayer({
      material: {
        color: [40, 40, 40, 1],
        colorMixMode: "tint",
      },
      edges: new SolidEdges3D({
        size: 0.5,
        color: [255, 255, 255, 0.5],
      }),
    }),
  ],
});

const buildingsLayer = new SceneLayer({
  title: "Berlin 3D buildings",
  url: buildingsUrl,
  outFields: ["*"],
  renderer: new SimpleRenderer({
    symbol: buildingSymbol
  }),
  legendEnabled: false,
});

map.add(buildingsLayer);

/**************************************************
 * Step 6 - Add a popup with the name & description of the street *
 **************************************************/

const arcadeExpressionInfos = [
  {
    name: "title",
    title: "Name of the person the street is named after.",
    expression: "fromJSON($feature.details).labels.en.value",
  },
  {
    name: "description",
    title: "Description of the person the street is named after.",
    expression: "fromJSON($feature.details).descriptions.en.value",
  },
  {
    name: "link",
    title: "Link to wikipedia article.",
    expression: "fromJSON($feature.details).sitelinks.enwiki.url",
  },
];

streetsLayer.popupTemplate = new PopupTemplate({
  content: `<h1>{expression/title}</h1>
    <p>{expression/description}</p>
    <p>Link: <a href="{expression/link}" target="_blank">{expression/link}</a></p>`,
  expressionInfos: arcadeExpressionInfos.map(infos => new ExpressionInfo(infos))
});

/**************************************************
 * Step 7 - Find a widget in the docs to add to your app *
 **************************************************/

const searchWidget = new Search({
  view: view
});

view.ui.add(searchWidget, "top-right");

const homeWidget = new Home({
  view: view
});

view.ui.add(homeWidget, "top-right");

const layerList = new LayerList({
  view: view,
  listItemCreatedFunction: (event) => {
    const item = event.item;
    if (item.layer.type != "group") {
      item.panel = { content: "legend", open: true };
    }
  },
});

view.ui.add(layerList, "top-right");

/**************************************************
 * Step 8 - Add a chart that shows the distribution of the streets by gender *
 **************************************************/
Chart.register(...registerables);

let femaleStreetsCounts = 0;
let maleStreetsCount = 0;

const chartCanvas = document.getElementById(
  "chart-canvas"
) as HTMLCanvasElement;

const chart = new Chart(chartCanvas, {
  type: "doughnut",
  data: {
    labels: ["Female", "Male"],
    datasets: [
      {
        label: "Zurich streets by gender",
        data: [femaleStreetsCounts, maleStreetsCount],
        backgroundColor: [FEMALE_COLOR, MALE_COLOR],
        borderColor: [FEMALE_COLOR, MALE_COLOR],
        hoverOffset: 4,
      },
    ],
  },
});

// set default chart font color to white
Chart.defaults.color = "#fff";

view.whenLayerView(streetsLayer).then((layerView) => {
  when(
    // Update the chart whenever the user is not interacting with the scene
    () => !layerView.updating,
    async () => {
      const results = await layerView.queryFeatures({
        geometry: view.extent,
        returnGeometry: true
      });

      const graphics = results.features;
      const getGenderCount = (gender: 'F' | 'M') => graphics.filter(streets => streets.attributes.gender === gender).length;
      femaleStreetsCounts = getGenderCount('F');
      maleStreetsCount = getGenderCount('M');
      chart.data.datasets[0].data = [femaleStreetsCounts, maleStreetsCount];
      chart.update();
    }
  );
});
