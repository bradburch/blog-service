import bcrypt from "bcrypt"

const saltRounds = 10

export function saltAndHashPassword(password: string) {
    bcrypt
        .hash(password, saltRounds, 
            function(err, hash) {
                console.log("Hi!")
                console.log(hash)
    });
}

function validateUser(hash: string, password: string) {
    bcrypt
      .compare(password, hash)
      .then(res => {
        console.log(res) 
      })
      .catch(err => console.error(err.message))
}