import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

/**
 * Service funciton of addURL in database
 * @param title Website Title
 * @param url Website URL
 * @param visitedAt Time of visiting the site in ISO-8601 format
 * @returns prisma saved response or a object of error with message property
 */
export const addUrl = (title:string, url: string, visitedAt: string) => {
    // check if visitedAt a valid ISO-8601 Time
    const iso8601RegExp = /^(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2}):(\d{2})([+-])(\d{2}):(\d{2})$/;
    if (!iso8601RegExp.test(visitedAt)) {
        return {
            'message': 'visitedAt is not in valid ISO 8601 time format'
        }
    }
    // add to database and return response
    return prisma.savedURL.create({
        data: {
            title,
            url,
            visitedAt
        }
    })
}