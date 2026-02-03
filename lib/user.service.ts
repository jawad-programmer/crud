import prisma from "./prisma"

export const getAllUsers = async () => {
    const users = await prisma.user.findMany()
    return users
}

export const getUsersById = async (id: number) => {
    const user = await prisma.user.findUnique({
        where: {
            id: id,
        },
    });
    return user
}

export const createUser = async (data: {
    name: string
    email: string
}) => {
    return await prisma.user.create({
        data: {
            name: data.name,
            email: data.email
        }
    })
}

export const updateUser = async (
    id: number,
    data: {
        name: string
        email: string
    }
) => {
    return await prisma.user.update({
        where: {
            id: id
        },
        data: {
            name: data.name,
            email: data.email
        }
    })
}

export const deleteUser = async (id: number) => {
    return await prisma.user.delete({
        where: { id }
    })
}