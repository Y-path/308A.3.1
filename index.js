// Importing database functions. DO NOT MODIFY THIS LINE.
import { central, db1, db2, db3, vault } from "./databases.js";

function getUserData(id) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
        
  const dbs = {
    db1: db1,
    db2: db2,
    db3: db3,
   
  };


//   return new Promise(function(resolve, reject) {
//     Promise.all([

central(id)
// .then(function(db) {
//     return dbs[db](id)

//     .catch(function() {
//         return Promise.reject('Error ' + db);
//     });
// }),

.then((returnedValue) => {
   console.log(returnedValue); 

   
//   }),

db1(id)
.then((returnedValue) => {
    console.log(returnedValue);
      })
      const newObject = {id, ...db1};
      
    console.log(newObject);
   
    });
   
//  db2(id)
// .then((returnedValue) => {
//     console.log(returnedValue);
//    }),
   
// db3(id)
// .then((returnedValue) => {
//     console.log(returnedValue);
// }),  

vault(id)
.then((returnedValue) => { 
    console.log(returnedValue);    
})
      
       



 if (id) {
    resolve(id);
   } else {
    reject(new Error("User not found"));
  }


}, 200); 
});
};


getUserData(1)





// .then(data => console.log(data))



// I tried everything below

 // resolve({
    //             id: id,
    //             username: "username",
    //             website: "website",
    //             company: {
    //               name: "name",
    //               catchPhrase: "catchPhrase",
    //               bs: "bs"
    //             }
    //         },
    //         {
    //             name: "name",
    //             email: "email",
    //             address: {
    //                 street: "street",
    //                 suite: "suite",
    //                 city: "city",
    //                 zipcode: "zipcode",
    //                 geo: { lat: "lat", lng: "lat" }
    //             },
    //             phone: "phone"
    //         }
    //         );




 // vault(id)

        // .catch(function() {
        //     return Promise.reject('Error vault');
        // })
    // ])

    // .then(function(data) {
        
    //    

    // .catch(function(error) {
    //     reject(error);
    // });



//   try {
//     const results = await Promise.all(dbs);
//     // Process the results from each database
//     console.log("db1:", results[0]);
//     console.log("db2:", results[1]);
//     console.log("db3:", results[2]);
//   } catch (error) {
//     console.error("Error fetching data:", error);
//   }




//    function addIdToObject(id, obj) {
//     return { id: id, ...obj };
//    }
 


// const newObject = addIdToObject(id);
// console.log(newObject, returnedValue);
        



//   .then(user => console.log(user))
//   .then(id => console.log(id)) 
//   .catch(error => console.error(error));


//   central(id).then((returnedValue) => {console.log(returnedValue.data); });
 


//   const user = dbs.find((user) => user.id === id);
//   if (user) {
//     resolve(user);
//   } else {
//     reject(new Error("User not found"));
//   }
// }, 1000);
// });
// }
// getUserData()
// .then((user) => {
//     console.log(user);
// })
// .catch((error) => {
//     console.error(error);
//   });



// getDatabase1Data()
// .then((db1) => {
//     dbs.push(db1);
//     return getDatabase2Data();
//   })
//   .then((db2) => {
//     dbs.push(db2);
//     return getDatabase3Data();
//   })
//   vault(id).then((returnedValue) => {
//     dbs.push(returnedValue);
//     resolve(data); // Resolve with all the data
//   })
//   .catch((error) => {
//     reject(error); // Reject if any of the database calls fail
//   });
// });
// }
// console.log(getUserData);

// const returnedValue = await central(id);
// console.log(returnedValue);
// const returnedValue = await db1(id);

// const returnedValue = await vault(id);


// return Promise.all([db1, db2, db3, central, vault])
//     .then(responses => {
//       return Promise.all(responses.map(response => response.json()));
//     })
//     .then(data => {
//       const [db1Data, db2Data, db3Data] = data;
//       // Process the data from all three databases
//       console.log(db1Data, db2Data, db3Data);
//     });
// }
// console.log(getUserData(id));



