import { sqlite3, OPEN_READWRITE, Database } from "sqlite3";
import { open } from "sqlite";



export async function DELETE(req: Request, res: Response) {
    const db = await open("./db.sqlite");
    const id = req.url.split("/").pop();

    const task = await db.exec(`DELETE FROM task WHERE id = ${id}`);

    return new Response(JSON.stringify(task));
}