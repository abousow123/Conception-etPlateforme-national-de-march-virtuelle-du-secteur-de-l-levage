"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
require("rxjs/add/operator/map");
var map_1 = require("rxjs/internal/operators/map");
var AnimalsService = /** @class */ (function () {
    function AnimalsService(http) {
        this.http = http;
    }
    AnimalsService.prototype.getList = function () {
        return this.http.get('/api/list').pipe(map_1.map(function (res) { return res.json(); }));
    };
    AnimalsService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.Http])
    ], AnimalsService);
    return AnimalsService;
}());
exports.AnimalsService = AnimalsService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQW5pbWFscy5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiQW5pbWFscy5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTJDO0FBQzNDLHNDQUFxQztBQUVyQyxpQ0FBK0I7QUFJL0IsbURBQWtEO0FBR2xEO0lBRUMsd0JBQW9CLElBQVU7UUFBVixTQUFJLEdBQUosSUFBSSxDQUFNO0lBQUksQ0FBQztJQUVuQyxnQ0FBTyxHQUFQO1FBQ0MsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBRyxDQUFDLFVBQUEsR0FBRyxJQUFJLE9BQUEsR0FBRyxDQUFDLElBQUksRUFBZSxFQUF2QixDQUF1QixDQUFDLENBQUMsQ0FBQztJQUM3RSxDQUFDO0lBTlcsY0FBYztRQUQxQixpQkFBVSxFQUFFO3lDQUdjLFdBQUk7T0FGbEIsY0FBYyxDQU8xQjtJQUFELHFCQUFDO0NBQUEsQUFQRCxJQU9DO0FBUFksd0NBQWMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBIdHRwIH0gZnJvbSAnQGFuZ3VsYXIvaHR0cCc7XG5cbmltcG9ydCAncnhqcy9hZGQvb3BlcmF0b3IvbWFwJztcblxuaW1wb3J0IHsgQW5pbWFscyB9IGZyb20gJy4vQW5pbWFscy5tb2RlbCc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBtYXAgfSBmcm9tICdyeGpzL2ludGVybmFsL29wZXJhdG9ycy9tYXAnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQW5pbWFsc1NlcnZpY2Uge1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cDogSHR0cCkgeyB9XG5cblx0Z2V0TGlzdCgpOiBPYnNlcnZhYmxlPEFuaW1hbHNbXT4ge1xuXHRcdHJldHVybiB0aGlzLmh0dHAuZ2V0KCcvYXBpL2xpc3QnKS5waXBlKG1hcChyZXMgPT4gcmVzLmpzb24oKSBhcyBBbmltYWxzW10pKTtcblx0fVxufSJdfQ==