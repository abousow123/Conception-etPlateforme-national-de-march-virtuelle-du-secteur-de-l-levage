"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var operators_1 = require("rxjs/operators");
var ConnexionToServe_1 = require("~/model/ConnexionToServe");
var UsersService = /** @class */ (function () {
    function UsersService(http) {
        this.http = http;
        this.ipAddress = new ConnexionToServe_1.Serveur();
        this.host = this.ipAddress.ip;
    }
    /* les Services du roles
      ************************************************************************************************  */
    UsersService.prototype.getAllRoles = function () {
        return this.http.get(this.host + "/Roles")
            .pipe(operators_1.map(function (rest) { return rest.json(); }));
    };
    /* les Services de l'éleveurs
     ************************************************************************************************  */
    UsersService.prototype.getAllEleveurs = function () {
        return this.http.get(this.host + "/Eleveurs")
            .pipe(operators_1.map(function (rest) { return rest.json(); }));
    };
    UsersService.prototype.getOneEleveur = function (id) {
        return this.http.get(this.host + "/Eleveurs/" + id)
            .pipe(operators_1.map(function (rest) { return rest.json(); }));
    };
    UsersService.prototype.saveEleveur = function (e) {
        return this.http.post(this.host + "/Eleveurs/", e)
            .pipe(operators_1.map(function (rest) { return rest.json(); }));
    };
    UsersService.prototype.updateEleveur = function (e) {
        return this.http.put(this.host + "/Eleveurs/", e)
            .pipe(operators_1.map(function (rest) { return rest.json(); }));
    };
    UsersService.prototype.deleteEleveur = function (ref) {
        return this.http.delete(this.host + "/Eleveurs/" + ref)
            .pipe(operators_1.map(function (rest) { return rest.json(); }));
    };
    /* les Services du Clients
      ************************************************************************************************  */
    UsersService.prototype.getAllClients = function () {
        return this.http.get(this.host + "/Clients")
            .pipe(operators_1.map(function (rest) { return rest.json(); }));
    };
    UsersService.prototype.getOneClients = function (id) {
        return this.http.get(this.host + "/Clients/" + id)
            .pipe(operators_1.map(function (rest) { return rest.json(); }));
    };
    UsersService.prototype.saveClient = function (c) {
        return this.http.post(this.host + "/Clients/", c)
            .pipe(operators_1.map(function (rest) { return rest.json(); }));
    };
    UsersService.prototype.updateClient = function (c) {
        return this.http.put(this.host + "/Clients/", c)
            .pipe(operators_1.map(function (rest) { return rest.json(); }));
    };
    UsersService.prototype.deleteClient = function (ref) {
        return this.http.delete(this.host + "/Clients/" + ref)
            .pipe(operators_1.map(function (rest) { return rest.json(); }));
    };
    /* les Services du Veterinaires
     ************************************************************************************************  */
    UsersService.prototype.getAllVeterinaires = function () {
        return this.http.get(this.host + "/Veterinaires")
            .pipe(operators_1.map(function (rest) { return rest.json(); }));
    };
    UsersService.prototype.getOneVeterinaires = function (id) {
        return this.http.get(this.host + "/Veterinaires/" + id)
            .pipe(operators_1.map(function (rest) { return rest.json(); }));
    };
    UsersService.prototype.saveVeterinaires = function (v) {
        return this.http.post(this.host + "/Veterinaires/", v)
            .pipe(operators_1.map(function (rest) { return rest.json(); }));
    };
    UsersService.prototype.updateVeterinaires = function (v) {
        return this.http.put(this.host + "/Veterinaires/", v)
            .pipe(operators_1.map(function (rest) { return rest.json(); }));
    };
    UsersService.prototype.deleteVeterinaires = function (ref) {
        return this.http.delete(this.host + "/Veterinaires/" + ref)
            .pipe(operators_1.map(function (rest) { return rest.json(); }));
    };
    /* les Services du Distributeur
     ************************************************************************************************  */
    UsersService.prototype.getAllDistributeurs = function () {
        return this.http.get(this.host + "/Distributeurs")
            .pipe(operators_1.map(function (rest) { return rest.json(); }));
    };
    UsersService.prototype.getOneDistributeurs = function (id) {
        return this.http.get(this.host + "/Distributeurs/" + id)
            .pipe(operators_1.map(function (rest) { return rest.json(); }));
    };
    UsersService.prototype.saveDistributeurs = function (d) {
        return this.http.post(this.host + "/Distributeurs/", d)
            .pipe(operators_1.map(function (rest) { return rest.json(); }));
    };
    UsersService.prototype.updateDistributeurs = function (d) {
        return this.http.put(this.host + "/Distributeurs/", d)
            .pipe(operators_1.map(function (rest) { return rest.json(); }));
    };
    UsersService.prototype.deleteDistributeurs = function (ref) {
        return this.http.delete(this.host + "/Distributeurs/" + ref)
            .pipe(operators_1.map(function (rest) { return rest.json(); }));
    };
    UsersService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [http_1.Http])
    ], UsersService);
    return UsersService;
}());
exports.UsersService = UsersService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlcnMuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInVzZXJzLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMkM7QUFDM0Msc0NBQXFDO0FBQ3JDLDRDQUFxQztBQUVyQyw2REFBbUQ7QUFNbkQ7SUFJRSxzQkFBb0IsSUFBUztRQUFULFNBQUksR0FBSixJQUFJLENBQUs7UUFIN0IsY0FBUyxHQUFXLElBQUksMEJBQU8sRUFBRSxDQUFFO1FBQ25DLFNBQUksR0FBUyxJQUFJLENBQUMsU0FBUyxDQUFDLEVBQUUsQ0FBRTtJQUVDLENBQUM7SUFJakM7MEdBQ3NHO0lBQ3ZHLGtDQUFXLEdBQVg7UUFDRSxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLEdBQUMsUUFBUSxDQUFDO2FBQ3ZDLElBQUksQ0FBQyxlQUFHLENBQUMsVUFBQSxJQUFJLElBQUUsT0FBQSxJQUFJLENBQUMsSUFBSSxFQUFFLEVBQVgsQ0FBVyxDQUFDLENBQUMsQ0FBRTtJQUNqQyxDQUFDO0lBS0Q7eUdBQ3FHO0lBQ3JHLHFDQUFjLEdBQWQ7UUFDRSxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLEdBQUMsV0FBVyxDQUFDO2FBQzFDLElBQUksQ0FBQyxlQUFHLENBQUMsVUFBQSxJQUFJLElBQUUsT0FBQSxJQUFJLENBQUMsSUFBSSxFQUFFLEVBQVgsQ0FBVyxDQUFDLENBQUMsQ0FBRTtJQUNqQyxDQUFDO0lBRUQsb0NBQWEsR0FBYixVQUFjLEVBQVM7UUFDckIsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxHQUFDLFlBQVksR0FBQyxFQUFFLENBQUM7YUFDOUMsSUFBSSxDQUFDLGVBQUcsQ0FBQyxVQUFBLElBQUksSUFBRSxPQUFBLElBQUksQ0FBQyxJQUFJLEVBQUUsRUFBWCxDQUFXLENBQUMsQ0FBQyxDQUFFO0lBQ2pDLENBQUM7SUFFRCxrQ0FBVyxHQUFYLFVBQVksQ0FBUztRQUNuQixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLEdBQUMsWUFBWSxFQUFDLENBQUMsQ0FBQzthQUM5QyxJQUFJLENBQUMsZUFBRyxDQUFDLFVBQUEsSUFBSSxJQUFFLE9BQUEsSUFBSSxDQUFDLElBQUksRUFBRSxFQUFYLENBQVcsQ0FBQyxDQUFDLENBQUU7SUFDakMsQ0FBQztJQUVELG9DQUFhLEdBQWIsVUFBYyxDQUFTO1FBQ3JCLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksR0FBQyxZQUFZLEVBQUMsQ0FBQyxDQUFDO2FBQzdDLElBQUksQ0FBQyxlQUFHLENBQUMsVUFBQSxJQUFJLElBQUUsT0FBQSxJQUFJLENBQUMsSUFBSSxFQUFFLEVBQVgsQ0FBVyxDQUFDLENBQUMsQ0FBRTtJQUNqQyxDQUFDO0lBRUQsb0NBQWEsR0FBYixVQUFjLEdBQVU7UUFDdEIsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxHQUFDLFlBQVksR0FBQyxHQUFHLENBQUM7YUFDbEQsSUFBSSxDQUFDLGVBQUcsQ0FBQyxVQUFBLElBQUksSUFBRSxPQUFBLElBQUksQ0FBQyxJQUFJLEVBQUUsRUFBWCxDQUFXLENBQUMsQ0FBQyxDQUFFO0lBQ2pDLENBQUM7SUFLRjswR0FDc0c7SUFDckcsb0NBQWEsR0FBYjtRQUNFLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksR0FBQyxVQUFVLENBQUM7YUFDekMsSUFBSSxDQUFDLGVBQUcsQ0FBQyxVQUFBLElBQUksSUFBRSxPQUFBLElBQUksQ0FBQyxJQUFJLEVBQUUsRUFBWCxDQUFXLENBQUMsQ0FBQyxDQUFFO0lBQ2pDLENBQUM7SUFFRCxvQ0FBYSxHQUFiLFVBQWMsRUFBUztRQUNyQixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLEdBQUMsV0FBVyxHQUFDLEVBQUUsQ0FBQzthQUM3QyxJQUFJLENBQUMsZUFBRyxDQUFDLFVBQUEsSUFBSSxJQUFFLE9BQUEsSUFBSSxDQUFDLElBQUksRUFBRSxFQUFYLENBQVcsQ0FBQyxDQUFDLENBQUU7SUFDakMsQ0FBQztJQUVELGlDQUFVLEdBQVYsVUFBVyxDQUFRO1FBQ2pCLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksR0FBQyxXQUFXLEVBQUMsQ0FBQyxDQUFDO2FBQzdDLElBQUksQ0FBQyxlQUFHLENBQUMsVUFBQSxJQUFJLElBQUUsT0FBQSxJQUFJLENBQUMsSUFBSSxFQUFFLEVBQVgsQ0FBVyxDQUFDLENBQUMsQ0FBRTtJQUNqQyxDQUFDO0lBRUQsbUNBQVksR0FBWixVQUFhLENBQVE7UUFDbkIsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxHQUFDLFdBQVcsRUFBQyxDQUFDLENBQUM7YUFDNUMsSUFBSSxDQUFDLGVBQUcsQ0FBQyxVQUFBLElBQUksSUFBRSxPQUFBLElBQUksQ0FBQyxJQUFJLEVBQUUsRUFBWCxDQUFXLENBQUMsQ0FBQyxDQUFFO0lBQ2pDLENBQUM7SUFFRCxtQ0FBWSxHQUFaLFVBQWEsR0FBVTtRQUNyQixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLEdBQUMsV0FBVyxHQUFDLEdBQUcsQ0FBQzthQUNqRCxJQUFJLENBQUMsZUFBRyxDQUFDLFVBQUEsSUFBSSxJQUFFLE9BQUEsSUFBSSxDQUFDLElBQUksRUFBRSxFQUFYLENBQVcsQ0FBQyxDQUFDLENBQUU7SUFDakMsQ0FBQztJQUdEO3lHQUNxRztJQUNyRyx5Q0FBa0IsR0FBbEI7UUFDRSxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLEdBQUMsZUFBZSxDQUFDO2FBQzlDLElBQUksQ0FBQyxlQUFHLENBQUMsVUFBQSxJQUFJLElBQUUsT0FBQSxJQUFJLENBQUMsSUFBSSxFQUFFLEVBQVgsQ0FBVyxDQUFDLENBQUMsQ0FBRTtJQUNqQyxDQUFDO0lBRUQseUNBQWtCLEdBQWxCLFVBQW1CLEVBQVM7UUFDMUIsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxHQUFDLGdCQUFnQixHQUFDLEVBQUUsQ0FBQzthQUNsRCxJQUFJLENBQUMsZUFBRyxDQUFDLFVBQUEsSUFBSSxJQUFFLE9BQUEsSUFBSSxDQUFDLElBQUksRUFBRSxFQUFYLENBQVcsQ0FBQyxDQUFDLENBQUU7SUFDakMsQ0FBQztJQUVELHVDQUFnQixHQUFoQixVQUFpQixDQUFhO1FBQzVCLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksR0FBQyxnQkFBZ0IsRUFBQyxDQUFDLENBQUM7YUFDbEQsSUFBSSxDQUFDLGVBQUcsQ0FBQyxVQUFBLElBQUksSUFBRSxPQUFBLElBQUksQ0FBQyxJQUFJLEVBQUUsRUFBWCxDQUFXLENBQUMsQ0FBQyxDQUFFO0lBQ2pDLENBQUM7SUFFRCx5Q0FBa0IsR0FBbEIsVUFBbUIsQ0FBYTtRQUM5QixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLEdBQUMsZ0JBQWdCLEVBQUMsQ0FBQyxDQUFDO2FBQ2pELElBQUksQ0FBQyxlQUFHLENBQUMsVUFBQSxJQUFJLElBQUUsT0FBQSxJQUFJLENBQUMsSUFBSSxFQUFFLEVBQVgsQ0FBVyxDQUFDLENBQUMsQ0FBRTtJQUNqQyxDQUFDO0lBRUQseUNBQWtCLEdBQWxCLFVBQW1CLEdBQVU7UUFDM0IsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxHQUFDLGdCQUFnQixHQUFDLEdBQUcsQ0FBQzthQUN0RCxJQUFJLENBQUMsZUFBRyxDQUFDLFVBQUEsSUFBSSxJQUFFLE9BQUEsSUFBSSxDQUFDLElBQUksRUFBRSxFQUFYLENBQVcsQ0FBQyxDQUFDLENBQUU7SUFDakMsQ0FBQztJQU1EO3lHQUNxRztJQUNyRywwQ0FBbUIsR0FBbkI7UUFDRSxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLEdBQUMsZ0JBQWdCLENBQUM7YUFDL0MsSUFBSSxDQUFDLGVBQUcsQ0FBQyxVQUFBLElBQUksSUFBRSxPQUFBLElBQUksQ0FBQyxJQUFJLEVBQUUsRUFBWCxDQUFXLENBQUMsQ0FBQyxDQUFFO0lBQ2pDLENBQUM7SUFFRCwwQ0FBbUIsR0FBbkIsVUFBb0IsRUFBUztRQUMzQixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLEdBQUMsaUJBQWlCLEdBQUMsRUFBRSxDQUFDO2FBQ25ELElBQUksQ0FBQyxlQUFHLENBQUMsVUFBQSxJQUFJLElBQUUsT0FBQSxJQUFJLENBQUMsSUFBSSxFQUFFLEVBQVgsQ0FBVyxDQUFDLENBQUMsQ0FBRTtJQUNqQyxDQUFDO0lBRUQsd0NBQWlCLEdBQWpCLFVBQWtCLENBQWM7UUFDOUIsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxHQUFDLGlCQUFpQixFQUFDLENBQUMsQ0FBQzthQUNuRCxJQUFJLENBQUMsZUFBRyxDQUFDLFVBQUEsSUFBSSxJQUFFLE9BQUEsSUFBSSxDQUFDLElBQUksRUFBRSxFQUFYLENBQVcsQ0FBQyxDQUFDLENBQUU7SUFDakMsQ0FBQztJQUVELDBDQUFtQixHQUFuQixVQUFvQixDQUFjO1FBQ2hDLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksR0FBQyxpQkFBaUIsRUFBQyxDQUFDLENBQUM7YUFDbEQsSUFBSSxDQUFDLGVBQUcsQ0FBQyxVQUFBLElBQUksSUFBRSxPQUFBLElBQUksQ0FBQyxJQUFJLEVBQUUsRUFBWCxDQUFXLENBQUMsQ0FBQyxDQUFFO0lBQ2pDLENBQUM7SUFFRCwwQ0FBbUIsR0FBbkIsVUFBb0IsR0FBVTtRQUM1QixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLEdBQUMsaUJBQWlCLEdBQUMsR0FBRyxDQUFDO2FBQ3ZELElBQUksQ0FBQyxlQUFHLENBQUMsVUFBQSxJQUFJLElBQUUsT0FBQSxJQUFJLENBQUMsSUFBSSxFQUFFLEVBQVgsQ0FBVyxDQUFDLENBQUMsQ0FBRTtJQUNqQyxDQUFDO0lBcElVLFlBQVk7UUFIeEIsaUJBQVUsQ0FBQztZQUNWLFVBQVUsRUFBRSxNQUFNO1NBQ25CLENBQUM7eUNBS3lCLFdBQUk7T0FKbEIsWUFBWSxDQTJJeEI7SUFBRCxtQkFBQztDQUFBLEFBM0lELElBMklDO0FBM0lZLG9DQUFZIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSHR0cCB9IGZyb20gJ0Bhbmd1bGFyL2h0dHAnO1xuaW1wb3J0IHsgbWFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgRWxldmV1ciwgQ2xpZW50LCBWZXRlcmluYWlyZSwgRGlzdHJpYnV0ZXVyIH0gZnJvbSAnfi9tb2RlbC9VdGlsaXNhdGV1cic7XG5pbXBvcnQgeyBTZXJ2ZXVyIH0gZnJvbSAnfi9tb2RlbC9Db25uZXhpb25Ub1NlcnZlJztcblxuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBVc2Vyc1NlcnZpY2Uge1xuICBpcEFkZHJlc3M6U2VydmV1ciA9IG5ldyBTZXJ2ZXVyKCkgO1xuICBob3N0OnN0cmluZz0gdGhpcy5pcEFkZHJlc3MuaXAgO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cDpIdHRwKSB7IH1cblxuXG5cbiAgIC8qIGxlcyBTZXJ2aWNlcyBkdSByb2xlc1xuICAgICAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiogICovXG4gIGdldEFsbFJvbGVzKCl7XG4gICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQodGhpcy5ob3N0K1wiL1JvbGVzXCIpXG4gICAgLnBpcGUobWFwKHJlc3Q9PnJlc3QuanNvbigpKSkgO1xuICB9XG5cblxuXG5cbiAgLyogbGVzIFNlcnZpY2VzIGRlIGwnw6lsZXZldXJzXG4gICAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiogICovXG4gIGdldEFsbEVsZXZldXJzKCl7XG4gICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQodGhpcy5ob3N0K1wiL0VsZXZldXJzXCIpXG4gICAgLnBpcGUobWFwKHJlc3Q9PnJlc3QuanNvbigpKSkgO1xuICB9XG5cbiAgZ2V0T25lRWxldmV1cihpZDpzdHJpbmcpe1xuICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KHRoaXMuaG9zdCtcIi9FbGV2ZXVycy9cIitpZClcbiAgICAucGlwZShtYXAocmVzdD0+cmVzdC5qc29uKCkpKSA7XG4gIH1cblxuICBzYXZlRWxldmV1cihlOkVsZXZldXIpe1xuICAgIHJldHVybiB0aGlzLmh0dHAucG9zdCh0aGlzLmhvc3QrXCIvRWxldmV1cnMvXCIsZSlcbiAgICAucGlwZShtYXAocmVzdD0+cmVzdC5qc29uKCkpKSA7XG4gIH1cblxuICB1cGRhdGVFbGV2ZXVyKGU6RWxldmV1cil7XG4gICAgcmV0dXJuIHRoaXMuaHR0cC5wdXQodGhpcy5ob3N0K1wiL0VsZXZldXJzL1wiLGUpXG4gICAgLnBpcGUobWFwKHJlc3Q9PnJlc3QuanNvbigpKSkgO1xuICB9XG5cbiAgZGVsZXRlRWxldmV1cihyZWY6c3RyaW5nKXtcbiAgICByZXR1cm4gdGhpcy5odHRwLmRlbGV0ZSh0aGlzLmhvc3QrXCIvRWxldmV1cnMvXCIrcmVmKVxuICAgIC5waXBlKG1hcChyZXN0PT5yZXN0Lmpzb24oKSkpIDtcbiAgfVxuXG4gIFxuXG5cbiAvKiBsZXMgU2VydmljZXMgZHUgQ2xpZW50c1xuICAgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqICAqL1xuICBnZXRBbGxDbGllbnRzKCl7XG4gICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQodGhpcy5ob3N0K1wiL0NsaWVudHNcIilcbiAgICAucGlwZShtYXAocmVzdD0+cmVzdC5qc29uKCkpKSA7XG4gIH1cblxuICBnZXRPbmVDbGllbnRzKGlkOnN0cmluZyl7XG4gICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQodGhpcy5ob3N0K1wiL0NsaWVudHMvXCIraWQpXG4gICAgLnBpcGUobWFwKHJlc3Q9PnJlc3QuanNvbigpKSkgO1xuICB9XG5cbiAgc2F2ZUNsaWVudChjOkNsaWVudCl7XG4gICAgcmV0dXJuIHRoaXMuaHR0cC5wb3N0KHRoaXMuaG9zdCtcIi9DbGllbnRzL1wiLGMpXG4gICAgLnBpcGUobWFwKHJlc3Q9PnJlc3QuanNvbigpKSkgO1xuICB9XG5cbiAgdXBkYXRlQ2xpZW50KGM6Q2xpZW50KXtcbiAgICByZXR1cm4gdGhpcy5odHRwLnB1dCh0aGlzLmhvc3QrXCIvQ2xpZW50cy9cIixjKVxuICAgIC5waXBlKG1hcChyZXN0PT5yZXN0Lmpzb24oKSkpIDtcbiAgfVxuXG4gIGRlbGV0ZUNsaWVudChyZWY6c3RyaW5nKXtcbiAgICByZXR1cm4gdGhpcy5odHRwLmRlbGV0ZSh0aGlzLmhvc3QrXCIvQ2xpZW50cy9cIityZWYpXG4gICAgLnBpcGUobWFwKHJlc3Q9PnJlc3QuanNvbigpKSkgO1xuICB9XG5cblxuICAvKiBsZXMgU2VydmljZXMgZHUgVmV0ZXJpbmFpcmVzXG4gICAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiogICovXG4gIGdldEFsbFZldGVyaW5haXJlcygpe1xuICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KHRoaXMuaG9zdCtcIi9WZXRlcmluYWlyZXNcIilcbiAgICAucGlwZShtYXAocmVzdD0+cmVzdC5qc29uKCkpKSA7XG4gIH1cblxuICBnZXRPbmVWZXRlcmluYWlyZXMoaWQ6c3RyaW5nKXtcbiAgICByZXR1cm4gdGhpcy5odHRwLmdldCh0aGlzLmhvc3QrXCIvVmV0ZXJpbmFpcmVzL1wiK2lkKVxuICAgIC5waXBlKG1hcChyZXN0PT5yZXN0Lmpzb24oKSkpIDtcbiAgfVxuXG4gIHNhdmVWZXRlcmluYWlyZXModjpWZXRlcmluYWlyZSl7XG4gICAgcmV0dXJuIHRoaXMuaHR0cC5wb3N0KHRoaXMuaG9zdCtcIi9WZXRlcmluYWlyZXMvXCIsdilcbiAgICAucGlwZShtYXAocmVzdD0+cmVzdC5qc29uKCkpKSA7XG4gIH1cblxuICB1cGRhdGVWZXRlcmluYWlyZXModjpWZXRlcmluYWlyZSl7XG4gICAgcmV0dXJuIHRoaXMuaHR0cC5wdXQodGhpcy5ob3N0K1wiL1ZldGVyaW5haXJlcy9cIix2KVxuICAgIC5waXBlKG1hcChyZXN0PT5yZXN0Lmpzb24oKSkpIDtcbiAgfVxuXG4gIGRlbGV0ZVZldGVyaW5haXJlcyhyZWY6c3RyaW5nKXtcbiAgICByZXR1cm4gdGhpcy5odHRwLmRlbGV0ZSh0aGlzLmhvc3QrXCIvVmV0ZXJpbmFpcmVzL1wiK3JlZilcbiAgICAucGlwZShtYXAocmVzdD0+cmVzdC5qc29uKCkpKSA7XG4gIH1cblxuXG5cblxuXG4gIC8qIGxlcyBTZXJ2aWNlcyBkdSBEaXN0cmlidXRldXJcbiAgICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiAgKi9cbiAgZ2V0QWxsRGlzdHJpYnV0ZXVycygpe1xuICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KHRoaXMuaG9zdCtcIi9EaXN0cmlidXRldXJzXCIpXG4gICAgLnBpcGUobWFwKHJlc3Q9PnJlc3QuanNvbigpKSkgO1xuICB9XG5cbiAgZ2V0T25lRGlzdHJpYnV0ZXVycyhpZDpzdHJpbmcpe1xuICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KHRoaXMuaG9zdCtcIi9EaXN0cmlidXRldXJzL1wiK2lkKVxuICAgIC5waXBlKG1hcChyZXN0PT5yZXN0Lmpzb24oKSkpIDtcbiAgfVxuXG4gIHNhdmVEaXN0cmlidXRldXJzKGQ6RGlzdHJpYnV0ZXVyKXtcbiAgICByZXR1cm4gdGhpcy5odHRwLnBvc3QodGhpcy5ob3N0K1wiL0Rpc3RyaWJ1dGV1cnMvXCIsZClcbiAgICAucGlwZShtYXAocmVzdD0+cmVzdC5qc29uKCkpKSA7XG4gIH1cblxuICB1cGRhdGVEaXN0cmlidXRldXJzKGQ6RGlzdHJpYnV0ZXVyKXtcbiAgICByZXR1cm4gdGhpcy5odHRwLnB1dCh0aGlzLmhvc3QrXCIvRGlzdHJpYnV0ZXVycy9cIixkKVxuICAgIC5waXBlKG1hcChyZXN0PT5yZXN0Lmpzb24oKSkpIDtcbiAgfVxuXG4gIGRlbGV0ZURpc3RyaWJ1dGV1cnMocmVmOnN0cmluZyl7XG4gICAgcmV0dXJuIHRoaXMuaHR0cC5kZWxldGUodGhpcy5ob3N0K1wiL0Rpc3RyaWJ1dGV1cnMvXCIrcmVmKVxuICAgIC5waXBlKG1hcChyZXN0PT5yZXN0Lmpzb24oKSkpIDtcbiAgfVxuXG5cbiAgXG5cblxuXG59XG4iXX0=