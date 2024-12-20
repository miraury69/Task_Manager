import { sqlite3, OPEN_READWRITE, Database } from "sqlite3";
import { open } from "sqlite";



export async function GET(req: Request, res: Response) {
    const db = await open("./db.sqlite");

    const task = await db.all(`SELECT * FROM task`);

    return new Response(JSON.stringify(task));
}