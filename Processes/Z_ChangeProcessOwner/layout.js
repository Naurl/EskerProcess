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
                    "hidden": false
                  },
                  "*": {
                    "form-content-top-2": {
                      "type": "FlexibleFormLine",
                      "data": [],
                      "options": {
                        "version": 0
                      },
                      "stamp": 43,
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
                            "label": "_Documents"
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
                      }
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
                      "top": 25,
                      "left": 0,
                      "width": 100,
                      "height": 75
                    },
                    "hidden": false
                  },
                  "*": {
                    "form-content-left": {
                      "type": "FlexibleFormSplitter",
                      "options": {
                        "version": 1,
                        "box": {
                          "top": "0%",
                          "left": "0%",
                          "width": "79%",
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
                                "label": "_Document data"
                              },
                              "*": {
                                "FieldsManager": {
                                  "type": "FieldsManager",
                                  "options": {
                                    "controlsAssociation": {
                                      "Z_ProcessName__": "LabelZ_ProcessName__",
                                      "LabelZ_ProcessName__": "Z_ProcessName__",
                                      "Z_OldOwnerIdentifier__": "LabelZ_OldOwnerIdentifier__",
                                      "LabelZ_OldOwnerIdentifier__": "Z_OldOwnerIdentifier__",
                                      "Z_NewOwner__": "LabelZ_NewOwner__",
                                      "LabelZ_NewOwner__": "Z_NewOwner__",
                                      "Z_ProcessMessagesInformation__": "LabelZ_ProcessMessagesInformation__",
                                      "LabelZ_ProcessMessagesInformation__": "Z_ProcessMessagesInformation__",
                                      "Z_isPortalProcess__": "LabelZ_isPortalProcess__",
                                      "LabelZ_isPortalProcess__": "Z_isPortalProcess__",
                                      "Z_Environment__": "LabelZ_Environment__",
                                      "LabelZ_Environment__": "Z_Environment__",
                                      "Z_ChangeEnvironment__": "LabelZ_ChangeEnvironment__",
                                      "LabelZ_ChangeEnvironment__": "Z_ChangeEnvironment__",
                                      "Z_EnvironmentID__": "LabelZ_EnvironmentID__",
                                      "LabelZ_EnvironmentID__": "Z_EnvironmentID__",
                                      "Z_AccountID__": "LabelZ_AccountID__",
                                      "LabelZ_AccountID__": "Z_AccountID__"
                                    },
                                    "version": 0
                                  },
                                  "*": {
                                    "Grid": {
                                      "type": "GridLayout",
                                      "options": {
                                        "lines": 11,
                                        "columns": 2,
                                        "version": 0,
                                        "ctrlsPos": {
                                          "Z_ProcessName__": {
                                            "line": 3,
                                            "column": 2
                                          },
                                          "LabelZ_ProcessName__": {
                                            "line": 3,
                                            "column": 1
                                          },
                                          "Z_OldOwnerIdentifier__": {
                                            "line": 4,
                                            "column": 2
                                          },
                                          "LabelZ_OldOwnerIdentifier__": {
                                            "line": 4,
                                            "column": 1
                                          },
                                          "Z_NewOwner__": {
                                            "line": 5,
                                            "column": 2
                                          },
                                          "LabelZ_NewOwner__": {
                                            "line": 5,
                                            "column": 1
                                          },
                                          "Z_ProcessDescription__": {
                                            "line": 1,
                                            "column": 1
                                          },
                                          "Spacer_line__": {
                                            "line": 2,
                                            "column": 1
                                          },
                                          "Z_ProcessMessagesInformation__": {
                                            "line": 11,
                                            "column": 2
                                          },
                                          "LabelZ_ProcessMessagesInformation__": {
                                            "line": 11,
                                            "column": 1
                                          },
                                          "Z_isPortalProcess__": {
                                            "line": 6,
                                            "column": 2
                                          },
                                          "LabelZ_isPortalProcess__": {
                                            "line": 6,
                                            "column": 1
                                          },
                                          "Z_Environment__": {
                                            "line": 9,
                                            "column": 2
                                          },
                                          "LabelZ_Environment__": {
                                            "line": 9,
                                            "column": 1
                                          },
                                          "Z_ChangeEnvironment__": {
                                            "line": 7,
                                            "column": 2
                                          },
                                          "LabelZ_ChangeEnvironment__": {
                                            "line": 7,
                                            "column": 1
                                          },
                                          "Z_EnvironmentID__": {
                                            "line": 8,
                                            "column": 2
                                          },
                                          "LabelZ_EnvironmentID__": {
                                            "line": 8,
                                            "column": 1
                                          },
                                          "Z_AccountID__": {
                                            "line": 10,
                                            "column": 2
                                          },
                                          "LabelZ_AccountID__": {
                                            "line": 10,
                                            "column": 1
                                          }
                                        },
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
                                          [],
                                          [],
                                          [],
                                          [],
                                          [],
                                          [],
                                          [],
                                          [],
                                          []
                                        ]
                                      },
                                      "data": [
                                        "fields"
                                      ],
                                      "*": {
                                        "Z_ProcessDescription__": {
                                          "type": "Text",
                                          "data": false,
                                          "options": {
                                            "marge": 0,
                                            "textSize": "S",
                                            "textAlignment": "left",
                                            "textStyle": "default",
                                            "textColor": "default",
                                            "backgroundcolor": "default",
                                            "label": "Process Description\n\n-Important: Set the user language in \"English\" so that the name of the process arrives \ncorrectly in the csv before executing the scheduled report.\n\n-Columns of CSV received: \"Long identifier\",\"Owner\",\"Process\"\n\n- Description of the process: \n  Obtain the Long Identifiers of the process from the CSV file of \nthe report and change the respective owner of each one by the owner specified in the \"Z_NewOwner__\" field.\n  If it is desired to change an old owner only, it is specified in the field \"Z_OldOwnerIdentifier__\", \nand only the records that have this old owner will be modified.\n  If the field \"Z_OldOwnerIdentifier__\" is empty, all the records of the CSV will be modified.",
                                            "version": 0,
                                            "iconClass": ""
                                          },
                                          "stamp": 38
                                        },
                                        "Spacer_line__": {
                                          "type": "Spacer",
                                          "data": false,
                                          "options": {
                                            "height": "50",
                                            "width": "",
                                            "color": "default",
                                            "label": "Spacer line",
                                            "version": 0
                                          },
                                          "stamp": 39
                                        },
                                        "LabelZ_ProcessName__": {
                                          "type": "Label",
                                          "data": [
                                            "Z_ProcessName__"
                                          ],
                                          "options": {
                                            "label": "Process Name",
                                            "version": 0
                                          },
                                          "stamp": 31
                                        },
                                        "Z_ProcessName__": {
                                          "type": "ShortText",
                                          "data": [
                                            "Z_ProcessName__"
                                          ],
                                          "options": {
                                            "textSize": "S",
                                            "textAlignment": "left",
                                            "textStyle": "default",
                                            "textColor": "default",
                                            "label": "Process Name",
                                            "activable": true,
                                            "width": 230,
                                            "helpText": "",
                                            "helpURL": "",
                                            "helpFormat": "HTML Format",
                                            "browsable": false,
                                            "autocompletable": false,
                                            "version": 0,
                                            "readonly": false
                                          },
                                          "stamp": 32
                                        },
                                        "LabelZ_OldOwnerIdentifier__": {
                                          "type": "Label",
                                          "data": [
                                            "Z_OldOwnerIdentifier__"
                                          ],
                                          "options": {
                                            "label": "Old Owner",
                                            "version": 0
                                          },
                                          "stamp": 33
                                        },
                                        "Z_OldOwnerIdentifier__": {
                                          "type": "ShortText",
                                          "data": [
                                            "Z_OldOwnerIdentifier__"
                                          ],
                                          "options": {
                                            "textSize": "S",
                                            "textAlignment": "left",
                                            "textStyle": "default",
                                            "textColor": "default",
                                            "label": "Old Owner",
                                            "activable": true,
                                            "width": 230,
                                            "helpText": "",
                                            "helpURL": "",
                                            "helpFormat": "HTML Format",
                                            "browsable": false,
                                            "autocompletable": false,
                                            "version": 0
                                          },
                                          "stamp": 34
                                        },
                                        "LabelZ_NewOwner__": {
                                          "type": "Label",
                                          "data": [
                                            "Z_NewOwner__"
                                          ],
                                          "options": {
                                            "label": "New Owner Identifier",
                                            "version": 0
                                          },
                                          "stamp": 35
                                        },
                                        "Z_NewOwner__": {
                                          "type": "ShortText",
                                          "data": [
                                            "Z_NewOwner__"
                                          ],
                                          "options": {
                                            "textSize": "S",
                                            "textAlignment": "left",
                                            "textStyle": "default",
                                            "textColor": "default",
                                            "label": "New Owner Identifier",
                                            "activable": true,
                                            "width": 230,
                                            "helpText": "",
                                            "helpURL": "",
                                            "helpFormat": "HTML Format",
                                            "browsable": false,
                                            "autocompletable": false,
                                            "version": 0
                                          },
                                          "stamp": 36
                                        },
                                        "LabelZ_isPortalProcess__": {
                                          "type": "Label",
                                          "data": [
                                            "Z_isPortalProcess__"
                                          ],
                                          "options": {
                                            "label": "_is portal process",
                                            "version": 0
                                          },
                                          "stamp": 49
                                        },
                                        "Z_isPortalProcess__": {
                                          "type": "CheckBox",
                                          "data": [
                                            "Z_isPortalProcess__"
                                          ],
                                          "options": {
                                            "label": "_is portal process",
                                            "activable": true,
                                            "width": 230,
                                            "helpText": "",
                                            "helpURL": "",
                                            "helpFormat": "HTML Format",
                                            "version": 0
                                          },
                                          "stamp": 50
                                        },
                                        "LabelZ_ChangeEnvironment__": {
                                          "type": "Label",
                                          "data": [
                                            "Z_ChangeEnvironment__"
                                          ],
                                          "options": {
                                            "label": "_Change environment",
                                            "version": 0
                                          },
                                          "stamp": 57
                                        },
                                        "Z_ChangeEnvironment__": {
                                          "type": "CheckBox",
                                          "data": [
                                            "Z_ChangeEnvironment__"
                                          ],
                                          "options": {
                                            "label": "_Change environment",
                                            "activable": true,
                                            "width": 230,
                                            "helpText": "",
                                            "helpURL": "",
                                            "helpFormat": "HTML Format",
                                            "version": 0
                                          },
                                          "stamp": 58
                                        },
                                        "LabelZ_EnvironmentID__": {
                                          "type": "Label",
                                          "data": [
                                            "Z_EnvironmentID__"
                                          ],
                                          "options": {
                                            "label": "_Environment ID",
                                            "version": 0
                                          },
                                          "stamp": 51
                                        },
                                        "Z_EnvironmentID__": {
                                          "type": "ShortText",
                                          "data": [
                                            "Z_EnvironmentID__"
                                          ],
                                          "options": {
                                            "textSize": "S",
                                            "textAlignment": "left",
                                            "textStyle": "default",
                                            "textColor": "default",
                                            "version": 1,
                                            "label": "_Environment ID",
                                            "activable": true,
                                            "width": 230,
                                            "helpText": "",
                                            "helpURL": "",
                                            "helpFormat": "HTML Format",
                                            "browsable": false
                                          },
                                          "stamp": 52
                                        },
                                        "LabelZ_Environment__": {
                                          "type": "Label",
                                          "data": [
                                            "Z_Environment__"
                                          ],
                                          "options": {
                                            "label": "_Environment",
                                            "version": 0
                                          },
                                          "stamp": 53
                                        },
                                        "Z_Environment__": {
                                          "type": "ShortText",
                                          "data": [
                                            "Z_Environment__"
                                          ],
                                          "options": {
                                            "textSize": "S",
                                            "textAlignment": "left",
                                            "textStyle": "default",
                                            "textColor": "default",
                                            "version": 1,
                                            "label": "_Environment",
                                            "activable": true,
                                            "width": 230,
                                            "helpText": "",
                                            "helpURL": "",
                                            "helpFormat": "HTML Format",
                                            "browsable": false
                                          },
                                          "stamp": 54
                                        },
                                        "LabelZ_AccountID__": {
                                          "type": "Label",
                                          "data": [
                                            "Z_AccountID__"
                                          ],
                                          "options": {
                                            "label": "_Account ID",
                                            "version": 0
                                          },
                                          "stamp": 55
                                        },
                                        "Z_AccountID__": {
                                          "type": "ShortText",
                                          "data": [
                                            "Z_AccountID__"
                                          ],
                                          "options": {
                                            "textSize": "S",
                                            "textAlignment": "left",
                                            "textStyle": "default",
                                            "textColor": "default",
                                            "version": 1,
                                            "label": "_Account ID",
                                            "activable": true,
                                            "width": 230,
                                            "helpText": "",
                                            "helpURL": "",
                                            "helpFormat": "HTML Format",
                                            "browsable": false
                                          },
                                          "stamp": 56
                                        },
                                        "LabelZ_ProcessMessagesInformation__": {
                                          "type": "Label",
                                          "data": [
                                            "Z_ProcessMessagesInformation__"
                                          ],
                                          "options": {
                                            "label": "Process Messages Information",
                                            "version": 0
                                          },
                                          "stamp": 41
                                        },
                                        "Z_ProcessMessagesInformation__": {
                                          "type": "LongText",
                                          "data": [
                                            "Z_ProcessMessagesInformation__"
                                          ],
                                          "options": {
                                            "textSize": "S",
                                            "textAlignment": "left",
                                            "textStyle": "default",
                                            "textColor": "default",
                                            "label": "Process Messages Information",
                                            "activable": true,
                                            "width": "1000",
                                            "helpText": "",
                                            "helpURL": "",
                                            "helpFormat": "HTML Format",
                                            "readonly": true,
                                            "browsable": false,
                                            "numberOfLines": 1500,
                                            "version": 0,
                                            "minNbLines": 1500
                                          },
                                          "stamp": 42
                                        }
                                      },
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
                                "border": {},
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
                          "left": 79,
                          "width": 21,
                          "height": 99
                        },
                        "hidden": false
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
            },
            "Change_Owner": {
              "type": "SubmitButton",
              "data": false,
              "options": {
                "label": "Change Owner",
                "textPosition": "text-right",
                "textSize": "MS",
                "textColor": "color1",
                "nextprocess": {
                  "processName": "AdjuntarLiquidacionesPO",
                  "attachmentsMode": "all",
                  "willBeChild": true,
                  "returnToOriginalUrl": false
                },
                "style": 2,
                "url": "",
                "action": "none",
                "version": 0,
                "textStyle": "default"
              },
              "stamp": 37
            },
            "AutoFixVendorLogin": {
              "type": "SubmitButton",
              "data": false,
              "options": {
                "label": "AutoFixVendorLogin",
                "textPosition": "text-right",
                "textSize": "MS",
                "textStyle": "default",
                "textColor": "color1",
                "nextprocess": {
                  "processName": "AdjuntarLiquidacionesPO",
                  "attachmentsMode": "all",
                  "willBeChild": true,
                  "returnToOriginalUrl": false
                },
                "urlImageOverlay": "",
                "style": 3,
                "url": "",
                "position": null,
                "action": "none",
                "version": 0
              },
              "stamp": 60
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
  "stamps": 60,
  "data": []
}