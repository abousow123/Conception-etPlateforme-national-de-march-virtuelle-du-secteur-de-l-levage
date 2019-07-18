"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Utilisateur_1 = require("./Utilisateur");
var Gie_1 = require("./Gie");
var AnnonceGouvernemental = /** @class */ (function () {
    function AnnonceGouvernemental() {
        this.typeannonce = '';
        this.descriptionannonce = '';
        this.eleveur = new Utilisateur_1.Eleveur();
        this.gie = new Gie_1.Gie();
        this.distributeur = new Utilisateur_1.Distributeur();
        this.veterinaire = new Utilisateur_1.Veterinaire();
    }
    return AnnonceGouvernemental;
}());
exports.AnnonceGouvernemental = AnnonceGouvernemental;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5ub25jZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFubm9uY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSw2Q0FBbUU7QUFDbkUsNkJBQTRCO0FBRzVCO0lBQUE7UUFFSSxnQkFBVyxHQUFRLEVBQUUsQ0FBQztRQUN0Qix1QkFBa0IsR0FBUSxFQUFFLENBQUU7UUFHOUIsWUFBTyxHQUFXLElBQUkscUJBQU8sRUFBRSxDQUFFO1FBQ2pDLFFBQUcsR0FBTyxJQUFJLFNBQUcsRUFBRSxDQUFFO1FBQ3JCLGlCQUFZLEdBQWdCLElBQUksMEJBQVksRUFBRSxDQUFFO1FBQ2hELGdCQUFXLEdBQWUsSUFBSSx5QkFBVyxFQUFFLENBQUU7SUFFakQsQ0FBQztJQUFELDRCQUFDO0FBQUQsQ0FBQyxBQVhELElBV0M7QUFYWSxzREFBcUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFbGV2ZXVyLCBEaXN0cmlidXRldXIsIFZldGVyaW5haXJlIH0gZnJvbSBcIi4vVXRpbGlzYXRldXJcIjtcbmltcG9ydCB7IEdpZSB9IGZyb20gXCIuL0dpZVwiO1xuXG5cbmV4cG9ydCBjbGFzcyBBbm5vbmNlR291dmVybmVtZW50YWx7XG4gICAgaWRhbm5vbmNlOm51bWJlcjtcbiAgICB0eXBlYW5ub25jZTpzdHJpbmc9Jyc7XG4gICAgZGVzY3JpcHRpb25hbm5vbmNlOnN0cmluZz0nJyA7XG4gICAgZGF0ZWFubm9uY2U6RGF0ZSA7XG5cbiAgICBlbGV2ZXVyOkVsZXZldXIgPSBuZXcgRWxldmV1cigpIDtcbiAgICBnaWU6R2llID0gbmV3IEdpZSgpIDtcbiAgICBkaXN0cmlidXRldXI6RGlzdHJpYnV0ZXVyID0gbmV3IERpc3RyaWJ1dGV1cigpIDtcbiAgICB2ZXRlcmluYWlyZTpWZXRlcmluYWlyZSA9IG5ldyBWZXRlcmluYWlyZSgpIDtcbiAgIFxufSJdfQ==