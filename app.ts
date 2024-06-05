
//function overlaoded
function hello(message:string):string
function hello(message:number):number
function hello(message:boolean):boolean
function hello(message:any){
    return message;
}
hello(true)
//hello(undefined) //error because  argument of type 'undefined' is not assignable to parameter of type 'string

