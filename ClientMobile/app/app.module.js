"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var nativescript_module_1 = require("nativescript-angular/nativescript.module");
var angular_1 = require("nativescript-ui-listview/angular");
var angular_2 = require("nativescript-ui-dataform/angular");
var common_1 = require("nativescript-angular/common");
var forms_1 = require("nativescript-angular/forms");
var angular_3 = require("nativescript-ui-sidedrawer/angular");
var angular_4 = require("nativescript-ui-calendar/angular");
var angular_5 = require("nativescript-ui-chart/angular");
var app_routing_module_1 = require("./app-routing.module");
var app_component_1 = require("./app.component");
var animals_service_1 = require("~/services/Animal/animals.service");
var commande_service_1 = require("~/services/Commande/commande.service");
var payement_service_1 = require("~/services/Payement/payement.service");
var produit_service_1 = require("~/services/Produits/produit.service");
var users_service_1 = require("~/services/utilisateurs/users.service");
var http_1 = require("@angular/http");
var http_2 = require("nativescript-angular/http");
var home_component_1 = require("~/home/home.component");
var detail_component_1 = require("~/detail/detail.component");
var data_1 = require("~/data/data");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            bootstrap: [
                app_component_1.AppComponent
            ],
            imports: [
                angular_1.NativeScriptUIListViewModule,
                angular_3.NativeScriptUISideDrawerModule,
                angular_2.NativeScriptUIDataFormModule,
                common_1.NativeScriptCommonModule,
                angular_4.NativeScriptUICalendarModule,
                angular_5.NativeScriptUIChartModule,
                nativescript_module_1.NativeScriptModule,
                app_routing_module_1.AppRoutingModule,
                forms_1.NativeScriptFormsModule,
                http_1.HttpModule,
                http_2.NativeScriptHttpModule,
            ],
            declarations: [
                app_component_1.AppComponent,
                home_component_1.HomeComponent,
                detail_component_1.DetailComponent,
            ],
            providers: [
                data_1.DataService,
                animals_service_1.AnimalsService,
                commande_service_1.CommandeService,
                payement_service_1.PayementService,
                produit_service_1.ProduitService,
                users_service_1.UsersService
            ],
            schemas: [
                core_1.NO_ERRORS_SCHEMA
            ]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBa0Y7QUFDbEYsZ0ZBQThFO0FBQzlFLDREQUFnRjtBQUNoRiw0REFBZ0Y7QUFDaEYsc0RBQXVFO0FBQ3ZFLG9EQUFxRTtBQUNyRSw4REFBb0Y7QUFDcEYsNERBQWdGO0FBQ2hGLHlEQUEwRTtBQUUxRSwyREFBd0Q7QUFDeEQsaURBQStDO0FBSS9DLHFFQUFtRTtBQUNuRSx5RUFBdUU7QUFDdkUseUVBQXVFO0FBQ3ZFLHVFQUFxRTtBQUNyRSx1RUFBcUU7QUFDckUsc0NBQTJDO0FBQzNDLGtEQUFpRTtBQUNqRSx3REFBc0Q7QUFDdEQsOERBQTREO0FBQzVELG9DQUEwQztBQXlDMUM7SUFBQTtJQUF5QixDQUFDO0lBQWIsU0FBUztRQXBDckIsZUFBUSxDQUFDO1lBQ04sU0FBUyxFQUFFO2dCQUNQLDRCQUFZO2FBQ2Y7WUFDRCxPQUFPLEVBQUU7Z0JBQ0wsc0NBQTRCO2dCQUM1Qix3Q0FBOEI7Z0JBQzlCLHNDQUE0QjtnQkFDNUIsaUNBQXdCO2dCQUN4QixzQ0FBNEI7Z0JBQzVCLG1DQUF5QjtnQkFDekIsd0NBQWtCO2dCQUNsQixxQ0FBZ0I7Z0JBQ2hCLCtCQUF1QjtnQkFDdkIsaUJBQVU7Z0JBQ1YsNkJBQXNCO2FBRXpCO1lBQ0QsWUFBWSxFQUFFO2dCQUNWLDRCQUFZO2dCQUNaLDhCQUFhO2dCQUNiLGtDQUFlO2FBRWxCO1lBQ0QsU0FBUyxFQUFFO2dCQUNQLGtCQUFXO2dCQUNYLGdDQUFjO2dCQUNkLGtDQUFlO2dCQUNmLGtDQUFlO2dCQUNmLGdDQUFjO2dCQUNkLDRCQUFZO2FBQ2Y7WUFDRCxPQUFPLEVBQUU7Z0JBQ0wsdUJBQWdCO2FBQ25CO1NBQ0osQ0FBQztPQUNXLFNBQVMsQ0FBSTtJQUFELGdCQUFDO0NBQUEsQUFBMUIsSUFBMEI7QUFBYiw4QkFBUyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlLCBOZ01vZHVsZUZhY3RvcnlMb2FkZXIsIE5PX0VSUk9SU19TQ0hFTUEgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0TW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL25hdGl2ZXNjcmlwdC5tb2R1bGVcIjtcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdFVJTGlzdFZpZXdNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LXVpLWxpc3R2aWV3L2FuZ3VsYXJcIjtcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdFVJRGF0YUZvcm1Nb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LXVpLWRhdGFmb3JtL2FuZ3VsYXJcIjtcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdENvbW1vbk1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9jb21tb25cIjtcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdEZvcm1zTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL2Zvcm1zXCI7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRVSVNpZGVEcmF3ZXJNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LXVpLXNpZGVkcmF3ZXIvYW5ndWxhclwiO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0VUlDYWxlbmRhck1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtdWktY2FsZW5kYXIvYW5ndWxhclwiO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0VUlDaGFydE1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtdWktY2hhcnQvYW5ndWxhclwiO1xuXG5pbXBvcnQgeyBBcHBSb3V0aW5nTW9kdWxlIH0gZnJvbSBcIi4vYXBwLXJvdXRpbmcubW9kdWxlXCI7XG5pbXBvcnQgeyBBcHBDb21wb25lbnQgfSBmcm9tIFwiLi9hcHAuY29tcG9uZW50XCI7XG5cblxuXG5pbXBvcnQgeyBBbmltYWxzU2VydmljZSB9IGZyb20gXCJ+L3NlcnZpY2VzL0FuaW1hbC9hbmltYWxzLnNlcnZpY2VcIjtcbmltcG9ydCB7IENvbW1hbmRlU2VydmljZSB9IGZyb20gXCJ+L3NlcnZpY2VzL0NvbW1hbmRlL2NvbW1hbmRlLnNlcnZpY2VcIjtcbmltcG9ydCB7IFBheWVtZW50U2VydmljZSB9IGZyb20gXCJ+L3NlcnZpY2VzL1BheWVtZW50L3BheWVtZW50LnNlcnZpY2VcIjtcbmltcG9ydCB7IFByb2R1aXRTZXJ2aWNlIH0gZnJvbSBcIn4vc2VydmljZXMvUHJvZHVpdHMvcHJvZHVpdC5zZXJ2aWNlXCI7XG5pbXBvcnQgeyBVc2Vyc1NlcnZpY2UgfSBmcm9tIFwifi9zZXJ2aWNlcy91dGlsaXNhdGV1cnMvdXNlcnMuc2VydmljZVwiO1xuaW1wb3J0IHsgSHR0cE1vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9odHRwXCI7XG5pbXBvcnQge05hdGl2ZVNjcmlwdEh0dHBNb2R1bGV9IGZyb20gJ25hdGl2ZXNjcmlwdC1hbmd1bGFyL2h0dHAnO1xuaW1wb3J0IHsgSG9tZUNvbXBvbmVudCB9IGZyb20gXCJ+L2hvbWUvaG9tZS5jb21wb25lbnRcIjtcbmltcG9ydCB7IERldGFpbENvbXBvbmVudCB9IGZyb20gXCJ+L2RldGFpbC9kZXRhaWwuY29tcG9uZW50XCI7XG5pbXBvcnQgeyBEYXRhU2VydmljZSB9IGZyb20gXCJ+L2RhdGEvZGF0YVwiO1xuXG5cblxuXG5ATmdNb2R1bGUoe1xuICAgIGJvb3RzdHJhcDogW1xuICAgICAgICBBcHBDb21wb25lbnRcbiAgICBdLFxuICAgIGltcG9ydHM6IFtcbiAgICAgICAgTmF0aXZlU2NyaXB0VUlMaXN0Vmlld01vZHVsZSxcbiAgICAgICAgTmF0aXZlU2NyaXB0VUlTaWRlRHJhd2VyTW9kdWxlLFxuICAgICAgICBOYXRpdmVTY3JpcHRVSURhdGFGb3JtTW9kdWxlLFxuICAgICAgICBOYXRpdmVTY3JpcHRDb21tb25Nb2R1bGUsXG4gICAgICAgIE5hdGl2ZVNjcmlwdFVJQ2FsZW5kYXJNb2R1bGUsXG4gICAgICAgIE5hdGl2ZVNjcmlwdFVJQ2hhcnRNb2R1bGUsXG4gICAgICAgIE5hdGl2ZVNjcmlwdE1vZHVsZSxcbiAgICAgICAgQXBwUm91dGluZ01vZHVsZSxcbiAgICAgICAgTmF0aXZlU2NyaXB0Rm9ybXNNb2R1bGUsXG4gICAgICAgIEh0dHBNb2R1bGUsXG4gICAgICAgIE5hdGl2ZVNjcmlwdEh0dHBNb2R1bGUsXG4gICAgXG4gICAgXSxcbiAgICBkZWNsYXJhdGlvbnM6IFtcbiAgICAgICAgQXBwQ29tcG9uZW50LFxuICAgICAgICBIb21lQ29tcG9uZW50LFxuICAgICAgICBEZXRhaWxDb21wb25lbnQsXG5cbiAgICBdLFxuICAgIHByb3ZpZGVyczogW1xuICAgICAgICBEYXRhU2VydmljZSxcbiAgICAgICAgQW5pbWFsc1NlcnZpY2UsXG4gICAgICAgIENvbW1hbmRlU2VydmljZSxcbiAgICAgICAgUGF5ZW1lbnRTZXJ2aWNlLFxuICAgICAgICBQcm9kdWl0U2VydmljZSxcbiAgICAgICAgVXNlcnNTZXJ2aWNlXG4gICAgXSxcbiAgICBzY2hlbWFzOiBbXG4gICAgICAgIE5PX0VSUk9SU19TQ0hFTUFcbiAgICBdXG59KVxuZXhwb3J0IGNsYXNzIEFwcE1vZHVsZSB7IH1cbiJdfQ==