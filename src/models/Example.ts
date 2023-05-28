import { z } from "zod";

const mySchema  = z.string();

mySchema.parse("test"); // => test
mySchema.parse(43); // => throw an ZodError


mySchema.safeParse("test"); // => {success: true, data: test}
mySchema.safeParse(43); // => {success: false, error: ZodError}

const schema = z.coerce.string();
schema.parse('Test'); // => 'test'
schema.parse(42); // => '42'
schema.parse(true); // => 'true'