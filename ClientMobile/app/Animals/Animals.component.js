"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var Animals_service_1 = require("./shared/Animals.service");
var AnimalsComponent = /** @class */ (function () {
    function AnimalsComponent(AnimalsService) {
        this.AnimalsService = AnimalsService;
        this.Animals = [];
    }
    AnimalsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.AnimalsService.getList().subscribe(function (res) {
            _this.Animals = res;
        });
    };
    AnimalsComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'Animals',
            templateUrl: 'Animals.component.html',
            providers: [Animals_service_1.AnimalsService]
        }),
        __metadata("design:paramtypes", [Animals_service_1.AnimalsService])
    ], AnimalsComponent);
    return AnimalsComponent;
}());
exports.AnimalsComponent = AnimalsComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQW5pbWFscy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJBbmltYWxzLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFrRDtBQUdsRCw0REFBMEQ7QUFTMUQ7SUFHQywwQkFBb0IsY0FBOEI7UUFBOUIsbUJBQWMsR0FBZCxjQUFjLENBQWdCO1FBRmxELFlBQU8sR0FBYyxFQUFFLENBQUM7SUFFOEIsQ0FBQztJQUV2RCxtQ0FBUSxHQUFSO1FBQUEsaUJBSUM7UUFIQSxJQUFJLENBQUMsY0FBYyxDQUFDLE9BQU8sRUFBRSxDQUFDLFNBQVMsQ0FBQyxVQUFDLEdBQUc7WUFDM0MsS0FBSSxDQUFDLE9BQU8sR0FBRyxHQUFHLENBQUM7UUFDcEIsQ0FBQyxDQUFDLENBQUM7SUFDSixDQUFDO0lBVFcsZ0JBQWdCO1FBUDVCLGdCQUFTLENBQUM7WUFDVixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsUUFBUSxFQUFFLFNBQVM7WUFDbkIsV0FBVyxFQUFFLHdCQUF3QjtZQUNyQyxTQUFTLEVBQUUsQ0FBQyxnQ0FBYyxDQUFDO1NBQzNCLENBQUM7eUNBS21DLGdDQUFjO09BSHRDLGdCQUFnQixDQVU1QjtJQUFELHVCQUFDO0NBQUEsQUFWRCxJQVVDO0FBVlksNENBQWdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgQW5pbWFscyB9IGZyb20gJy4vc2hhcmVkL0FuaW1hbHMubW9kZWwnO1xuaW1wb3J0IHsgQW5pbWFsc1NlcnZpY2UgfSBmcm9tICcuL3NoYXJlZC9BbmltYWxzLnNlcnZpY2UnO1xuXG5AQ29tcG9uZW50KHtcblx0bW9kdWxlSWQ6IG1vZHVsZS5pZCxcblx0c2VsZWN0b3I6ICdBbmltYWxzJyxcblx0dGVtcGxhdGVVcmw6ICdBbmltYWxzLmNvbXBvbmVudC5odG1sJyxcblx0cHJvdmlkZXJzOiBbQW5pbWFsc1NlcnZpY2VdXG59KVxuXG5leHBvcnQgY2xhc3MgQW5pbWFsc0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cdEFuaW1hbHM6IEFuaW1hbHNbXSA9IFtdO1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgQW5pbWFsc1NlcnZpY2U6IEFuaW1hbHNTZXJ2aWNlKSB7IH1cblxuXHRuZ09uSW5pdCgpIHtcblx0XHR0aGlzLkFuaW1hbHNTZXJ2aWNlLmdldExpc3QoKS5zdWJzY3JpYmUoKHJlcykgPT4ge1xuXHRcdFx0dGhpcy5BbmltYWxzID0gcmVzO1xuXHRcdH0pO1xuXHR9XG59Il19