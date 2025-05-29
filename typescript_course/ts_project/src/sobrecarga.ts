type Args = number | string;

function transformaNumero(num: string) : string;
function transformaNumero(num: number) : number;

function transformaNumero(num: Args) : Args{
    return num;
}

const response = transformaNumero("1");
console.log(response);