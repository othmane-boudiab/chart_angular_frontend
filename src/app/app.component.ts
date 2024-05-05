import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'chart-app';

  ngOnInit(): void {
    const chart = this.getChartColumn();
  }

  getChartPie() {
    Highcharts.chart('main-chart', {
        colors: ['#3CB788', '#FFD600', '#EF8E0B', '#69D2FF', '#B37CD2', '#edc951', '#C0D6E4', '	#f7a583', '#398564', '#2a4d69'],
        chart: {
            type: 'pie'
        },
        title: {
            text: ''
        },
        plotOptions: {
            pie: {
                innerSize: '50%',
                size: '80%',
                allowPointSelect: true,
                cursor: 'pointer',
                dataLabels: {
                    enabled: false,
                    format: '{point.name}: {point.percentage:.1f} %'
                },
                showInLegend: true
            }
        },
        legend: {
            maxHeight: 68, // Maximum height of the legend box
            symbolWidth: 10, // Width of the legend symbol
            symbolHeight: 10, // Height of the legend symbol
            symbolPadding: 5, // Padding of the legend symbol
            symbolRadius: 5, // Border radius of the legend symbol
            symbolColor: '#00C300', // Color of the legend symbol
            symbolStroke: '#00C300', // Border color of the legend symbol
            symbolStrokeWidth: 1, // Border width of the legend symbol
            useHTML: true,
            labelFormatter: function (): string {
              let data:any = this;
              let nameWithLimit = data.name.length > 10 ? data.name.substring(0, 10) + '...' : data.name;
              return '<div style="">' + nameWithLimit + '</div>' +
                '<div style="font-size: 1rem;font-family: 600;color: #000;">' + data.y + ' %</div>';
            }
        },
        series: [{
            name: 'Percentage',
            colorByPoint: true,
            data: [
                { name: 'SARL', y: 78 },
                { name: 'SARL AU', y: 10.8 },
                { name: 'SA', y: 1.1 },
                { name: 'SA Simplifere', y: 6.1 },
                { name: 'autre forme juridique', y: 4}
            ]
        }]
    } as any);
  }

  getChartColumn() {
    const mois = ["Jan.", "Fév.", "Mars", "Avr.", "Mai", "Juin", "Juil.", "Août", "Sept.", "Oct.", "Nov.", "Déc."];
    Highcharts.chart('main-chart', {
        colors: ['#3CB788'],
        chart: {
            type: 'column',
            events: {
              load: function() {
                // let customBagroundPath = `<path d="M0 10C0 4.47715 4.47715 0 10 0H23C28.5228 0 33 4.47715 33 10V21C33 22.1046 32.1046 23 31 23H2C0.895431 23 0 22.1046 0 21V10Z" fill="#3CB788"/>
                // <path d="M17 29L13.5359 23L20.4641 23L17 29Z" fill="#3CB788"/>`;
                // // add custom shape in data label
                // let chart = this as any;
                // chart.series[0].points.forEach((point: { dataLabel: any; }) => {
                //   point.dataLabel.attr({
                //     d: customBagroundPath
                //   });
                // });

                // let chart = this as any;
                // chart.series[0].points.forEach((point: { dataLabel: any; }) => {
                // });
              }
            }
        },
        title: {
            text: ''
        },
        
        tooltip: {
          enabled: false,
        },
        xAxis: {
            lineColor: 'transparent',
            categories: mois,
            crosshair: false
        },
        yAxis: {
            visible: false,
        },
        plotOptions: {
            column: {
                borderRadius: 50,
                dataLabels: {
                  x: 0,
                  y: -10,
                  shape: 'callout',
                    inside: false,
                    backgroundColor: '#3CB788',
                    borderRadius: 10,
                    shadow: false,
                    borderWidth: 0,
                    margin: 5,

                    enabled: true,
                    style: {
                        textOutline: 'none',
                        fontSize: '1rem',
                        fontWeight: '600',
                        color: '#fff',
                    }
                },
                pointPadding: 0.2,
                borderWidth: 0,
                margin: 5
            }
        },
        legend: {
            enabled: false
        },
        series: [{
            name: '',
            data: [49.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4]
        }]
    } as any);
  }
}
