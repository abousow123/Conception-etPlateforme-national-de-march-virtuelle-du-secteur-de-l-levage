"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Category_1 = require("./Category");
var Utilisateur_1 = require("./Utilisateur");
var Produit = /** @class */ (function () {
    function Produit() {
        this.referenceproduit = "";
        this.nom = "";
        this.description = "";
        this.modeemploi = "";
        this.prix = 0;
        this.typeproduit = "";
        this.datepublication = new Date();
    }
    return Produit;
}());
exports.Produit = Produit;
var ProduitElevage = /** @class */ (function () {
    function ProduitElevage() {
        this.referenceproduit = "";
        this.produit = new Produit();
        this.categorieprodelevage = new Category_1.CategoryProduitElevage();
        this.distributeur = new Utilisateur_1.Distributeur();
    }
    return ProduitElevage;
}());
exports.ProduitElevage = ProduitElevage;
var ProduitVeterinaire = /** @class */ (function () {
    function ProduitVeterinaire() {
        this.referenceproduit = "";
        this.produit = new Produit();
        this.veterinaire = new Utilisateur_1.Veterinaire();
        this.categorieprodveterinaire = new Category_1.CategoryProduitVeterinaire();
    }
    return ProduitVeterinaire;
}());
exports.ProduitVeterinaire = ProduitVeterinaire;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVpdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInByb2R1aXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSx1Q0FBZ0Y7QUFDaEYsNkNBQTBEO0FBSTFEO0lBQ0k7UUFDQSxxQkFBZ0IsR0FBUSxFQUFFLENBQUM7UUFDM0IsUUFBRyxHQUFRLEVBQUUsQ0FBQztRQUNkLGdCQUFXLEdBQVEsRUFBRSxDQUFDO1FBQ3RCLGVBQVUsR0FBUSxFQUFFLENBQUM7UUFDckIsU0FBSSxHQUFTLENBQUMsQ0FBQztRQUNmLGdCQUFXLEdBQVEsRUFBRSxDQUFDO1FBQ3RCLG9CQUFlLEdBQVEsSUFBSSxJQUFJLEVBQUUsQ0FBRTtJQVByQixDQUFDO0lBU25CLGNBQUM7QUFBRCxDQUFDLEFBVkQsSUFVQztBQVZZLDBCQUFPO0FBY3BCO0lBQ0k7UUFDQSxxQkFBZ0IsR0FBUSxFQUFFLENBQUM7UUFDM0IsWUFBTyxHQUFVLElBQUksT0FBTyxFQUFFLENBQUM7UUFDL0IseUJBQW9CLEdBQTBCLElBQUksaUNBQXNCLEVBQUUsQ0FBQztRQUMzRSxpQkFBWSxHQUFnQixJQUFJLDBCQUFZLEVBQUUsQ0FBQztJQUpqQyxDQUFDO0lBTW5CLHFCQUFDO0FBQUQsQ0FBQyxBQVBELElBT0M7QUFQWSx3Q0FBYztBQVMzQjtJQUNJO1FBQ0EscUJBQWdCLEdBQVEsRUFBRSxDQUFDO1FBQzNCLFlBQU8sR0FBVyxJQUFJLE9BQU8sRUFBRSxDQUFDO1FBQ2hDLGdCQUFXLEdBQWUsSUFBSSx5QkFBVyxFQUFFLENBQUM7UUFDNUMsNkJBQXdCLEdBQStCLElBQUkscUNBQTBCLEVBQUUsQ0FBRTtJQUozRSxDQUFDO0lBTW5CLHlCQUFDO0FBQUQsQ0FBQyxBQVBELElBT0M7QUFQWSxnREFBa0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDYXRlZ29yeVByb2R1aXRFbGV2YWdlLCBDYXRlZ29yeVByb2R1aXRWZXRlcmluYWlyZSB9IGZyb20gJy4vQ2F0ZWdvcnknO1xuaW1wb3J0IHsgRGlzdHJpYnV0ZXVyLCBWZXRlcmluYWlyZSB9IGZyb20gJy4vVXRpbGlzYXRldXInO1xuaW1wb3J0IHsgQ29tbWFuZGVFbGV2ZXVyIH0gZnJvbSAnLi9Db21tYW5kZSc7XG5pbXBvcnQgeyBEYXRlUGlwZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9zcmMvcGlwZXMnO1xuXG5leHBvcnQgY2xhc3MgUHJvZHVpdHtcbiAgICBjb25zdHJ1Y3Rvcigpe31cbiAgICByZWZlcmVuY2Vwcm9kdWl0OnN0cmluZz1cIlwiO1xuICAgIG5vbTpzdHJpbmc9XCJcIjtcbiAgICBkZXNjcmlwdGlvbjpzdHJpbmc9XCJcIjtcbiAgICBtb2RlZW1wbG9pOnN0cmluZz1cIlwiO1xuICAgIHByaXg6bnVtYmVyID0wO1xuICAgIHR5cGVwcm9kdWl0OnN0cmluZz1cIlwiO1xuICAgIGRhdGVwdWJsaWNhdGlvbjpEYXRlID0gbmV3IERhdGUoKSA7XG5cbn1cblxuXG5cbmV4cG9ydCBjbGFzcyBQcm9kdWl0RWxldmFnZXtcbiAgICBjb25zdHJ1Y3Rvcigpe31cbiAgICByZWZlcmVuY2Vwcm9kdWl0OnN0cmluZz1cIlwiO1xuICAgIHByb2R1aXQ6UHJvZHVpdCA9bmV3IFByb2R1aXQoKTtcbiAgICBjYXRlZ29yaWVwcm9kZWxldmFnZTpDYXRlZ29yeVByb2R1aXRFbGV2YWdlID0gbmV3IENhdGVnb3J5UHJvZHVpdEVsZXZhZ2UoKTtcbiAgICBkaXN0cmlidXRldXI6RGlzdHJpYnV0ZXVyID0gbmV3IERpc3RyaWJ1dGV1cigpO1xuXG59XG5cbmV4cG9ydCBjbGFzcyBQcm9kdWl0VmV0ZXJpbmFpcmV7XG4gICAgY29uc3RydWN0b3IoKXt9XG4gICAgcmVmZXJlbmNlcHJvZHVpdDpzdHJpbmc9XCJcIjtcbiAgICBwcm9kdWl0OlByb2R1aXQgPSBuZXcgUHJvZHVpdCgpO1xuICAgIHZldGVyaW5haXJlOlZldGVyaW5haXJlID0gbmV3IFZldGVyaW5haXJlKCk7XG4gICAgY2F0ZWdvcmllcHJvZHZldGVyaW5haXJlOiBDYXRlZ29yeVByb2R1aXRWZXRlcmluYWlyZSA9IG5ldyBDYXRlZ29yeVByb2R1aXRWZXRlcmluYWlyZSgpIDtcblxufVxuIl19