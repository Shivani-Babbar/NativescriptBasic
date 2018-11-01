"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var observable_1 = require("data/observable");
var frame_1 = require("tns-core-modules/ui/frame");
var HelloWorldModel = /** @class */ (function (_super) {
    __extends(HelloWorldModel, _super);
    function HelloWorldModel() {
        return _super.call(this) || this;
    }
    HelloWorldModel.prototype.navigateToLogin = function () {
        var frame = frame_1.getFrameById("firstFrame");
        frame.navigate("pages/login/login");
    };
    HelloWorldModel.prototype.navigateToRegister = function () {
        var frame = frame_1.getFrameById("firstFrame");
        frame.navigate("pages/register/register-page");
    };
    return HelloWorldModel;
}(observable_1.Observable));
exports.default = HelloWorldModel;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi12aWV3LW1vZGVsLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibWFpbi12aWV3LW1vZGVsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsOENBQTJDO0FBQzNDLG1EQUF5RDtBQUl6RDtJQUE4QixtQ0FBVTtJQUVwQztlQUNJLGlCQUFPO0lBQ1gsQ0FBQztJQUVELHlDQUFlLEdBQWY7UUFDSSxJQUFNLEtBQUssR0FBRyxvQkFBWSxDQUFDLFlBQVksQ0FBQyxDQUFDO1FBQ3pDLEtBQUssQ0FBQyxRQUFRLENBQUMsbUJBQW1CLENBQUMsQ0FBQztJQUN4QyxDQUFDO0lBQ0QsNENBQWtCLEdBQWxCO1FBQ0ksSUFBTSxLQUFLLEdBQUcsb0JBQVksQ0FBQyxZQUFZLENBQUMsQ0FBQztRQUN6QyxLQUFLLENBQUMsUUFBUSxDQUFDLDhCQUE4QixDQUFDLENBQUM7SUFDbkQsQ0FBQztJQUNMLHNCQUFDO0FBQUQsQ0FBQyxBQWRELENBQThCLHVCQUFVLEdBY3ZDO0FBRUQsa0JBQWUsZUFBZSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtPYnNlcnZhYmxlfSBmcm9tIFwiZGF0YS9vYnNlcnZhYmxlXCI7XG5pbXBvcnQgeyBnZXRGcmFtZUJ5SWQgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91aS9mcmFtZVwiO1xuaW1wb3J0IHtBbmltYXRpb25DdXJ2ZX0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdWkvZW51bXNcIjtcblxuXG5jbGFzcyBIZWxsb1dvcmxkTW9kZWwgZXh0ZW5kcyBPYnNlcnZhYmxle1xuXG4gICAgY29uc3RydWN0b3IoKXtcbiAgICAgICAgc3VwZXIoKTtcbiAgICB9XG5cbiAgICBuYXZpZ2F0ZVRvTG9naW4oKXtcbiAgICAgICAgY29uc3QgZnJhbWUgPSBnZXRGcmFtZUJ5SWQoXCJmaXJzdEZyYW1lXCIpO1xuICAgICAgICBmcmFtZS5uYXZpZ2F0ZShcInBhZ2VzL2xvZ2luL2xvZ2luXCIpO1xuICAgIH1cbiAgICBuYXZpZ2F0ZVRvUmVnaXN0ZXIoKXtcbiAgICAgICAgY29uc3QgZnJhbWUgPSBnZXRGcmFtZUJ5SWQoXCJmaXJzdEZyYW1lXCIpO1xuICAgICAgICBmcmFtZS5uYXZpZ2F0ZShcInBhZ2VzL3JlZ2lzdGVyL3JlZ2lzdGVyLXBhZ2VcIik7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBIZWxsb1dvcmxkTW9kZWw7Il19