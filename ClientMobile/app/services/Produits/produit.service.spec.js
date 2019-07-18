"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("@angular/core/testing");
var produit_service_1 = require("./produit.service");
describe('ProduitService', function () {
    beforeEach(function () { return testing_1.TestBed.configureTestingModule({}); });
    it('should be created', function () {
        var service = testing_1.TestBed.get(produit_service_1.ProduitService);
        expect(service).toBeTruthy();
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVpdC5zZXJ2aWNlLnNwZWMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJwcm9kdWl0LnNlcnZpY2Uuc3BlYy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLGlEQUFnRDtBQUVoRCxxREFBbUQ7QUFFbkQsUUFBUSxDQUFDLGdCQUFnQixFQUFFO0lBQ3pCLFVBQVUsQ0FBQyxjQUFNLE9BQUEsaUJBQU8sQ0FBQyxzQkFBc0IsQ0FBQyxFQUFFLENBQUMsRUFBbEMsQ0FBa0MsQ0FBQyxDQUFDO0lBRXJELEVBQUUsQ0FBQyxtQkFBbUIsRUFBRTtRQUN0QixJQUFNLE9BQU8sR0FBbUIsaUJBQU8sQ0FBQyxHQUFHLENBQUMsZ0NBQWMsQ0FBQyxDQUFDO1FBQzVELE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQyxVQUFVLEVBQUUsQ0FBQztJQUMvQixDQUFDLENBQUMsQ0FBQztBQUNMLENBQUMsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVGVzdEJlZCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUvdGVzdGluZyc7XG5cbmltcG9ydCB7IFByb2R1aXRTZXJ2aWNlIH0gZnJvbSAnLi9wcm9kdWl0LnNlcnZpY2UnO1xuXG5kZXNjcmliZSgnUHJvZHVpdFNlcnZpY2UnLCAoKSA9PiB7XG4gIGJlZm9yZUVhY2goKCkgPT4gVGVzdEJlZC5jb25maWd1cmVUZXN0aW5nTW9kdWxlKHt9KSk7XG5cbiAgaXQoJ3Nob3VsZCBiZSBjcmVhdGVkJywgKCkgPT4ge1xuICAgIGNvbnN0IHNlcnZpY2U6IFByb2R1aXRTZXJ2aWNlID0gVGVzdEJlZC5nZXQoUHJvZHVpdFNlcnZpY2UpO1xuICAgIGV4cGVjdChzZXJ2aWNlKS50b0JlVHJ1dGh5KCk7XG4gIH0pO1xufSk7XG4iXX0=