import registerModel from "./register-view-model";
import {Page} from "ui/page";
import {EventData} from 'data/observable';

var model= new registerModel();

function registerLoaded(args: EventData) {
    var page = <Page>args.object;
    page.bindingContext = model;
}
exports.registerLoaded = registerLoaded;