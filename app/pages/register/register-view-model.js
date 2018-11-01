"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var observable_1 = require("data/observable");
var http_1 = require("tns-core-modules/http");
var Toast = require("nativescript-toasts");
var frame_1 = require("tns-core-modules/ui/frame");
// import * as Toast from "nativescript-toast";
var registerModel = /** @class */ (function (_super) {
    __extends(registerModel, _super);
    function registerModel() {
        var _this = _super.call(this) || this;
        _this.registerUsername = "";
        _this.resgisterPassword = "";
        return _this;
    }
    registerModel.prototype.registerUser = function () {
        var getUsername = this.registerUsername;
        var getPassword = this.resgisterPassword;
        this.apiCallRegister(getUsername, getPassword);
    };
    registerModel.prototype.apiCallRegister = function (username_fetch, password_fetch) {
        var _this = this;
        var url = "http://10.20.3.195:5400/user/signup";
        var postData = {
            "email": username_fetch,
            "password": password_fetch
        };
        http_1.request({
            url: url,
            method: "POST",
            headers: { "Content-Type": "application/json" },
            content: JSON.stringify(postData)
        }).then(function (response) {
            var result = response.content.toJSON();
            console.log(postData);
            console.log(result.message);
            _this.showtoastandNavigate(result.message);
            setTimeout(function () {
                _this.set("registerUsername", "");
                _this.set("resgisterPassword", "");
                var frame = frame_1.getFrameById("firstFrame");
                frame.navigate("pages/login/login");
            }, 1000);
        }, function (e) {
            console.log(JSON.stringify(e));
        });
    };
    registerModel.prototype.showtoastandNavigate = function (message) {
        var toastOptions = {
            text: message,
            duration: Toast.DURATION.SHORT,
            position: Toast.POSITION.CENTER
        };
        Toast.show(toastOptions);
        // Toast.makeText(message).show();
    };
    return registerModel;
}(observable_1.Observable));
exports.default = registerModel;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVnaXN0ZXItdmlldy1tb2RlbC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInJlZ2lzdGVyLXZpZXctbW9kZWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSw4Q0FBMkM7QUFDM0MsOENBQXVGO0FBQ3ZGLDJDQUE2QztBQUM3QyxtREFBeUQ7QUFDekQsK0NBQStDO0FBRS9DO0lBQTRCLGlDQUFVO0lBS2xDO1FBQUEsWUFDSSxpQkFBTyxTQUNWO1FBTEQsc0JBQWdCLEdBQUssRUFBRSxDQUFDO1FBQ3hCLHVCQUFpQixHQUFLLEVBQUUsQ0FBQzs7SUFJekIsQ0FBQztJQUVELG9DQUFZLEdBQVo7UUFDSSxJQUFJLFdBQVcsR0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUM7UUFDdEMsSUFBSSxXQUFXLEdBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDO1FBQ3ZDLElBQUksQ0FBQyxlQUFlLENBQUMsV0FBVyxFQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQ2xELENBQUM7SUFFRCx1Q0FBZSxHQUFmLFVBQWdCLGNBQWMsRUFBQyxjQUFjO1FBQTdDLGlCQTBCQztRQXpCRyxJQUFJLEdBQUcsR0FBQyxxQ0FBcUMsQ0FBQztRQUM5QyxJQUFJLFFBQVEsR0FBQztZQUNULE9BQU8sRUFBRSxjQUFjO1lBQ3ZCLFVBQVUsRUFBRSxjQUFjO1NBQzdCLENBQUE7UUFDRCxjQUFPLENBQUM7WUFDSixHQUFHLEVBQUUsR0FBRztZQUNSLE1BQU0sRUFBRSxNQUFNO1lBQ2QsT0FBTyxFQUFFLEVBQUUsY0FBYyxFQUFFLGtCQUFrQixFQUFFO1lBQy9DLE9BQU8sRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQztTQUNwQyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQUMsUUFBUTtZQUNiLElBQU0sTUFBTSxHQUFHLFFBQVEsQ0FBQyxPQUFPLENBQUMsTUFBTSxFQUFFLENBQUM7WUFDekMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUN0QixPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQztZQUM1QixLQUFJLENBQUMsb0JBQW9CLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBRTFDLFVBQVUsQ0FBQztnQkFDUCxLQUFJLENBQUMsR0FBRyxDQUFDLGtCQUFrQixFQUFDLEVBQUUsQ0FBQyxDQUFDO2dCQUNoQyxLQUFJLENBQUMsR0FBRyxDQUFDLG1CQUFtQixFQUFDLEVBQUUsQ0FBQyxDQUFDO2dCQUNqQyxJQUFNLEtBQUssR0FBRyxvQkFBWSxDQUFDLFlBQVksQ0FBQyxDQUFDO2dCQUN6QyxLQUFLLENBQUMsUUFBUSxDQUFDLG1CQUFtQixDQUFDLENBQUM7WUFDeEMsQ0FBQyxFQUFDLElBQUksQ0FBQyxDQUFDO1FBQ1osQ0FBQyxFQUFFLFVBQUMsQ0FBQztZQUNELE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ25DLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUVELDRDQUFvQixHQUFwQixVQUFxQixPQUFPO1FBQ3hCLElBQUksWUFBWSxHQUFzQjtZQUNsQyxJQUFJLEVBQUUsT0FBTztZQUNiLFFBQVEsRUFBRSxLQUFLLENBQUMsUUFBUSxDQUFDLEtBQUs7WUFDOUIsUUFBUSxFQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsTUFBTTtTQUNqQyxDQUFDO1FBQ0YsS0FBSyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztRQUN6QixrQ0FBa0M7SUFDdEMsQ0FBQztJQUNMLG9CQUFDO0FBQUQsQ0FBQyxBQXBERCxDQUE0Qix1QkFBVSxHQW9EckM7QUFFRCxrQkFBZSxhQUFhLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge09ic2VydmFibGV9IGZyb20gXCJkYXRhL29ic2VydmFibGVcIjtcbmltcG9ydCB7IHJlcXVlc3QsIGdldEZpbGUsIGdldEltYWdlLCBnZXRKU09OLCBnZXRTdHJpbmcgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy9odHRwXCI7XG5pbXBvcnQgKiBhcyBUb2FzdCBmcm9tICduYXRpdmVzY3JpcHQtdG9hc3RzJztcbmltcG9ydCB7IGdldEZyYW1lQnlJZCB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2ZyYW1lXCI7XG4vLyBpbXBvcnQgKiBhcyBUb2FzdCBmcm9tIFwibmF0aXZlc2NyaXB0LXRvYXN0XCI7XG5cbmNsYXNzIHJlZ2lzdGVyTW9kZWwgZXh0ZW5kcyBPYnNlcnZhYmxle1xuXG4gICAgcmVnaXN0ZXJVc2VybmFtZTphbnk9XCJcIjtcbiAgICByZXNnaXN0ZXJQYXNzd29yZDphbnk9XCJcIjtcblxuICAgIGNvbnN0cnVjdG9yKCl7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgfVxuXG4gICAgcmVnaXN0ZXJVc2VyKCl7XG4gICAgICAgIGxldCBnZXRVc2VybmFtZT10aGlzLnJlZ2lzdGVyVXNlcm5hbWU7XG4gICAgICAgIGxldCBnZXRQYXNzd29yZD10aGlzLnJlc2dpc3RlclBhc3N3b3JkO1xuICAgICAgICB0aGlzLmFwaUNhbGxSZWdpc3RlcihnZXRVc2VybmFtZSxnZXRQYXNzd29yZCk7XG4gICAgfVxuXG4gICAgYXBpQ2FsbFJlZ2lzdGVyKHVzZXJuYW1lX2ZldGNoLHBhc3N3b3JkX2ZldGNoKXtcbiAgICAgICAgbGV0IHVybD1cImh0dHA6Ly8xMC4yMC4zLjE5NTo1NDAwL3VzZXIvc2lnbnVwXCI7XG4gICAgICAgIHZhciBwb3N0RGF0YT17XG4gICAgICAgICAgICBcImVtYWlsXCI6IHVzZXJuYW1lX2ZldGNoLFxuICAgICAgICAgICAgXCJwYXNzd29yZFwiOiBwYXNzd29yZF9mZXRjaFxuICAgICAgICB9XG4gICAgICAgIHJlcXVlc3Qoe1xuICAgICAgICAgICAgdXJsOiB1cmwsXG4gICAgICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxuICAgICAgICAgICAgaGVhZGVyczogeyBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIiB9LFxuICAgICAgICAgICAgY29udGVudDogSlNPTi5zdHJpbmdpZnkocG9zdERhdGEpXG4gICAgICAgIH0pLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCByZXN1bHQgPSByZXNwb25zZS5jb250ZW50LnRvSlNPTigpO1xuICAgICAgICAgICAgY29uc29sZS5sb2cocG9zdERhdGEpO1xuICAgICAgICAgICAgY29uc29sZS5sb2cocmVzdWx0Lm1lc3NhZ2UpO1xuICAgICAgICAgICAgdGhpcy5zaG93dG9hc3RhbmROYXZpZ2F0ZShyZXN1bHQubWVzc2FnZSk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCk9PntcbiAgICAgICAgICAgICAgICB0aGlzLnNldChcInJlZ2lzdGVyVXNlcm5hbWVcIixcIlwiKTtcbiAgICAgICAgICAgICAgICB0aGlzLnNldChcInJlc2dpc3RlclBhc3N3b3JkXCIsXCJcIik7XG4gICAgICAgICAgICAgICAgY29uc3QgZnJhbWUgPSBnZXRGcmFtZUJ5SWQoXCJmaXJzdEZyYW1lXCIpO1xuICAgICAgICAgICAgICAgIGZyYW1lLm5hdmlnYXRlKFwicGFnZXMvbG9naW4vbG9naW5cIik7XG4gICAgICAgICAgICB9LDEwMDApO1xuICAgICAgICB9LCAoZSkgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkoZSkpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBzaG93dG9hc3RhbmROYXZpZ2F0ZShtZXNzYWdlKXtcbiAgICAgICAgbGV0IHRvYXN0T3B0aW9uczpUb2FzdC5Ub2FzdE9wdGlvbnMgPSB7XG4gICAgICAgICAgICB0ZXh0OiBtZXNzYWdlLCBcbiAgICAgICAgICAgIGR1cmF0aW9uOiBUb2FzdC5EVVJBVElPTi5TSE9SVCxcbiAgICAgICAgICAgIHBvc2l0aW9uOlRvYXN0LlBPU0lUSU9OLkNFTlRFUlxuICAgICAgICB9O1xuICAgICAgICBUb2FzdC5zaG93KHRvYXN0T3B0aW9ucyk7XG4gICAgICAgIC8vIFRvYXN0Lm1ha2VUZXh0KG1lc3NhZ2UpLnNob3coKTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHJlZ2lzdGVyTW9kZWw7Il19