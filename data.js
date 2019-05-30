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
        "yaw": -1.7467720418532,
        "pitch": 0.3398456251788229,
        "fov": 1.3391310272729973
      },
      "linkHotspots": [
        {
          "yaw": -1.8247074465369408,
          "pitch": 0.7469709593979008,
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
        "yaw": -1.608493046869377,
        "pitch": 0.4864273080860819,
        "fov": 1.3391310272729973
      },
      "linkHotspots": [
        {
          "yaw": -1.5641167534021587,
          "pitch": 0.5413633686636601,
          "rotation": 6.283185307179586,
          "target": "0-entrada"
        },
        {
          "yaw": -1.3125726653149776,
          "pitch": 0.9907042023622878,
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
        "yaw": -1.8269718758931788,
        "pitch": 0.3838646927193867,
        "fov": 1.3391310272729973
      },
      "linkHotspots": [
        {
          "yaw": -0.9820363640383967,
          "pitch": 0.7677089061982016,
          "rotation": 2.356194490192345,
          "target": "3-corredor"
        },
        {
          "yaw": -2.4674016255953326,
          "pitch": 0.8542100439047946,
          "rotation": 3.9269908169872414,
          "target": "1-sala-de-estar"
        },
        {
          "yaw": -1.143080862409903,
          "pitch": 0.45711136014436526,
          "rotation": 0,
          "target": "4-cozinha"
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
        "yaw": -1.671404861898754,
        "pitch": 0.4102449200229774,
        "fov": 1.3391310272729973
      },
      "linkHotspots": [
        {
          "yaw": -1.6819009222072374,
          "pitch": 0.9825931245513146,
          "rotation": 3.141592653589793,
          "target": "2-sala-de-jantar"
        },
        {
          "yaw": -1.879265671617551,
          "pitch": 0.39552025979234884,
          "rotation": 4.71238898038469,
          "target": "6-quarto-1-vista-1"
        },
        {
          "yaw": -1.2764867958424908,
          "pitch": 0.3295657200854851,
          "rotation": 7.853981633974483,
          "target": "8-banheiro"
        },
        {
          "yaw": -1.5581946984017065,
          "pitch": 0.19087087404919423,
          "rotation": 0,
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
        "yaw": -1.5945991833785378,
        "pitch": 0.35152089022568767,
        "fov": 1.3391310272729973
      },
      "linkHotspots": [
        {
          "yaw": -1.5008883109742541,
          "pitch": 0.9553399366344131,
          "rotation": 3.9269908169872414,
          "target": "2-sala-de-jantar"
        },
        {
          "yaw": -1.6895856575532715,
          "pitch": 0.6388960220205728,
          "rotation": 0,
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
        "yaw": -1.4670283498417156,
        "pitch": 0.5508897880247687,
        "fov": 1.3391310272729973
      },
      "linkHotspots": [
        {
          "yaw": -2.0194775768693134,
          "pitch": 1.070683198814514,
          "rotation": 3.9269908169872414,
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
        "yaw": -1.3678002708482246,
        "pitch": 0.3633528389099556,
        "fov": 1.3391310272729973
      },
      "linkHotspots": [
        {
          "yaw": -1.876351925511191,
          "pitch": 0.9144284980684461,
          "rotation": 9.42477796076938,
          "target": "3-corredor"
        },
        {
          "yaw": -1.0818575415313134,
          "pitch": 0.5201555613602462,
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
        "yaw": -1.7218220422701265,
        "pitch": 0.20511853809432878,
        "fov": 1.3391310272729973
      },
      "linkHotspots": [
        {
          "yaw": -1.6588973195132901,
          "pitch": 0.1529052151556911,
          "rotation": 0,
          "target": "3-corredor"
        },
        {
          "yaw": -2.123454203838543,
          "pitch": 0.5496016800626773,
          "rotation": 0,
          "target": "6-quarto-1-vista-1"
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
        "yaw": -1.4242656188752463,
        "pitch": 0.12314901395392397,
        "fov": 1.3391310272729973
      },
      "linkHotspots": [
        {
          "yaw": -2.4308688809149057,
          "pitch": 0.34856028663865146,
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
        "yaw": -1.2440674854418354,
        "pitch": 0.20511457095642172,
        "fov": 1.3391310272729973
      },
      "linkHotspots": [
        {
          "yaw": -2.228627034099574,
          "pitch": 0.3800331939831416,
          "rotation": 5.497787143782138,
          "target": "3-corredor"
        },
        {
          "yaw": -1.3537745007437465,
          "pitch": 0.5204368787607763,
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
        "yaw": -1.4061007119248963,
        "pitch": 0.1670250953053838,
        "fov": 1.3391310272729973
      },
      "linkHotspots": [
        {
          "yaw": -1.270255343935407,
          "pitch": 0.1517800636211799,
          "rotation": 1.5707963267948966,
          "target": "3-corredor"
        },
        {
          "yaw": -1.592456549331688,
          "pitch": 0.6351470909431853,
          "rotation": 0,
          "target": "9-quarto-2-vista-1"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Projeto Bruna",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
