// 1
// 1 0
// 1 0 1
// 1 0 1 0

for (let i = 0; i < n; i++) {
    let row = '';
    let toggle = 1
    for (let j = 0; j < (i + 1); j++) {
        row = row + toggle;
        if (toggle == 1) {
            toggle = 0;
        }
        else {
            toggle = 1
        }
    }
    console.log(row)
}

// * 
// * * 
// * * * 
// * * * * 
// * * * * * 

for (let i = 0; i < n; i++) {
    let row = '';
    for (let j = 0; j < i+1; j++) {
        row = row + '* '
    }
    console.log(row)
}



// * * * * 
// * * * 
// * * 
// * 
for (let i = 0; i < n; i++) {
    let row = '';
    for (let j = 0; j < n - (i + 1); j++) {
        row = row + '* '
    }
    console.log(row)
}



//     *
//    **
//   ***
//  ****
// *****

let n = 5;

for (let i = 0; i < n; i++) {
    let row = '';
    for (let j = 0; j < n - (i + 1); j++) {
        row = row + " "

    }
    for (let k = 0; k <=i; k++) {
        row = row + "*"
    }
    console.log(row);

}``