"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var operators_1 = require("rxjs/operators");
var ConnexionToServe_1 = require("~/model/ConnexionToServe");
var CommandeService = /** @class */ (function () {
    function CommandeService(http) {
        this.http = http;
        this.ipAddress = new ConnexionToServe_1.Serveur();
        this.host = this.ipAddress.ip;
    }
    /* Servies Commande
    *********************************************************************************** */
    CommandeService.prototype.getAllCommandes = function () {
        return this.http.get(this.host + "/Commandes")
            .pipe(operators_1.map(function (rest) { return rest.json(); }));
    };
    /* Servies CommandeClient
    *********************************************************************************** */
    CommandeService.prototype.getAllCommandeClients = function () {
        return this.http.get(this.host + "/CommandeClients")
            .pipe(operators_1.map(function (rest) { return rest.json(); }));
    };
    CommandeService.prototype.getOneCommandeClient = function (ref) {
        return this.http.get(this.host + "/CommandeClients/" + ref)
            .pipe(operators_1.map(function (rest) { return rest.json(); }));
    };
    CommandeService.prototype.saveCommandeClient = function (idaminal, com) {
        return this.http.post(this.host + "/CommandeClients/" + idaminal, com)
            .pipe(operators_1.map(function (rest) { return rest.json(); }));
    };
    CommandeService.prototype.updateCommandeClient = function (com) {
        return this.http.put(this.host + "/CommandeClients", com)
            .pipe(operators_1.map(function (rest) { return rest.json(); }));
    };
    CommandeService.prototype.deleteCommandeClient = function (ref) {
        return this.http.delete(this.host + "/CommandeClients/" + ref)
            .pipe(operators_1.map(function (rest) { return rest.json(); }));
    };
    /* Servies CommandeEleveur
    *********************************************************************************** */
    CommandeService.prototype.getAllCommandeEleveurs = function () {
        return this.http.get(this.host + "/CommandeEleveurs")
            .pipe(operators_1.map(function (rest) { return rest.json(); }));
    };
    CommandeService.prototype.getOneCommandeEleveurs = function (ref) {
        return this.http.get(this.host + "/CommandeEleveurs/" + ref)
            .pipe(operators_1.map(function (rest) { return rest.json(); }));
    };
    CommandeService.prototype.saveCommandeEleveurs = function (com) {
        return this.http.post(this.host + "/CommandeEleveurs", com)
            .pipe(operators_1.map(function (rest) { return rest.json(); }));
    };
    CommandeService.prototype.updateCommandeEleveurs = function (com) {
        return this.http.put(this.host + "/CommandeEleveurs", com)
            .pipe(operators_1.map(function (rest) { return rest.json(); }));
    };
    CommandeService.prototype.deleteCommandeEleveurs = function (ref) {
        return this.http.delete(this.host + "/CommandeEleveurs/" + ref)
            .pipe(operators_1.map(function (rest) { return rest.json(); }));
    };
    CommandeService.prototype.getAllLigneComClients = function () {
        return this.http.get(this.host + "/LigneComClients")
            .pipe(operators_1.map(function (rest) { return rest.json(); }));
    };
    CommandeService.prototype.deleteLigneCommandeClient = function (ref) {
        return this.http.delete(this.host + "/LigneComClients/" + ref)
            .pipe(operators_1.map(function (rest) { return rest.json(); }));
    };
    CommandeService.prototype.updateLigneCommandeClient = function (ligne) {
        return this.http.put(this.host + "/LigneComClients", ligne);
    };
    CommandeService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [http_1.Http])
    ], CommandeService);
    return CommandeService;
}());
exports.CommandeService = CommandeService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tbWFuZGUuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImNvbW1hbmRlLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMkM7QUFDM0Msc0NBQXFDO0FBQ3JDLDRDQUFxQztBQUVyQyw2REFBbUQ7QUFLbkQ7SUFLRSx5QkFBb0IsSUFBUztRQUFULFNBQUksR0FBSixJQUFJLENBQUs7UUFIN0IsY0FBUyxHQUFXLElBQUksMEJBQU8sRUFBRSxDQUFFO1FBQ25DLFNBQUksR0FBUyxJQUFJLENBQUMsU0FBUyxDQUFDLEVBQUUsQ0FBRTtJQUVDLENBQUM7SUFHbEM7MEZBQ3NGO0lBQ3RGLHlDQUFlLEdBQWY7UUFDRSxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLEdBQUMsWUFBWSxDQUFDO2FBQzNDLElBQUksQ0FBQyxlQUFHLENBQUMsVUFBQSxJQUFJLElBQUUsT0FBQSxJQUFJLENBQUMsSUFBSSxFQUFFLEVBQVgsQ0FBVyxDQUFDLENBQUMsQ0FBRTtJQUNqQyxDQUFDO0lBSUQ7MEZBQ3NGO0lBRXRGLCtDQUFxQixHQUFyQjtRQUNFLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksR0FBQyxrQkFBa0IsQ0FBQzthQUNqRCxJQUFJLENBQUMsZUFBRyxDQUFDLFVBQUEsSUFBSSxJQUFFLE9BQUEsSUFBSSxDQUFDLElBQUksRUFBRSxFQUFYLENBQVcsQ0FBQyxDQUFDLENBQUU7SUFDakMsQ0FBQztJQUVELDhDQUFvQixHQUFwQixVQUFxQixHQUFVO1FBQzdCLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksR0FBQyxtQkFBbUIsR0FBQyxHQUFHLENBQUM7YUFDdEQsSUFBSSxDQUFDLGVBQUcsQ0FBQyxVQUFBLElBQUksSUFBRSxPQUFBLElBQUksQ0FBQyxJQUFJLEVBQUUsRUFBWCxDQUFXLENBQUMsQ0FBQyxDQUFFO0lBRWpDLENBQUM7SUFFRCw0Q0FBa0IsR0FBbEIsVUFBbUIsUUFBZSxFQUFDLEdBQWtCO1FBQ25ELE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksR0FBQyxtQkFBbUIsR0FBQyxRQUFRLEVBQUMsR0FBRyxDQUFDO2FBQ2hFLElBQUksQ0FBQyxlQUFHLENBQUMsVUFBQSxJQUFJLElBQUUsT0FBQSxJQUFJLENBQUMsSUFBSSxFQUFFLEVBQVgsQ0FBVyxDQUFDLENBQUMsQ0FBRTtJQUNqQyxDQUFDO0lBRUQsOENBQW9CLEdBQXBCLFVBQXFCLEdBQWtCO1FBQ3JDLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksR0FBQyxrQkFBa0IsRUFBQyxHQUFHLENBQUM7YUFDckQsSUFBSSxDQUFDLGVBQUcsQ0FBQyxVQUFBLElBQUksSUFBRSxPQUFBLElBQUksQ0FBQyxJQUFJLEVBQUUsRUFBWCxDQUFXLENBQUMsQ0FBQyxDQUFFO0lBQ2pDLENBQUM7SUFHRCw4Q0FBb0IsR0FBcEIsVUFBcUIsR0FBVTtRQUM3QixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLEdBQUMsbUJBQW1CLEdBQUMsR0FBRyxDQUFDO2FBQ3pELElBQUksQ0FBQyxlQUFHLENBQUMsVUFBQSxJQUFJLElBQUUsT0FBQSxJQUFJLENBQUMsSUFBSSxFQUFFLEVBQVgsQ0FBVyxDQUFDLENBQUMsQ0FBRTtJQUNqQyxDQUFDO0lBR0Q7MEZBQ3NGO0lBRXZGLGdEQUFzQixHQUF0QjtRQUNDLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksR0FBQyxtQkFBbUIsQ0FBQzthQUNsRCxJQUFJLENBQUMsZUFBRyxDQUFDLFVBQUEsSUFBSSxJQUFFLE9BQUEsSUFBSSxDQUFDLElBQUksRUFBRSxFQUFYLENBQVcsQ0FBQyxDQUFDLENBQUU7SUFDakMsQ0FBQztJQUVELGdEQUFzQixHQUF0QixVQUF1QixHQUFVO1FBQy9CLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksR0FBQyxvQkFBb0IsR0FBQyxHQUFHLENBQUM7YUFDdkQsSUFBSSxDQUFDLGVBQUcsQ0FBQyxVQUFBLElBQUksSUFBRSxPQUFBLElBQUksQ0FBQyxJQUFJLEVBQUUsRUFBWCxDQUFXLENBQUMsQ0FBQyxDQUFFO0lBRWpDLENBQUM7SUFFRCw4Q0FBb0IsR0FBcEIsVUFBcUIsR0FBbUI7UUFDdEMsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxHQUFDLG1CQUFtQixFQUFDLEdBQUcsQ0FBQzthQUN2RCxJQUFJLENBQUMsZUFBRyxDQUFDLFVBQUEsSUFBSSxJQUFFLE9BQUEsSUFBSSxDQUFDLElBQUksRUFBRSxFQUFYLENBQVcsQ0FBQyxDQUFDLENBQUU7SUFDakMsQ0FBQztJQUVELGdEQUFzQixHQUF0QixVQUF1QixHQUFtQjtRQUN4QyxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLEdBQUMsbUJBQW1CLEVBQUMsR0FBRyxDQUFDO2FBQ3RELElBQUksQ0FBQyxlQUFHLENBQUMsVUFBQSxJQUFJLElBQUUsT0FBQSxJQUFJLENBQUMsSUFBSSxFQUFFLEVBQVgsQ0FBVyxDQUFDLENBQUMsQ0FBRTtJQUNqQyxDQUFDO0lBRUQsZ0RBQXNCLEdBQXRCLFVBQXVCLEdBQVU7UUFDL0IsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxHQUFDLG9CQUFvQixHQUFDLEdBQUcsQ0FBQzthQUMxRCxJQUFJLENBQUMsZUFBRyxDQUFDLFVBQUEsSUFBSSxJQUFFLE9BQUEsSUFBSSxDQUFDLElBQUksRUFBRSxFQUFYLENBQVcsQ0FBQyxDQUFDLENBQUU7SUFDakMsQ0FBQztJQUlELCtDQUFxQixHQUFyQjtRQUNFLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksR0FBQyxrQkFBa0IsQ0FBQzthQUNqRCxJQUFJLENBQUMsZUFBRyxDQUFDLFVBQUEsSUFBSSxJQUFFLE9BQUEsSUFBSSxDQUFDLElBQUksRUFBRSxFQUFYLENBQVcsQ0FBQyxDQUFDLENBQUU7SUFDakMsQ0FBQztJQUVELG1EQUF5QixHQUF6QixVQUEwQixHQUFVO1FBQ2xDLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksR0FBQyxtQkFBbUIsR0FBQyxHQUFHLENBQUM7YUFDekQsSUFBSSxDQUFDLGVBQUcsQ0FBQyxVQUFBLElBQUksSUFBRSxPQUFBLElBQUksQ0FBQyxJQUFJLEVBQUUsRUFBWCxDQUFXLENBQUMsQ0FBQyxDQUFFO0lBQ2pDLENBQUM7SUFFRCxtREFBeUIsR0FBekIsVUFBMEIsS0FBeUI7UUFDakQsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxHQUFDLGtCQUFrQixFQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzNELENBQUM7SUEzRlksZUFBZTtRQUgzQixpQkFBVSxDQUFDO1lBQ1YsVUFBVSxFQUFFLE1BQU07U0FDbkIsQ0FBQzt5Q0FNeUIsV0FBSTtPQUxsQixlQUFlLENBZ0czQjtJQUFELHNCQUFDO0NBQUEsQUFoR0QsSUFnR0M7QUFoR1ksMENBQWUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBIdHRwIH0gZnJvbSAnQGFuZ3VsYXIvaHR0cCc7XG5pbXBvcnQgeyBtYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBDb21tYW5kZUNsaWVudCwgQ29tbWFuZGVFbGV2ZXVyLCBMaWduZUNvbW1hbmRlQ2xpZW50IH0gZnJvbSAnLi4vLi4vbW9kZWwvQ29tbWFuZGUnO1xuaW1wb3J0IHsgU2VydmV1ciB9IGZyb20gJ34vbW9kZWwvQ29ubmV4aW9uVG9TZXJ2ZSc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIENvbW1hbmRlU2VydmljZSB7XG5cbiAgaXBBZGRyZXNzOlNlcnZldXIgPSBuZXcgU2VydmV1cigpIDtcbiAgaG9zdDpzdHJpbmc9IHRoaXMuaXBBZGRyZXNzLmlwIDtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHA6SHR0cCkgeyB9XG5cblxuICAvKiBTZXJ2aWVzIENvbW1hbmRlXG4gICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqICovIFxuICBnZXRBbGxDb21tYW5kZXMoKXtcbiAgICByZXR1cm4gdGhpcy5odHRwLmdldCh0aGlzLmhvc3QrXCIvQ29tbWFuZGVzXCIpIFxuICAgIC5waXBlKG1hcChyZXN0PT5yZXN0Lmpzb24oKSkpIDtcbiAgfVxuXG5cblxuICAvKiBTZXJ2aWVzIENvbW1hbmRlQ2xpZW50XG4gICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqICovIFxuXG4gIGdldEFsbENvbW1hbmRlQ2xpZW50cygpe1xuICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KHRoaXMuaG9zdCtcIi9Db21tYW5kZUNsaWVudHNcIilcbiAgICAucGlwZShtYXAocmVzdD0+cmVzdC5qc29uKCkpKSA7XG4gIH1cblxuICBnZXRPbmVDb21tYW5kZUNsaWVudChyZWY6bnVtYmVyKXtcbiAgICByZXR1cm4gdGhpcy5odHRwLmdldCh0aGlzLmhvc3QrXCIvQ29tbWFuZGVDbGllbnRzL1wiK3JlZilcbiAgICAucGlwZShtYXAocmVzdD0+cmVzdC5qc29uKCkpKSA7XG4gIFxuICB9XG5cbiAgc2F2ZUNvbW1hbmRlQ2xpZW50KGlkYW1pbmFsOnN0cmluZyxjb206Q29tbWFuZGVDbGllbnQpe1xuICAgIHJldHVybiB0aGlzLmh0dHAucG9zdCh0aGlzLmhvc3QrXCIvQ29tbWFuZGVDbGllbnRzL1wiK2lkYW1pbmFsLGNvbSlcbiAgICAucGlwZShtYXAocmVzdD0+cmVzdC5qc29uKCkpKSA7XG4gIH1cblxuICB1cGRhdGVDb21tYW5kZUNsaWVudChjb206Q29tbWFuZGVDbGllbnQpe1xuICAgIHJldHVybiB0aGlzLmh0dHAucHV0KHRoaXMuaG9zdCtcIi9Db21tYW5kZUNsaWVudHNcIixjb20pXG4gICAgLnBpcGUobWFwKHJlc3Q9PnJlc3QuanNvbigpKSkgO1xuICB9XG5cblxuICBkZWxldGVDb21tYW5kZUNsaWVudChyZWY6bnVtYmVyKXtcbiAgICByZXR1cm4gdGhpcy5odHRwLmRlbGV0ZSh0aGlzLmhvc3QrXCIvQ29tbWFuZGVDbGllbnRzL1wiK3JlZilcbiAgICAucGlwZShtYXAocmVzdD0+cmVzdC5qc29uKCkpKSA7XG4gIH1cblxuXG4gIC8qIFNlcnZpZXMgQ29tbWFuZGVFbGV2ZXVyXG4gICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqICovIFxuXG4gZ2V0QWxsQ29tbWFuZGVFbGV2ZXVycygpe1xuICByZXR1cm4gdGhpcy5odHRwLmdldCh0aGlzLmhvc3QrXCIvQ29tbWFuZGVFbGV2ZXVyc1wiKVxuICAucGlwZShtYXAocmVzdD0+cmVzdC5qc29uKCkpKSA7XG59XG5cbmdldE9uZUNvbW1hbmRlRWxldmV1cnMocmVmOm51bWJlcil7XG4gIHJldHVybiB0aGlzLmh0dHAuZ2V0KHRoaXMuaG9zdCtcIi9Db21tYW5kZUVsZXZldXJzL1wiK3JlZilcbiAgLnBpcGUobWFwKHJlc3Q9PnJlc3QuanNvbigpKSkgO1xuXG59XG5cbnNhdmVDb21tYW5kZUVsZXZldXJzKGNvbTpDb21tYW5kZUVsZXZldXIpe1xuICByZXR1cm4gdGhpcy5odHRwLnBvc3QodGhpcy5ob3N0K1wiL0NvbW1hbmRlRWxldmV1cnNcIixjb20pXG4gIC5waXBlKG1hcChyZXN0PT5yZXN0Lmpzb24oKSkpIDtcbn1cblxudXBkYXRlQ29tbWFuZGVFbGV2ZXVycyhjb206Q29tbWFuZGVFbGV2ZXVyKXtcbiAgcmV0dXJuIHRoaXMuaHR0cC5wdXQodGhpcy5ob3N0K1wiL0NvbW1hbmRlRWxldmV1cnNcIixjb20pXG4gIC5waXBlKG1hcChyZXN0PT5yZXN0Lmpzb24oKSkpIDtcbn1cblxuZGVsZXRlQ29tbWFuZGVFbGV2ZXVycyhyZWY6bnVtYmVyKXtcbiAgcmV0dXJuIHRoaXMuaHR0cC5kZWxldGUodGhpcy5ob3N0K1wiL0NvbW1hbmRlRWxldmV1cnMvXCIrcmVmKVxuICAucGlwZShtYXAocmVzdD0+cmVzdC5qc29uKCkpKSA7XG59XG5cblxuXG5nZXRBbGxMaWduZUNvbUNsaWVudHMoKXtcbiAgcmV0dXJuIHRoaXMuaHR0cC5nZXQodGhpcy5ob3N0K1wiL0xpZ25lQ29tQ2xpZW50c1wiKVxuICAucGlwZShtYXAocmVzdD0+cmVzdC5qc29uKCkpKSA7XG59XG5cbmRlbGV0ZUxpZ25lQ29tbWFuZGVDbGllbnQocmVmOm51bWJlcil7XG4gIHJldHVybiB0aGlzLmh0dHAuZGVsZXRlKHRoaXMuaG9zdCtcIi9MaWduZUNvbUNsaWVudHMvXCIrcmVmKVxuICAucGlwZShtYXAocmVzdD0+cmVzdC5qc29uKCkpKSA7XG59XG5cbnVwZGF0ZUxpZ25lQ29tbWFuZGVDbGllbnQobGlnbmU6TGlnbmVDb21tYW5kZUNsaWVudCl7XG4gIHJldHVybiB0aGlzLmh0dHAucHV0KHRoaXMuaG9zdCtcIi9MaWduZUNvbUNsaWVudHNcIixsaWduZSk7XG59XG5cblxuXG4gIFxufVxuIl19