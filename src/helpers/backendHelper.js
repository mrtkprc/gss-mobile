import jwt from 'react-native-pure-jwt';
import {API_KEY} from './../config/env';
export function tokenizeValues(token) {
    if(token)
        return "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im9tZXJyZWNlcGtAZ21haWwuY29tIiwicGFzc3dvcmQiOiIxMjM0NTYifQ.1DHJlS2IOKpdnJIewd936pgufwKGTRJe07pD0pzX43c";
        /*
        jwt.sign(token,API_KEY,{alg: 'HS256'})
            .then((data) => {console.log("data in tokenize values",data)});*/
}
export function encodeValues(values)
{
    return jwt.sign(values,API_KEY);
}