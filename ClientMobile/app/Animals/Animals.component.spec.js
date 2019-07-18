"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("@angular/core/testing");
var http_1 = require("@angular/http");
require("rxjs/Rx");
var Animals_component_1 = require("./Animals.component");
var Animals_service_1 = require("./shared/Animals.service");
var rxjs_1 = require("rxjs");
describe('a Animals component', function () {
    var component;
    // register all needed dependencies
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({
            imports: [http_1.HttpModule],
            providers: [
                { provide: Animals_service_1.AnimalsService, useClass: MockAnimalsService },
                Animals_component_1.AnimalsComponent
            ]
        });
    });
    // instantiation through framework injection
    beforeEach(testing_1.inject([Animals_component_1.AnimalsComponent], function (AnimalsComponent) {
        component = AnimalsComponent;
    }));
    it('should have an instance', function () {
        expect(component).toBeDefined();
    });
});
// Mock of the original Animals service
var MockAnimalsService = /** @class */ (function (_super) {
    __extends(MockAnimalsService, _super);
    function MockAnimalsService() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MockAnimalsService.prototype.getList = function () {
        return rxjs_1.Observable.from([{ id: 1, name: 'One' }, { id: 2, name: 'Two' }]);
    };
    return MockAnimalsService;
}(Animals_service_1.AnimalsService));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQW5pbWFscy5jb21wb25lbnQuc3BlYy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIkFuaW1hbHMuY29tcG9uZW50LnNwZWMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxpREFBd0Q7QUFDeEQsc0NBQTJDO0FBQzNDLG1CQUFpQjtBQUVqQix5REFBdUQ7QUFDdkQsNERBQTBEO0FBRTFELDZCQUFrQztBQUdsQyxRQUFRLENBQUMscUJBQXFCLEVBQUU7SUFDL0IsSUFBSSxTQUEyQixDQUFDO0lBRWhDLG1DQUFtQztJQUNuQyxVQUFVLENBQUM7UUFDVixpQkFBTyxDQUFDLHNCQUFzQixDQUFDO1lBQzlCLE9BQU8sRUFBRSxDQUFDLGlCQUFVLENBQUM7WUFDckIsU0FBUyxFQUFFO2dCQUNWLEVBQUUsT0FBTyxFQUFFLGdDQUFjLEVBQUUsUUFBUSxFQUFFLGtCQUFrQixFQUFFO2dCQUN6RCxvQ0FBZ0I7YUFDaEI7U0FDRCxDQUFDLENBQUM7SUFDSixDQUFDLENBQUMsQ0FBQztJQUVILDRDQUE0QztJQUM1QyxVQUFVLENBQUMsZ0JBQU0sQ0FBQyxDQUFDLG9DQUFnQixDQUFDLEVBQUUsVUFBQyxnQkFBZ0I7UUFDdEQsU0FBUyxHQUFHLGdCQUFnQixDQUFDO0lBQzlCLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFFSixFQUFFLENBQUMseUJBQXlCLEVBQUU7UUFDN0IsTUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQ2pDLENBQUMsQ0FBQyxDQUFDO0FBQ0osQ0FBQyxDQUFDLENBQUM7QUFFSCx1Q0FBdUM7QUFDdkM7SUFBaUMsc0NBQWM7SUFBL0M7O0lBSUEsQ0FBQztJQUhBLG9DQUFPLEdBQVA7UUFDQyxPQUFPLGlCQUFVLENBQUMsSUFBSSxDQUFDLENBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBQyxDQUFFLENBQUMsQ0FBQztJQUMxRSxDQUFDO0lBQ0YseUJBQUM7QUFBRCxDQUFDLEFBSkQsQ0FBaUMsZ0NBQWMsR0FJOUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBUZXN0QmVkLCBpbmplY3QgfSBmcm9tICdAYW5ndWxhci9jb3JlL3Rlc3RpbmcnO1xuaW1wb3J0IHsgSHR0cE1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2h0dHAnO1xuaW1wb3J0ICdyeGpzL1J4JztcblxuaW1wb3J0IHsgQW5pbWFsc0NvbXBvbmVudCB9IGZyb20gJy4vQW5pbWFscy5jb21wb25lbnQnO1xuaW1wb3J0IHsgQW5pbWFsc1NlcnZpY2UgfSBmcm9tICcuL3NoYXJlZC9BbmltYWxzLnNlcnZpY2UnO1xuaW1wb3J0IHsgQW5pbWFscyB9IGZyb20gJy4vc2hhcmVkL0FuaW1hbHMubW9kZWwnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuXG5cbmRlc2NyaWJlKCdhIEFuaW1hbHMgY29tcG9uZW50JywgKCkgPT4ge1xuXHRsZXQgY29tcG9uZW50OiBBbmltYWxzQ29tcG9uZW50O1xuXG5cdC8vIHJlZ2lzdGVyIGFsbCBuZWVkZWQgZGVwZW5kZW5jaWVzXG5cdGJlZm9yZUVhY2goKCkgPT4ge1xuXHRcdFRlc3RCZWQuY29uZmlndXJlVGVzdGluZ01vZHVsZSh7XG5cdFx0XHRpbXBvcnRzOiBbSHR0cE1vZHVsZV0sXG5cdFx0XHRwcm92aWRlcnM6IFtcblx0XHRcdFx0eyBwcm92aWRlOiBBbmltYWxzU2VydmljZSwgdXNlQ2xhc3M6IE1vY2tBbmltYWxzU2VydmljZSB9LFxuXHRcdFx0XHRBbmltYWxzQ29tcG9uZW50XG5cdFx0XHRdXG5cdFx0fSk7XG5cdH0pO1xuXG5cdC8vIGluc3RhbnRpYXRpb24gdGhyb3VnaCBmcmFtZXdvcmsgaW5qZWN0aW9uXG5cdGJlZm9yZUVhY2goaW5qZWN0KFtBbmltYWxzQ29tcG9uZW50XSwgKEFuaW1hbHNDb21wb25lbnQpID0+IHtcblx0XHRjb21wb25lbnQgPSBBbmltYWxzQ29tcG9uZW50O1xuXHR9KSk7XG5cblx0aXQoJ3Nob3VsZCBoYXZlIGFuIGluc3RhbmNlJywgKCkgPT4ge1xuXHRcdGV4cGVjdChjb21wb25lbnQpLnRvQmVEZWZpbmVkKCk7XG5cdH0pO1xufSk7XG5cbi8vIE1vY2sgb2YgdGhlIG9yaWdpbmFsIEFuaW1hbHMgc2VydmljZVxuY2xhc3MgTW9ja0FuaW1hbHNTZXJ2aWNlIGV4dGVuZHMgQW5pbWFsc1NlcnZpY2Uge1xuXHRnZXRMaXN0KCk6IE9ic2VydmFibGU8YW55PiB7XG5cdFx0cmV0dXJuIE9ic2VydmFibGUuZnJvbShbIHsgaWQ6IDEsIG5hbWU6ICdPbmUnfSwgeyBpZDogMiwgbmFtZTogJ1R3byd9IF0pO1xuXHR9XG59XG4iXX0=