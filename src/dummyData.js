export const dalekovodi = [
  {
    id: 1,
    latitude: 45.878827,
    longitude: 15.98904,
    name: "DALEKOVOD-1",
    voltage: "220V",
  },
  {
    id: 2,
    latitude: 45.874429,
    longitude: 15.978764,
    name: "DALEKOVOD-2",
    voltage: "240V",
  },
  {
    id: 3,
    latitude: 45.876111,
    longitude: 16.007482,
    name: "DALEKOVOD-3",
    voltage: "240V",
  },
];

export const stupovi = [
  {
    id: 4,
    latitude: 45.878827,
    longitude: 15.98904,
    name: "STUP-1",
    type: "JELA",
    height: 30,
    dalekovodId: 1,
  },
  {
    id: 5,
    latitude: 45.874429,
    longitude: 15.978764,
    name: "STUP-2",
    type: "Y-STUP",
    height: 35,
    dalekovodId: 2,
  },
  {
    id: 6,
    latitude: 45.876111,
    longitude: 16.007482,
    name: "STUP-3",
    type: "DUNAV",
    height: 28,
    dalekovodId: 3,
  },
];

export const izolatori = [
  {
    id: 7,
    latitude: 45.87889,
    longitude: 15.9890535,
    name: "IZOLATOR-11",
    dalekovodId: 1,
  },
  {
    id: 8,
    latitude: 45.87886,
    longitude: 15.9890535,
    name: "IZOLATOR-12",
    dalekovodId: 1,
  },
  {
    id: 9,
    latitude: 45.878797,
    longitude: 15.9890535,
    name: "IZOLATOR-13",
    dalekovodId: 1,
  },
  {
    id: 10,
    latitude: 45.87449,
    longitude: 15.978777,
    name: "IZOLATOR-21",
    dalekovodId: 2,
  },
  {
    id: 11,
    latitude: 45.874465,
    longitude: 15.978777,
    name: "IZOLATOR-22",
    dalekovodId: 2,
  },
  {
    id: 12,
    latitude: 45.874395,
    longitude: 15.978777,
    name: "IZOLATOR-23",
    dalekovodId: 2,
  },
  {
    id: 13,
    latitude: 45.87437,
    longitude: 15.978777,
    name: "IZOLATOR-24",
    dalekovodId: 2,
  },
  {
    id: 14,
    latitude: 45.87621,
    longitude: 16.007495,
    name: "IZOLATOR-31",
    dalekovodId: 3,
  },
  {
    id: 15,
    latitude: 45.87618,
    longitude: 16.007495,
    name: "IZOLATOR-32",
    dalekovodId: 3,
  },
  {
    id: 16,
    latitude: 45.87615,
    longitude: 16.007495,
    name: "IZOLATOR-33",
    dalekovodId: 3,
  },
  {
    id: 17,
    latitude: 45.876072,
    longitude: 16.007495,
    name: "IZOLATOR-34",
    dalekovodId: 3,
  },
  {
    id: 18,
    latitude: 45.876045,
    longitude: 16.007495,
    name: "IZOLATOR-35",
    dalekovodId: 3,
  },
  {
    id: 19,
    latitude: 45.876017,
    longitude: 16.007495,
    name: "IZOLATOR-36",
    dalekovodId: 3,
  },
];

export const vodici = [
  {
    id: 20,
    name: "VODIC-21",
    coordinates: [
      [15.98904, 45.878827],
      [15.978764, 45.874429],
    ],
    length: 200,
  },
  {
    id: 21,
    name: "VODIC-13",
    coordinates: [
      [15.98904, 45.878827],
      [16.007482, 45.876111],
    ],
    length: 350,
  },
];

export const vodiciDetailed = [
  {
    id: 22,
    name: "VODIC-2111",
    coordinates: [
      [15.978777, 45.87449],
      [15.9890535, 45.87889],
    ],
    length: 250,
  },
  {
    id: 23,
    name: "VODIC-2212",
    coordinates: [
      [15.978777, 45.874465],
      [15.9890535, 45.87886],
    ],
    length: 250,
  },
  {
    id: 24,
    name: "VODIC-2313",
    coordinates: [
      [15.978777, 45.874395],
      [15.9890535, 45.878797],
    ],
    length: 250,
  },
  {
    id: 25,
    name: "VODIC-1131",
    coordinates: [
      [15.9890535, 45.87889],
      [16.007495, 45.87621],
    ],
    length: 220,
  },
  {
    id: 26,
    name: "VODIC-1232",
    coordinates: [
      [15.9890535, 45.87886],
      [16.007495, 45.87618],
    ],
    length: 300,
  },
  {
    id: 27,
    name: "VODIC-1334",
    coordinates: [
      [15.9890535, 45.878797],
      [16.007495, 45.876072],
    ],
    length: 180,
  },
];

export const zastitnaUzad = [
  {
    id: 28,
    name: "ZASTITNO UZE-21",
    coordinates: [
      [15.978764, 45.874429],
      [15.98904, 45.878827],
    ],
    length: 200,
  },
  {
    id: 29,
    name: "ZASTITNO UZE-13",
    coordinates: [
      [15.98904, 45.878827],
      [16.007482, 45.876111],
    ],
    length: 350,
  },
];
