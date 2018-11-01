import {Observable} from "data/observable";
import { request, getFile, getImage, getJSON, getString } from "tns-core-modules/http";
import * as Toast from 'nativescript-toasts';
import { getFrameById } from "tns-core-modules/ui/frame";
// import * as Toast from "nativescript-toast";

class registerModel extends Observable{

    registerUsername:any="";
    resgisterPassword:any="";

    constructor(){
        super();
    }

    registerUser(){
        let getUsername=this.registerUsername;
        let getPassword=this.resgisterPassword;
        this.apiCallRegister(getUsername,getPassword);
    }

    apiCallRegister(username_fetch,password_fetch){
        let url="http://10.20.3.195:5400/user/signup";
        var postData={
            "email": username_fetch,
            "password": password_fetch
        }
        request({
            url: url,
            method: "POST",
            headers: { "Content-Type": "application/json" },
            content: JSON.stringify(postData)
        }).then((response) => {
            const result = response.content.toJSON();
            console.log(postData);
            console.log(result.message);
            this.showtoastandNavigate(result.message);
            
            setTimeout(()=>{
                this.set("registerUsername","");
                this.set("resgisterPassword","");
                const frame = getFrameById("firstFrame");
                frame.navigate("pages/login/login");
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
}

export default registerModel;