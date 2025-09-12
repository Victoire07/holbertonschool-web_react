/// <reference path="./Subject.ts" />
/// <reference path="./Teacher.ts" />

namespace Subjects {
  // Declaration merging: on ajoute un champ optionnel à l’interface Teacher
  export interface Teacher {
    experienceTeachingC?: number;
  }

  // Classe Cpp qui hérite de Subject
  export class Cpp extends Subject {
    getRequirements(): string {
      return "Here is the list of requirements for Cpp";
    }

    getAvailableTeacher(): string {
      if (this.teacher && this.teacher.experienceTeachingC && this.teacher.experienceTeachingC > 0) {
        return `Available Teacher: ${this.teacher.firstName}`;
      }
      return "No available teacher";
    }
  }
}
