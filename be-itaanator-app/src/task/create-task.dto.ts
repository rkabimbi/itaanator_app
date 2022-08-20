import { Collaborator } from "src/collaborator/collaborator.entity";
import { TASK } from "./task.entity";

//Dto impose une syntaxe/type entre front-end et back-end (principalement à destination des services donc)
export class CreateTaskDto{
    readonly id: number;
    readonly taskType: TASK
    readonly estimatedHours:number;
    readonly responsibleId: Collaborator
}


