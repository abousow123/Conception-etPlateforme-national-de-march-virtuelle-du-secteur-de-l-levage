"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
var operators_1 = require("rxjs/operators");
var page_1 = require("ui/page");
var router_2 = require("nativescript-angular/router");
var data_1 = require("../data/data");
var Animal_1 = require("~/model/Animal");
var animals_service_1 = require("~/services/Animal/animals.service");
var router_3 = require("@angular/router");
var commande_service_1 = require("~/services/Commande/commande.service");
var Commande_1 = require("~/model/Commande");
var DetailComponent = /** @class */ (function () {
    function DetailComponent(pageRoute, routerExtensions, page, activeRoute, dataService, animalServices, comClientService) {
        var _this = this;
        this.pageRoute = pageRoute;
        this.routerExtensions = routerExtensions;
        this.page = page;
        this.activeRoute = activeRoute;
        this.dataService = dataService;
        this.animalServices = animalServices;
        this.comClientService = comClientService;
        this.animal = new Animal_1.Animal();
        this.datef = "20-05-2019";
        this.comClient = new Commande_1.CommandeClient();
        this.items = this.dataService.getItems();
        this.page.actionBarHidden = true;
        this.pageRoute.activatedRoute.pipe(operators_1.switchMap(function (activatedRoute) { return activatedRoute.params; })).forEach(function (params) {
            _this.itemId = params['id'];
            //this.item = this.items.filter(item => item.id == this.itemId)[0];
            //this.id1 = params['id'] ;
            _this.id1 = _this.activeRoute.snapshot.params['id'];
            _this.animalServices.getOneAnimal(_this.id1)
                .subscribe(function (data) {
                _this.animal = data;
                console.log(_this.animal);
            }, function (err) {
                console.log(err);
            });
        });
    }
    DetailComponent.prototype.ngOnInit = function () {
    };
    DetailComponent.prototype.toggleLike = function () {
        this.item.isLike = !this.item.isLike;
        if (this.item.isLike) {
            this.item.likes += 1;
        }
        else {
            this.item.likes -= 1;
        }
    };
    DetailComponent.prototype.toggleHeart = function (item) {
        item.isFavorite = !item.isFavorite;
    };
    DetailComponent.prototype.categoryIcon = function () {
        switch (this.item.categoryTag) {
            case "Burger":
                return String.fromCharCode(0xf0f5); //"fa-cutlery";
                break;
            case "Beer":
                return String.fromCharCode(0xf0fc); //"fa-beer";
                break;
            case "Pancake":
                return String.fromCharCode(0xf0f4); //"fa-coffee";
                break;
            case "Cake":
                return String.fromCharCode(0xf1fd); //"fa-birthday-cake";
                break;
            default:
                return String.fromCharCode(0xf06d); //"fa-fire";
                break;
        }
    };
    DetailComponent.prototype.onCloseTap = function () {
        this.routerExtensions.back();
    };
    DetailComponent.prototype.onLog = function () {
        console.log('abc');
    };
    DetailComponent.prototype.onAcheter = function () {
        this.comClient.client.numuser = "user2";
        //Constent.count = Constent.count + 1 ;
        this.comClient.commande.livrer = false;
        this.comClient.commande.confirmer = false;
        console.log(this.animal.idanimal);
        this.comClientService.saveCommandeClient(this.animal.idanimal, this.comClient)
            .subscribe(function (data) {
        }, function (err) {
            console.log(err);
        });
        //this.router.navigateByUrl("/app") ;
    };
    DetailComponent = __decorate([
        core_1.Component({
            selector: "Detail",
            moduleId: module.id,
            templateUrl: "./detail.component.html",
            styleUrls: ['./detail.component.css']
        }),
        __metadata("design:paramtypes", [router_2.PageRoute,
            router_1.RouterExtensions,
            page_1.Page, router_3.ActivatedRoute,
            data_1.DataService, animals_service_1.AnimalsService,
            commande_service_1.CommandeService])
    ], DetailComponent);
    return DetailComponent;
}());
exports.DetailComponent = DetailComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGV0YWlsLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImRldGFpbC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBa0Q7QUFDbEQsc0RBQStEO0FBQy9ELDRDQUEyQztBQUMzQyxnQ0FBK0I7QUFDL0Isc0RBQXdEO0FBR3hELHFDQUEyQztBQUMzQyx5Q0FBd0M7QUFDeEMscUVBQW1FO0FBQ25FLDBDQUFpRDtBQUNqRCx5RUFBdUU7QUFDdkUsNkNBQWtEO0FBVWxEO0lBU0kseUJBQ1ksU0FBb0IsRUFDcEIsZ0JBQWtDLEVBQ2xDLElBQVUsRUFBUyxXQUEwQixFQUM3QyxXQUF3QixFQUFVLGNBQTZCLEVBQy9ELGdCQUFnQztRQUw1QyxpQkFpQ0M7UUFoQ1csY0FBUyxHQUFULFNBQVMsQ0FBVztRQUNwQixxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO1FBQ2xDLFNBQUksR0FBSixJQUFJLENBQU07UUFBUyxnQkFBVyxHQUFYLFdBQVcsQ0FBZTtRQUM3QyxnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUFVLG1CQUFjLEdBQWQsY0FBYyxDQUFlO1FBQy9ELHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBZ0I7UUFYNUMsV0FBTSxHQUFRLElBQUksZUFBTSxFQUFFLENBQUU7UUFHNUIsVUFBSyxHQUFVLFlBQVksQ0FBRTtRQUM3QixjQUFTLEdBQWtCLElBQUkseUJBQWMsRUFBRSxDQUFDO1FBVTVDLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUV6QyxJQUFJLENBQUMsSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUM7UUFFakMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUM5QixxQkFBUyxDQUFDLFVBQUEsY0FBYyxJQUFJLE9BQUEsY0FBYyxDQUFDLE1BQU0sRUFBckIsQ0FBcUIsQ0FBQyxDQUNyRCxDQUFDLE9BQU8sQ0FBQyxVQUFDLE1BQU07WUFDYixLQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUMzQixtRUFBbUU7WUFFbkUsMkJBQTJCO1lBRTNCLEtBQUksQ0FBQyxHQUFHLEdBQUcsS0FBSSxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFFO1lBQ25ELEtBQUksQ0FBQyxjQUFjLENBQUMsWUFBWSxDQUFDLEtBQUksQ0FBQyxHQUFHLENBQUM7aUJBQ3pDLFNBQVMsQ0FBQyxVQUFBLElBQUk7Z0JBQ1osS0FBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUU7Z0JBRXBCLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBRzlCLENBQUMsRUFBQyxVQUFBLEdBQUc7Z0JBQ0QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUVuQixDQUFDLENBQUMsQ0FBRTtRQUNSLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUVELGtDQUFRLEdBQVI7SUFFQSxDQUFDO0lBRUQsb0NBQVUsR0FBVjtRQUNJLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUM7UUFDckMsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRTtZQUNsQixJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssSUFBSSxDQUFDLENBQUM7U0FDeEI7YUFBTTtZQUNILElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxJQUFJLENBQUMsQ0FBQztTQUN4QjtJQUNMLENBQUM7SUFFRCxxQ0FBVyxHQUFYLFVBQVksSUFBSTtRQUNaLElBQUksQ0FBQyxVQUFVLEdBQUcsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDO0lBQ3ZDLENBQUM7SUFFRCxzQ0FBWSxHQUFaO1FBQ0ksUUFBUSxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRTtZQUMzQixLQUFLLFFBQVE7Z0JBQ1QsT0FBTyxNQUFNLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsZUFBZTtnQkFDbkQsTUFBTTtZQUNWLEtBQUssTUFBTTtnQkFDUCxPQUFPLE1BQU0sQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxZQUFZO2dCQUNoRCxNQUFNO1lBQ1YsS0FBSyxTQUFTO2dCQUNWLE9BQU8sTUFBTSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLGNBQWM7Z0JBQ2xELE1BQU07WUFDVixLQUFLLE1BQU07Z0JBQ1AsT0FBTyxNQUFNLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMscUJBQXFCO2dCQUN6RCxNQUFNO1lBQ1Y7Z0JBQ0ksT0FBTyxNQUFNLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsWUFBWTtnQkFDaEQsTUFBTTtTQUNiO0lBQ0wsQ0FBQztJQUVELG9DQUFVLEdBQVY7UUFDSSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDakMsQ0FBQztJQUVELCtCQUFLLEdBQUw7UUFDSSxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBRXZCLENBQUM7SUFFRCxtQ0FBUyxHQUFUO1FBRUksSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBRTtRQUN6Qyx1Q0FBdUM7UUFDdkMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBRTtRQUN4QyxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFFO1FBQzNDLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUVsQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLEVBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQzthQUM1RSxTQUFTLENBQUMsVUFBQSxJQUFJO1FBRWYsQ0FBQyxFQUFDLFVBQUEsR0FBRztZQUNILE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7UUFFbkIsQ0FBQyxDQUFDLENBQUU7UUFFSixxQ0FBcUM7SUFFekMsQ0FBQztJQTVHUSxlQUFlO1FBUDNCLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsUUFBUTtZQUNsQixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsV0FBVyxFQUFFLHlCQUF5QjtZQUN0QyxTQUFTLEVBQUUsQ0FBQyx3QkFBd0IsQ0FBQztTQUN4QyxDQUFDO3lDQVl5QixrQkFBUztZQUNGLHlCQUFnQjtZQUM1QixXQUFJLEVBQXFCLHVCQUFjO1lBQ2hDLGtCQUFXLEVBQXlCLGdDQUFjO1lBQzlDLGtDQUFlO09BZG5DLGVBQWUsQ0FpSDNCO0lBQUQsc0JBQUM7Q0FBQSxBQWpIRCxJQWlIQztBQWpIWSwwQ0FBZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgUm91dGVyRXh0ZW5zaW9ucyB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgc3dpdGNoTWFwIH0gZnJvbSBcInJ4anMvb3BlcmF0b3JzXCI7XHJcbmltcG9ydCB7IFBhZ2UgfSBmcm9tIFwidWkvcGFnZVwiO1xyXG5pbXBvcnQgeyBQYWdlUm91dGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyXCI7XHJcblxyXG5pbXBvcnQgeyBJdGVtIH0gZnJvbSBcIi4uL2RhdGEvaXRlbS5tb2RlbFwiO1xyXG5pbXBvcnQgeyBEYXRhU2VydmljZSB9IGZyb20gXCIuLi9kYXRhL2RhdGFcIjtcclxuaW1wb3J0IHsgQW5pbWFsIH0gZnJvbSBcIn4vbW9kZWwvQW5pbWFsXCI7XHJcbmltcG9ydCB7IEFuaW1hbHNTZXJ2aWNlIH0gZnJvbSBcIn4vc2VydmljZXMvQW5pbWFsL2FuaW1hbHMuc2VydmljZVwiO1xyXG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZSB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgQ29tbWFuZGVTZXJ2aWNlIH0gZnJvbSBcIn4vc2VydmljZXMvQ29tbWFuZGUvY29tbWFuZGUuc2VydmljZVwiO1xyXG5pbXBvcnQgeyBDb21tYW5kZUNsaWVudCB9IGZyb20gXCJ+L21vZGVsL0NvbW1hbmRlXCI7XHJcblxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogXCJEZXRhaWxcIixcclxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXHJcbiAgICB0ZW1wbGF0ZVVybDogXCIuL2RldGFpbC5jb21wb25lbnQuaHRtbFwiLFxyXG4gICAgc3R5bGVVcmxzOiBbJy4vZGV0YWlsLmNvbXBvbmVudC5jc3MnXVxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIERldGFpbENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgICBpdGVtSWQ6IHN0cmluZztcclxuICAgIGl0ZW06IEl0ZW07XHJcbiAgICBhbmltYWw6QW5pbWFsPW5ldyBBbmltYWwoKSA7XHJcbiAgICBpdGVtczogQXJyYXk8SXRlbT47XHJcbiAgICBpZDE6c3RyaW5nIDtcclxuICAgIGRhdGVmOnN0cmluZyA9IFwiMjAtMDUtMjAxOVwiIDtcclxuICAgIGNvbUNsaWVudDpDb21tYW5kZUNsaWVudCA9IG5ldyBDb21tYW5kZUNsaWVudCgpO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKFxyXG4gICAgICAgIHByaXZhdGUgcGFnZVJvdXRlOiBQYWdlUm91dGUsXHJcbiAgICAgICAgcHJpdmF0ZSByb3V0ZXJFeHRlbnNpb25zOiBSb3V0ZXJFeHRlbnNpb25zLFxyXG4gICAgICAgIHByaXZhdGUgcGFnZTogUGFnZSxwcml2YXRlIGFjdGl2ZVJvdXRlOkFjdGl2YXRlZFJvdXRlLFxyXG4gICAgICAgIHByaXZhdGUgZGF0YVNlcnZpY2U6IERhdGFTZXJ2aWNlLCBwcml2YXRlIGFuaW1hbFNlcnZpY2VzOkFuaW1hbHNTZXJ2aWNlLFxyXG4gICAgICAgIHByaXZhdGUgY29tQ2xpZW50U2VydmljZTpDb21tYW5kZVNlcnZpY2UsXHJcbiAgICAgICAgKSB7XHJcblxyXG4gICAgICAgIHRoaXMuaXRlbXMgPSB0aGlzLmRhdGFTZXJ2aWNlLmdldEl0ZW1zKCk7ICAgICAgICBcclxuXHJcbiAgICAgICAgdGhpcy5wYWdlLmFjdGlvbkJhckhpZGRlbiA9IHRydWU7XHJcblxyXG4gICAgICAgIHRoaXMucGFnZVJvdXRlLmFjdGl2YXRlZFJvdXRlLnBpcGUoXHJcbiAgICAgICAgICAgIHN3aXRjaE1hcChhY3RpdmF0ZWRSb3V0ZSA9PiBhY3RpdmF0ZWRSb3V0ZS5wYXJhbXMpXHJcbiAgICAgICAgKS5mb3JFYWNoKChwYXJhbXMpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5pdGVtSWQgPSBwYXJhbXNbJ2lkJ107ICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIC8vdGhpcy5pdGVtID0gdGhpcy5pdGVtcy5maWx0ZXIoaXRlbSA9PiBpdGVtLmlkID09IHRoaXMuaXRlbUlkKVswXTtcclxuXHJcbiAgICAgICAgICAgIC8vdGhpcy5pZDEgPSBwYXJhbXNbJ2lkJ10gO1xyXG4gICAgICAgIFxyXG4gICAgICAgICAgICB0aGlzLmlkMSA9IHRoaXMuYWN0aXZlUm91dGUuc25hcHNob3QucGFyYW1zWydpZCddIDtcclxuICAgICAgICAgICAgdGhpcy5hbmltYWxTZXJ2aWNlcy5nZXRPbmVBbmltYWwodGhpcy5pZDEpXHJcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoZGF0YT0+eyBcclxuICAgICAgICAgICAgICAgdGhpcy5hbmltYWwgPSBkYXRhIDtcclxuXHJcbiAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMuYW5pbWFsKTtcclxuICAgIFxyXG5cclxuICAgICAgICAgIH0sZXJyPT57XHJcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuXHJcbiAgICAgICAgICAgIH0pIDtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgICAgICBcclxuICAgIH1cclxuXHJcbiAgICB0b2dnbGVMaWtlKCkge1xyXG4gICAgICAgIHRoaXMuaXRlbS5pc0xpa2UgPSAhdGhpcy5pdGVtLmlzTGlrZTtcclxuICAgICAgICBpZiAodGhpcy5pdGVtLmlzTGlrZSkge1xyXG4gICAgICAgICAgICB0aGlzLml0ZW0ubGlrZXMgKz0gMTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLml0ZW0ubGlrZXMgLT0gMTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgdG9nZ2xlSGVhcnQoaXRlbSkge1xyXG4gICAgICAgIGl0ZW0uaXNGYXZvcml0ZSA9ICFpdGVtLmlzRmF2b3JpdGU7XHJcbiAgICB9XHJcblxyXG4gICAgY2F0ZWdvcnlJY29uKCkge1xyXG4gICAgICAgIHN3aXRjaCAodGhpcy5pdGVtLmNhdGVnb3J5VGFnKSB7XHJcbiAgICAgICAgICAgIGNhc2UgXCJCdXJnZXJcIjpcclxuICAgICAgICAgICAgICAgIHJldHVybiBTdHJpbmcuZnJvbUNoYXJDb2RlKDB4ZjBmNSk7IC8vXCJmYS1jdXRsZXJ5XCI7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcIkJlZXJcIjpcclxuICAgICAgICAgICAgICAgIHJldHVybiBTdHJpbmcuZnJvbUNoYXJDb2RlKDB4ZjBmYyk7IC8vXCJmYS1iZWVyXCI7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcIlBhbmNha2VcIjpcclxuICAgICAgICAgICAgICAgIHJldHVybiBTdHJpbmcuZnJvbUNoYXJDb2RlKDB4ZjBmNCk7IC8vXCJmYS1jb2ZmZWVcIjtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwiQ2FrZVwiOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFN0cmluZy5mcm9tQ2hhckNvZGUoMHhmMWZkKTsgLy9cImZhLWJpcnRoZGF5LWNha2VcIjtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFN0cmluZy5mcm9tQ2hhckNvZGUoMHhmMDZkKTsgLy9cImZhLWZpcmVcIjtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBvbkNsb3NlVGFwKCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMucm91dGVyRXh0ZW5zaW9ucy5iYWNrKCk7XHJcbiAgICB9XHJcblxyXG4gICAgb25Mb2coKXtcclxuICAgICAgICBjb25zb2xlLmxvZygnYWJjJyk7XHJcbiAgICAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgb25BY2hldGVyKCl7XHJcblxyXG4gICAgICAgIHRoaXMuY29tQ2xpZW50LmNsaWVudC5udW11c2VyID0gXCJ1c2VyMlwiIDtcclxuICAgICAgICAvL0NvbnN0ZW50LmNvdW50ID0gQ29uc3RlbnQuY291bnQgKyAxIDtcclxuICAgICAgICB0aGlzLmNvbUNsaWVudC5jb21tYW5kZS5saXZyZXIgPSBmYWxzZSA7XHJcbiAgICAgICAgdGhpcy5jb21DbGllbnQuY29tbWFuZGUuY29uZmlybWVyID0gZmFsc2UgO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMuYW5pbWFsLmlkYW5pbWFsKTtcclxuICAgIFxyXG4gICAgICAgIHRoaXMuY29tQ2xpZW50U2VydmljZS5zYXZlQ29tbWFuZGVDbGllbnQodGhpcy5hbmltYWwuaWRhbmltYWwsdGhpcy5jb21DbGllbnQpXHJcbiAgICAgICAgLnN1YnNjcmliZShkYXRhPT57XHJcbiAgICBcclxuICAgICAgICB9LGVycj0+e1xyXG4gICAgICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgIFxyXG4gICAgICAgIH0pIDtcclxuICAgICAgICBcclxuICAgICAgICAvL3RoaXMucm91dGVyLm5hdmlnYXRlQnlVcmwoXCIvYXBwXCIpIDtcclxuICAgICAgICBcclxuICAgIH1cclxuXHJcbiAgICBcclxuICAgIFxyXG5cclxufVxyXG4iXX0=