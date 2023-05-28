import { z } from "zod";

export const UserSchema = z.object({
    name: z.string().trim().min(2, { message: "Name length should not be less than 2" }),
    username: z.string().trim().min(3, { message: "UserName length should not be less than 3" }),
    email: z.string().trim().email().toLowerCase(),
    phone: z.string().trim().min(10, { message: "Phone number should always be 10 digits" }),
    // .regex(/^[0-9]+$/, { message: "Only numbers are allowed" })
    // .length(10, { message: "Ten numbers are required" })
    // .transform(val => `${val.slice(0, 3)}-${val.slice(3, 6)}-${val.slice(6)}`),
    //website: z.string().trim().toLowerCase().url().optional(),
    website: z.string().trim().toLowerCase()
        .min(5, { message: "URLs must be a minimum of 5 characters" })
        .refine(val => val.indexOf(".") !== -1, { message: "Invalid URL" })
        .optional(),
    company: z.object({
        name: z.string().trim()
            .min(5, { message: "Company name must be 5 or more characters long" }),
        catchPhrase: z.string().optional(),
        bs: z.string().optional(),
    })
})

const UserAddressSchema = z.object({
    street: z
        .string().trim()
        .min(5, { message: "Street must be 5 or more characters long" }),
    suite: z.string().trim().optional(),
    city: z
        .string().trim()
        .min(2, { message: "City must be 2 or more characters long" }),
    zipcode: z
        .string()
        .regex(/^\d{5}(?:[-\s]\d{4})?$/, { message: "Must be 5 digit zip. Optional 4 digit extension allowed." }),
})

const UserAddressSchemaWithGeo = UserAddressSchema.extend({
    geo: z.object({
        lat: z.string(),
        lng: z.string()
    })
})

const HasIDSchema = z.object({ id: z.number().int().positive() })

export const UserFormSchemaWithAddress = UserSchema.extend({address: UserAddressSchema});

export const UserFormSchemaWithGeo = UserSchema.extend({address: UserAddressSchemaWithGeo});

// With ID
export const UserSchemaWithGeo = UserSchema.extend({address: UserAddressSchemaWithGeo}).merge(HasIDSchema)
