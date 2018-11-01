"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var observable_1 = require("data/observable");
var localStorage = require("nativescript-localstorage");
var http_1 = require("tns-core-modules/http");
var listingModel = /** @class */ (function (_super) {
    __extends(listingModel, _super);
    function listingModel() {
        var _this = _super.call(this) || this;
        console.log("enter");
        _this.getList();
        return _this;
    }
    listingModel.prototype.getList = function () {
        var value = JSON.parse(localStorage.getItem("userData"));
        var token = value.token;
        var url = "http://10.20.3.195:5400/orders/userlanguage?language=English";
        http_1.request({
            url: url,
            method: "GET",
            headers: { 'Authorization': 'Bearer ' + token }
        }).then(function (response) {
            var str = response.content.toString();
            console.log(str);
        }, function (e) {
            console.log(e);
        });
    };
    return listingModel;
}(observable_1.Observable));
exports.default = listingModel;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdGluZy12aWV3LW1vZGVsLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibGlzdGluZy12aWV3LW1vZGVsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsOENBQTJDO0FBQzNDLElBQUksWUFBWSxHQUFHLE9BQU8sQ0FBQywyQkFBMkIsQ0FBQyxDQUFDO0FBQ3hELDhDQUE2RDtBQUU3RDtJQUEyQixnQ0FBVTtJQUVqQztRQUFBLFlBQ0ksaUJBQU8sU0FHVjtRQUZHLE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUE7UUFDcEIsS0FBSSxDQUFDLE9BQU8sRUFBRSxDQUFBOztJQUNsQixDQUFDO0lBRUQsOEJBQU8sR0FBUDtRQUNJLElBQUksS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDO1FBQ3pELElBQUksS0FBSyxHQUFHLEtBQUssQ0FBQyxLQUFLLENBQUE7UUFDdkIsSUFBSSxHQUFHLEdBQUMsOERBQThELENBQUM7UUFDdkUsY0FBTyxDQUFDO1lBQ0osR0FBRyxFQUFFLEdBQUc7WUFDUixNQUFNLEVBQUUsS0FBSztZQUNiLE9BQU8sRUFBRSxFQUFDLGVBQWUsRUFBRSxTQUFTLEdBQUcsS0FBSyxFQUFDO1NBQ2hELENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBQyxRQUFzQjtZQUMzQixJQUFNLEdBQUcsR0FBRyxRQUFRLENBQUMsT0FBTyxDQUFDLFFBQVEsRUFBRSxDQUFDO1lBQ3hDLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUE7UUFDcEIsQ0FBQyxFQUFFLFVBQUMsQ0FBQztZQUNELE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUE7UUFDbEIsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBRUwsbUJBQUM7QUFBRCxDQUFDLEFBeEJELENBQTJCLHVCQUFVLEdBd0JwQztBQUVELGtCQUFlLFlBQVksQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7T2JzZXJ2YWJsZX0gZnJvbSBcImRhdGEvb2JzZXJ2YWJsZVwiO1xudmFyIGxvY2FsU3RvcmFnZSA9IHJlcXVpcmUoXCJuYXRpdmVzY3JpcHQtbG9jYWxzdG9yYWdlXCIpO1xuaW1wb3J0IHsgcmVxdWVzdCwgSHR0cFJlc3BvbnNlfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy9odHRwXCI7XG5cbmNsYXNzIGxpc3RpbmdNb2RlbCBleHRlbmRzIE9ic2VydmFibGV7XG5cbiAgICBjb25zdHJ1Y3Rvcigpe1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICBjb25zb2xlLmxvZyhcImVudGVyXCIpXG4gICAgICAgIHRoaXMuZ2V0TGlzdCgpXG4gICAgfVxuXG4gICAgZ2V0TGlzdCgpe1xuICAgICAgICBsZXQgdmFsdWUgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidXNlckRhdGFcIikpO1xuICAgICAgICBsZXQgdG9rZW4gPSB2YWx1ZS50b2tlblxuICAgICAgICBsZXQgdXJsPVwiaHR0cDovLzEwLjIwLjMuMTk1OjU0MDAvb3JkZXJzL3VzZXJsYW5ndWFnZT9sYW5ndWFnZT1FbmdsaXNoXCI7XG4gICAgICAgIHJlcXVlc3Qoe1xuICAgICAgICAgICAgdXJsOiB1cmwsXG4gICAgICAgICAgICBtZXRob2Q6IFwiR0VUXCIsXG4gICAgICAgICAgICBoZWFkZXJzOiB7J0F1dGhvcml6YXRpb24nOiAnQmVhcmVyICcgKyB0b2tlbn1cbiAgICAgICAgfSkudGhlbigocmVzcG9uc2U6IEh0dHBSZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgY29uc3Qgc3RyID0gcmVzcG9uc2UuY29udGVudC50b1N0cmluZygpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coc3RyKVxuICAgICAgICB9LCAoZSkgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2coZSlcbiAgICAgICAgfSk7XG4gICAgfVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IGxpc3RpbmdNb2RlbDsiXX0=