const operations = [
    "25+26=51",
    "93*2=186",
    "91+9=100",
    "78-23=75",
    "300/5=60",
]
function getOperations(){
    return operations;
}

export function getOperationOfTheDay(){
    const posiblesOperations = getOperations();
    const operationOfTheDay = posiblesOperations[getDayOfTheYear()%4];
    return operationOfTheDay;
}
export function isValidOperation(operation){
    const parts = operation.split("=");

    if(parts.length != 2) return false;

    if(eval(parts[0]) == eval(parts[1])) return true;

    return false;
}

function getDayOfTheYear(){
    const now = new Date();
    const start = new Date(now.getFullYear(0,0));
    const diff = (now-start) + ((start.getTimezoneOffset()-now.getTimezoneOffset())*60*1000);
    const oneDay = 1000*60*60*24;
    return Math.floor(diff/oneDay);
}