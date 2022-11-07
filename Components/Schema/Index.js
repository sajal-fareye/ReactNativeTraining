import Realm from "realm";

export const TODO_SCHEMA = "Tasks1";

const TodoSchema = {
    name: TODO_SCHEMA,
    properties: {
    //   _id: "int",
      body: "string",
      expiry: "string",
      category:"string",
      status:"string?",
    },
    primaryKey: "body",
};

const databaseOptions = {
    path: 'todoListApp.realm',
    schema: [TodoSchema]
}

export const insertNewTodo = newTodo => new Promise((resolve, reject) => {
    Realm.open(databaseOptions).then(realm => {
        realm.write(() => {
            realm.create(TODO_SCHEMA, newTodo);
            resolve(newTodo);
        })
    }).catch((error) => {
        reject(error);
    })
})

export const queryAllTodosStatusFalse = () => new Promise((resolve, reject) => {
    Realm.open(databaseOptions).then(realm => {
        let allTodos = realm.objects(TODO_SCHEMA).filtered("status=='false'")
        // console.log(allTodos);
        resolve(allTodos);
    }).catch(error => {
        reject(error);
    })
})

export const queryAllTodosStatusTrue = () => new Promise((resolve, reject) => {
    Realm.open(databaseOptions).then(realm => {
        let allTodos = realm.objects(TODO_SCHEMA).filtered("status=='true'")
        // console.log(allTodos);
        resolve(allTodos);
    }).catch(error => {
        reject(error);
    })
})

export const queryAllTodos = () => new Promise((resolve, reject) => {
    Realm.open(databaseOptions).then(realm => {
        let allTodos = realm.objects(TODO_SCHEMA)
        // console.log(allTodos);
        resolve(allTodos);
    }).catch(error => {
        reject(error);
    })
})

export const updateTodos = (mytodo) => new Promise((resolve, reject) => {
    Realm.open(databaseOptions).then(realm => {
        // console.log("nonFiltered",body);
        // let allTodos = realm.objects(TODO_SCHEMA).filtered("body == {body}");
        // let allTodos =realm.objectForPrimaryKey(TODO_SCHEMA,mytodo.body);
        // console.log("filtered",allTodos);
        // mytodo.forEach(todo=>{
        //     realm.write(() => {
        //         todo.status = JSON.stringify(!JSON.parse(todo.status))
        //     });
        // })

        realm.write(()=>{
            mytodo.status = JSON.stringify(!JSON.parse(mytodo.status))
        })
        
        resolve(allTodos);
    }).catch(error => {
        reject(error);
    })
})

// export const deleTodos = (mytodo) => new Promise((resolve, reject) => {
//     Realm.open(databaseOptions).then(realm => {
//         console.log("nonFiltered",body);
//         // let allTodos = realm.objects(TODO_SCHEMA).filtered("body == {body}");
//         // let allTodos =realm.objectForPrimaryKey(TODO_SCHEMA,mytodo.body);
//         realm.delete
//         console.log("filtered",allTodos);
//         allTodos.forEach(todo=>{
//             realm.write(() => {
//                 todo.status = JSON.stringify(!JSON.parse(todo.status))
//             });
//         })
//         resolve(allTodos);
//     }).catch(error => {
//         reject(error);
//     })
// })


