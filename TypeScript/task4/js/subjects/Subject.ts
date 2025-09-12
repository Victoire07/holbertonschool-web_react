/// <reference path="./Teacher.ts" />

namespace Subjects {
    export class Subject {
        teacher!: Teacher; // attribut qui implémente l'interface Teacher

        // setter pour définir le teacher
        setTeacher(teacher: Teacher): void {
            this.teacher = teacher;
        }
    }
}
