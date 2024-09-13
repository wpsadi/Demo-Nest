import { Prisma } from "@prisma/client";
import { IsEmail, Matches } from "class-validator";

export class SignupDto  implements Prisma.UserCreateInput {

    @IsEmail()
    email: string;

    @Matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/)
    password: string;

}