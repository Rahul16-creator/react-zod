import { z } from "zod";
import { UserFormSchemaWithAddress, UserFormSchemaWithGeo, UserSchemaWithGeo } from "../models/User";

// const UserResults = z.array(UserSchema);
export const UserResults = z.array(UserSchemaWithGeo);

export type UserArray = z.infer<typeof UserResults>;

export type UserWithAddress = z.infer<typeof UserSchemaWithGeo>
export type UserFormWithAddress = z.infer<typeof UserFormSchemaWithAddress>
export type UserFormWithGeo = z.infer<typeof UserFormSchemaWithGeo>
