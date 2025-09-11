// Création de l'interface Teacher (T1)
interface Teacher {
    readonly firstName: string;
    readonly lastName: string;
    fullTimeEmployee: boolean;
    yearsOfExperience?: number;
    location: string;
    [key: string]: any; // Autoriser l'ajout de propriétés dynamiques
}

// Création d'un objet 
const teacher3: Teacher = {
  firstName: "Catherine",
  lastName: "Chevalier",
  fullTimeEmployee: false,
  location: "Dijon",
  contract: false,
};

console.log(teacher3);

// Création de l'interface Director (T2)
interface Directors extends Teacher {
    numberOfReports: number
}

// Création d'un objet 
const director1: Directors = {
  firstName: "Maria",
  lastName: "Rehri",
  fullTimeEmployee: false,
  location: "Paris",
  contract: false,
  numberOfReports: 17,
};

console.log(director1);

// Interface de la fonction printTeacherFunction
interface printTeacherFunction {
    (firstName: string, lastName: string): string;
}

//  Déclaration de la fonction printTeacher qui respecte l'interface
const printTeacher: printTeacherFunction = (firstName, lastName) => {
    return `${firstName.charAt(0)}.${lastName}`
    // firstName.charAt(0) donne la 1ère lettre du prénom + nom après
}

console.log(printTeacher("John", "Doe"));

// Interface pour le constructor
interface StudentConstructor {
    firstName: string;
    lastName: string;
}

// Interface pour la classe
interface StudentClassInterface {
        firstName: string;
        lastName: string;
        workOnHomework(): string;
        displayName(): string;
}

// Classe StudentClass qui implémente l'interface StudentClassInterface
class StudentClass implements StudentClassInterface {
    firstName: string;
    lastName: string;

    constructor({ firstName, lastName }: StudentConstructor) {
        this.firstName = firstName;
        this.lastName = lastName;
  }

  workOnHomework(): string {
    return "Currently working";
  }

  displayName(): string {
    return this.firstName;
  }
};

const student1 = new StudentClass({ firstName: "John", lastName: "Doe" });
console.log(student1.workOnHomework());
console.log(student1.displayName());

