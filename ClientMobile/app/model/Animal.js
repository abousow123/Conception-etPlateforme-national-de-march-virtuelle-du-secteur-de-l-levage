"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Category_1 = require("./Category");
var Utilisateur_1 = require("./Utilisateur");
var Animal = /** @class */ (function () {
    function Animal() {
        this.idanimal = "";
        this.typeanimal = new Category_1.TypeAnimal();
        this.eleveur = new Utilisateur_1.Eleveur();
        this.nom = "";
        this.sexe = "";
        this.photo = "";
        this.video = "";
        this.description = "";
        this.codegenetique = "";
        this.datepublication = new Date();
        this.lignecommandeclients = [];
    }
    return Animal;
}());
exports.Animal = Animal;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQW5pbWFsLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiQW5pbWFsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsdUNBQXdDO0FBQ3hDLDZDQUF3QztBQUl4QztJQUNJO1FBQ0EsYUFBUSxHQUFRLEVBQUUsQ0FBQztRQUNuQixlQUFVLEdBQVksSUFBSSxxQkFBVSxFQUFFLENBQUM7UUFDdkMsWUFBTyxHQUFTLElBQUkscUJBQU8sRUFBRSxDQUFFO1FBQy9CLFFBQUcsR0FBUSxFQUFFLENBQUM7UUFDZCxTQUFJLEdBQVEsRUFBRSxDQUFDO1FBQ2YsVUFBSyxHQUFRLEVBQUUsQ0FBQztRQUNoQixVQUFLLEdBQVEsRUFBRSxDQUFDO1FBQ2hCLGdCQUFXLEdBQVEsRUFBRSxDQUFDO1FBSXRCLGtCQUFhLEdBQVEsRUFBRSxDQUFDO1FBRXhCLG9CQUFlLEdBQVEsSUFBSSxJQUFJLEVBQUUsQ0FBRTtRQUVuQyx5QkFBb0IsR0FBeUIsRUFBRSxDQUFFO0lBaEJuQyxDQUFDO0lBb0JuQixhQUFDO0FBQUQsQ0FBQyxBQXJCRCxJQXFCQztBQXJCWSx3QkFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFR5cGVBbmltYWwgfSBmcm9tIFwiLi9DYXRlZ29yeVwiO1xuaW1wb3J0IHsgRWxldmV1ciB9IGZyb20gXCIuL1V0aWxpc2F0ZXVyXCI7XG5pbXBvcnQgeyBDb21tYW5kZUNsaWVudCwgTGlnbmVDb21tYW5kZUNsaWVudCB9IGZyb20gJy4vQ29tbWFuZGUnO1xuaW1wb3J0IHsgRGF0ZVBpcGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29tbW9uL3NyYy9waXBlc1wiO1xuXG5leHBvcnQgY2xhc3MgQW5pbWFse1xuICAgIGNvbnN0cnVjdG9yKCl7fVxuICAgIGlkYW5pbWFsOnN0cmluZz1cIlwiO1xuICAgIHR5cGVhbmltYWw6VHlwZUFuaW1hbD1uZXcgVHlwZUFuaW1hbCgpO1xuICAgIGVsZXZldXI6RWxldmV1cj1uZXcgRWxldmV1cigpIDtcbiAgICBub206c3RyaW5nPVwiXCI7XG4gICAgc2V4ZTpzdHJpbmc9XCJcIjtcbiAgICBwaG90bzpzdHJpbmc9XCJcIjtcbiAgICB2aWRlbzpzdHJpbmc9XCJcIjtcbiAgICBkZXNjcmlwdGlvbjpzdHJpbmc9XCJcIjtcbiAgICBwb2lkczpudW1iZXI7XG4gICAgdGFpbGU6bnVtYmVyO1xuICAgIGFnZTpudW1iZXIgO1xuICAgIGNvZGVnZW5ldGlxdWU6c3RyaW5nPVwiXCI7XG4gICAgcHJpeDpudW1iZXIgO1xuICAgIGRhdGVwdWJsaWNhdGlvbjpEYXRlID0gbmV3IERhdGUoKSA7XG4gICAgdmFsaWRlclB1YmxpY2F0aW9uOmJvb2xlYW4gO1xuICAgIGxpZ25lY29tbWFuZGVjbGllbnRzOkxpZ25lQ29tbWFuZGVDbGllbnRbXSA9IFtdIDtcblxuXG5cbn1cblxuIl19