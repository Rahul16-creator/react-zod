import { UserArray, UserResults } from "../type/User";

const fetchUser = async (): Promise<UserArray | undefined> => {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");

    if (!res.ok) return undefined;

    const usersJson: UserArray = await res.json()

    const parsedData = UserResults.parse(usersJson)

    console.log(parsedData)
};

export default fetchUser;
