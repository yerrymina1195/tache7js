let info = alert(`Vous allez REMPLIR deux tableaux pour chacun veuillez y mettre 5 nombres`)
let tab1=[];
let tab2=[];
let start =5;

/*ceci est une fonction qui va me permettre de pouvoir remplir 
les deux tableaux tab1 et tab2 sans ME repeter   */
function makhan(params) {
    
for(var i = 0; i < 5;i++){
    let put =Number( prompt(` nombre ${i+1}`));
    while(isNaN(put)|| put === ""){
        d=alert(`un nombre ou rien `);
        put =Number( prompt(` nombre ${i+1}`));
    }
    params.push(put)
}
return params
}


tab1= makhan(tab1);
console.log('tab1')
console.log(tab1);

const tabOne= document.getElementById('tabone');
tab1.forEach((element) => {
    tabOne.innerHTML += `
    <span class="bg-secondary p-2">${element}</span>
       `;
  });

alert(`vous allez remplir le tableau 2`)
tab2=makhan(tab2)
console.log('tab2')
console.log(tab2)
const tabTWO= document.getElementById('tabtwo');
tab2.forEach((element) => {
    tabTWO.innerHTML += `
    <span class="bg-secondary p-2">${element}</span>
       `;
  });

/*ceci est une fonction qui va me permettre de pouvoir
 Creer tab3 a partir des elements du tab1 qui ne se trouvent pas dans tab2
 on va juste mettre ces tableaux comme arguments  */
function ifNumberIsNotInside( array1,array2,array3){

    for (let index = 0; index < array1.length; index++) {
        if(array2.indexOf(array1[index]) == -1 ){
            array3.push(array1[index])
         }
       
     }

return array3
}

let tab3=[];

tab3=ifNumberIsNotInside(tab1,tab2,tab3);
console.log('tab3')
console.log(tab3);
const tabTHREE= document.getElementById('tabthree');
tab3.forEach((element) => {
    tabTHREE.innerHTML += `
    <span class="bg-secondary p-2">${element}</span>
       `;
  });


/*ceci est une fonction qui va me permettre de pouvoir
 Creer tab4 a partir des elements du tab1 qui se trouvent pas dans tab2
 on va juste mettre ces tableaux comme arguments ce qui va changer ici c'est la condtion
 devient ! == -1 */

function ifNumberIsInside( array1,array2,array3){

    for (let index = 0; index < array1.length; index++) {
        if(array2.indexOf(array1[index]) !== -1 ){
            array3.push(array1[index])
         }
    
      
     }
return array3
}

let tab4=[];
tab4=ifNumberIsInside(tab1,tab2,tab4);
console.log('tab4')
console.log(tab4);
const tabFOUR= document.getElementById('tabfour');
tab4.forEach((element) => {
    tabFOUR.innerHTML += `
    <span class="bg-secondary p-2">${element}</span>
       `;
  });












  

// let tableau =[9,15,3,2,6, 7,12];

// let tableau1 =[9,15,13,12,2];
// let tableau3=[]

//     console.log(tableau.indexOf(tableau1[0]));
    

// for (let index = 0; index <tableau.length; index++) {
//    if(tableau1.indexOf(tableau[index]) == -1 ){
//        tableau3.push(tableau[index])
//     }
//     console.log(`tableau1= ${tableau1.indexOf(tableau[index])}`);
 
// }

// console.log(tableau3);


// tableau3= ifNumberIsNotInside( tableau,tableau1,tableau3)
// console.log(tableau3);