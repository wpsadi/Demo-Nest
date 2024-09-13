import { Injectable , BadRequestException} from '@nestjs/common';
import { prisma } from 'prisma/prisma';
import {} from "@nestjs/mapped-types"
import { SignupDto } from './dto/signupDto';
import { completeSignupDto } from './dto/completeSignupData';
@Injectable()
export class UsersService {

    async createUser(data:SignupDto){
        console.log(data)
        const {email} = data
        const userExists = await prisma.user.findFirst({
            where:{
                email
            }
        })
        if(userExists){
            throw new BadRequestException("User already exists")
        }
        const user = await prisma.user.create({data:{
            email:data.email,
            password:data.password,
        }})
        .catch(()=>{throw new BadRequestException("Can't create account") })
        return {
            id:user.id,
            email:user.email,
            role:user.role,
            createdAt:user.createdAt
        }
        // return "gh"
        
    }

    async completeCreateuser(data:completeSignupDto){
        console.log(data)
        // const user = await prisma.user.({
        //     where:{
        //         id:data.id
        //     },
        //     data:{
        //         name:data.name,
        //         password:data.password
        //     }
        // })
        // return {
        //     id:user.id,
        //     email:user.email,
        //     role:user.role,
        //     createdAt:user.createdAt
        // }
        return "ih"

    }
    
}
