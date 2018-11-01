import listingModel from "./listing-view-model";
import {Page} from "ui/page";
import {EventData} from 'data/observable';

var model= new listingModel();

function listingLoaded(args: EventData) {
    var page = <Page>args.object;
    page.bindingContext = model;
}
exports.listingLoaded = listingLoaded;