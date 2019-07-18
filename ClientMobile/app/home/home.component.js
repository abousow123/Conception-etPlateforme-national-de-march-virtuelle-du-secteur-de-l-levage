"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
var data_1 = require("../data/data");
var text_base_1 = require("tns-core-modules/ui/text-base/text-base");
var color_1 = require("tns-core-modules/color/color");
var animals_service_1 = require("~/services/Animal/animals.service");
var router_2 = require("@angular/router");
var commande_service_1 = require("~/services/Commande/commande.service");
var elementRegistryModule = require("nativescript-angular/element-registry");
var produit_service_1 = require("~/services/Produits/produit.service");
elementRegistryModule.registerElement("CardView", function () { return require("nativescript-cardview").Cardview; });
var HomeComponent = /** @class */ (function () {
    function HomeComponent(routerExtensions, dataService, produitService, animalServices, router, ligneServices) {
        this.routerExtensions = routerExtensions;
        this.dataService = dataService;
        this.produitService = produitService;
        this.animalServices = animalServices;
        this.router = router;
        this.ligneServices = ligneServices;
        this.lastDelY = 0;
        this.headerCollapsed = false;
        this.selectedTab = 0;
        this.selectedTabview = 0;
        this.data = [];
        this.lignes = new Array();
        this.total = 0;
        this.itemsa = [
            { name: "Pancakes!", desc: "Everybody* loves gluten.", price: "$5", imageSrc: "https://placem.at/things?w=500&txt=0&random=9" },
            { name: "Bowl of Crap", desc: "Probably something in here. But probably not.", price: "$1", imageSrc: "https://placem.at/things?w=500&txt=0&random=6" },
            { name: "Motorcycle", desc: "It'll be worth the argument with your spouse.", price: "$8899", imageSrc: "https://placem.at/things?w=500&txt=0&random=1" },
            { name: "Air Plant", desc: "It looked cool in the store.", price: "$9", imageSrc: "https://placem.at/things?w=500&txt=0&random=2" },
            { name: "Cuff Links", desc: "You'll need them once in the next ten years.", price: "$59", imageSrc: "https://placem.at/things?w=500&txt=0&random=4" },
            { name: "Skateboard", desc: "Too bad you are too old to use it.", price: "$129", imageSrc: "https://placem.at/things?w=500&txt=0&random=7" },
            { name: "Off-Brand Soda", desc: "Desperate times we live in.", price: "$2", imageSrc: "https://placem.at/things?w=500&txt=0&random=8" },
            { name: "Beer? Liquor?", desc: "Mmmmm drinky.", price: "$7", imageSrc: "https://placem.at/things?w=500&txt=0&random=10" },
            { name: "Pie!", desc: "Also good.", price: "$15", imageSrc: "https://placem.at/things?w=500&txt=0&random=11" }
        ];
        this.produits = [];
        this.produitElevages = new Array();
        this.produitVeterinaires = new Array();
        this.camera = require("nativescript-camera");
        //Set up to get data from shared service to help moving from mocking data to real API calls in the future
        this.items = this.dataService.getItems();
        this.categories = this.dataService.getCategories();
    }
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.animalServices.getAllAnimals()
            .subscribe(function (data) {
            // console.log(data);
            console.log(data);
            _this.animals = data;
        });
        this.getAllLigneComClients();
        this.getProduits();
        this.data.push({ heading: "Bulbasaur", content: "Bulbasaur can be seen napping in bright sunlight. There is a seed on its back. By soaking up the sun’s rays, the seed grows progressively larger." });
    };
    HomeComponent.prototype.showItem = function (idAnimal) {
        /*console.log(`Tapped on ${itemId}`);
        this.routerExtensions.navigate(["detail/" + itemId, {
            animated: true,
            transition: {
                name: "slideTop",
                duration: 380,
                curve: "easeIn"
            }
        }]);*/ this.router.navigate(['detail', idAnimal]);
    };
    HomeComponent.prototype.toggleLike = function (item) {
        item.isLike = !item.isLike;
        if (item.isLike) {
            item.likes += 1;
        }
        else {
            item.likes -= 1;
        }
    };
    HomeComponent.prototype.toggleHeart = function (item) {
        item.isFavorite = !item.isFavorite;
    };
    HomeComponent.prototype.categoryIcon = function (itemCategory) {
        switch (itemCategory) {
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
    //Top nav bar tap methods
    HomeComponent.prototype.onBellTap = function () {
    };
    HomeComponent.prototype.onSearchTap = function () {
    };
    HomeComponent.prototype.onPopularTap = function () {
        this.selectedTabview = 0;
    };
    HomeComponent.prototype.onCategoryTap = function () {
        this.selectedTabview = 1;
    };
    HomeComponent.prototype.onPromosTap = function () {
        this.selectedTabview = 2;
    };
    //Bottom nav bar tap methods
    HomeComponent.prototype.onHomeTap = function () {
        this.selectedTab = 0;
        this.selectedTabview = 0;
    };
    HomeComponent.prototype.onCartTap = function () {
        this.selectedTab = 2;
        /* this.selectedTabview = 2;
 
         var imageModule = require("tns-core-modules/ui/image");
         this.camera.takePicture()
     .then(function (imageAsset) {
         console.log("Result is an image asset instance");
         var image = new imageModule.Image();
         image.src = imageAsset;
         console.log(image.src);
         
     }).catch(function (err) {
         console.log("Error -> " + err.message);
     });  */
    };
    HomeComponent.prototype.onHistoryTap = function () {
        this.selectedTab = 1;
        // this.selectedTabview =1;
    };
    HomeComponent.prototype.onAboutTap = function () {
        this.selectedTab = 3;
        // this.selectedTabview = 3;
    };
    HomeComponent.prototype.onItemLoading = function (args) {
        // hack to get around issue with RadListView ios background colors: https://github.com/telerik/nativescript-ui-feedback/issues/196
        if (text_base_1.isIOS) {
            var newcolor = new color_1.Color("#e6e6e6");
            args.ios.backgroundView.backgroundColor = newcolor.ios;
        }
    };
    HomeComponent.prototype.getAllLigneComClients = function () {
        var _this = this;
        this.ligneServices.getAllLigneComClients()
            .subscribe(function (data) {
            // console.log(data);
            console.log(data);
            _this.lignes = data;
            for (var _i = 0, _a = _this.lignes; _i < _a.length; _i++) {
                var a = _a[_i];
                _this.total = _this.total + a.animal.prix;
            }
        });
    };
    HomeComponent.prototype.getProduits = function () {
        var _this = this;
        this.produitService.getAllProduits()
            .subscribe(function (data) {
            _this.produits = data;
        });
    };
    HomeComponent.prototype.validerCommande = function () {
        for (var _i = 0, _a = this.lignes; _i < _a.length; _i++) {
            var l = _a[_i];
            l.commandeclient.commande.confirmer = true;
            this.updateLigne(l);
        }
    };
    HomeComponent.prototype.updateLigne = function (ligne) {
        this.ligneServices.updateLigneCommandeClient(ligne)
            .subscribe(function (data) {
            // console.log(data);
        });
    };
    HomeComponent.prototype.deleteLigne = function (ref) {
        var _this = this;
        var confirm = window.confirm('Etes vous sure?');
        if (confirm == true) {
            this.ligneServices.deleteLigneCommandeClient(ref)
                .subscribe(function (data) {
                _this.total = 0;
                _this.getAllLigneComClients();
            }, function (err) {
                console.log(err);
            });
        }
    };
    HomeComponent = __decorate([
        core_1.Component({
            selector: "Home",
            moduleId: module.id,
            templateUrl: "./home.component.html",
        }),
        __metadata("design:paramtypes", [router_1.RouterExtensions, data_1.DataService, produit_service_1.ProduitService,
            animals_service_1.AnimalsService, router_2.Router, commande_service_1.CommandeService])
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJob21lLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFrRDtBQUNsRCxzREFBK0Q7QUFHL0QscUNBQTJDO0FBQzNDLHFFQUFnRTtBQUNoRSxzREFBcUQ7QUFHckQscUVBQW1FO0FBQ25FLDBDQUF5QztBQUV6Qyx5RUFBdUU7QUFFdkUsNkVBQStFO0FBRS9FLHVFQUFxRTtBQUlyRSxxQkFBcUIsQ0FBQyxlQUFlLENBQUMsVUFBVSxFQUFFLGNBQU0sT0FBQSxPQUFPLENBQUMsdUJBQXVCLENBQUMsQ0FBQyxRQUFRLEVBQXpDLENBQXlDLENBQUMsQ0FBRTtBQVVwRztJQWdDSSx1QkFBb0IsZ0JBQWtDLEVBQVUsV0FBd0IsRUFBUyxjQUE2QixFQUN0SCxjQUE2QixFQUFVLE1BQWEsRUFBUyxhQUE2QjtRQUQ5RSxxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO1FBQVUsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFBUyxtQkFBYyxHQUFkLGNBQWMsQ0FBZTtRQUN0SCxtQkFBYyxHQUFkLGNBQWMsQ0FBZTtRQUFVLFdBQU0sR0FBTixNQUFNLENBQU87UUFBUyxrQkFBYSxHQUFiLGFBQWEsQ0FBZ0I7UUEvQmxHLGFBQVEsR0FBRyxDQUFDLENBQUM7UUFDYixvQkFBZSxHQUFHLEtBQUssQ0FBQztRQUN4QixnQkFBVyxHQUFHLENBQUMsQ0FBQztRQUNoQixvQkFBZSxHQUFHLENBQUMsQ0FBQztRQUdwQixTQUFJLEdBQUcsRUFBRSxDQUFDO1FBRVYsV0FBTSxHQUF5QixJQUFJLEtBQUssRUFBRSxDQUFFO1FBQzVDLFVBQUssR0FBVSxDQUFDLENBQUU7UUFFbEIsV0FBTSxHQUFzRTtZQUN4RSxFQUFFLElBQUksRUFBRSxXQUFXLEVBQUUsSUFBSSxFQUFFLDBCQUEwQixFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFLCtDQUErQyxFQUFFO1lBQy9I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QXdCLGdDQUFjO1lBQ3ZHLGdDQUFjLEVBQWlCLGVBQU0sRUFBdUIsa0NBQWU7T0FqQ3pGLGFBQWEsQ0F1T3pCO0lBQUQsb0JBQUM7Q0FBQSxBQXZPRCxJQXVPQztBQXZPWSxzQ0FBYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IFJvdXRlckV4dGVuc2lvbnMgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyXCI7XG5pbXBvcnQgeyBJdGVtIH0gZnJvbSBcIi4uL2RhdGEvaXRlbS5tb2RlbFwiO1xuaW1wb3J0IHsgQ2F0ZWdvcnkgfSBmcm9tIFwiLi4vZGF0YS9jYXRlZ29yeS5tb2RlbFwiO1xuaW1wb3J0IHsgRGF0YVNlcnZpY2UgfSBmcm9tIFwiLi4vZGF0YS9kYXRhXCI7XG5pbXBvcnQgeyBpc0lPUyB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL3RleHQtYmFzZS90ZXh0LWJhc2VcIjtcbmltcG9ydCB7IENvbG9yIH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvY29sb3IvY29sb3JcIjtcbmltcG9ydCB7IFZpZXdDaGlsZCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBFbGVtZW50UmVmIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IEFuaW1hbHNTZXJ2aWNlIH0gZnJvbSBcIn4vc2VydmljZXMvQW5pbWFsL2FuaW1hbHMuc2VydmljZVwiO1xuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xuaW1wb3J0IHsgcmVnaXN0ZXJFbGVtZW50IH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL2VsZW1lbnQtcmVnaXN0cnlcIjtcbmltcG9ydCB7IENvbW1hbmRlU2VydmljZSB9IGZyb20gXCJ+L3NlcnZpY2VzL0NvbW1hbmRlL2NvbW1hbmRlLnNlcnZpY2VcIjtcbmltcG9ydCB7IExpZ25lQ29tbWFuZGVDbGllbnQgfSBmcm9tIFwifi9tb2RlbC9Db21tYW5kZVwiO1xuaW1wb3J0ICogYXMgZWxlbWVudFJlZ2lzdHJ5TW9kdWxlIGZyb20gJ25hdGl2ZXNjcmlwdC1hbmd1bGFyL2VsZW1lbnQtcmVnaXN0cnknO1xuaW1wb3J0ICogYXMgTGFiZWxNb2R1bGUgZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdWkvbGFiZWxcIjtcbmltcG9ydCB7IFByb2R1aXRTZXJ2aWNlIH0gZnJvbSBcIn4vc2VydmljZXMvUHJvZHVpdHMvcHJvZHVpdC5zZXJ2aWNlXCI7XG5pbXBvcnQgeyBQcm9kdWl0IH0gZnJvbSBcIn4vbW9kZWwvcHJvZHVpdFwiO1xuXG5cbmVsZW1lbnRSZWdpc3RyeU1vZHVsZS5yZWdpc3RlckVsZW1lbnQoXCJDYXJkVmlld1wiLCAoKSA9PiByZXF1aXJlKFwibmF0aXZlc2NyaXB0LWNhcmR2aWV3XCIpLkNhcmR2aWV3KSA7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiBcIkhvbWVcIixcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICAgIHRlbXBsYXRlVXJsOiBcIi4vaG9tZS5jb21wb25lbnQuaHRtbFwiLFxuICAgIC8vc3R5bGVVcmxzOiBbJy4vaG9tZS5jb21wb25lbnQuY3NzJ11cbiAgICAvLyBBbGwgc3R5bGVzIHdlcmUgcHV0IGluc2lkZSBvZiBhcHAuY3NzIHNvIHdlIGRvbid0IG5lZWQgYSBob21lLmNvbXBvbmVudC5jc3MgZm9yIG5vd1xufSlcblxuZXhwb3J0IGNsYXNzIEhvbWVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICAgIFxuICAgIGxhc3REZWxZID0gMDtcbiAgICBoZWFkZXJDb2xsYXBzZWQgPSBmYWxzZTtcbiAgICBzZWxlY3RlZFRhYiA9IDA7XG4gICAgc2VsZWN0ZWRUYWJ2aWV3ID0gMDtcbiAgICBpdGVtczogQXJyYXk8SXRlbT47XG4gICAgY2F0ZWdvcmllczogQXJyYXk8Q2F0ZWdvcnk+O1xuICAgIGRhdGEgPSBbXTtcblxuICAgIGxpZ25lczpMaWduZUNvbW1hbmRlQ2xpZW50W10gPSBuZXcgQXJyYXkoKSA7XG4gICAgdG90YWw6bnVtYmVyID0gMCA7XG5cbiAgICBpdGVtc2E6IHsgbmFtZTogc3RyaW5nLCBkZXNjOiBzdHJpbmcsIHByaWNlOiBzdHJpbmcsIGltYWdlU3JjOiBzdHJpbmcgfVtdID0gW1xuICAgICAgICB7IG5hbWU6IFwiUGFuY2FrZXMhXCIsIGRlc2M6IFwiRXZlcnlib2R5KiBsb3ZlcyBnbHV0ZW4uXCIsIHByaWNlOiBcIiQ1XCIsIGltYWdlU3JjOiBcImh0dHBzOi8vcGxhY2VtLmF0L3RoaW5ncz93PTUwMCZ0eHQ9MCZyYW5kb209OVwiIH0sXG4gICAgICAgIHsgbmFtZTogXCJCb3dsIG9mIENyYXBcIiwgZGVzYzogXCJQcm9iYWJseSBzb21ldGhpbmcgaW4gaGVyZS4gQnV0IHByb2JhYmx5IG5vdC5cIiwgcHJpY2U6IFwiJDFcIiwgaW1hZ2VTcmM6IFwiaHR0cHM6Ly9wbGFjZW0uYXQvdGhpbmdzP3c9NTAwJnR4dD0wJnJhbmRvbT02XCIgfSxcbiAgICAgICAgeyBuYW1lOiBcIk1vdG9yY3ljbGVcIiwgZGVzYzogXCJJdCdsbCBiZSB3b3J0aCB0aGUgYXJndW1lbnQgd2l0aCB5b3VyIHNwb3VzZS5cIiwgcHJpY2U6IFwiJDg4OTlcIiwgaW1hZ2VTcmM6IFwiaHR0cHM6Ly9wbGFjZW0uYXQvdGhpbmdzP3c9NTAwJnR4dD0wJnJhbmRvbT0xXCIgfSxcbiAgICAgICAgeyBuYW1lOiBcIkFpciBQbGFudFwiLCBkZXNjOiBcIkl0IGxvb2tlZCBjb29sIGluIHRoZSBzdG9yZS5cIiwgcHJpY2U6IFwiJDlcIiwgaW1hZ2VTcmM6IFwiaHR0cHM6Ly9wbGFjZW0uYXQvdGhpbmdzP3c9NTAwJnR4dD0wJnJhbmRvbT0yXCIgfSxcbiAgICAgICAgeyBuYW1lOiBcIkN1ZmYgTGlua3NcIiwgZGVzYzogXCJZb3UnbGwgbmVlZCB0aGVtIG9uY2UgaW4gdGhlIG5leHQgdGVuIHllYXJzLlwiLCBwcmljZTogXCIkNTlcIiwgaW1hZ2VTcmM6IFwiaHR0cHM6Ly9wbGFjZW0uYXQvdGhpbmdzP3c9NTAwJnR4dD0wJnJhbmRvbT00XCIgfSxcbiAgICAgICAgeyBuYW1lOiBcIlNrYXRlYm9hcmRcIiwgZGVzYzogXCJUb28gYmFkIHlvdSBhcmUgdG9vIG9sZCB0byB1c2UgaXQuXCIsIHByaWNlOiBcIiQxMjlcIiwgaW1hZ2VTcmM6IFwiaHR0cHM6Ly9wbGFjZW0uYXQvdGhpbmdzP3c9NTAwJnR4dD0wJnJhbmRvbT03XCIgfSxcbiAgICAgICAgeyBuYW1lOiBcIk9mZi1CcmFuZCBTb2RhXCIsIGRlc2M6IFwiRGVzcGVyYXRlIHRpbWVzIHdlIGxpdmUgaW4uXCIsIHByaWNlOiBcIiQyXCIsIGltYWdlU3JjOiBcImh0dHBzOi8vcGxhY2VtLmF0L3RoaW5ncz93PTUwMCZ0eHQ9MCZyYW5kb209OFwiIH0sXG4gICAgICAgIHsgbmFtZTogXCJCZWVyPyBMaXF1b3I/XCIsIGRlc2M6IFwiTW1tbW0gZHJpbmt5LlwiLCBwcmljZTogXCIkN1wiLCBpbWFnZVNyYzogXCJodHRwczovL3BsYWNlbS5hdC90aGluZ3M/dz01MDAmdHh0PTAmcmFuZG9tPTEwXCIgfSxcbiAgICAgICAgeyBuYW1lOiBcIlBpZSFcIiwgZGVzYzogXCJBbHNvIGdvb2QuXCIsIHByaWNlOiBcIiQxNVwiLCBpbWFnZVNyYzogXCJodHRwczovL3BsYWNlbS5hdC90aGluZ3M/dz01MDAmdHh0PTAmcmFuZG9tPTExXCIgfVxuICAgIF07XG5cbiAgICBhbmltYWxzOmFueSA7XG4gICAgcHJvZHVpdHMgPSBbXSA7XG4gICAgcHJvZHVpdEVsZXZhZ2VzOlByb2R1aXRbXSA9IG5ldyBBcnJheSgpIDtcbiAgICBwcm9kdWl0VmV0ZXJpbmFpcmVzOlByb2R1aXRbXSA9IG5ldyBBcnJheSgpIDtcblxuICAgIGNhbWVyYSA9IHJlcXVpcmUoXCJuYXRpdmVzY3JpcHQtY2FtZXJhXCIpO1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZXJFeHRlbnNpb25zOiBSb3V0ZXJFeHRlbnNpb25zLCBwcml2YXRlIGRhdGFTZXJ2aWNlOiBEYXRhU2VydmljZSxwcml2YXRlIHByb2R1aXRTZXJ2aWNlOlByb2R1aXRTZXJ2aWNlLFxuICAgIHByaXZhdGUgYW5pbWFsU2VydmljZXM6QW5pbWFsc1NlcnZpY2UsIHByaXZhdGUgcm91dGVyOlJvdXRlcixwcml2YXRlIGxpZ25lU2VydmljZXM6Q29tbWFuZGVTZXJ2aWNlLCkge1xuICAgICAgICAvL1NldCB1cCB0byBnZXQgZGF0YSBmcm9tIHNoYXJlZCBzZXJ2aWNlIHRvIGhlbHAgbW92aW5nIGZyb20gbW9ja2luZyBkYXRhIHRvIHJlYWwgQVBJIGNhbGxzIGluIHRoZSBmdXR1cmVcbiAgICAgICAgdGhpcy5pdGVtcyA9IHRoaXMuZGF0YVNlcnZpY2UuZ2V0SXRlbXMoKTtcbiAgICAgICAgdGhpcy5jYXRlZ29yaWVzID0gdGhpcy5kYXRhU2VydmljZS5nZXRDYXRlZ29yaWVzKCk7XG4gICAgfVxuXG4gICAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuYW5pbWFsU2VydmljZXMuZ2V0QWxsQW5pbWFscygpXG4gICAgICAgIC5zdWJzY3JpYmUoZGF0YT0+e1xuICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhkYXRhKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xuICAgICAgICAgICAgdGhpcy5hbmltYWxzID0gZGF0YVxuICAgICAgICAgICAgXG4gICAgICAgICAgfSkgO1xuXG4gICAgICAgICAgdGhpcy5nZXRBbGxMaWduZUNvbUNsaWVudHMoKSA7XG4gICAgICAgICAgdGhpcy5nZXRQcm9kdWl0cygpIDtcblxuXG4gICAgICAgICAgdGhpcy5kYXRhLnB1c2goeyBoZWFkaW5nOiBcIkJ1bGJhc2F1clwiLCBjb250ZW50OiBcIkJ1bGJhc2F1ciBjYW4gYmUgc2VlbiBuYXBwaW5nIGluIGJyaWdodCBzdW5saWdodC4gVGhlcmUgaXMgYSBzZWVkIG9uIGl0cyBiYWNrLiBCeSBzb2FraW5nIHVwIHRoZSBzdW7igJlzIHJheXMsIHRoZSBzZWVkIGdyb3dzIHByb2dyZXNzaXZlbHkgbGFyZ2VyLlwiIH0pO1xuICAgICAgICAgXG4gICAgfVxuXG4gICAgc2hvd0l0ZW0oaWRBbmltYWw6c3RyaW5nKSB7XG4gICAgICAgIC8qY29uc29sZS5sb2coYFRhcHBlZCBvbiAke2l0ZW1JZH1gKTtcbiAgICAgICAgdGhpcy5yb3V0ZXJFeHRlbnNpb25zLm5hdmlnYXRlKFtcImRldGFpbC9cIiArIGl0ZW1JZCwge1xuICAgICAgICAgICAgYW5pbWF0ZWQ6IHRydWUsXG4gICAgICAgICAgICB0cmFuc2l0aW9uOiB7XG4gICAgICAgICAgICAgICAgbmFtZTogXCJzbGlkZVRvcFwiLFxuICAgICAgICAgICAgICAgIGR1cmF0aW9uOiAzODAsXG4gICAgICAgICAgICAgICAgY3VydmU6IFwiZWFzZUluXCJcbiAgICAgICAgICAgIH1cbiAgICAgICAgfV0pOyovdGhpcy5yb3V0ZXIubmF2aWdhdGUoWydkZXRhaWwnLGlkQW5pbWFsXSkgO1xuXG5cbiAgICB9XG5cbiAgICB0b2dnbGVMaWtlKGl0ZW0pIHtcbiAgICAgICAgaXRlbS5pc0xpa2UgPSAhaXRlbS5pc0xpa2U7XG4gICAgICAgIGlmIChpdGVtLmlzTGlrZSkge1xuICAgICAgICAgICAgaXRlbS5saWtlcyArPSAxO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaXRlbS5saWtlcyAtPSAxO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgdG9nZ2xlSGVhcnQoaXRlbSkge1xuICAgICAgICBpdGVtLmlzRmF2b3JpdGUgPSAhaXRlbS5pc0Zhdm9yaXRlO1xuICAgIH1cblxuICAgIGNhdGVnb3J5SWNvbihpdGVtQ2F0ZWdvcnkpIHtcbiAgICAgICAgc3dpdGNoIChpdGVtQ2F0ZWdvcnkpIHtcbiAgICAgICAgICAgIGNhc2UgXCJCdXJnZXJcIjpcbiAgICAgICAgICAgICAgICByZXR1cm4gU3RyaW5nLmZyb21DaGFyQ29kZSgweGYwZjUpOyAvL1wiZmEtY3V0bGVyeVwiO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcIkJlZXJcIjpcbiAgICAgICAgICAgICAgICByZXR1cm4gU3RyaW5nLmZyb21DaGFyQ29kZSgweGYwZmMpOyAvL1wiZmEtYmVlclwiO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcIlBhbmNha2VcIjpcbiAgICAgICAgICAgICAgICByZXR1cm4gU3RyaW5nLmZyb21DaGFyQ29kZSgweGYwZjQpOyAvL1wiZmEtY29mZmVlXCI7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwiQ2FrZVwiOlxuICAgICAgICAgICAgICAgIHJldHVybiBTdHJpbmcuZnJvbUNoYXJDb2RlKDB4ZjFmZCk7IC8vXCJmYS1iaXJ0aGRheS1jYWtlXCI7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIHJldHVybiBTdHJpbmcuZnJvbUNoYXJDb2RlKDB4ZjA2ZCk7IC8vXCJmYS1maXJlXCI7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICB9XG5cblxuICAgIC8vVG9wIG5hdiBiYXIgdGFwIG1ldGhvZHNcbiAgICBvbkJlbGxUYXAoKSB7XG4gICAgfVxuXG4gICAgb25TZWFyY2hUYXAoKSB7XG4gICAgfVxuXG4gICAgb25Qb3B1bGFyVGFwKCkge1xuICAgICAgICB0aGlzLnNlbGVjdGVkVGFidmlldyA9IDA7XG4gICAgfVxuXG4gICAgb25DYXRlZ29yeVRhcCgpIHtcbiAgICAgICAgdGhpcy5zZWxlY3RlZFRhYnZpZXcgPSAxO1xuICAgIH1cblxuICAgIG9uUHJvbW9zVGFwKCkge1xuICAgICAgICB0aGlzLnNlbGVjdGVkVGFidmlldyA9IDI7XG4gICAgfVxuXG4gICAgLy9Cb3R0b20gbmF2IGJhciB0YXAgbWV0aG9kc1xuICAgIG9uSG9tZVRhcCgpIHtcbiAgICAgICAgdGhpcy5zZWxlY3RlZFRhYiA9IDA7XG4gICAgICAgIHRoaXMuc2VsZWN0ZWRUYWJ2aWV3ID0gMDtcbiAgICB9XG5cbiAgICBvbkNhcnRUYXAoKSB7XG4gICAgICAgIHRoaXMuc2VsZWN0ZWRUYWIgPSAyO1xuICAgICAgIC8qIHRoaXMuc2VsZWN0ZWRUYWJ2aWV3ID0gMjtcblxuICAgICAgICB2YXIgaW1hZ2VNb2R1bGUgPSByZXF1aXJlKFwidG5zLWNvcmUtbW9kdWxlcy91aS9pbWFnZVwiKTtcbiAgICAgICAgdGhpcy5jYW1lcmEudGFrZVBpY3R1cmUoKSAgIFxuICAgIC50aGVuKGZ1bmN0aW9uIChpbWFnZUFzc2V0KSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiUmVzdWx0IGlzIGFuIGltYWdlIGFzc2V0IGluc3RhbmNlXCIpO1xuICAgICAgICB2YXIgaW1hZ2UgPSBuZXcgaW1hZ2VNb2R1bGUuSW1hZ2UoKTtcbiAgICAgICAgaW1hZ2Uuc3JjID0gaW1hZ2VBc3NldDtcbiAgICAgICAgY29uc29sZS5sb2coaW1hZ2Uuc3JjKTtcbiAgICAgICAgXG4gICAgfSkuY2F0Y2goZnVuY3Rpb24gKGVycikge1xuICAgICAgICBjb25zb2xlLmxvZyhcIkVycm9yIC0+IFwiICsgZXJyLm1lc3NhZ2UpO1xuICAgIH0pOyAgKi9cblxuICAgIH1cblxuICAgIG9uSGlzdG9yeVRhcCgpIHtcbiAgICAgICAgdGhpcy5zZWxlY3RlZFRhYiA9IDE7XG4gICAgICAgLy8gdGhpcy5zZWxlY3RlZFRhYnZpZXcgPTE7XG4gICAgfVxuXG4gICAgb25BYm91dFRhcCgpIHtcbiAgICAgICAgdGhpcy5zZWxlY3RlZFRhYiA9IDM7XG4gICAgICAgLy8gdGhpcy5zZWxlY3RlZFRhYnZpZXcgPSAzO1xuICAgIH1cbiAgICBvbkl0ZW1Mb2FkaW5nKGFyZ3MpIHtcbiAgICAgICAgLy8gaGFjayB0byBnZXQgYXJvdW5kIGlzc3VlIHdpdGggUmFkTGlzdFZpZXcgaW9zIGJhY2tncm91bmQgY29sb3JzOiBodHRwczovL2dpdGh1Yi5jb20vdGVsZXJpay9uYXRpdmVzY3JpcHQtdWktZmVlZGJhY2svaXNzdWVzLzE5NlxuICAgICAgICBpZiAoaXNJT1MpIHtcbiAgICAgICAgICAgIHZhciBuZXdjb2xvciA9IG5ldyBDb2xvcihcIiNlNmU2ZTZcIik7XG4gICAgICAgICAgICBhcmdzLmlvcy5iYWNrZ3JvdW5kVmlldy5iYWNrZ3JvdW5kQ29sb3IgPSBuZXdjb2xvci5pb3M7XG4gICAgICAgIH1cbiAgICB9XG5cblxuXG4gICAgZ2V0QWxsTGlnbmVDb21DbGllbnRzKCl7XG4gICAgICAgIHRoaXMubGlnbmVTZXJ2aWNlcy5nZXRBbGxMaWduZUNvbUNsaWVudHMoKVxuICAgICAgICAuc3Vic2NyaWJlKGRhdGE9PntcbiAgICAgICAgICAgLy8gY29uc29sZS5sb2coZGF0YSk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhKTtcbiAgICAgICAgICAgIHRoaXMubGlnbmVzID0gZGF0YSA7XG4gICAgICAgICAgICBmb3IobGV0IGEgb2YgdGhpcy5saWduZXMpe1xuICAgICAgICAgICAgICAgIHRoaXMudG90YWwgPSB0aGlzLnRvdGFsICsgYS5hbmltYWwucHJpeCA7XG4gICAgICAgICAgICB9XG4gICAgXG4gICAgXG4gICAgICAgICAgfSkgO1xuICAgIFxuICAgICAgfVxuXG4gICAgICBnZXRQcm9kdWl0cygpe1xuICAgICAgICB0aGlzLnByb2R1aXRTZXJ2aWNlLmdldEFsbFByb2R1aXRzKClcbiAgICAgICAgLnN1YnNjcmliZShkYXRhPT57XG4gICAgICAgICAgdGhpcy5wcm9kdWl0cyA9IGRhdGEgO1xuICAgICAgICAgIH0pIDtcbiAgXG4gICAgXG4gIFxuICAgICAgfVxuXG5cbiAgICAgIHZhbGlkZXJDb21tYW5kZSgpe1xuICAgICAgICBmb3IobGV0IGwgb2YgdGhpcy5saWduZXMpe1xuICAgICAgICAgIGwuY29tbWFuZGVjbGllbnQuY29tbWFuZGUuY29uZmlybWVyID0gdHJ1ZSA7XG4gICAgICAgICAgdGhpcy51cGRhdGVMaWduZShsKSA7XG4gICAgXG4gICAgICAgIH1cbiAgICBcbiAgICAgIH1cblxuICAgICAgdXBkYXRlTGlnbmUobGlnbmU6TGlnbmVDb21tYW5kZUNsaWVudCl7XG4gICAgICAgIHRoaXMubGlnbmVTZXJ2aWNlcy51cGRhdGVMaWduZUNvbW1hbmRlQ2xpZW50KGxpZ25lKVxuICAgICAgICAuc3Vic2NyaWJlKGRhdGE9PntcbiAgICAgICAgICAvLyBjb25zb2xlLmxvZyhkYXRhKTtcbiAgICBcbiAgICAgICAgIH0pIDtcbiAgICBcbiAgICAgIH1cblxuXG4gICAgICBkZWxldGVMaWduZShyZWY6bnVtYmVyKXtcbiAgICAgICAgbGV0IGNvbmZpcm0gPSB3aW5kb3cuY29uZmlybSgnRXRlcyB2b3VzIHN1cmU/Jyk7XG4gICAgICAgIGlmKGNvbmZpcm09PXRydWUpe1xuICAgICAgICAgIHRoaXMubGlnbmVTZXJ2aWNlcy5kZWxldGVMaWduZUNvbW1hbmRlQ2xpZW50KHJlZilcbiAgICAgICAgICAuc3Vic2NyaWJlKGRhdGE9PntcbiAgICAgICAgICAgdGhpcy50b3RhbCA9IDAgO1xuICAgICAgICAgICB0aGlzLmdldEFsbExpZ25lQ29tQ2xpZW50cygpIDtcbiAgICAgICAgICB9LGVycj0+e1xuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyKTtcbiAgICBcbiAgICAgICAgICB9KSA7XG4gICAgXG4gICAgXG4gICAgXG4gICAgXG4gICAgICAgIH1cbiAgICBcbiAgICAgIH1cbiAgICBcblxufVxuIl19