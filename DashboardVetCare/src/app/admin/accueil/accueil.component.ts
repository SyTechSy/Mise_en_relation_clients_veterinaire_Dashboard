import { Component, ViewChild } from '@angular/core';
// import { count } from 'console';

import {
  ChartComponent,
  ApexAxisChartSeries,
  ApexChart,
  ApexTitleSubtitle,
  ApexXAxis,
  ApexDataLabels,
  ApexStroke,
  ApexYAxis,
  ApexMarkers,
  ApexFill,
  ApexForecastDataPoints,
  ApexLegend
} from "ng-apexcharts";
import { ToutUtilisateurService } from 'src/app/service/tout-utilisateur.service';
import { VeterinaireService } from 'src/app/service/veterinaire.service';

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  dataLabels: ApexDataLabels;
  stroke: ApexStroke;
  xaxis: ApexXAxis;
  yaxis: ApexYAxis;
  title: ApexTitleSubtitle;
  markers: ApexMarkers;
  colors: string[];
  fill: ApexFill;
  forecastDataPoints: ApexForecastDataPoints;
  legend: ApexLegend;
};

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent {
  @ViewChild("chart") chart: ChartComponent | undefined;
  public chartOptions: Partial<ChartOptions>;

  constructor(
    private utilisateurService : ToutUtilisateurService,
    private veteriniareService : VeterinaireService,
  ) {
    this.chartOptions = {
      series: [
        {
          type: "rangeArea",
          name: "Vétérinaires",

          data: [
            {
              x: "Jan",
              y: [1100, 1900]
            },
            {
              x: "Fév",
              y: [1200, 1800]
            },
            {
              x: "Mar",
              y: [900, 2900]
            },
            {
              x: "Avr",
              y: [1400, 2700]
            },
            {
              x: "Mai",
              y: [2600, 3900]
            },
            {
              x: "Jui",
              y: [500, 1700]
            },
            {
              x: "Juil",
              y: [1900, 2300]
            },
            {
              x: "Aoû",
              y: [1000, 1500]
            }
          ]
        },

        {
          type: "rangeArea",
          name: "Utlisateurs",
          data: [
            {
              x: "Jan",
              y: [3100, 3400]
            },
            {
              x: "Fév",
              y: [4200, 5200]
            },
            {
              x: "Mar",
              y: [3900, 4900]
            },
            {
              x: "Avr",
              y: [3400, 3900]
            },
            {
              x: "Mai",
              y: [5100, 5900]
            },
            {
              x: "Jui",
              y: [5400, 6700]
            },
            {
              x: "Juil",
              y: [4300, 4600]
            },
            {
              x: "Aoû",
              y: [2100, 2900]
            }
          ]
        },

        {
          type: "line",
          name: "Vétérinaires",
          data: [
            {
              x: "Jan",
              y: 1500
            },
            {
              x: "Fév",
              y: 1700
            },
            {
              x: "Mar",
              y: 1900
            },
            {
              x: "Avr",
              y: 2200
            },
            {
              x: "Mai",
              y: 3000
            },
            {
              x: "Jui",
              y: 1000
            },
            {
              x: "Juil",
              y: 2100
            },
            {
              x: "Aoû",
              y: 1200
            },
            {
              x: "Sep",
              y: 1800
            },
            {
              x: "Oct",
              y: 2000
            }
          ]
        },
        {
          type: "line",
          name: "Utlisateurs",
          data: [
            {
              x: "Jan",
              y: 3300
            },
            {
              x: "Fév",
              y: 4900
            },
            {
              x: "Mar",
              y: 4300
            },
            {
              x: "Avr",
              y: 3700
            },
            {
              x: "Mai",
              y: 5500
            },
            {
              x: "Jui",
              y: 5900
            },
            {
              x: "Juil",
              y: 4500
            },
            {
              x: "Aoû",
              y: 2400
            },
            {
              x: "Sep",
              y: 2100
            },
            {
              x: "Oct",
              y: 1500
            }
          ]
        }
      ],
      chart: {
        height: 350,
        type: "rangeArea",
        animations: {
          speed: 500
        }
      },
      colors: ["#008000", "#ffa500", "#008000", "#ffa500"],
      dataLabels: {
        enabled: false
      },
      fill: {
        opacity: [0.24, 0.24, 1, 1]
      },
      forecastDataPoints: {
        count: 2,
        dashArray: 4
      },
      stroke: {
        curve: "straight",
        width: [0, 0, 2, 2]
      },
      legend: {
        show: true,
        customLegendItems: ["Vétérinaire", "Utilisateur"],
        inverseOrder: true
      },
      title: {
        text: "L'evolution"
      },
      markers: {
        hover: {
          sizeOffset: 5
        }
      }
    };
  }

  totalUtilisateurs: string = "00";

  totalVeterinaire: string = "00";


  ngOnInit(): void {
    this.utilisateurService.getCountUtilisateurs().subscribe(count => {
      this.totalUtilisateurs = this.formatNumber(count);
    });

    this.veteriniareService.getCountVeterinaire().subscribe(count => {
      this.totalVeterinaire =  this.formatNumber(count);
    })
  }

  // Fonction pour formater le nombre avec le format spécifique
  private formatNumber(count: number): string {
    return count < 10 ? '0' + count : '' + count;
  }

}
