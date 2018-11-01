import {Observable} from "data/observable";
import { getFrameById } from "tns-core-modules/ui/frame";
import { request} from "tns-core-modules/http";
import * as Toast from 'nativescript-toasts';
var localStorage = require("nativescript-localstorage");

class loginModel extends Observable{

    username:any="";
    password:any="";

    constructor(){
        super();
    }

    loginUser(){
        let getUsername=this.username;
        let getPassword=this.password;
        this.apiCallLogin(getUsername,getPassword);
    }

    apiCallLogin(username_fetch,password_fetch){
        let url="http://10.20.3.195:5400/user/login";
        var postData={
            "email": username_fetch,
            "password":password_fetch
        }
        request({
            url: url,
            method: "POST",
            headers: { "Content-Type": "application/json" },
            content: JSON.stringify(postData)
        }).then((response) => {
            const result = response.content.toJSON();
            console.log(postData);
            console.log(result);
            localStorage.setItem("userData", JSON.stringify(result));
            this.showtoastandNavigate(result.message);
            setTimeout(()=>{
                this.set("username","");
                this.set("password","");
                this.navigateToListing();
            },1000);
        }, (e) => {
            console.log(JSON.stringify(e));
        });
    }

    showtoastandNavigate(message){
        let toastOptions:Toast.ToastOptions = {
            text: message, 
            duration: Toast.DURATION.SHORT,
            position:Toast.POSITION.CENTER
        };
        Toast.show(toastOptions);
        // Toast.makeText(message).show();
    }

    navigateToListing(){
        const frame = getFrameById("firstFrame");
        frame.navigate("pages/listing/listing-page");
    }

    register(){
        const frame = getFrameById("firstFrame");
        frame.navigate("pages/register/register-page");
    }
    
    // getRequest() {
    //     fetch("https://jsonplaceholder.typicode.com/todos/1", {
    //         method: "GET"
    //     })
    //     .then(function(response) {
    //         alert({title: "GET Response", message: JSON.stringify(response), okButtonText: "Close"});
    //     }, function(error) {
    //         console.log(JSON.stringify(error));
    //     })
    // }

    // postRequest() {
    //     var url="https://reqres.in/api/login";
    //     var postData={
    //         "email": "peter@klaven",
    //         "password": "cityslicka"
    //     }
    //     //var url="https://www.example.com/test"
    //     // var postData={
    //     //     username: "nraboy",
    //     //     firstname: "Nic",
    //     //     lastname: "Raboy",
    //     // }
    //     fetch(url, {
    //         method: "POST",
    //         body: JSON.stringify(postData)
    //     })
    //     .then(function(response) {
    //         alert({title: "POST Response", message: JSON.stringify(response), okButtonText: "Close"});
    //     }, function(error) {
    //         console.log(JSON.stringify(error));
    //     })
    // }
}

export default loginModel;