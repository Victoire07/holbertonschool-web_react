// Création de l'interface DirectorInterface (T5)
interface DirectorInterface {
    workFromHome(): string;
    getCoffeeBreak(): string;
    workDirectorTasks(): string;
}

// Création de l'interface TeacherInterface (T5)
interface TeacherInterface {
    workFromHome(): string;
    getCoffeeBreak(): string;
    workTeacherTasks(): string;
}

// Création de la classe Director qui implémente DirectorInterface (T5)
class Director implements DirectorInterface {
    workFromHome(): string {
        return "Working from home"
    }
    getCoffeeBreak(): string {
    return "Getting a coffee break";
  }

  workDirectorTasks(): string {
    return "Getting to director tasks";
  }
};

// Création de classe Teacher qui implémente TeacherInterface (T5)
class Teacher implements TeacherInterface {
    workFromHome(): string {
        return "Cannot work from home"
    }
    getCoffeeBreak(): string {
        return "Cannot have a break"
    }
    workTeacherTasks(): string {
        return "Getting to work"
    }
}

// Un employé sera soit type Director ou Teacher (T5)
type Employee = Director | Teacher;

// Fonction CreateEmployee qui permet selon le salaire de dire si l'employé et teach ou dir (T5)
function createEmployee(salary: number | string): Employee {

if (typeof salary === 'number' && salary < 500) {
    return new Teacher();
} else {
    return new Director();
}
}
console.log(createEmployee(200));
console.log(createEmployee(1000));
console.log(createEmployee('$500'));

// Fonction isDirector
function isDirector(employee: Employee): employee is Director {
    return employee instanceof Director
}

// Fonction executeWork
function executeWork(employee: Employee): string {
    if (isDirector(employee)) {
        return employee.workDirectorTasks();
    } else {
        return employee.workTeacherTasks();
    }
}

console.log(executeWork(createEmployee(200)));
console.log(executeWork(createEmployee(1000)));

// Type littéral de chaîne (Subjects)
type Subjects = "Math" | "History";

// Fonction teachClass pour la matière
function teachClass(todayClass: Subjects): string {
    if (todayClass === 'Math') {
        return 'Teaching Math'
    }
    else {
        return 'Teaching History'
    }
}

console.log(teachClass("Math"));
console.log(teachClass("History"));

