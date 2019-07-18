"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var operators_1 = require("rxjs/operators");
var http_1 = require("@angular/http");
var ConnexionToServe_1 = require("~/model/ConnexionToServe");
var PayementService = /** @class */ (function () {
    function PayementService(http) {
        this.http = http;
        this.ipAddress = new ConnexionToServe_1.Serveur();
        this.host = this.ipAddress.ip;
    }
    /* Servies PayementComClient
    *********************************************************************************** */
    PayementService.prototype.getAllPayementComClients = function () {
        return this.http.get(this.host + "/PayementComClients")
            .pipe(operators_1.map(function (rest) { return rest.json(); }));
    };
    PayementService.prototype.getOnePayementComClient = function (id) {
        return this.http.get(this.host + "/PayementComClients/" + id)
            .pipe(operators_1.map(function (rest) { return rest.json(); }));
    };
    PayementService.prototype.savePayementComClient = function (pc) {
        return this.http.post(this.host + "/PayementComClients", pc)
            .pipe(operators_1.map(function (rest) { return rest.json(); }));
    };
    PayementService.prototype.updatePayementComClient = function (pc) {
        return this.http.put(this.host + "/PayementComClients", pc)
            .pipe(operators_1.map(function (rest) { return rest.json(); }));
    };
    PayementService.prototype.deletePayementComClient = function (id) {
        return this.http.delete(this.host + "/PayementComClients/" + id)
            .pipe(operators_1.map(function (rest) { return rest.json(); }));
    };
    /* Servies PayementComEleveur
    *********************************************************************************** */
    PayementService.prototype.getAllPayementComEleveurs = function () {
        return this.http.get(this.host + "/PayementComEleveurs")
            .pipe(operators_1.map(function (rest) { return rest.json(); }));
    };
    PayementService.prototype.getOnePayementComEleveurs = function (id) {
        return this.http.get(this.host + "/PayementComEleveurs/" + id)
            .pipe(operators_1.map(function (rest) { return rest.json(); }));
    };
    PayementService.prototype.savePayementComEleveur = function (pe) {
        return this.http.post(this.host + "/PayementComEleveurs", pe)
            .pipe(operators_1.map(function (rest) { return rest.json(); }));
    };
    PayementService.prototype.updatePayementComEleveur = function (pe) {
        return this.http.put(this.host + "/PayementComEleveurs", pe)
            .pipe(operators_1.map(function (rest) { return rest.json(); }));
    };
    PayementService.prototype.deletePayementComEleveur = function (id) {
        return this.http.delete(this.host + "/PayementComEleveurs/" + id)
            .pipe(operators_1.map(function (rest) { return rest.json(); }));
    };
    PayementService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [http_1.Http])
    ], PayementService);
    return PayementService;
}());
exports.PayementService = PayementService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGF5ZW1lbnQuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInBheWVtZW50LnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMkM7QUFFM0MsNENBQXFDO0FBRXJDLHNDQUFxQztBQUNyQyw2REFBbUQ7QUFNbkQ7SUFLRSx5QkFBb0IsSUFBUztRQUFULFNBQUksR0FBSixJQUFJLENBQUs7UUFIN0IsY0FBUyxHQUFXLElBQUksMEJBQU8sRUFBRSxDQUFFO1FBQ25DLFNBQUksR0FBUyxJQUFJLENBQUMsU0FBUyxDQUFDLEVBQUUsQ0FBRTtJQUVDLENBQUM7SUFFbEM7MEZBQ3NGO0lBQ3RGLGtEQUF3QixHQUF4QjtRQUNFLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksR0FBQyxxQkFBcUIsQ0FBQzthQUNwRCxJQUFJLENBQUMsZUFBRyxDQUFDLFVBQUEsSUFBSSxJQUFFLE9BQUEsSUFBSSxDQUFDLElBQUksRUFBRSxFQUFYLENBQVcsQ0FBQyxDQUFDLENBQUU7SUFDakMsQ0FBQztJQUVELGlEQUF1QixHQUF2QixVQUF3QixFQUFTO1FBQy9CLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksR0FBQyxzQkFBc0IsR0FBQyxFQUFFLENBQUM7YUFDeEQsSUFBSSxDQUFDLGVBQUcsQ0FBQyxVQUFBLElBQUksSUFBRSxPQUFBLElBQUksQ0FBQyxJQUFJLEVBQUUsRUFBWCxDQUFXLENBQUMsQ0FBQyxDQUFFO0lBQ2pDLENBQUM7SUFFRCwrQ0FBcUIsR0FBckIsVUFBc0IsRUFBb0I7UUFDeEMsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxHQUFDLHFCQUFxQixFQUFDLEVBQUUsQ0FBQzthQUN4RCxJQUFJLENBQUMsZUFBRyxDQUFDLFVBQUEsSUFBSSxJQUFFLE9BQUEsSUFBSSxDQUFDLElBQUksRUFBRSxFQUFYLENBQVcsQ0FBQyxDQUFDLENBQUU7SUFDakMsQ0FBQztJQUVELGlEQUF1QixHQUF2QixVQUF3QixFQUFvQjtRQUMxQyxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLEdBQUMscUJBQXFCLEVBQUMsRUFBRSxDQUFDO2FBQ3ZELElBQUksQ0FBQyxlQUFHLENBQUMsVUFBQSxJQUFJLElBQUUsT0FBQSxJQUFJLENBQUMsSUFBSSxFQUFFLEVBQVgsQ0FBVyxDQUFDLENBQUMsQ0FBRTtJQUNqQyxDQUFDO0lBRUQsaURBQXVCLEdBQXZCLFVBQXdCLEVBQVM7UUFDL0IsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxHQUFDLHNCQUFzQixHQUFDLEVBQUUsQ0FBQzthQUMzRCxJQUFJLENBQUMsZUFBRyxDQUFDLFVBQUEsSUFBSSxJQUFFLE9BQUEsSUFBSSxDQUFDLElBQUksRUFBRSxFQUFYLENBQVcsQ0FBQyxDQUFDLENBQUU7SUFDakMsQ0FBQztJQUdEOzBGQUNzRjtJQUV0RixtREFBeUIsR0FBekI7UUFDRSxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLEdBQUMsc0JBQXNCLENBQUM7YUFDckQsSUFBSSxDQUFDLGVBQUcsQ0FBQyxVQUFBLElBQUksSUFBRSxPQUFBLElBQUksQ0FBQyxJQUFJLEVBQUUsRUFBWCxDQUFXLENBQUMsQ0FBQyxDQUFFO0lBQ2pDLENBQUM7SUFFRCxtREFBeUIsR0FBekIsVUFBMEIsRUFBUztRQUNqQyxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLEdBQUMsdUJBQXVCLEdBQUMsRUFBRSxDQUFDO2FBQ3pELElBQUksQ0FBQyxlQUFHLENBQUMsVUFBQSxJQUFJLElBQUUsT0FBQSxJQUFJLENBQUMsSUFBSSxFQUFFLEVBQVgsQ0FBVyxDQUFDLENBQUMsQ0FBRTtJQUNqQyxDQUFDO0lBRUQsZ0RBQXNCLEdBQXRCLFVBQXVCLEVBQXFCO1FBQzFDLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksR0FBQyxzQkFBc0IsRUFBQyxFQUFFLENBQUM7YUFDekQsSUFBSSxDQUFDLGVBQUcsQ0FBQyxVQUFBLElBQUksSUFBRSxPQUFBLElBQUksQ0FBQyxJQUFJLEVBQUUsRUFBWCxDQUFXLENBQUMsQ0FBQyxDQUFFO0lBQ2pDLENBQUM7SUFFRCxrREFBd0IsR0FBeEIsVUFBeUIsRUFBcUI7UUFDNUMsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxHQUFDLHNCQUFzQixFQUFDLEVBQUUsQ0FBQzthQUN4RCxJQUFJLENBQUMsZUFBRyxDQUFDLFVBQUEsSUFBSSxJQUFFLE9BQUEsSUFBSSxDQUFDLElBQUksRUFBRSxFQUFYLENBQVcsQ0FBQyxDQUFDLENBQUU7SUFDakMsQ0FBQztJQUVELGtEQUF3QixHQUF4QixVQUF5QixFQUFTO1FBQ2hDLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksR0FBQyx1QkFBdUIsR0FBQyxFQUFFLENBQUM7YUFDNUQsSUFBSSxDQUFDLGVBQUcsQ0FBQyxVQUFBLElBQUksSUFBRSxPQUFBLElBQUksQ0FBQyxJQUFJLEVBQUUsRUFBWCxDQUFXLENBQUMsQ0FBQyxDQUFFO0lBQ2pDLENBQUM7SUE3RFUsZUFBZTtRQUgzQixpQkFBVSxDQUFDO1lBQ1YsVUFBVSxFQUFFLE1BQU07U0FDbkIsQ0FBQzt5Q0FNeUIsV0FBSTtPQUxsQixlQUFlLENBZ0UzQjtJQUFELHNCQUFDO0NBQUEsQUFoRUQsSUFnRUM7QUFoRVksMENBQWUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IG1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IFBheWVtZW50Q29tQ2xpZW50LCBQYXllbWVudENvbUVsZXZldXIgfSBmcm9tICd+L21vZGVsL1BheWVtZW50JztcbmltcG9ydCB7IEh0dHAgfSBmcm9tICdAYW5ndWxhci9odHRwJztcbmltcG9ydCB7IFNlcnZldXIgfSBmcm9tICd+L21vZGVsL0Nvbm5leGlvblRvU2VydmUnO1xuXG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIFBheWVtZW50U2VydmljZSB7XG5cbiAgaXBBZGRyZXNzOlNlcnZldXIgPSBuZXcgU2VydmV1cigpIDtcbiAgaG9zdDpzdHJpbmc9IHRoaXMuaXBBZGRyZXNzLmlwIDtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHA6SHR0cCkgeyB9XG5cbiAgLyogU2VydmllcyBQYXllbWVudENvbUNsaWVudFxuICAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiAqLyBcbiAgZ2V0QWxsUGF5ZW1lbnRDb21DbGllbnRzKCl7XG4gICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQodGhpcy5ob3N0K1wiL1BheWVtZW50Q29tQ2xpZW50c1wiKVxuICAgIC5waXBlKG1hcChyZXN0PT5yZXN0Lmpzb24oKSkpIDtcbiAgfVxuXG4gIGdldE9uZVBheWVtZW50Q29tQ2xpZW50KGlkOnN0cmluZyl7XG4gICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQodGhpcy5ob3N0K1wiL1BheWVtZW50Q29tQ2xpZW50cy9cIitpZClcbiAgICAucGlwZShtYXAocmVzdD0+cmVzdC5qc29uKCkpKSA7XG4gIH1cblxuICBzYXZlUGF5ZW1lbnRDb21DbGllbnQocGM6UGF5ZW1lbnRDb21DbGllbnQpe1xuICAgIHJldHVybiB0aGlzLmh0dHAucG9zdCh0aGlzLmhvc3QrXCIvUGF5ZW1lbnRDb21DbGllbnRzXCIscGMpXG4gICAgLnBpcGUobWFwKHJlc3Q9PnJlc3QuanNvbigpKSkgO1xuICB9XG5cbiAgdXBkYXRlUGF5ZW1lbnRDb21DbGllbnQocGM6UGF5ZW1lbnRDb21DbGllbnQpe1xuICAgIHJldHVybiB0aGlzLmh0dHAucHV0KHRoaXMuaG9zdCtcIi9QYXllbWVudENvbUNsaWVudHNcIixwYylcbiAgICAucGlwZShtYXAocmVzdD0+cmVzdC5qc29uKCkpKSA7XG4gIH1cblxuICBkZWxldGVQYXllbWVudENvbUNsaWVudChpZDpzdHJpbmcpe1xuICAgIHJldHVybiB0aGlzLmh0dHAuZGVsZXRlKHRoaXMuaG9zdCtcIi9QYXllbWVudENvbUNsaWVudHMvXCIraWQpXG4gICAgLnBpcGUobWFwKHJlc3Q9PnJlc3QuanNvbigpKSkgO1xuICB9XG5cblxuICAvKiBTZXJ2aWVzIFBheWVtZW50Q29tRWxldmV1clxuICAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiAqLyBcbiAgXG4gIGdldEFsbFBheWVtZW50Q29tRWxldmV1cnMoKXtcbiAgICByZXR1cm4gdGhpcy5odHRwLmdldCh0aGlzLmhvc3QrXCIvUGF5ZW1lbnRDb21FbGV2ZXVyc1wiKVxuICAgIC5waXBlKG1hcChyZXN0PT5yZXN0Lmpzb24oKSkpIDtcbiAgfVxuXG4gIGdldE9uZVBheWVtZW50Q29tRWxldmV1cnMoaWQ6c3RyaW5nKXtcbiAgICByZXR1cm4gdGhpcy5odHRwLmdldCh0aGlzLmhvc3QrXCIvUGF5ZW1lbnRDb21FbGV2ZXVycy9cIitpZClcbiAgICAucGlwZShtYXAocmVzdD0+cmVzdC5qc29uKCkpKSA7XG4gIH1cblxuICBzYXZlUGF5ZW1lbnRDb21FbGV2ZXVyKHBlOlBheWVtZW50Q29tRWxldmV1cil7XG4gICAgcmV0dXJuIHRoaXMuaHR0cC5wb3N0KHRoaXMuaG9zdCtcIi9QYXllbWVudENvbUVsZXZldXJzXCIscGUpXG4gICAgLnBpcGUobWFwKHJlc3Q9PnJlc3QuanNvbigpKSkgO1xuICB9XG5cbiAgdXBkYXRlUGF5ZW1lbnRDb21FbGV2ZXVyKHBlOlBheWVtZW50Q29tRWxldmV1cil7XG4gICAgcmV0dXJuIHRoaXMuaHR0cC5wdXQodGhpcy5ob3N0K1wiL1BheWVtZW50Q29tRWxldmV1cnNcIixwZSlcbiAgICAucGlwZShtYXAocmVzdD0+cmVzdC5qc29uKCkpKSA7XG4gIH1cblxuICBkZWxldGVQYXllbWVudENvbUVsZXZldXIoaWQ6c3RyaW5nKXtcbiAgICByZXR1cm4gdGhpcy5odHRwLmRlbGV0ZSh0aGlzLmhvc3QrXCIvUGF5ZW1lbnRDb21FbGV2ZXVycy9cIitpZClcbiAgICAucGlwZShtYXAocmVzdD0+cmVzdC5qc29uKCkpKSA7XG4gIH1cblxuXG59XG4iXX0=