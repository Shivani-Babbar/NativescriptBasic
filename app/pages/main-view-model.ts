import {Observable} from "data/observable";
import { getFrameById } from "tns-core-modules/ui/frame";
import {AnimationCurve} from "tns-core-modules/ui/enums";


class HelloWorldModel extends Observable{

    constructor(){
        super();
    }

    navigateToLogin(){
        const frame = getFrameById("firstFrame");
        frame.navigate("pages/login/login");
    }
    navigateToRegister(){
        const frame = getFrameById("firstFrame");
        frame.navigate("pages/register/register-page");
    }
}

export default HelloWorldModel;