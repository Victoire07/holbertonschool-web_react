// Création de l'interface
interface Student {
    firstName: string;
    lastName: string
    age: number
    location: string
}

// Ajout des 2 étudiants
const student1: Student = {
  firstName: "Victoire",
  lastName: "Boutin",
  age: 25,
  location: "Bordeaux"
};

const student2: Student = {
  firstName: "Souris",
  lastName: "Dufau",
  age: 26,
  location: "Barcelone"
};

// Stockage des 2 étudiants dans une liste
const studentsList: Student[] = [student1, student2];

// Creation table
const table = document.createElement("table");
const tbody = document.createElement("tbody");

// Remplir le tableau avec les données des élèves
studentsList.forEach((student) => {
  const row = document.createElement("tr");

  const firstNameCell = document.createElement("td");
  firstNameCell.textContent = student.firstName;

  const locationCell = document.createElement("td");
  locationCell.textContent = student.location;

  row.appendChild(firstNameCell);
  row.appendChild(locationCell);
  tbody.appendChild(row);
});

// Ajouter le tableau à la page
table.appendChild(tbody);
document.body.appendChild(table);
