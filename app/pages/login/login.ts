import loginModel from "./login-model";
import {Page} from "ui/page";
import {EventData} from 'data/observable';

var model= new loginModel();

function loginLoaded(args: EventData) {
    var page = <Page>args.object;
    page.bindingContext = model;
}
exports.loginLoaded = loginLoaded;