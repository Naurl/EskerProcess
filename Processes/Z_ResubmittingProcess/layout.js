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
                      "top": 0,
                      "left": 0,
                      "width": 100,
                      "height": 25
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
                      "top": 0,
                      "left": 0,
                      "width": 100,
                      "height": 100
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
                                "label": "_System data",
                                "hidden": true
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
                          "stamp": 44,
                          "*": {
                            "Column1": {
                              "type": "PanelData",
                              "data": [],
                              "options": {
                                "border": {
                                  "collapsed": false
                                },
                                "labelLength": 0,
                                "iconURL": "",
                                "TitleFontSize": "S",
                                "hideActionButtons": true,
                                "hideTitleBar": true,
                                "hideTitle": true,
                                "backgroundcolor": "default",
                                "labelsAlignment": "right",
                                "label": "_Column1",
                                "leftImageURL": "",
                                "removeMargins": false,
                                "version": 0
                              },
                              "stamp": 50,
                              "*": {
                                "FieldsManager": {
                                  "type": "FieldsManager",
                                  "data": [],
                                  "options": {
                                    "controlsAssociation": {},
                                    "version": 0
                                  },
                                  "stamp": 51,
                                  "*": {
                                    "Grid": {
                                      "type": "GridLayout",
                                      "data": [
                                        "fields"
                                      ],
                                      "options": {
                                        "ctrlsPos": {},
                                        "lines": 0,
                                        "columns": 2,
                                        "colspans": [],
                                        "version": 0
                                      },
                                      "stamp": 52
                                    }
                                  }
                                }
                              }
                            },
                            "Document_data": {
                              "type": "PanelData",
                              "data": [],
                              "options": {
                                "border": {},
                                "iconURL": "",
                                "TitleFontSize": "S",
                                "hideActionButtons": true,
                                "hideTitleBar": true,
                                "hideTitle": true,
                                "backgroundcolor": "default",
                                "labelsAlignment": "center",
                                "label": "_Document data",
                                "leftImageURL": "",
                                "removeMargins": false,
                                "version": 0,
                                "elementsAlignment": "left",
                                "labelLength": 0
                              },
                              "stamp": 45,
                              "*": {
                                "FieldsManager": {
                                  "type": "FieldsManager",
                                  "data": [],
                                  "options": {
                                    "controlsAssociation": {
                                      "Label_HTML": "HTML__",
                                      "Z_Results__": "Label_HTML",
                                      "HTML__": "Label_HTML",
                                      "FileUploader__": "Label_FileUploader",
                                      "Label_FileUploader": "FileUploader__"
                                    },
                                    "version": 0
                                  },
                                  "stamp": 46,
                                  "*": {
                                    "Grid": {
                                      "type": "GridLayout",
                                      "data": [
                                        "fields"
                                      ],
                                      "options": {
                                        "ctrlsPos": {
                                          "Spacer_line__": {
                                            "line": 1,
                                            "column": 1
                                          },
                                          "Spacer_line3__": {
                                            "line": 2,
                                            "column": 1
                                          },
                                          "Z_Results__": {
                                            "line": 3,
                                            "column": 1
                                          },
                                          "Spacer__": {
                                            "line": 4,
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
                                          [
                                            {
                                              "index": 0,
                                              "length": 2
                                            }
                                          ]
                                        ],
                                        "version": 0
                                      },
                                      "stamp": 47,
                                      "*": {
                                        "Spacer_line__": {
                                          "type": "Spacer",
                                          "data": false,
                                          "options": {
                                            "height": "",
                                            "width": "",
                                            "color": "default",
                                            "label": "Spacer line",
                                            "version": 0
                                          },
                                          "stamp": 65
                                        },
                                        "Spacer_line3__": {
                                          "type": "Spacer",
                                          "data": false,
                                          "options": {
                                            "height": "",
                                            "width": "",
                                            "color": "default",
                                            "label": "Spacer line3",
                                            "version": 0
                                          },
                                          "stamp": 71
                                        },
                                        "Z_Results__": {
                                          "type": "HTML",
                                          "data": false,
                                          "options": {
                                            "label": "_HTML",
                                            "htmlContent": "<table width=\"100%\" cellspacing=\"1\" cellpadding=\"3\" border=\"0\" bgcolor=\"#1E679A\">\n<tr align=\"center\">\n   <td><font color=\"#FFFFFF\" face=\"arial, verdana, helvetica\" size=\"3\">\n    <b>Resultado del reprocesamiento</b>\n   </font></td>\n</tr>\n<tr>\n   <td bgcolor=\"#ffffff\">\n   <font face=\"arial, verdana, helvetica\">\n    @Data\n   </font>\n   </td>\n</tr>\n</table>",
                                            "width": "100%",
                                            "version": 0
                                          },
                                          "stamp": 83
                                        },
                                        "Spacer__": {
                                          "type": "Spacer",
                                          "data": false,
                                          "options": {
                                            "height": "",
                                            "width": "",
                                            "color": "default",
                                            "label": "_Spacer",
                                            "version": 0
                                          },
                                          "stamp": 86
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            },
                            "Column2": {
                              "type": "PanelData",
                              "data": [],
                              "options": {
                                "border": {},
                                "labelLength": 0,
                                "iconURL": "",
                                "TitleFontSize": "S",
                                "hideActionButtons": true,
                                "hideTitleBar": true,
                                "hideTitle": true,
                                "backgroundcolor": "default",
                                "labelsAlignment": "right",
                                "label": "_Column2",
                                "leftImageURL": "",
                                "removeMargins": false,
                                "version": 0
                              },
                              "stamp": 58,
                              "*": {
                                "FieldsManager": {
                                  "type": "FieldsManager",
                                  "data": [],
                                  "options": {
                                    "controlsAssociation": {},
                                    "version": 0
                                  },
                                  "stamp": 59,
                                  "*": {
                                    "Grid": {
                                      "type": "GridLayout",
                                      "data": [
                                        "fields"
                                      ],
                                      "options": {
                                        "ctrlsPos": {
                                          "Spacer2__": {
                                            "line": 1,
                                            "column": 1
                                          },
                                          "InfoField__": {
                                            "line": 2,
                                            "column": 1
                                          }
                                        },
                                        "lines": 2,
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
                                          ]
                                        ],
                                        "version": 0
                                      },
                                      "stamp": 60,
                                      "*": {
                                        "Spacer2__": {
                                          "type": "Spacer",
                                          "data": false,
                                          "options": {
                                            "height": "30",
                                            "width": "",
                                            "color": "default",
                                            "label": "_Spacer2",
                                            "version": 0
                                          },
                                          "stamp": 97
                                        },
                                        "InfoField__": {
                                          "type": "ShortText",
                                          "data": [
                                            "InfoField__"
                                          ],
                                          "options": {
                                            "textSize": "S",
                                            "textAlignment": "left",
                                            "textStyle": "default",
                                            "textColor": "default",
                                            "version": 1,
                                            "label": "_ShortText",
                                            "activable": true,
                                            "width": "0.001%",
                                            "helpText": "En caso de requerir más detalles sobre uno de los documentos\npor favor informe el identificador del mismo al equipo de soporte",
                                            "helpURL": "",
                                            "helpFormat": "HTML Format",
                                            "readonly": true,
                                            "browsable": false
                                          },
                                          "stamp": 96
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        },
                        "form-content-left-6": {
                          "type": "FlexibleFormLine",
                          "data": [],
                          "options": {
                            "version": 0
                          },
                          "stamp": 74,
                          "*": {
                            "DataPanel": {
                              "type": "PanelData",
                              "options": {
                                "border": {
                                  "collapsed": false
                                },
                                "version": 0,
                                "labelLength": 0,
                                "iconURL": "",
                                "TitleFontSize": "S",
                                "hideActionButtons": true,
                                "hideTitleBar": false,
                                "hideTitle": false,
                                "backgroundcolor": "default",
                                "labelsAlignment": "right",
                                "label": "_Resubmitting Invoices",
                                "hidden": true,
                                "leftImageURL": "",
                                "removeMargins": false
                              },
                              "*": {
                                "FieldsManager": {
                                  "type": "FieldsManager",
                                  "options": {
                                    "controlsAssociation": {
                                      "SelectedInvoices__": "LabelSelectedInvoices__",
                                      "LabelSelectedInvoices__": "SelectedInvoices__",
                                      "SkippedInvoices__": "LabelSkippedInvoices__",
                                      "LabelSkippedInvoices__": "SkippedInvoices__",
                                      "ResubmittedInvoices__": "LabelResubmittedInvoices__",
                                      "LabelResubmittedInvoices__": "ResubmittedInvoices__",
                                      "Errors__": "LabelErrors__",
                                      "LabelErrors__": "Errors__",
                                      "Z_ErrorMessage__": "LabelZ_ErrorMessage__",
                                      "LabelZ_ErrorMessage__": "Z_ErrorMessage__"
                                    },
                                    "version": 0
                                  },
                                  "*": {
                                    "Grid": {
                                      "type": "GridLayout",
                                      "options": {
                                        "lines": 5,
                                        "columns": 2,
                                        "version": 0,
                                        "ctrlsPos": {
                                          "SelectedInvoices__": {
                                            "line": 1,
                                            "column": 2
                                          },
                                          "LabelSelectedInvoices__": {
                                            "line": 1,
                                            "column": 1
                                          },
                                          "SkippedInvoices__": {
                                            "line": 3,
                                            "column": 2
                                          },
                                          "LabelSkippedInvoices__": {
                                            "line": 3,
                                            "column": 1
                                          },
                                          "ResubmittedInvoices__": {
                                            "line": 2,
                                            "column": 2
                                          },
                                          "LabelResubmittedInvoices__": {
                                            "line": 2,
                                            "column": 1
                                          },
                                          "Errors__": {
                                            "line": 4,
                                            "column": 2
                                          },
                                          "LabelErrors__": {
                                            "line": 4,
                                            "column": 1
                                          },
                                          "Z_ErrorMessage__": {
                                            "line": 5,
                                            "column": 2
                                          },
                                          "LabelZ_ErrorMessage__": {
                                            "line": 5,
                                            "column": 1
                                          }
                                        },
                                        "colspans": [
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
                                        "LabelSelectedInvoices__": {
                                          "type": "Label",
                                          "data": [
                                            "SelectedInvoices__"
                                          ],
                                          "options": {
                                            "label": "_Selected Invoices",
                                            "version": 0
                                          },
                                          "stamp": 35
                                        },
                                        "SelectedInvoices__": {
                                          "type": "ShortText",
                                          "data": [
                                            "SelectedInvoices__"
                                          ],
                                          "options": {
                                            "textSize": "S",
                                            "textAlignment": "left",
                                            "textStyle": "default",
                                            "textColor": "default",
                                            "label": "_Selected Invoices",
                                            "activable": true,
                                            "width": "50",
                                            "helpText": "",
                                            "helpURL": "",
                                            "helpFormat": "HTML Format",
                                            "readonly": true,
                                            "browsable": false,
                                            "version": 0
                                          },
                                          "stamp": 36
                                        },
                                        "LabelResubmittedInvoices__": {
                                          "type": "Label",
                                          "data": [
                                            "ResubmittedInvoices__"
                                          ],
                                          "options": {
                                            "label": "_Resubmitted",
                                            "version": 0
                                          },
                                          "stamp": 37
                                        },
                                        "ResubmittedInvoices__": {
                                          "type": "ShortText",
                                          "data": [
                                            "ResubmittedInvoices__"
                                          ],
                                          "options": {
                                            "textSize": "S",
                                            "textAlignment": "left",
                                            "textStyle": "default",
                                            "textColor": "default",
                                            "label": "_Resubmitted",
                                            "activable": true,
                                            "width": "50",
                                            "helpText": "",
                                            "helpURL": "",
                                            "helpFormat": "HTML Format",
                                            "browsable": false,
                                            "readonly": true,
                                            "version": 0
                                          },
                                          "stamp": 38
                                        },
                                        "LabelSkippedInvoices__": {
                                          "type": "Label",
                                          "data": [
                                            "SkippedInvoices__"
                                          ],
                                          "options": {
                                            "label": "_Skipped",
                                            "version": 0
                                          },
                                          "stamp": 39
                                        },
                                        "SkippedInvoices__": {
                                          "type": "ShortText",
                                          "data": [
                                            "SkippedInvoices__"
                                          ],
                                          "options": {
                                            "textSize": "S",
                                            "textAlignment": "left",
                                            "textStyle": "default",
                                            "textColor": "default",
                                            "label": "_Skipped",
                                            "activable": true,
                                            "width": "50",
                                            "helpText": "",
                                            "helpURL": "",
                                            "helpFormat": "HTML Format",
                                            "readonly": true,
                                            "browsable": false,
                                            "version": 0
                                          },
                                          "stamp": 40
                                        },
                                        "LabelErrors__": {
                                          "type": "Label",
                                          "data": [
                                            "Errors__"
                                          ],
                                          "options": {
                                            "label": "_Errors",
                                            "version": 0
                                          },
                                          "stamp": 41
                                        },
                                        "Errors__": {
                                          "type": "ShortText",
                                          "data": [
                                            "Errors__"
                                          ],
                                          "options": {
                                            "textSize": "S",
                                            "textAlignment": "left",
                                            "textStyle": "default",
                                            "textColor": "default",
                                            "label": "_Errors",
                                            "activable": true,
                                            "width": "50",
                                            "helpText": "",
                                            "helpURL": "",
                                            "helpFormat": "HTML Format",
                                            "readonly": true,
                                            "browsable": false,
                                            "version": 0
                                          },
                                          "stamp": 42
                                        },
                                        "LabelZ_ErrorMessage__": {
                                          "type": "Label",
                                          "data": [
                                            "Z_ErrorMessage__"
                                          ],
                                          "options": {
                                            "label": "_ErrorMessage",
                                            "version": 0
                                          },
                                          "stamp": 80
                                        },
                                        "Z_ErrorMessage__": {
                                          "type": "LongText",
                                          "data": [
                                            "Z_ErrorMessage__"
                                          ],
                                          "options": {
                                            "textSize": "S",
                                            "textAlignment": "left",
                                            "textStyle": "default",
                                            "textColor": "default",
                                            "version": 1,
                                            "minNbLines": 100,
                                            "label": "_ErrorMessage",
                                            "activable": true,
                                            "width": "500",
                                            "helpText": "",
                                            "helpURL": "",
                                            "helpFormat": "HTML Format",
                                            "browsable": false,
                                            "numberOfLines": 100
                                          },
                                          "stamp": 81
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
            "Close": {
              "type": "SubmitButton",
              "options": {
                "label": "_Close",
                "action": "savequit",
                "submit": true,
                "version": 0,
                "textPosition": "text-right",
                "textSize": "MS",
                "textColor": "color1",
                "nextprocess": {
                  "processName": "AP - Application Settings Wizard",
                  "attachmentsMode": "all",
                  "willBeChild": true
                },
                "url": ""
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
  "stamps": 98,
  "data": []
}