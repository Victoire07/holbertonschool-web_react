// Création de l'interface
interface Teacher {
    readonly firstName: string;
    readonly lastName: string
    fullTimeEmployee: boolean
    yearsOfExperience?: number
    location: string
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
