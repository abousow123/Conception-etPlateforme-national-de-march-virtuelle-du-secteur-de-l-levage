"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Utilisateur_1 = require("./Utilisateur");
var Animal_1 = require("./Animal");
var Commande = /** @class */ (function () {
    function Commande() {
        this.confirmer = false;
    }
    return Commande;
}());
exports.Commande = Commande;
var CommandeClient = /** @class */ (function () {
    function CommandeClient() {
        this.commande = new Commande;
        this.client = new Utilisateur_1.Client();
    }
    return CommandeClient;
}());
exports.CommandeClient = CommandeClient;
var CommandeEleveur = /** @class */ (function () {
    function CommandeEleveur() {
        this.commande = new Commande();
        this.eleveur = new Utilisateur_1.Eleveur();
    }
    return CommandeEleveur;
}());
exports.CommandeEleveur = CommandeEleveur;
var LigneCommandeClient = /** @class */ (function () {
    function LigneCommandeClient() {
        this.commandeclient = new CommandeClient();
        this.animal = new Animal_1.Animal();
    }
    return LigneCommandeClient;
}());
exports.LigneCommandeClient = LigneCommandeClient;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ29tbWFuZGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJDb21tYW5kZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLDZDQUFnRDtBQUNoRCxtQ0FBbUM7QUFDbkM7SUFDSTtRQUdBLGNBQVMsR0FBVyxLQUFLLENBQUM7SUFIWixDQUFDO0lBTW5CLGVBQUM7QUFBRCxDQUFDLEFBUEQsSUFPQztBQVBZLDRCQUFRO0FBU3JCO0lBQ0k7UUFFQSxhQUFRLEdBQVcsSUFBSSxRQUFRLENBQUU7UUFDakMsV0FBTSxHQUFVLElBQUksb0JBQU0sRUFBRSxDQUFDO0lBSGYsQ0FBQztJQUluQixxQkFBQztBQUFELENBQUMsQUFMRCxJQUtDO0FBTFksd0NBQWM7QUFPM0I7SUFDSTtRQUdBLGFBQVEsR0FBWSxJQUFJLFFBQVEsRUFBRSxDQUFFO1FBQ3BDLFlBQU8sR0FBVyxJQUFJLHFCQUFPLEVBQUUsQ0FBRTtJQUpuQixDQUFDO0lBTW5CLHNCQUFDO0FBQUQsQ0FBQyxBQVBELElBT0M7QUFQWSwwQ0FBZTtBQVM1QjtJQUNJO1FBR0EsbUJBQWMsR0FBa0IsSUFBSSxjQUFjLEVBQUUsQ0FBQztRQUNyRCxXQUFNLEdBQVEsSUFBSSxlQUFNLEVBQUUsQ0FBRTtJQUpkLENBQUM7SUFPbkIsMEJBQUM7QUFBRCxDQUFDLEFBUkQsSUFRQztBQVJZLGtEQUFtQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENsaWVudCwgRWxldmV1ciB9IGZyb20gJy4vVXRpbGlzYXRldXInO1xuaW1wb3J0IHsgIEFuaW1hbCB9IGZyb20gJy4vQW5pbWFsJztcbmV4cG9ydCBjbGFzcyBDb21tYW5kZXtcbiAgICBjb25zdHJ1Y3Rvcigpe31cbiAgICBudW1jb21tYW5kZTpudW1iZXIgO1xuICAgIGRhdGVjb21tYW5kZTpEYXRlIDtcbiAgICBjb25maXJtZXI6Ym9vbGVhbiA9IGZhbHNlO1xuICAgIGxpdnJlcjpib29sZWFuIDtcblxufVxuXG5leHBvcnQgY2xhc3MgQ29tbWFuZGVDbGllbnR7XG4gICAgY29uc3RydWN0b3IoKXt9IFxuICAgIG51bWNvbW1hbmRlOm51bWJlciA7XG4gICAgY29tbWFuZGU6Q29tbWFuZGU9IG5ldyBDb21tYW5kZSA7XG4gICAgY2xpZW50OkNsaWVudCA9IG5ldyBDbGllbnQoKTtcbn1cblxuZXhwb3J0IGNsYXNzIENvbW1hbmRlRWxldmV1cntcbiAgICBjb25zdHJ1Y3Rvcigpe31cblxuICAgIG51bWNvbW1hbmRlOm51bWJlciA7XG4gICAgY29tbWFuZGU6Q29tbWFuZGUgPSBuZXcgQ29tbWFuZGUoKSA7XG4gICAgZWxldmV1cjpFbGV2ZXVyID0gbmV3IEVsZXZldXIoKSA7XG5cbn1cblxuZXhwb3J0IGNsYXNzIExpZ25lQ29tbWFuZGVDbGllbnR7XG4gICAgY29uc3RydWN0b3IoKXt9XG5cbiAgICBpZGxpZ25lY2xpZW50Om51bWJlciA7XG4gICAgY29tbWFuZGVjbGllbnQ6Q29tbWFuZGVDbGllbnQgPSBuZXcgQ29tbWFuZGVDbGllbnQoKTtcbiAgICBhbmltYWw6QW5pbWFsPW5ldyBBbmltYWwoKSA7XG4gICAgcHJpeHRvdGFsOm51bWJlciA7XG5cbn1cblxuIl19