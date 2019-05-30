var APP_DATA = {
  "scenes": [
    {
      "id": "0-entrada",
      "name": "Entrada",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": -1.669232896607376,
        "pitch": 0.3190085597864467,
        "fov": 1.3391310272729973
      },
      "linkHotspots": [
        {
          "yaw": -1.878932584261623,
          "pitch": 0.5307598084347198,
          "rotation": 0,
          "target": "1-sala-de-estar"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-sala-de-estar",
      "name": "Sala de Estar",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": -1.5839412529190966,
        "pitch": 0.5098665792085235,
        "fov": 1.3391310272729973
      },
      "linkHotspots": [
        {
          "yaw": -1.5839412529190966,
          "pitch": 0.5098665792085235,
          "rotation": 0,
          "target": "0-entrada"
        },
        {
          "yaw": -1.3134128387087998,
          "pitch": 1.0231807434101459,
          "rotation": 3.141592653589793,
          "target": "2-sala-de-jantar"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-sala-de-jantar",
      "name": "Sala de Jantar",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": -1.7647003929307061,
        "pitch": 0.396744944171882,
        "fov": 1.3391310272729973
      },
      "linkHotspots": [
        {
          "yaw": -2.4674988151442907,
          "pitch": 0.8432831330560155,
          "rotation": 3.9269908169872414,
          "target": "1-sala-de-estar"
        },
        {
          "yaw": -1.182230304473375,
          "pitch": 0.4252049471436159,
          "rotation": 0,
          "target": "4-cozinha"
        },
        {
          "yaw": -0.9245994606317467,
          "pitch": 0.8127613644822027,
          "rotation": 14.137166941154074,
          "target": "3-corredor"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-corredor",
      "name": "Corredor",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": -1.5095962660246656,
        "pitch": 0.4014235245334312,
        "fov": 1.3391310272729973
      },
      "linkHotspots": [
        {
          "yaw": -1.6315702256358229,
          "pitch": 0.9529558690606414,
          "rotation": 3.141592653589793,
          "target": "2-sala-de-jantar"
        },
        {
          "yaw": -1.5577778335001966,
          "pitch": 0.1863427836792546,
          "rotation": 0,
          "target": "8-banheiro"
        },
        {
          "yaw": -1.908447493934867,
          "pitch": 0.3924825659740634,
          "rotation": 4.71238898038469,
          "target": "6-quarto-1-vista-1"
        },
        {
          "yaw": -1.256214679797747,
          "pitch": 0.4169822137974535,
          "rotation": 1.5707963267948966,
          "target": "9-quarto-2-vista-1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-cozinha",
      "name": "Cozinha",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": -1.445863095621089,
        "pitch": 0.5512304568111421,
        "fov": 1.3391310272729973
      },
      "linkHotspots": [
        {
          "yaw": -1.5147973048736016,
          "pitch": 1.1396490026581176,
          "rotation": 3.141592653589793,
          "target": "2-sala-de-jantar"
        },
        {
          "yaw": -1.6283555687322284,
          "pitch": 0.6637433474853189,
          "rotation": 5.497787143782138,
          "target": "5-lavanderia"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-lavanderia",
      "name": "Lavanderia",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": -1.4149963145545605,
        "pitch": 0.572663164718124,
        "fov": 1.3391310272729973
      },
      "linkHotspots": [
        {
          "yaw": -1.3407992576125185,
          "pitch": 0.9800282381465255,
          "rotation": 9.42477796076938,
          "target": "4-cozinha"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "6-quarto-1-vista-1",
      "name": "Quarto 1 Vista 1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": -1.6241699814697625,
        "pitch": 0.30093519650133516,
        "fov": 1.3391310272729973
      },
      "linkHotspots": [
        {
          "yaw": -1.908180369654188,
          "pitch": 0.8916013162236549,
          "rotation": 3.141592653589793,
          "target": "3-corredor"
        },
        {
          "yaw": -1.905206572348046,
          "pitch": 0.5437236881126637,
          "rotation": 0,
          "target": "7-quarto-1-vista-2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "7-quarto-1-vista-2",
      "name": "Quarto 1 Vista 2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": -1.7725846377880288,
        "pitch": 0.2902506542860621,
        "fov": 1.3391310272729973
      },
      "linkHotspots": [
        {
          "yaw": -2.217617203990173,
          "pitch": 0.5819458240346727,
          "rotation": 0,
          "target": "6-quarto-1-vista-1"
        },
        {
          "yaw": -1.6405114670938303,
          "pitch": 0.1749239852611968,
          "rotation": 0,
          "target": "3-corredor"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "8-banheiro",
      "name": "Banheiro",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": -1.5973251968676472,
        "pitch": 0.14727277244361048,
        "fov": 1.3391310272729973
      },
      "linkHotspots": [
        {
          "yaw": -2.5494789610063737,
          "pitch": 0.19745802287247116,
          "rotation": 4.71238898038469,
          "target": "3-corredor"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "9-quarto-2-vista-1",
      "name": "Quarto 2 Vista 1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": -1.3486360470244954,
        "pitch": 0.19911399558327147,
        "fov": 1.3391310272729973
      },
      "linkHotspots": [
        {
          "yaw": -2.200044346858931,
          "pitch": 0.22674932696634365,
          "rotation": 4.71238898038469,
          "target": "3-corredor"
        },
        {
          "yaw": -1.3486356892559215,
          "pitch": 0.5170406416270961,
          "rotation": 0,
          "target": "10-quarto-2-vista-2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "10-quarto-2-vista-2",
      "name": "Quarto 2 Vista 2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": -1.3890196261197687,
        "pitch": 0.1975826014857045,
        "fov": 1.3391310272729973
      },
      "linkHotspots": [
        {
          "yaw": -1.6869964094188727,
          "pitch": 0.5562783043545938,
          "rotation": 0,
          "target": "9-quarto-2-vista-1"
        },
        {
          "yaw": -1.239990822147373,
          "pitch": 0.13724203831959514,
          "rotation": 1.5707963267948966,
          "target": "3-corredor"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
