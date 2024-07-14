import { allowedOrigins } from "./allowedOrigin.js";

export const corsoptions = {
    origin: (origin,callback) => {
        if(allowedOrigins.indexOf(origin) !== -1 || !origin){
            callback(null,true)
        }else{
            callback(new Error('Not Allowed By CORS'))
        }
    },
    credentials:true,
    optionSuccessStatus:200
}