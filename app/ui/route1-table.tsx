import { route1Fetch } from "../lib/data";


export default async function Route1Table(){

    const route1Data : string = await route1Fetch();
    console.log(route1Data);

    return(
        <div>
            {route1Data}
        </div>
    )
}