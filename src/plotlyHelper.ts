import Plotly from 'plotly.js-dist-min'

export class PlotlyHelper {
    public plot(root: string): void {
        Plotly.newPlot(root, this.getPlotlyData(), this.getPlotlyLayout(), this.getConfig());
    }

    private getPlotlyData(): Plotly.Data[] {
        const data: Plotly.Data[] = [{
            x: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31],
            y: [null, 1, 1.1, 1.2, 1.3, 1.4, 1.5, 1.6, 1.7, 1.8, 1.9, 2, 2.1, 2.2, 2.3, 2.4, 2.5, 2.6, 2.7, 2.8, 2.9, 3, 3.1, 3.2, 3.3, 3.4, 3.5, 3.6, 3.7, 3.8, 3.9, null],
            text: [null, '1.0', '1.1', '1.2', '1.3', '1.4', '1.5', '1.6', '1.7', '1.8', '1.9', '2.0', '2.1', '2.2', '2.3', '2.4', '2.5', '2.6', '2.7', '2.8', '2.9', '3.0', '3.1', '3.2', '3.3', '3.4', '3.5', '3.6', '3.7', '3.8', '3.9', null],
            mode: 'lines+markers',
            line: {
                color: 'red',
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
        return data
    }

    private getPlotlyLayout(): Partial<Plotly.Layout> {
        const layout: Partial<Plotly.Layout> =
        {
            xaxis: {
                range: [0, 31],
                tickvals: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31],
                ticktext: ['', 'No.1', 'No.2', 'No.3', 'No.4', 'No.5', 'No.6', 'No.7', 'No.8', 'No.9', 'No.10', 'No.11', 'No.12', 'No.13', 'No.14', 'No.15', 'No.16', 'No.17', 'No.18', 'No.19', 'No.20', 'No.21', 'No.22', 'No.23', 'No.24', 'No.25', 'No.26', 'No.27', 'No.28', 'No.29', 'No.30', ''],
                tickangle: -90,     //目盛ラベルを-90度回転
                gridcolor: 'gray',
                side: 'top',        //x軸をグラフ上部に配置
                fixedrange: true,   //ズームさせない
                showline: true,
                linecolor: 'gray',
                automargin: false,  //目盛ラベルの長さが表示領域を超える時に、自動的に領域を増やさない
            },
            yaxis: {
                visible: true,
                range: [0, 10],
                tickvals: [],
                automargin: false,
                fixedrange: true,   //zoomさせない
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
            hovermode: "closest",   //hoverdistance内の最も近いポイントに1つのホバーラベルが表示される
            hoverlabel: { bgcolor: "#FFF" },
            shapes: [],             //横線の描画
            annotations: [],        //テキストの描画
        };
        return layout;
    }

    private getConfig(): Partial<Plotly.Config> {
        const config: Partial<Plotly.Config> = {
            responsive: true,       //Windowサイズに合わせグラフの大きさも変動
            displayModeBar: false,  //modeBar（保存・ズームとかの機能があるツールバー的なもの）を非表示
        };
        return config;
    }
}
