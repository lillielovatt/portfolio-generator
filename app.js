const printProfileData = (profileDataArr) => {
    for(let i=0; i<profileDataArr.length; i++){
        console.log(profileDataArr[i]);
    }
    console.log("...................");

    profileDataArr.forEach((profileItem)=>{
        console.log(profileItem);
    });

    console.log("...................");

    profileDataArr.forEach(profileItem => console.log(profileItem));
};

let profileDataArgs = process.argv.slice(2, process.argv.length);
printProfileData(profileDataArgs);

// let num=5;
// num=7;
// console.log(num);
// // let num=6;
// // console.log(num);

