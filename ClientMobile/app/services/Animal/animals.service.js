"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var operators_1 = require("rxjs/operators");
var ConnexionToServe_1 = require("~/model/ConnexionToServe");
var AnimalsService = /** @class */ (function () {
    function AnimalsService(http) {
        this.http = http;
        this.ipAddress = new ConnexionToServe_1.Serveur();
        this.host = this.ipAddress.ip;
    }
    AnimalsService.prototype.getAllAnimals = function () {
        return this.http.get(this.host + "/Animals")
            .pipe(operators_1.map(function (rest) { return rest.json(); }));
    };
    AnimalsService.prototype.getOneAnimal = function (id) {
        return this.http.get(this.host + "/Animals/" + id)
            .pipe(operators_1.map(function (rest) { return rest.json(); }));
    };
    AnimalsService.prototype.getbyTypeAnimal = function (data) {
        return this.http.get(this.host + "/chercherAnimals?mc=" + data)
            .pipe(operators_1.map(function (rest) { return rest.json(); }));
    };
    AnimalsService.prototype.getAllTypeAnimal = function () {
        return this.http.get(this.host + "/chercherAnimals?mc=")
            .pipe(operators_1.map(function (rest) { return rest.json(); }));
    };
    AnimalsService.prototype.saveAnimal = function (animal) {
        return this.http.post(this.host + "/Animals", animal)
            .pipe(operators_1.map(function (rest) { return rest.json(); }));
    };
    AnimalsService.prototype.updateAnimal = function (animal) {
        return this.http.put(this.host + "/Animals", animal)
            .pipe(operators_1.map(function (rest) { return rest.json(); }));
    };
    AnimalsService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [http_1.Http])
    ], AnimalsService);
    return AnimalsService;
}());
exports.AnimalsService = AnimalsService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5pbWFscy5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYW5pbWFscy5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTJDO0FBQzNDLHNDQUFxQztBQUNyQyw0Q0FBcUM7QUFFckMsNkRBQW1EO0FBTW5EO0lBS0Usd0JBQW9CLElBQVM7UUFBVCxTQUFJLEdBQUosSUFBSSxDQUFLO1FBSDdCLGNBQVMsR0FBVyxJQUFJLDBCQUFPLEVBQUUsQ0FBRTtRQUNuQyxTQUFJLEdBQVMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxFQUFFLENBQUU7SUFFQyxDQUFDO0lBRWxDLHNDQUFhLEdBQWI7UUFDRSxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLEdBQUMsVUFBVSxDQUFDO2FBQ3pDLElBQUksQ0FBQyxlQUFHLENBQUMsVUFBQSxJQUFJLElBQUUsT0FBQSxJQUFJLENBQUMsSUFBSSxFQUFFLEVBQVgsQ0FBVyxDQUFDLENBQUMsQ0FBRTtJQUNqQyxDQUFDO0lBRUQscUNBQVksR0FBWixVQUFhLEVBQVM7UUFDcEIsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxHQUFDLFdBQVcsR0FBQyxFQUFFLENBQUM7YUFDN0MsSUFBSSxDQUFDLGVBQUcsQ0FBQyxVQUFBLElBQUksSUFBRSxPQUFBLElBQUksQ0FBQyxJQUFJLEVBQUUsRUFBWCxDQUFXLENBQUMsQ0FBQyxDQUFFO0lBQ2pDLENBQUM7SUFFRCx3Q0FBZSxHQUFmLFVBQWdCLElBQUk7UUFDbEIsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxHQUFDLHNCQUFzQixHQUFDLElBQUksQ0FBQzthQUMxRCxJQUFJLENBQUMsZUFBRyxDQUFDLFVBQUEsSUFBSSxJQUFFLE9BQUEsSUFBSSxDQUFDLElBQUksRUFBRSxFQUFYLENBQVcsQ0FBQyxDQUFDLENBQUU7SUFDbkMsQ0FBQztJQUVELHlDQUFnQixHQUFoQjtRQUNJLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksR0FBQyxzQkFBc0IsQ0FBQzthQUNyRCxJQUFJLENBQUMsZUFBRyxDQUFDLFVBQUEsSUFBSSxJQUFFLE9BQUEsSUFBSSxDQUFDLElBQUksRUFBRSxFQUFYLENBQVcsQ0FBQyxDQUFDLENBQUU7SUFDbkMsQ0FBQztJQUVFLG1DQUFVLEdBQVYsVUFBVyxNQUFhO1FBQ3ZCLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksR0FBQyxVQUFVLEVBQUMsTUFBTSxDQUFDO2FBQ2pELElBQUksQ0FBQyxlQUFHLENBQUMsVUFBQSxJQUFJLElBQUUsT0FBQSxJQUFJLENBQUMsSUFBSSxFQUFFLEVBQVgsQ0FBVyxDQUFDLENBQUMsQ0FBRTtJQUNoQyxDQUFDO0lBRUQscUNBQVksR0FBWixVQUFhLE1BQWE7UUFDekIsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxHQUFDLFVBQVUsRUFBQyxNQUFNLENBQUM7YUFDaEQsSUFBSSxDQUFDLGVBQUcsQ0FBQyxVQUFBLElBQUksSUFBRSxPQUFBLElBQUksQ0FBQyxJQUFJLEVBQUUsRUFBWCxDQUFXLENBQUMsQ0FBQyxDQUFFO0lBQ2hDLENBQUM7SUFuQ1MsY0FBYztRQUgxQixpQkFBVSxDQUFDO1lBQ1YsVUFBVSxFQUFFLE1BQU07U0FDbkIsQ0FBQzt5Q0FNeUIsV0FBSTtPQUxsQixjQUFjLENBc0MxQjtJQUFELHFCQUFDO0NBQUEsQUF0Q0QsSUFzQ0M7QUF0Q1ksd0NBQWMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBIdHRwIH0gZnJvbSAnQGFuZ3VsYXIvaHR0cCc7XG5pbXBvcnQgeyBtYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBBbmltYWwgfSBmcm9tICd+L21vZGVsL0FuaW1hbCc7XG5pbXBvcnQgeyBTZXJ2ZXVyIH0gZnJvbSAnfi9tb2RlbC9Db25uZXhpb25Ub1NlcnZlJztcblxuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBBbmltYWxzU2VydmljZSB7XG5cbiAgaXBBZGRyZXNzOlNlcnZldXIgPSBuZXcgU2VydmV1cigpIDtcbiAgaG9zdDpzdHJpbmc9IHRoaXMuaXBBZGRyZXNzLmlwIDtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHA6SHR0cCkgeyB9IFxuXG4gIGdldEFsbEFuaW1hbHMoKXtcbiAgICByZXR1cm4gdGhpcy5odHRwLmdldCh0aGlzLmhvc3QrXCIvQW5pbWFsc1wiKVxuICAgIC5waXBlKG1hcChyZXN0PT5yZXN0Lmpzb24oKSkpIDtcbiAgfVxuXG4gIGdldE9uZUFuaW1hbChpZDpzdHJpbmcpe1xuICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KHRoaXMuaG9zdCtcIi9BbmltYWxzL1wiK2lkKVxuICAgIC5waXBlKG1hcChyZXN0PT5yZXN0Lmpzb24oKSkpIDtcbiAgfVxuXG4gIGdldGJ5VHlwZUFuaW1hbChkYXRhKXtcbiAgICByZXR1cm4gdGhpcy5odHRwLmdldCh0aGlzLmhvc3QrXCIvY2hlcmNoZXJBbmltYWxzP21jPVwiK2RhdGEpXG4gICAgLnBpcGUobWFwKHJlc3Q9PnJlc3QuanNvbigpKSkgO1xufVxuXG5nZXRBbGxUeXBlQW5pbWFsKCl7XG4gICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQodGhpcy5ob3N0K1wiL2NoZXJjaGVyQW5pbWFscz9tYz1cIilcbiAgICAucGlwZShtYXAocmVzdD0+cmVzdC5qc29uKCkpKSA7XG59XG5cbiAgIHNhdmVBbmltYWwoYW5pbWFsOkFuaW1hbCl7XG4gICAgcmV0dXJuIHRoaXMuaHR0cC5wb3N0KHRoaXMuaG9zdCtcIi9BbmltYWxzXCIsYW5pbWFsKVxuICAgIC5waXBlKG1hcChyZXN0PT5yZXN0Lmpzb24oKSkpIDtcbiAgIH1cblxuICAgdXBkYXRlQW5pbWFsKGFuaW1hbDpBbmltYWwpe1xuICAgIHJldHVybiB0aGlzLmh0dHAucHV0KHRoaXMuaG9zdCtcIi9BbmltYWxzXCIsYW5pbWFsKVxuICAgIC5waXBlKG1hcChyZXN0PT5yZXN0Lmpzb24oKSkpIDtcbiAgIH1cbiAgIFxuXG59XG4iXX0=