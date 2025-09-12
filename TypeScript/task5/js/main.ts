// Interface MajorCredits
interface MajorCredits {
    credits: number;
    readonly brand: "MajorCredits"
}

// Interface MinorCredits
interface MinorCredits {
    credits: number;
    readonly brand: "MinorCredits"
}

// Fonction sumMajorCredits
function sumMajorCredits(subject1: MajorCredits, subject2: MajorCredits): MajorCredits {
  return {
    credits: subject1.credits + subject2.credits,
    brand: "MajorCredits",
  };
}

function sumMinorCredits(subject1: MinorCredits, subject2: MinorCredits): MinorCredits {
  return {
    credits: subject1.credits + subject2.credits,
    brand: "MinorCredits",
  };
}

const mathMajor: MajorCredits = { credits: 10, brand: "MajorCredits" };
const physicsMajor: MajorCredits = { credits: 15, brand: "MajorCredits" };
const totalMajor = sumMajorCredits(mathMajor, physicsMajor);
console.log(totalMajor); // { credits: 25, __brand: "MajorCredits" }

const artMinor: MinorCredits = { credits: 5, brand: "MinorCredits" };
const musicMinor: MinorCredits = { credits: 7, brand: "MinorCredits" };
const totalMinor = sumMinorCredits(artMinor, musicMinor);
console.log(totalMinor); // { credits: 12, __brand: "MinorCredits" }
