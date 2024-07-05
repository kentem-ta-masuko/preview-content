"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PlotlyHelper = void 0;
const plotly_js_dist_min_1 = __importDefault(require("plotly.js-dist-min"));
class PlotlyHelper {
    plot(root) {
        plotly_js_dist_min_1.default.newPlot(root, this.getPlotlyData(), this.getPlotlyLayout(), this.getConfig());
    }
    getPlotlyData() {
        const data = [{
                x: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31],
                y: [null, 1, 1.1, 1.2, 1.3, 1.4, 1.5, 1.6, 1.7, 1.8, 1.9, 2, 2.1, 2.2, 2.3, 2.4, 2.5, 2.6, 2.7, 2.8, 2.9, 3, 3.1, 3.2, 3.3, 3.4, 3.5, 3.6, 3.7, 3.8, 3.9, null],
                text: [null, '1.0', '1.1', '1.2', '1.3', '1.4', '1.5', '1.6', '1.7', '1.8', '1.9', '2.0', '2.1', '2.2', '2.3', '2.4', '2.5', '2.6', '2.7', '2.8', '2.9', '3.0', '3.1', '3.2', '3.3', '3.4', '3.5', '3.6', '3.7', '3.8', '3.9', null],
                mode: 'lines+markers',
                line: {
                    color: 'black',
                    width: 3,
                },
                marker: {
                    symbol: 'circle',
                    size: 12,
                    color: '#00ECFF',
                    line: {
                        width: 2,
                        color: 'black',
                    }
                },
                hovertemplate: '%{x}' + '<br>設計値との差: %{text}' + "<extra></extra>",
                // 凡例を非表示
                showlegend: false,
                visible: true,
            }
        ];
        return data;
    }
    getPlotlyLayout() {
        const layout = {
            xaxis: {
                range: [0, 31],
                tickvals: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31],
                ticktext: ['', 'No.1', 'No.2', 'No.3', 'No.4', 'No.5', 'No.6', 'No.7', 'No.8', 'No.9', 'No.10', 'No.11', 'No.12', 'No.13', 'No.14', 'No.15', 'No.16', 'No.17', 'No.18', 'No.19', 'No.20', 'No.21', 'No.22', 'No.23', 'No.24', 'No.25', 'No.26', 'No.27', 'No.28', 'No.29', 'No.30', ''],
                tickangle: -90,
                gridcolor: 'gray',
                side: 'top',
                fixedrange: true,
                showline: true,
                linecolor: 'gray',
                automargin: false, //目盛ラベルの長さが表示領域を超える時に、自動的に領域を増やさない
            },
            yaxis: {
                visible: true,
                range: [0, 10],
                tickvals: [],
                automargin: false,
                fixedrange: true,
                showgrid: false,
                zeroline: false,
                showline: true,
                linecolor: 'gray',
            },
            margin: {
                l: 100,
                r: 100,
                t: 115,
                b: 0,
            },
            //legend: { showlegend: false },
            font: { size: 13 },
            hovermode: "closest",
            hoverlabel: { bgcolor: "#FFF" },
            shapes: [],
            annotations: [], //テキストの描画
        };
        return layout;
    }
    getConfig() {
        const config = {
            responsive: true,
            displayModeBar: false, //modeBar（保存・ズームとかの機能があるツールバー的なもの）を非表示
        };
        return config;
    }
}
exports.PlotlyHelper = PlotlyHelper;
//# sourceMappingURL=plotlyHelper.js.map