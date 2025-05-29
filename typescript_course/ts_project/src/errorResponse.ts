class ErrorResponse{
    code: number = 404;
}

class SuccesssResponse{
    code: number = 200;
    response: string = '';
}

interface Res{
    data: any;
    code: number;
}

type TRequest = SuccesssResponse | ErrorResponse;

async function get(req: TRequest): Promise<Res>{
    try{
        const data = await fetch("https://...");

        let res : Res = {
            data: null,
            code: 500,
        }

        if(data){
            if(req instanceof SuccesssResponse){
                res = {
                    data,
                    code: req.code,
                }
            }else{
                if(req instanceof ErrorResponse){
                    res = {
                        data,
                        code: req.code,
                    }
                }
            }
        }
        return res;
    }catch(error){
        return  {
            data: null,
            code: 500,
        }
    }
}