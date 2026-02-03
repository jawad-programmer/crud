"use server"

import { createUser, deleteUser, updateUser } from "@/lib/user.service";

export const createUserAction = async (data: FormData) => {
  const name = data.get("name") as string;
  const email = data.get("email") as string;
    // Call the service to add the institute

   const user = await createUser({ name, email });
    
    console.log('in the server function  adding   User' + user);
}

export const deleteUserAction = async (id: number) => {
    await deleteUser(id);
}

export const updateUserAction = async (id: number, data: FormData) => {
    const name = data.get("name") as string;
    const email = data.get("email") as string;
    await updateUser(id, { name, email });
}
