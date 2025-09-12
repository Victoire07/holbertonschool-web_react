/// <reference path="./Subject.ts" />

namespace Subjects {
  // Declaration merging: on ajoute une propriété optionnelle
  export interface Teacher {
    experienceTeachingReact?: number;
  }

  // Classe React qui hérite de Subject
  export class React extends Subject {
    getRequirements(): string {
      return "Here is the list of requirements for React";
    }

    getAvailableTeacher(): string {
      if (this.teacher && this.teacher.experienceTeachingReact && this.teacher.experienceTeachingReact > 0) {
        return `Available Teacher: ${this.teacher.firstName}`;
      }
      return "No available teacher";
    }
  }
}
