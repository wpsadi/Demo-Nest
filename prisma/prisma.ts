import { Pool } from 'pg'
import { PrismaPg } from '@prisma/adapter-pg'
import { PrismaClient } from '@prisma/client'

const connectionString = `${process.env.DATABASE_URL}`

const pool = new Pool({ connectionString })
const adapter = new PrismaPg(pool)
console.log(connectionString)
// @ts-ignore
const prisma = new PrismaClient({ adapter })
prisma.$connect();


export { prisma } 
//  The PrismaClient instance is created with the adapter, which is an instance of PrismaPg. The adapter is created with a Pool instance, which is created with the connection string