const classDetails = {
    strength: 78,
    benches: 39,
    blackBoard: 1
}

//   const classStrength = classDetails.strength;
//   const classBenches = classDetails.benches;
//   const classBlackBoard = classDetails.blackBoard;

const { strength: classStrength, benches: classBenches, blackBoard: classBlackBoard } = classDetails;
//console.log(classStrength);

const { strength, benches, blackBoard } = classDetails;

//console.log(strength);

const arr = [1, 2, 3, 4];
// const first = arr[0];
// const second = arr[1];
// const third = arr[2];
// const fourth = arr[3];


const [first,second,third,fourth] = arr;


console.log(first)
