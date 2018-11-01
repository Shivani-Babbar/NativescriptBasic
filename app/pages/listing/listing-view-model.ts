import {Observable} from "data/observable";
var localStorage = require("nativescript-localstorage");
import { request, HttpResponse} from "tns-core-modules/http";

class listingModel extends Observable{

    allLanguages:any;

    constructor(){
        super();
        console.log("enter")
        this.getList()
    }

    getList(){
        let value = JSON.parse(localStorage.getItem("userData"));
        let token = value.token
        let url="http://10.20.3.195:5400/orders/userlanguage?language=English";
        request({
            url: url,
            method: "GET",
            headers: {'Authorization': 'Bearer ' + token}
        }).then((response: HttpResponse) => {
            const str = response.content.toString();
            let data=str[0].user;
            console.log(str)
            this.set("allLanguages",str[user])
        }, (e) => {
            console.log(e)
        });
    }

}

export default listingModel;