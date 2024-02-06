type a  = number | string | boolean;
type b = Function | object;

function alias (c:a, d:b){
    return `${c}: ${d};`
}