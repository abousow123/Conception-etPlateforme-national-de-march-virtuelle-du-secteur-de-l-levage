"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var operators_1 = require("rxjs/operators");
var ConnexionToServe_1 = require("~/model/ConnexionToServe");
var ProduitService = /** @class */ (function () {
    function ProduitService(http) {
        this.http = http;
        this.ipAddress = new ConnexionToServe_1.Serveur();
        this.host = this.ipAddress.ip;
    }
    /* les Services du Produit
       ************************************************************************************************  */
    ProduitService.prototype.getAllProduits = function () {
        return this.http.get(this.host + "/Produits")
            .pipe(operators_1.map(function (rest) { return rest.json(); }));
    };
    /* les Services du ProduitElevage
       ************************************************************************************************  */
    ProduitService.prototype.getAllProduitElevages = function () {
        return this.http.get(this.host + "/ProduitElevages")
            .pipe(operators_1.map(function (rest) { return rest.json(); }));
    };
    ProduitService.prototype.getOneProduitElevage = function (ref) {
        return this.http.get(this.host + "/ProduitElevages/" + ref)
            .pipe(operators_1.map(function (rest) { return rest.json(); }));
    };
    ProduitService.prototype.saveProduitElevage = function (p) {
        return this.http.post(this.host + "/ProduitElevages", p)
            .pipe(operators_1.map(function (rest) { return rest.json(); }));
    };
    ProduitService.prototype.updateProduitElevage = function (p) {
        return this.http.put(this.host + "/ProduitElevages", p)
            .pipe(operators_1.map(function (rest) { return rest.json(); }));
    };
    ProduitService.prototype.deleteProduitElevage = function (ref) {
        return this.http.delete(this.host + "/ProduitElevages/" + ref)
            .pipe(operators_1.map(function (rest) { return rest.json(); }));
    };
    /* les Services du ProduitVeterinaire
     ************************************************************************************************  */
    ProduitService.prototype.getAllProduitVeterinaires = function () {
        return this.http.get(this.host + "/ProduitVeterinaires")
            .pipe(operators_1.map(function (rest) { return rest.json(); }));
    };
    ProduitService.prototype.getOneProduitVeterinaires = function (ref) {
        return this.http.get(this.host + "/ProduitVeterinaires/" + ref)
            .pipe(operators_1.map(function (rest) { return rest.json(); }));
    };
    ProduitService.prototype.saveProduitVeterinaires = function (p) {
        return this.http.post(this.host + "/ProduitVeterinaires", p)
            .pipe(operators_1.map(function (rest) { return rest.json(); }));
    };
    ProduitService.prototype.updateProduitVeterinaires = function (p) {
        return this.http.put(this.host + "/ProduitVeterinaires", p)
            .pipe(operators_1.map(function (rest) { return rest.json(); }));
    };
    ProduitService.prototype.deleteProduitVeterinaires = function (ref) {
        return this.http.delete(this.host + "/ProduitVeterinaires/" + ref)
            .pipe(operators_1.map(function (rest) { return rest.json(); }));
    };
    ProduitService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [http_1.Http])
    ], ProduitService);
    return ProduitService;
}());
exports.ProduitService = ProduitService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVpdC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicHJvZHVpdC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTJDO0FBQzNDLHNDQUFxQztBQUNyQyw0Q0FBcUM7QUFFckMsNkRBQW1EO0FBS25EO0lBS0Usd0JBQW9CLElBQVM7UUFBVCxTQUFJLEdBQUosSUFBSSxDQUFLO1FBSDdCLGNBQVMsR0FBVyxJQUFJLDBCQUFPLEVBQUUsQ0FBRTtRQUNuQyxTQUFJLEdBQVMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxFQUFFLENBQUU7SUFFQyxDQUFDO0lBRWxDOzJHQUN1RztJQUVyRyx1Q0FBYyxHQUFkO1FBQ0UsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxHQUFDLFdBQVcsQ0FBQzthQUMxQyxJQUFJLENBQUMsZUFBRyxDQUFDLFVBQUEsSUFBSSxJQUFFLE9BQUEsSUFBSSxDQUFDLElBQUksRUFBRSxFQUFYLENBQVcsQ0FBQyxDQUFDLENBQUU7SUFDaEMsQ0FBQztJQUdKOzJHQUN1RztJQUVwRyw4Q0FBcUIsR0FBckI7UUFDQyxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLEdBQUMsa0JBQWtCLENBQUM7YUFDakQsSUFBSSxDQUFDLGVBQUcsQ0FBQyxVQUFBLElBQUksSUFBRSxPQUFBLElBQUksQ0FBQyxJQUFJLEVBQUUsRUFBWCxDQUFXLENBQUMsQ0FBQyxDQUFFO0lBQ2hDLENBQUM7SUFFRCw2Q0FBb0IsR0FBcEIsVUFBcUIsR0FBVTtRQUM3QixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLEdBQUMsbUJBQW1CLEdBQUMsR0FBRyxDQUFDO2FBQ3ZELElBQUksQ0FBQyxlQUFHLENBQUMsVUFBQSxJQUFJLElBQUUsT0FBQSxJQUFJLENBQUMsSUFBSSxFQUFFLEVBQVgsQ0FB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LFdBQUk7T0FMbEIsY0FBYyxDQTZFMUI7SUFBRCxxQkFBQztDQUFBLEFBN0VELElBNkVDO0FBN0VZLHdDQUFjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSHR0cCB9IGZyb20gJ0Bhbmd1bGFyL2h0dHAnO1xuaW1wb3J0IHsgbWFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgUHJvZHVpdFZldGVyaW5haXJlLCBQcm9kdWl0RWxldmFnZSB9IGZyb20gJy4uLy4uL21vZGVsL3Byb2R1aXQnO1xuaW1wb3J0IHsgU2VydmV1ciB9IGZyb20gJ34vbW9kZWwvQ29ubmV4aW9uVG9TZXJ2ZSc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIFByb2R1aXRTZXJ2aWNlIHtcblxuICBpcEFkZHJlc3M6U2VydmV1ciA9IG5ldyBTZXJ2ZXVyKCkgO1xuICBob3N0OnN0cmluZz0gdGhpcy5pcEFkZHJlc3MuaXAgO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cDpIdHRwKSB7IH1cblxuICAvKiBsZXMgU2VydmljZXMgZHUgUHJvZHVpdFxuICAgICAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiogICovXG4gIFxuICAgIGdldEFsbFByb2R1aXRzKCl7XG4gICAgICByZXR1cm4gdGhpcy5odHRwLmdldCh0aGlzLmhvc3QrXCIvUHJvZHVpdHNcIilcbiAgICAgIC5waXBlKG1hcChyZXN0PT5yZXN0Lmpzb24oKSkpIDtcbiAgICAgfVxuXG5cbiAgLyogbGVzIFNlcnZpY2VzIGR1IFByb2R1aXRFbGV2YWdlXG4gICAgICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiAgKi9cblxuICAgICBnZXRBbGxQcm9kdWl0RWxldmFnZXMoKXtcbiAgICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KHRoaXMuaG9zdCtcIi9Qcm9kdWl0RWxldmFnZXNcIilcbiAgICAgIC5waXBlKG1hcChyZXN0PT5yZXN0Lmpzb24oKSkpIDtcbiAgICAgfVxuXG4gICAgIGdldE9uZVByb2R1aXRFbGV2YWdlKHJlZjpzdHJpbmcpe1xuICAgICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KHRoaXMuaG9zdCtcIi9Qcm9kdWl0RWxldmFnZXMvXCIrcmVmKVxuICAgICAgLnBpcGUobWFwKHJlc3Q9PnJlc3QuanNvbigpKSkgO1xuICAgICB9XG5cbiAgICAgc2F2ZVByb2R1aXRFbGV2YWdlKHA6UHJvZHVpdEVsZXZhZ2Upe1xuICAgICAgcmV0dXJuIHRoaXMuaHR0cC5wb3N0KHRoaXMuaG9zdCtcIi9Qcm9kdWl0RWxldmFnZXNcIixwKVxuICAgICAgLnBpcGUobWFwKHJlc3Q9PnJlc3QuanNvbigpKSkgO1xuICAgICB9XG5cbiAgICAgdXBkYXRlUHJvZHVpdEVsZXZhZ2UocDpQcm9kdWl0RWxldmFnZSl7XG4gICAgICByZXR1cm4gdGhpcy5odHRwLnB1dCh0aGlzLmhvc3QrXCIvUHJvZHVpdEVsZXZhZ2VzXCIscClcbiAgICAgIC5waXBlKG1hcChyZXN0PT5yZXN0Lmpzb24oKSkpIDtcbiAgICAgfVxuXG4gICAgIGRlbGV0ZVByb2R1aXRFbGV2YWdlKHJlZjpzdHJpbmcpe1xuICAgICAgcmV0dXJuIHRoaXMuaHR0cC5kZWxldGUodGhpcy5ob3N0K1wiL1Byb2R1aXRFbGV2YWdlcy9cIityZWYpXG4gICAgIC5waXBlKG1hcChyZXN0PT5yZXN0Lmpzb24oKSkpIDtcbiAgICB9XG5cblxuICAgIC8qIGxlcyBTZXJ2aWNlcyBkdSBQcm9kdWl0VmV0ZXJpbmFpcmVcbiAgICAgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqICAqL1xuXG4gICAgIGdldEFsbFByb2R1aXRWZXRlcmluYWlyZXMoKXtcbiAgICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KHRoaXMuaG9zdCtcIi9Qcm9kdWl0VmV0ZXJpbmFpcmVzXCIpXG4gICAgICAucGlwZShtYXAocmVzdD0+cmVzdC5qc29uKCkpKSA7XG4gICAgIH1cblxuICAgICBnZXRPbmVQcm9kdWl0VmV0ZXJpbmFpcmVzKHJlZjpzdHJpbmcpe1xuICAgICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQodGhpcy5ob3N0K1wiL1Byb2R1aXRWZXRlcmluYWlyZXMvXCIrcmVmKVxuICAgICAgLnBpcGUobWFwKHJlc3Q9PnJlc3QuanNvbigpKSkgO1xuICAgICB9XG5cbiAgICAgc2F2ZVByb2R1aXRWZXRlcmluYWlyZXMocDpQcm9kdWl0VmV0ZXJpbmFpcmUpe1xuICAgICAgcmV0dXJuIHRoaXMuaHR0cC5wb3N0KHRoaXMuaG9zdCtcIi9Qcm9kdWl0VmV0ZXJpbmFpcmVzXCIscClcbiAgICAgIC5waXBlKG1hcChyZXN0PT5yZXN0Lmpzb24oKSkpIDtcbiAgICAgfVxuXG4gICAgIHVwZGF0ZVByb2R1aXRWZXRlcmluYWlyZXMocDpQcm9kdWl0VmV0ZXJpbmFpcmUpe1xuICAgICAgcmV0dXJuIHRoaXMuaHR0cC5wdXQodGhpcy5ob3N0K1wiL1Byb2R1aXRWZXRlcmluYWlyZXNcIixwKVxuICAgICAgLnBpcGUobWFwKHJlc3Q9PnJlc3QuanNvbigpKSkgO1xuICAgICB9XG5cbiAgICAgZGVsZXRlUHJvZHVpdFZldGVyaW5haXJlcyhyZWY6c3RyaW5nKXtcbiAgICAgIHJldHVybiB0aGlzLmh0dHAuZGVsZXRlKHRoaXMuaG9zdCtcIi9Qcm9kdWl0VmV0ZXJpbmFpcmVzL1wiK3JlZilcbiAgICAgIC5waXBlKG1hcChyZXN0PT5yZXN0Lmpzb24oKSkpIDtcbiAgICAgfVxuXG5cblxuXG4gIFxufVxuIl19