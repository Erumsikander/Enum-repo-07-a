
     // Enums...!

import { log } from "console";

    enum one {
        admin, // bydefault add value 0 
        user,  //  increament  + 1 number of value in every enum.
    }

    enum two {
        admin = "Erum",
        user = "Sikander",
    }
type mySelf = 
{
    name : string,
    id : one,
}
let self : mySelf = {
    name : "Noor",
    id : one.user,
}
 
    console.log(two.admin);
    console.log(two.user);
    console.log(self.name);
    console.log(self.id);
   