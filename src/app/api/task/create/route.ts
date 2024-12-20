import { sqlite3, OPEN_READWRITE, Database } from "sqlite3";
import { open } from "sqlite";
import { error } from "console";


//Créée une nouvelle tâche
export async function POST(req: Request, res: Response) {
    try { 
        const db = await open("./db.sqlite"); 

        if (req.method !== "POST") {

            throw error;
        }
        const {name, description} = await req.json();
        console.log(name, description)
    
        if (!name || !description) {

            throw error;
        }
    
        const newTasks = {
            name,
            description
        }
    
        const task = await db.exec(`INSERT INTO task(name, description) VALUES ("${name}", "${description}")`);
    
        return Response.json(task);
    } catch (error) {
        console.log(JSON.stringify(error, null, 2));
        console.log("error");
    }
}