import jwt from './jsonwebtoken';
import {API_KEY} from './../config/env';
export function tokenizeValues(token) {
    console.log("Tokenize Values with Token: ",token);
    //return "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im9tZXJyZWNlcGtAZ21haWwuY29tIiwicGFzc3dvcmQiOiIxMjM0NTYifQ.1DHJlS2IOKpdnJIewd936pgufwKGTRJe07pD0pzX43c";
    if(token)
    {
        const signed = jwt.sign(token,API_KEY);
        console.log("Signed Token",signed);
        return signed;
    }
    /*
        jwt
            .sign({
                    iss: 'luisfelipez@live.com',
                    exp: new Date().getTime() + (3600 * 1000), // expiration date, required, in ms, absolute to 1/1/1970
                    additional: 'payload',
                }, // body
                'my-secret', // secret
                {
                    alg: 'hs256' // required, only algorithm by now
                })
            .then(console.log("smp")) // token as the only argument
            .catch(console.log("err"))
    return "123ab";
    */
}
export function encodeValues(values)
{
    return jwt.sign(values,API_KEY);
}