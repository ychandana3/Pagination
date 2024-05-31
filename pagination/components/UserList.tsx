import React from "react";
import User from "./User";

interface User {
  ID: string;
  JobTitle: string;
  EmailAddress: string;
  FirstNameLastName: string;
  Email: string;
  Phone: string;
  Company: string;
}

interface UserListProps {
  users: User[];
}

const UserList: React.FC<UserListProps> = ({ users }) => {
  return (
    <ul className="grid grid-cols-1 gap-4">
      {users.map((user) => (
        <User key={user.Phone} user={user} />
      ))}
    </ul>
  );
};

export default UserList;
