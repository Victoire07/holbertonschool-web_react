/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/*!********************!*\
  !*** ./js/main.ts ***!
  \********************/

// Création de la classe Director qui implémente DirectorInterface (T5)
var Director = /** @class */ (function () {
    function Director() {
    }
    Director.prototype.workFromHome = function () {
        return "Working from home";
    };
    Director.prototype.getCoffeeBreak = function () {
        return "Getting a coffee break";
    };
    Director.prototype.workDirectorTasks = function () {
        return "Getting to director tasks";
    };
    return Director;
}());
;
// Création de classe Teacher qui implémente TeacherInterface (T5)
var Teacher = /** @class */ (function () {
    function Teacher() {
    }
    Teacher.prototype.workFromHome = function () {
        return "Cannot work from home";
    };
    Teacher.prototype.getCoffeeBreak = function () {
        return "Cannot have a break";
    };
    Teacher.prototype.workTeacherTasks = function () {
        return "Getting to work";
    };
    return Teacher;
}());
// Fonction CreateEmployee qui permet selon le salaire de dire si l'employé et teach ou dir (T5)
function createEmployee(salary) {
    if (typeof salary === 'number' && salary < 500) {
        return new Teacher();
    }
    else {
        return new Director();
    }
}
console.log(createEmployee(200));
console.log(createEmployee(1000));
console.log(createEmployee('$500'));
// Fonction isDirector
function isDirector(employee) {
    return employee instanceof Director;
}
// Fonction executeWork
function executeWork(employee) {
    if (isDirector(employee)) {
        return employee.workDirectorTasks();
    }
    else {
        return employee.workTeacherTasks();
    }
}
console.log(executeWork(createEmployee(200)));
console.log(executeWork(createEmployee(1000)));
// Fonction teachClass pour la matière
function teachClass(todayClass) {
    if (todayClass === 'Math') {
        return 'Teaching Math';
    }
    else {
        return 'Teaching History';
    }
}
console.log(teachClass("Math"));
console.log(teachClass("History"));

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQWNBLHVFQUF1RTtBQUN2RTtJQUFBO0lBV0EsQ0FBQztJQVZHLCtCQUFZLEdBQVo7UUFDSSxPQUFPLG1CQUFtQjtJQUM5QixDQUFDO0lBQ0QsaUNBQWMsR0FBZDtRQUNBLE9BQU8sd0JBQXdCLENBQUM7SUFDbEMsQ0FBQztJQUVELG9DQUFpQixHQUFqQjtRQUNFLE9BQU8sMkJBQTJCLENBQUM7SUFDckMsQ0FBQztJQUNILGVBQUM7QUFBRCxDQUFDO0FBQUEsQ0FBQztBQUVGLGtFQUFrRTtBQUNsRTtJQUFBO0lBVUEsQ0FBQztJQVRHLDhCQUFZLEdBQVo7UUFDSSxPQUFPLHVCQUF1QjtJQUNsQyxDQUFDO0lBQ0QsZ0NBQWMsR0FBZDtRQUNJLE9BQU8scUJBQXFCO0lBQ2hDLENBQUM7SUFDRCxrQ0FBZ0IsR0FBaEI7UUFDSSxPQUFPLGlCQUFpQjtJQUM1QixDQUFDO0lBQ0wsY0FBQztBQUFELENBQUM7QUFLRCxnR0FBZ0c7QUFDaEcsU0FBUyxjQUFjLENBQUMsTUFBdUI7SUFFL0MsSUFBSSxPQUFPLE1BQU0sS0FBSyxRQUFRLElBQUksTUFBTSxHQUFHLEdBQUcsRUFBRTtRQUM1QyxPQUFPLElBQUksT0FBTyxFQUFFLENBQUM7S0FDeEI7U0FBTTtRQUNILE9BQU8sSUFBSSxRQUFRLEVBQUUsQ0FBQztLQUN6QjtBQUNELENBQUM7QUFDRCxPQUFPLENBQUMsR0FBRyxDQUFDLGNBQWMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO0FBQ2pDLE9BQU8sQ0FBQyxHQUFHLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7QUFDbEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztBQUVwQyxzQkFBc0I7QUFDdEIsU0FBUyxVQUFVLENBQUMsUUFBa0I7SUFDbEMsT0FBTyxRQUFRLFlBQVksUUFBUTtBQUN2QyxDQUFDO0FBRUQsdUJBQXVCO0FBQ3ZCLFNBQVMsV0FBVyxDQUFDLFFBQWtCO0lBQ25DLElBQUksVUFBVSxDQUFDLFFBQVEsQ0FBQyxFQUFFO1FBQ3RCLE9BQU8sUUFBUSxDQUFDLGlCQUFpQixFQUFFLENBQUM7S0FDdkM7U0FBTTtRQUNILE9BQU8sUUFBUSxDQUFDLGdCQUFnQixFQUFFLENBQUM7S0FDdEM7QUFDTCxDQUFDO0FBRUQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsY0FBYyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUM5QyxPQUFPLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBSy9DLHNDQUFzQztBQUN0QyxTQUFTLFVBQVUsQ0FBQyxVQUFvQjtJQUNwQyxJQUFJLFVBQVUsS0FBSyxNQUFNLEVBQUU7UUFDdkIsT0FBTyxlQUFlO0tBQ3pCO1NBQ0k7UUFDRCxPQUFPLGtCQUFrQjtLQUM1QjtBQUNMLENBQUM7QUFFRCxPQUFPLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO0FBQ2hDLE9BQU8sQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90eXBlc2NyaXB0X2RlcGVuZGVuY2llcy8uL2pzL21haW4udHMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gQ3LDqWF0aW9uIGRlIGwnaW50ZXJmYWNlIERpcmVjdG9ySW50ZXJmYWNlIChUNSlcbmludGVyZmFjZSBEaXJlY3RvckludGVyZmFjZSB7XG4gICAgd29ya0Zyb21Ib21lKCk6IHN0cmluZztcbiAgICBnZXRDb2ZmZWVCcmVhaygpOiBzdHJpbmc7XG4gICAgd29ya0RpcmVjdG9yVGFza3MoKTogc3RyaW5nO1xufVxuXG4vLyBDcsOpYXRpb24gZGUgbCdpbnRlcmZhY2UgVGVhY2hlckludGVyZmFjZSAoVDUpXG5pbnRlcmZhY2UgVGVhY2hlckludGVyZmFjZSB7XG4gICAgd29ya0Zyb21Ib21lKCk6IHN0cmluZztcbiAgICBnZXRDb2ZmZWVCcmVhaygpOiBzdHJpbmc7XG4gICAgd29ya1RlYWNoZXJUYXNrcygpOiBzdHJpbmc7XG59XG5cbi8vIENyw6lhdGlvbiBkZSBsYSBjbGFzc2UgRGlyZWN0b3IgcXVpIGltcGzDqW1lbnRlIERpcmVjdG9ySW50ZXJmYWNlIChUNSlcbmNsYXNzIERpcmVjdG9yIGltcGxlbWVudHMgRGlyZWN0b3JJbnRlcmZhY2Uge1xuICAgIHdvcmtGcm9tSG9tZSgpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gXCJXb3JraW5nIGZyb20gaG9tZVwiXG4gICAgfVxuICAgIGdldENvZmZlZUJyZWFrKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIFwiR2V0dGluZyBhIGNvZmZlZSBicmVha1wiO1xuICB9XG5cbiAgd29ya0RpcmVjdG9yVGFza3MoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gXCJHZXR0aW5nIHRvIGRpcmVjdG9yIHRhc2tzXCI7XG4gIH1cbn07XG5cbi8vIENyw6lhdGlvbiBkZSBjbGFzc2UgVGVhY2hlciBxdWkgaW1wbMOpbWVudGUgVGVhY2hlckludGVyZmFjZSAoVDUpXG5jbGFzcyBUZWFjaGVyIGltcGxlbWVudHMgVGVhY2hlckludGVyZmFjZSB7XG4gICAgd29ya0Zyb21Ib21lKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiBcIkNhbm5vdCB3b3JrIGZyb20gaG9tZVwiXG4gICAgfVxuICAgIGdldENvZmZlZUJyZWFrKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiBcIkNhbm5vdCBoYXZlIGEgYnJlYWtcIlxuICAgIH1cbiAgICB3b3JrVGVhY2hlclRhc2tzKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiBcIkdldHRpbmcgdG8gd29ya1wiXG4gICAgfVxufVxuXG4vLyBVbiBlbXBsb3nDqSBzZXJhIHNvaXQgdHlwZSBEaXJlY3RvciBvdSBUZWFjaGVyIChUNSlcbnR5cGUgRW1wbG95ZWUgPSBEaXJlY3RvciB8IFRlYWNoZXI7XG5cbi8vIEZvbmN0aW9uIENyZWF0ZUVtcGxveWVlIHF1aSBwZXJtZXQgc2Vsb24gbGUgc2FsYWlyZSBkZSBkaXJlIHNpIGwnZW1wbG95w6kgZXQgdGVhY2ggb3UgZGlyIChUNSlcbmZ1bmN0aW9uIGNyZWF0ZUVtcGxveWVlKHNhbGFyeTogbnVtYmVyIHwgc3RyaW5nKTogRW1wbG95ZWUge1xuXG5pZiAodHlwZW9mIHNhbGFyeSA9PT0gJ251bWJlcicgJiYgc2FsYXJ5IDwgNTAwKSB7XG4gICAgcmV0dXJuIG5ldyBUZWFjaGVyKCk7XG59IGVsc2Uge1xuICAgIHJldHVybiBuZXcgRGlyZWN0b3IoKTtcbn1cbn1cbmNvbnNvbGUubG9nKGNyZWF0ZUVtcGxveWVlKDIwMCkpO1xuY29uc29sZS5sb2coY3JlYXRlRW1wbG95ZWUoMTAwMCkpO1xuY29uc29sZS5sb2coY3JlYXRlRW1wbG95ZWUoJyQ1MDAnKSk7XG5cbi8vIEZvbmN0aW9uIGlzRGlyZWN0b3JcbmZ1bmN0aW9uIGlzRGlyZWN0b3IoZW1wbG95ZWU6IEVtcGxveWVlKTogZW1wbG95ZWUgaXMgRGlyZWN0b3Ige1xuICAgIHJldHVybiBlbXBsb3llZSBpbnN0YW5jZW9mIERpcmVjdG9yXG59XG5cbi8vIEZvbmN0aW9uIGV4ZWN1dGVXb3JrXG5mdW5jdGlvbiBleGVjdXRlV29yayhlbXBsb3llZTogRW1wbG95ZWUpOiBzdHJpbmcge1xuICAgIGlmIChpc0RpcmVjdG9yKGVtcGxveWVlKSkge1xuICAgICAgICByZXR1cm4gZW1wbG95ZWUud29ya0RpcmVjdG9yVGFza3MoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gZW1wbG95ZWUud29ya1RlYWNoZXJUYXNrcygpO1xuICAgIH1cbn1cblxuY29uc29sZS5sb2coZXhlY3V0ZVdvcmsoY3JlYXRlRW1wbG95ZWUoMjAwKSkpO1xuY29uc29sZS5sb2coZXhlY3V0ZVdvcmsoY3JlYXRlRW1wbG95ZWUoMTAwMCkpKTtcblxuLy8gVHlwZSBsaXR0w6lyYWwgZGUgY2hhw65uZSAoU3ViamVjdHMpXG50eXBlIFN1YmplY3RzID0gXCJNYXRoXCIgfCBcIkhpc3RvcnlcIjtcblxuLy8gRm9uY3Rpb24gdGVhY2hDbGFzcyBwb3VyIGxhIG1hdGnDqHJlXG5mdW5jdGlvbiB0ZWFjaENsYXNzKHRvZGF5Q2xhc3M6IFN1YmplY3RzKTogc3RyaW5nIHtcbiAgICBpZiAodG9kYXlDbGFzcyA9PT0gJ01hdGgnKSB7XG4gICAgICAgIHJldHVybiAnVGVhY2hpbmcgTWF0aCdcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHJldHVybiAnVGVhY2hpbmcgSGlzdG9yeSdcbiAgICB9XG59XG5cbmNvbnNvbGUubG9nKHRlYWNoQ2xhc3MoXCJNYXRoXCIpKTtcbmNvbnNvbGUubG9nKHRlYWNoQ2xhc3MoXCJIaXN0b3J5XCIpKTtcblxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9