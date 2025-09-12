/// <reference path="./Teacher.ts" />

namespace Subjects {
    export class Subject {
        protected teacher?: Teacher;

        // setter pour définir le teacher
        setTeacher(teacher: Teacher): void {
            this.teacher = teacher;
        }
    }
}
