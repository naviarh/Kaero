var plasma = getApiVersion(1);

var layout = {
    "desktops": [
        {
            "applets": [
            ],
            "config": {
                "/": {
                    "formfactor": "0",
                    "immutability": "1",
                    "lastScreen": "0",
                    "wallpaperplugin": "org.kde.potd"
                },
                "/ConfigDialog": {
                    "DialogHeight": "540",
                    "DialogWidth": "720"
                },
                "/Configuration": {
                    "PreloadWeight": "18"
                },
                "/General": {
                    "ToolBoxButtonState": "topright",
                    "ToolBoxButtonX": "1324",
                    "showToolbox": "false"
                }
            },
            "wallpaperPlugin": "org.kde.potd"
        }
    ],
    "panels": [
        {
            "alignment": "left",
            "applets": [
                {
                    "config": {
                        "/": {
                            "immutability": "1"
                        },
                        "/Configuration": {
                            "PreloadWeight": "84"
                        },
                        "/Configuration/ConfigDialog": {
                            "DialogHeight": "540",
                            "DialogWidth": "720"
                        },
                        "/Configuration/General": {
                            "customButtonImage": "kde-windows",
                            "favoritesPortedToKAstats": "true",
                            "hiddenApplications": "firefox_firefox.desktop",
                            "useCustomButtonImage": "true"
                        }
                    },
                    "plugin": "org.kde.plasma.simplemenu"
                },
                {
                    "config": {
                        "/": {
                            "immutability": "1"
                        },
                        "/Configuration": {
                            "PreloadWeight": "34"
                        }
                    },
                    "plugin": "org.kde.plasma.showActivityManager"
                },
                {
                    "config": {
                        "/": {
                            "immutability": "1"
                        },
                        "/Configuration": {
                            "PreloadWeight": "18"
                        },
                        "/Configuration/ConfigDialog": {
                            "DialogHeight": "540",
                            "DialogWidth": "720"
                        },
                        "/Configuration/General": {
                            "currentDesktopSelected": "ShowDesktop",
                            "showOnlyCurrentScreen": "true",
                            "showWindowIcons": "true"
                        }
                    },
                    "plugin": "org.kde.plasma.pager"
                },
                {
                    "config": {
                        "/": {
                            "immutability": "1"
                        },
                        "/Configuration": {
                            "PreloadWeight": "18"
                        },
                        "/Configuration/ConfigDialog": {
                            "DialogHeight": "659",
                            "DialogWidth": "906"
                        },
                        "/Configuration/General": {
                            "launchers": "applications:org.kde.konsole.desktop,applications:firefox.desktop",
                            "maxStripes": "1",
                            "showOnlyCurrentDesktop": "true",
                            "showOnlyCurrentScreen": "true",
                            "sortingStrategy": "1",
                            "wheelEnabled": "false"
                        }
                    },
                    "plugin": "org.kde.plasma.taskmanager"
                },
                {
                    "config": {
                        "/": {
                            "immutability": "1"
                        },
                        "/Configuration": {
                            "PreloadWeight": "34"
                        },
                        "/Configuration/ConfigDialog": {
                            "DialogHeight": "540",
                            "DialogWidth": "720"
                        },
                        "/Configuration/General": {
                            "cacheActivated": "true",
                            "updateInterval": "0.5"
                        }
                    },
                    "plugin": "org.kde.plasma.systemloadviewer"
                },
                {
                    "config": {
                        "/": {
                            "immutability": "1"
                        },
                        "/Configuration": {
                            "PreloadWeight": "34"
                        },
                        "/Configuration/Appearance": {
                            "baseSizeMultiplier": "0.1",
                            "iconBlur": "9",
                            "iconOpacity": "0.45",
                            "layoutType": "BigNumbers"
                        },
                        "/Configuration/ConfigDialog": {
                            "DialogHeight": "540",
                            "DialogWidth": "720"
                        },
                        "/Configuration/Filter": {
                            "deviceFilterType": "WhiteList",
                            "deviceWhiteListRegexp": "wlp7s0|eth0",
                            "showLo": "false"
                        },
                        "/Configuration/General": {
                            "updateInterval": "0.5"
                        }
                    },
                    "plugin": "org.kde.networkMonitor"
                },
                {
                    "config": {
                        "/": {
                            "immutability": "1"
                        },
                        "/Configuration": {
                            "PreloadWeight": "78"
                        }
                    },
                    "plugin": "org.kde.plasma.systemtray"
                },
                {
                    "config": {
                        "/": {
                            "immutability": "1"
                        },
                        "/Configuration": {
                            "PreloadWeight": "23"
                        },
                        "/Configuration/Appearance": {
                            "boldText": "true"
                        },
                        "/Configuration/ConfigDialog": {
                            "DialogHeight": "540",
                            "DialogWidth": "720"
                        }
                    },
                    "plugin": "org.kde.plasma.digitalclock"
                }
            ],
            "config": {
                "/": {
                    "formfactor": "2",
                    "immutability": "1",
                    "lastScreen": "0",
                    "wallpaperplugin": "org.kde.image"
                },
                "/ConfigDialog": {
                    "DialogHeight": "84",
                    "DialogWidth": "1366"
                },
                "/Configuration": {
                    "PreloadWeight": "18"
                }
            },
            "height": 1.4444444444444444,
            "hiding": "normal",
            "location": "bottom",
            "maximumLength": 75.88888888888889,
            "minimumLength": 75.88888888888889,
            "offset": 0
        }
    ],
    "serializationFormatVersion": "1"
}
;

plasma.loadSerializedLayout(layout);
