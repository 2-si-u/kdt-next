import type { User } from "./UserContainer";

interface userProps {
    user: User
}

export default function User({user}: userProps) {
<<<<<<< HEAD
    const {name, email} = user;

    return (
        <li>
            <p>정보: {name}({email})</p>
        </li>
=======
    const {name} = user;

    return (
        <li>{name}</li>
>>>>>>> f770db0eeaec0c7fda1173d7f98cd949576338f6
    );
}