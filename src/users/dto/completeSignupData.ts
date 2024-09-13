import { Prisma } from "@prisma/client";
import { Transform } from "class-transformer";
import { IsDateString, Matches } from "class-validator";

export class completeSignupDto  implements Prisma.UserDetailsCreateInput {
    id?: string;
    createdAt?: string | Date;
    updatedAt?: string | Date;
    account: Prisma.UserCreateNestedOneWithoutInfoInput;

    // dob
    @IsDateString()
    dob: string;

    @Matches(/^[a-zA-Z]{2,64}$/)
    bio?: string;

    @Matches(/^[a-zA-Z]{2,64}$/)
    firstName: string;

    @Matches(/^[a-zA-Z]{2,64}$/)
    lastName: string;

    @Matches(/^[a-zA-Z_]{2,64}$/)
    @Transform(({ value }) => value.toLowerCase())
    username: string;

    // bio
    

    // @Matches(/^[0-9]{10}$/)
    // phone: string;
    
    // @Matches(/^[0-9]{1,3}$/)
    // age: number;

    // @Matches(/^[a-zA-Z]{2,64}$/)
    // city: string;



}