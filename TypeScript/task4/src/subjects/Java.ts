/// <reference path="./Teacher.ts" />
/// <reference path="./Subject.ts" />

namespace Subjects {
  // Declaration merging pour Java
  export interface Teacher {
    experienceTeachingJava?: number;
  }

  // Classe Java qui hérite de Subject
  export class Java extends Subject {
    getRequirements(): string {
      return "Here is the list of requirements for Java";
    }
    getAvailableTeacher(): string {
        if (this.teacher?.experienceTeachingJava && this.teacher.experienceTeachingJava > 0) {
            return `Available Teacher: ${this.teacher.firstName}`;
        }
        return "No available teacher";
    }
  }
}
