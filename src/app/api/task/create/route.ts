import { sqlite3, OPEN_READWRITE, Database } from "sqlite3";
import { open } from "sqlite";
import { error } from "console";



export async function POST(req: Request, res: Response) {
    try {
           console.log('1') 
        const db = await open("./db.sqlite");
        console.log('2') 

        if (req.method !== "POST") {
        console.log('3') 

            throw error;
        }
        const {name, description} = await req.json();
        console.log(name, description)
    
        if (!name || !description) {
        console.log('4') 

            throw error;
        }
    
        const newTasks = {
            name,
            description
        }
    
        const task = await db.exec(`INSERT INTO task(name, description) VALUES ("${name}", "${description}")`);
        console.log('5') 
    
        return Response.json(task);
    } catch (error) {
        console.log(JSON.stringify(error, null, 2));
        console.log("error");
    }
}