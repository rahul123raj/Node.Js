    const mongodb = require('mongodb').MongoClient

    const url = 'mongodb://localhost:27017/'

    const connectdb = async () => {
        try {
            //!! create connection 
            //? connect() : it is used to connect database through url
            let connect =   await mongodb.connect(url)
            console.log('database is connected')

            //! connectiong to database
            let database = await connect.db('users')
            console.log('Database is created')

        //! creating collection (optional)
        //    await database.createCollection('users')
        // console.log("collectioon is created")

            //! switched to collection 
        let collection = database.collection('user1')
        console.log("switched to user3 collection")

        //! inserting document

        collection.insertMany([{
            name : "Zinga",
            age : 45,
            place : "goa"
        },
        {
            name : "Xingi",
            age : 40,
            place : "goa"
        },
        {
            name : "Aingu",
            age : 19,
            place : "goa"
        },
        {
            name : "Bzingeshwar",
            age : 75,
            place : "goa"
        }
   ] )

   //! sort the data

  let sortdata = await collection.find().sort({name : 1}).toArray()
  console.log(sortdata)

// collection.deleteMany()
        //! update the data
        // Collection.updateOne(
        //     {fname : "abhishek"},
        //     {
        //         $set : {
        //             age : 25
        //         }
        //     }
        // )
        // console.log("Data is created")

        //! Udating for all data present in database
        // collection.updateMany(
        //     {},
        //     {
        //         $set: {
        //             city : "Goa"
        //         }
        //     }
        // )
        // console.log("Data is updated")

        //! Delete single data
        // Collection.deleteOne({fname : "Dinga"})
        // console.log("Data is Deleted")

        //!deleting 1st data in database
        // collection.deleteOne()
        // console.log("1st data is deleted")

        //!deletin all data
        // Collection.deleteMany()
        // console.log('deleted all data')

        
    } catch (error) {
        if (error) throw error
    }
}

connectdb()

