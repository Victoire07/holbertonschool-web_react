/// <reference path="./Subject.ts" />

namespace Subjects {
  // Declaration merging: on ajoute une propriété optionnelle
  export interface Teacher {
    experienceTeachingJava?: number;
  }

  // Classe Java qui hérite de Subject
  export class Java extends Subject {
    getRequirements(): string {
      return "Here is the list of requirements for Java";
    }

    
  }
}
