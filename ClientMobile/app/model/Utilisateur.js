"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Les acteurs du systemes
// *********************************************************
var Eleveur = /** @class */ (function () {
    function Eleveur() {
        this.utilisateur = new Utilisateur();
    }
    ;
    return Eleveur;
}());
exports.Eleveur = Eleveur;
var Veterinaire = /** @class */ (function () {
    function Veterinaire() {
    }
    ;
    return Veterinaire;
}());
exports.Veterinaire = Veterinaire;
var Distributeur = /** @class */ (function () {
    function Distributeur() {
    }
    ;
    return Distributeur;
}());
exports.Distributeur = Distributeur;
var Client = /** @class */ (function () {
    function Client() {
    }
    ;
    return Client;
}());
exports.Client = Client;
var Agent = /** @class */ (function () {
    function Agent() {
    }
    ;
    return Agent;
}());
exports.Agent = Agent;
// Utilisateur et Role
// *********************************************************
var Utilisateur = /** @class */ (function () {
    function Utilisateur() {
        this.numuser = "";
        this.role = new Role();
        this.nom = "";
        this.prenom = "";
        this.adresse = "";
        this.email = "";
        this.telephone = "";
        this.login = "";
        this.password = "";
        this.profil = "";
    }
    return Utilisateur;
}());
exports.Utilisateur = Utilisateur;
var Role = /** @class */ (function () {
    function Role() {
        this.libelle = "";
    }
    return Role;
}());
exports.Role = Role;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVXRpbGlzYXRldXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJVdGlsaXNhdGV1ci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUtBLDBCQUEwQjtBQUMxQiw0REFBNEQ7QUFDNUQ7SUFDRztRQUVDLGdCQUFXLEdBQWEsSUFBSSxXQUFXLEVBQUUsQ0FBRTtJQUY5QixDQUFDO0lBQUEsQ0FBQztJQVFuQixjQUFDO0FBQUQsQ0FBQyxBQVRELElBU0M7QUFUWSwwQkFBTztBQVdwQjtJQUNFO0lBQWMsQ0FBQztJQUFBLENBQUM7SUFNbEIsa0JBQUM7QUFBRCxDQUFDLEFBUEQsSUFPQztBQVBZLGtDQUFXO0FBU3hCO0lBQ0U7SUFBYyxDQUFDO0lBQUEsQ0FBQztJQUtsQixtQkFBQztBQUFELENBQUMsQUFORCxJQU1DO0FBTlksb0NBQVk7QUFRekI7SUFDRTtJQUFjLENBQUM7SUFBQSxDQUFDO0lBT2xCLGFBQUM7QUFBRCxDQUFDLEFBUkQsSUFRQztBQVJZLHdCQUFNO0FBVW5CO0lBQ0U7SUFBYyxDQUFDO0lBQUEsQ0FBQztJQUlsQixZQUFDO0FBQUQsQ0FBQyxBQUxELElBS0M7QUFMWSxzQkFBSztBQVNsQixzQkFBc0I7QUFDdEIsNERBQTREO0FBRTVEO0lBQUE7UUFDSSxZQUFPLEdBQVEsRUFBRSxDQUFDO1FBQ2xCLFNBQUksR0FBTSxJQUFJLElBQUksRUFBRSxDQUFDO1FBQ3JCLFFBQUcsR0FBUSxFQUFFLENBQUM7UUFDZCxXQUFNLEdBQVEsRUFBRSxDQUFDO1FBQ2pCLFlBQU8sR0FBUSxFQUFFLENBQUM7UUFDbEIsVUFBSyxHQUFRLEVBQUUsQ0FBQztRQUNoQixjQUFTLEdBQVEsRUFBRSxDQUFDO1FBQ3BCLFVBQUssR0FBUSxFQUFFLENBQUM7UUFDaEIsYUFBUSxHQUFRLEVBQUUsQ0FBQztRQUNuQixXQUFNLEdBQVEsRUFBRSxDQUFDO0lBRXJCLENBQUM7SUFBRCxrQkFBQztBQUFELENBQUMsQUFaRCxJQVlDO0FBWlksa0NBQVc7QUFjeEI7SUFDSTtRQUVBLFlBQU8sR0FBUSxFQUFFLENBQUM7SUFGSixDQUFDO0lBSW5CLFdBQUM7QUFBRCxDQUFDLEFBTEQsSUFLQztBQUxZLG9CQUFJIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tbWFuZGVDbGllbnQsIENvbW1hbmRlRWxldmV1ciB9IGZyb20gJy4vQ29tbWFuZGUnO1xuaW1wb3J0IHsgUHJvZHVpdEVsZXZhZ2UsIFByb2R1aXRWZXRlcmluYWlyZSB9IGZyb20gJy4vcHJvZHVpdCc7XG5pbXBvcnQgeyBNZW1icmUgfSBmcm9tICcuL0dpZSc7XG5pbXBvcnQgeyBBbmltYWwgfSBmcm9tICcuL0FuaW1hbCc7XG5cbi8vIExlcyBhY3RldXJzIGR1IHN5c3RlbWVzXG4vLyAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcbmV4cG9ydCBjbGFzcyBFbGV2ZXVye1xuICAgY29uc3RydWN0b3IoKXt9O1xuICAgIG51bXVzZXI6c3RyaW5nO1xuICAgIHV0aWxpc2F0ZXVyOlV0aWxpc2F0ZXVyPW5ldyBVdGlsaXNhdGV1cigpIDtcbiAgICBpZGVsZXZldXI6bnVtYmVyIDtcbiAgICBtZW1icmVzOk1lbWJyZVtdO1xuICAgIGNvbW1hbmRlZWxldmV1cnM6Q29tbWFuZGVFbGV2ZXVyW107XG4gICAgYW5pbWFsczpBbmltYWxbXSA7XG5cbn1cblxuZXhwb3J0IGNsYXNzIFZldGVyaW5haXJle1xuICBjb25zdHJ1Y3Rvcigpe307XG4gICAgbnVtdXNlcjpzdHJpbmc7XG4gICAgdXRpbGlzYXRldXI6VXRpbGlzYXRldXIgO1xuICAgIGlkdmV0ZXJpbmFpcmU6bnVtYmVyIDtcbiAgICBwcm9kdWl0dmV0ZXJpbmFpcmVzOlByb2R1aXRWZXRlcmluYWlyZVtdIDtcblxufVxuXG5leHBvcnQgY2xhc3MgRGlzdHJpYnV0ZXVye1xuICBjb25zdHJ1Y3Rvcigpe307XG4gICAgbnVtdXNlcjpzdHJpbmc7XG4gICAgdXRpbGlzYXRldXI6VXRpbGlzYXRldXIgO1xuICAgIGlkYWdlbmNlOm51bWJlciA7XG4gICAgcHJvZHVpdGVsZXZhZ2VzOlByb2R1aXRFbGV2YWdlW107XG59XG5cbmV4cG9ydCBjbGFzcyBDbGllbnR7XG4gIGNvbnN0cnVjdG9yKCl7fTtcbiAgICBudW11c2VyOnN0cmluZztcbiAgICB1dGlsaXNhdGV1cjpVdGlsaXNhdGV1ciA7XG4gICAgaWRjbGllbnQ6bnVtYmVyIDtcbiAgICBjb21tYW5kZWNsaWVudHM6IENvbW1hbmRlQ2xpZW50W107XG5cblxufVxuXG5leHBvcnQgY2xhc3MgQWdlbnR7XG4gIGNvbnN0cnVjdG9yKCl7fTtcbiAgICBudW11c2VyOnN0cmluZztcbiAgICB1dGlsaXNhdGV1cjpVdGlsaXNhdGV1ciA7XG5cbn1cblxuXG5cbi8vIFV0aWxpc2F0ZXVyIGV0IFJvbGVcbi8vICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuXG5leHBvcnQgY2xhc3MgVXRpbGlzYXRldXJ7XG4gICAgbnVtdXNlcjpzdHJpbmc9XCJcIjtcbiAgICByb2xlOlJvbGU9bmV3IFJvbGUoKTtcbiAgICBub206c3RyaW5nPVwiXCI7XG4gICAgcHJlbm9tOnN0cmluZz1cIlwiO1xuICAgIGFkcmVzc2U6c3RyaW5nPVwiXCI7XG4gICAgZW1haWw6c3RyaW5nPVwiXCI7XG4gICAgdGVsZXBob25lOnN0cmluZz1cIlwiO1xuICAgIGxvZ2luOnN0cmluZz1cIlwiO1xuICAgIHBhc3N3b3JkOnN0cmluZz1cIlwiO1xuICAgIHByb2ZpbDpzdHJpbmc9XCJcIjtcblxufVxuXG5leHBvcnQgY2xhc3MgUm9sZXtcbiAgICBjb25zdHJ1Y3Rvcigpe31cbiAgICBpZHJvbGU6bnVtYmVyO1xuICAgIGxpYmVsbGU6c3RyaW5nPVwiXCI7XG4gICAgdXRpbGlzYXRldXI6VXRpbGlzYXRldXJbXTtcbn1cbiJdfQ==