// Création de l'interface
interface Students {
    firstName: string;
    lastName: string
    age: number
    location: string
}

// Ajout des 2 étudiants
const student1: Students = {
  firstName: "Victoire",
  lastName: "Boutin",
  age: 25,
  location: "Bordeaux"
};

const student2: Students = {
  firstName: "Souris",
  lastName: "Dufau",
  age: 26,
  location: "Barcelone"
};

// Stockage des 2 étudiants dans une liste
const studentsList: Students[] = [student1, student2];


