import  'dotenv/config';
import joi from 'joi';
import { env } from 'process';

// interface de variable de entorno
interface EnVars{
    PORT: number;
}

// validar variables de entorno
const envsSchema = joi.object<EnVars>({
PORT: joi.number().integer().min(1).max(6535).required(), })
.unknown(true);

const result = envsSchema.validate(process.env, {abortEarly: false });// reporta errores que pueda tener 

// validar si llega un error 
if(result.error){
    throw new Error(`Config validation error: ${result.error.message}`);
}
const envVars = result.value;


// variable de entorno puerto
export const envs ={
    port: envVars.PORT,

}as const;// solo lectura 