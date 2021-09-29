// install and import bcrypt 

const bcrypt = require("bcrypt");

bcrypt.genSalt(10, async(err, salt)=>{
    await bcrypt.hash("any-random-string",salt,async(err,hash)=>{
        try {
            newUser.password = hash;
            await newUser.save()
        } catch (error) {
            console.log(error.message)
        }
    })
})


