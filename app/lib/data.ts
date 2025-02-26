
export async function route1Fetch(){

    const promessa = new Promise<string>((resolve)=>{
        setTimeout(()=>{
            resolve("Fine");
        },1000);
    })

    return promessa;
}