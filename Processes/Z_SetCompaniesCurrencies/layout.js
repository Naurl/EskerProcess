{
  "*": {
    "GDRData": {
      "type": "GDRData",
      "options": {
        "version": 0
      },
      "stamp": 1,
      "data": []
    },
    "OCRParams": {
      "type": "OCRParams",
      "options": {
        "version": 0
      },
      "stamp": 2,
      "data": []
    },
    "Screen": {
      "type": "FlexibleFormLayout",
      "options": {
        "splitterType": "complex",
        "version": 0,
        "maxwidth": "",
        "backColor": "text-backgroundcolor-default",
        "style": null
      },
      "*": {
        "form-header": {
          "type": "FlexibleFormHeader",
          "options": {
            "version": 0,
            "maxwidth": ""
          },
          "stamp": 4,
          "data": []
        },
        "form-center": {
          "type": "FlexibleFormCenter",
          "options": {
            "version": 0,
            "maxwidth": ""
          },
          "*": {
            "form-content": {
              "type": "FlexibleFormContent",
              "options": {
                "version": 0
              },
              "*": {
                "form-content-top": {
                  "type": "FlexibleFormSplitter",
                  "options": {
                    "autosize": true,
                    "version": 1,
                    "box": {
                      "top": "0%",
                      "left": "0%",
                      "height": "25%"
                    },
                    "hidden": true
                  },
                  "*": {
                    "form-content-top-1": {
                      "type": "FlexibleFormLine",
                      "options": {
                        "version": 0
                      },
                      "*": {
                        "DocumentsPanel": {
                          "type": "PanelDocument",
                          "options": {
                            "version": 0,
                            "border": {},
                            "labelLength": 0,
                            "iconURL": "",
                            "TitleFontSize": "S",
                            "hideActionButtons": false,
                            "hideTitleBar": false,
                            "hideTitle": false,
                            "label": "_Documents",
                            "hidden": true
                          },
                          "*": {
                            "Document": {
                              "data": [
                                "documentscontroldata"
                              ],
                              "type": "Documents",
                              "options": {
                                "version": 0
                              },
                              "stamp": 10
                            }
                          },
                          "stamp": 9,
                          "data": []
                        }
                      },
                      "stamp": 8,
                      "data": []
                    }
                  },
                  "stamp": 7,
                  "data": []
                },
                "form-content-bottom": {
                  "type": "FlexibleFormSplitter",
                  "options": {
                    "version": 1,
                    "box": {
                      "top": "0%",
                      "left": "0%",
                      "width": null,
                      "height": "100%"
                    },
                    "hidden": false,
                    "hideSeparator": true
                  },
                  "*": {
                    "form-content-left": {
                      "type": "FlexibleFormSplitter",
                      "options": {
                        "version": 1,
                        "box": {
                          "top": "0%",
                          "left": "0%",
                          "width": "100%",
                          "height": null
                        },
                        "hidden": false
                      },
                      "*": {
                        "form-content-left-1": {
                          "type": "FlexibleFormLine",
                          "options": {
                            "version": 0
                          },
                          "*": {
                            "DataPanel": {
                              "type": "PanelData",
                              "options": {
                                "border": {},
                                "version": 0,
                                "labelLength": 0,
                                "iconURL": "",
                                "TitleFontSize": "S",
                                "hideActionButtons": false,
                                "hideTitleBar": false,
                                "hideTitle": false,
                                "backgroundcolor": "default",
                                "labelsAlignment": "right",
                                "label": "_Document data",
                                "hidden": true
                              },
                              "*": {
                                "FieldsManager": {
                                  "type": "FieldsManager",
                                  "options": {
                                    "controlsAssociation": {},
                                    "version": 0
                                  },
                                  "*": {
                                    "Grid": {
                                      "type": "GridLayout",
                                      "options": {
                                        "lines": 0,
                                        "columns": 2,
                                        "version": 0,
                                        "ctrlsPos": {},
                                        "colspans": []
                                      },
                                      "data": [
                                        "fields"
                                      ],
                                      "*": {},
                                      "stamp": 16
                                    }
                                  },
                                  "stamp": 15,
                                  "data": []
                                }
                              },
                              "stamp": 14,
                              "data": []
                            }
                          },
                          "stamp": 13,
                          "data": []
                        },
                        "form-content-left-2": {
                          "type": "FlexibleFormLine",
                          "options": {
                            "version": 0
                          },
                          "*": {
                            "SystemData": {
                              "type": "PanelSystemData",
                              "options": {
                                "multicolumn": false,
                                "version": 0,
                                "border": {
                                  "collapsed": true
                                },
                                "labelLength": 0,
                                "iconURL": "",
                                "TitleFontSize": "S",
                                "hideActionButtons": false,
                                "hideTitleBar": false,
                                "hideTitle": false,
                                "label": "_System data"
                              },
                              "stamp": 18,
                              "data": []
                            }
                          },
                          "stamp": 17,
                          "data": []
                        },
                        "form-content-left-3": {
                          "type": "FlexibleFormLine",
                          "options": {
                            "version": 0
                          },
                          "*": {
                            "NextProcess": {
                              "type": "PanelNextProcess",
                              "options": {
                                "hidden": true,
                                "version": 0,
                                "border": {},
                                "labelLength": 0,
                                "iconURL": "",
                                "TitleFontSize": "S",
                                "hideActionButtons": false,
                                "hideTitleBar": false,
                                "hideTitle": false,
                                "label": "_Next Process"
                              },
                              "stamp": 20,
                              "data": []
                            }
                          },
                          "stamp": 19,
                          "data": []
                        },
                        "form-content-left-4": {
                          "type": "FlexibleFormLine",
                          "data": [],
                          "options": {
                            "version": 0
                          },
                          "stamp": 31,
                          "*": {
                            "Z_DatosMonedas": {
                              "type": "PanelData",
                              "data": [],
                              "options": {
                                "border": {},
                                "labelLength": 0,
                                "iconURL": "",
                                "TitleFontSize": "S",
                                "hideActionButtons": false,
                                "hideTitleBar": false,
                                "hideTitle": false,
                                "backgroundcolor": "default",
                                "labelsAlignment": "right",
                                "label": "Datos de Monedas",
                                "leftImageURL": "",
                                "removeMargins": false,
                                "elementsAlignment": "left",
                                "version": 0
                              },
                              "stamp": 32,
                              "*": {
                                "FieldsManager": {
                                  "type": "FieldsManager",
                                  "data": [],
                                  "options": {
                                    "controlsAssociation": {
                                      "Z_Monedas__": "LabelZ_Monedas__",
                                      "LabelZ_Monedas__": "Z_Monedas__"
                                    },
                                    "version": 0
                                  },
                                  "stamp": 33,
                                  "*": {
                                    "Grid": {
                                      "type": "GridLayout",
                                      "data": [
                                        "fields"
                                      ],
                                      "options": {
                                        "ctrlsPos": {
                                          "Z_Descripcion__": {
                                            "line": 2,
                                            "column": 1
                                          },
                                          "Z_Monedas__": {
                                            "line": 4,
                                            "column": 2
                                          },
                                          "LabelZ_Monedas__": {
                                            "line": 4,
                                            "column": 1
                                          },
                                          "Z_Titulo_Descripcion__": {
                                            "line": 1,
                                            "column": 1
                                          },
                                          "Z_Titulo_Monedas__": {
                                            "line": 3,
                                            "column": 1
                                          }
                                        },
                                        "lines": 4,
                                        "columns": 2,
                                        "colspans": [
                                          [
                                            {
                                              "index": 0,
                                              "length": 2
                                            }
                                          ],
                                          [
                                            {
                                              "index": 0,
                                              "length": 2
                                            }
                                          ],
                                          [
                                            {
                                              "index": 0,
                                              "length": 2
                                            }
                                          ],
                                          []
                                        ],
                                        "version": 0
                                      },
                                      "stamp": 34,
                                      "*": {
                                        "Z_Titulo_Descripcion__": {
                                          "type": "Title",
                                          "data": false,
                                          "options": {
                                            "marge": 0,
                                            "textSize": "S",
                                            "textAlignment": "left",
                                            "textStyle": "default",
                                            "textColor": "default",
                                            "backgroundcolor": "default",
                                            "image_url": "",
                                            "label": "Descripción",
                                            "version": 0,
                                            "iconClass": ""
                                          },
                                          "stamp": 38
                                        },
                                        "Z_Descripcion__": {
                                          "type": "Text",
                                          "data": false,
                                          "options": {
                                            "marge": 0,
                                            "textSize": "S",
                                            "textAlignment": "left",
                                            "textStyle": "default",
                                            "textColor": "default",
                                            "backgroundcolor": "default",
                                            "image_url": "",
                                            "label": " - Especificar los códigos de moneda por default para todos los códigos de empresa con el siguiente formato:\nCurrencyFrom__,RatioFrom__,RatioTo__,Rate__\nCurrencyFrom__,RatioFrom__,RatioTo__,Rate__\n- Cada registro de moneda debe estar separado por un salto de linea.\n- Los separadores decimales deben estar especificados por puntos(\".\").",
                                            "version": 0,
                                            "iconClass": ""
                                          },
                                          "stamp": 35
                                        },
                                        "Z_Titulo_Monedas__": {
                                          "type": "Title",
                                          "data": false,
                                          "options": {
                                            "marge": 0,
                                            "textSize": "S",
                                            "textAlignment": "left",
                                            "textStyle": "default",
                                            "textColor": "default",
                                            "backgroundcolor": "default",
                                            "image_url": "",
                                            "label": "Monedas por default",
                                            "version": 0,
                                            "iconClass": ""
                                          },
                                          "stamp": 39
                                        },
                                        "LabelZ_Monedas__": {
                                          "type": "Label",
                                          "data": [
                                            "Z_Monedas__"
                                          ],
                                          "options": {
                                            "label": "Monedas por default",
                                            "version": 0
                                          },
                                          "stamp": 36
                                        },
                                        "Z_Monedas__": {
                                          "type": "LongText",
                                          "data": [
                                            "Z_Monedas__"
                                          ],
                                          "options": {
                                            "textSize": "S",
                                            "textAlignment": "left",
                                            "textStyle": "default",
                                            "textColor": "default",
                                            "version": 1,
                                            "minNbLines": 10,
                                            "label": "Monedas por default",
                                            "activable": true,
                                            "width": 230,
                                            "helpText": "",
                                            "helpURL": "",
                                            "helpFormat": "HTML Format",
                                            "browsable": false,
                                            "numberOfLines": 10
                                          },
                                          "stamp": 37
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      },
                      "stamp": 12,
                      "data": []
                    },
                    "form-content-right": {
                      "type": "FlexibleFormSplitter",
                      "options": {
                        "version": 1,
                        "box": {
                          "top": 0,
                          "left": 45,
                          "width": 55,
                          "height": 100
                        },
                        "hidden": true,
                        "hideSeparator": true
                      },
                      "*": {
                        "form-content-right-1": {
                          "type": "FlexibleFormLine",
                          "options": {
                            "version": 0
                          },
                          "*": {
                            "PreviewPanel": {
                              "type": "PanelPreview",
                              "options": {
                                "border": {},
                                "version": 0,
                                "labelLength": 0,
                                "iconURL": "",
                                "TitleFontSize": "S",
                                "hideActionButtons": false,
                                "hideTitleBar": false,
                                "hideTitle": false,
                                "label": "_Document Preview"
                              },
                              "*": {
                                "Preview": {
                                  "data": [
                                    "previewdata"
                                  ],
                                  "type": "Preview",
                                  "options": {
                                    "version": 0
                                  },
                                  "stamp": 24
                                }
                              },
                              "stamp": 23,
                              "data": []
                            }
                          },
                          "stamp": 22,
                          "data": []
                        }
                      },
                      "stamp": 21,
                      "data": []
                    }
                  },
                  "stamp": 11,
                  "data": []
                }
              },
              "stamp": 6,
              "data": []
            }
          },
          "stamp": 5,
          "data": []
        },
        "form-footer": {
          "type": "FlexibleFormFooter",
          "options": {
            "splitterType": "simple-h",
            "version": 0,
            "maxwidth": ""
          },
          "*": {
            "Save": {
              "type": "SubmitButton",
              "options": {
                "label": "_Save",
                "action": "save",
                "submit": true,
                "version": 0
              },
              "stamp": 26,
              "data": []
            },
            "Approve": {
              "type": "SubmitButton",
              "options": {
                "label": "_Approve",
                "action": "approve",
                "submit": true,
                "version": 0
              },
              "stamp": 27,
              "data": []
            },
            "Reject": {
              "type": "SubmitButton",
              "options": {
                "label": "_Reject",
                "action": "reject",
                "submit": true,
                "version": 0
              },
              "stamp": 28,
              "data": []
            },
            "Reprocess": {
              "type": "SubmitButton",
              "options": {
                "label": "_Reprocess",
                "action": "reprocess",
                "submit": true,
                "version": 0
              },
              "stamp": 29,
              "data": []
            },
            "Close": {
              "type": "SubmitButton",
              "options": {
                "label": "_Close",
                "action": "cancel",
                "submit": true,
                "version": 0
              },
              "stamp": 30,
              "data": []
            }
          },
          "stamp": 25,
          "data": []
        }
      },
      "stamp": 3,
      "data": []
    }
  },
  "stamps": 39,
  "data": []
}