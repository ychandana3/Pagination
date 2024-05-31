import React from "react";

interface UserProps {
  user: {
    ID: string;
    JobTitle: string;
    EmailAddress: string;
    FirstNameLastName: string;
    Email: string;
    Phone: string;
    Company: string;
  };
}

const User: React.FC<UserProps> = ({ user }) => {
  return (
    <li className="flex flex-col md:flex-row items-start md:items-center p-4 border rounded shadow-lg">
      <div className="flex-1 mb-4 md:mb-0">
        <div>
          <strong>ID:</strong> {user.ID}
        </div>
        <div>
          <strong>Name:</strong> {user.FirstNameLastName}
        </div>
        <div>
          <strong>Job Title:</strong> {user.JobTitle}
        </div>
        <div>
          <strong>Company:</strong> {user.Company}
        </div>
      </div>
      <div className="flex-1 md:ml-4">
        <div>
          <strong>Email Address:</strong> {user.EmailAddress}
        </div>
        <div>
          <strong>Alternate Email:</strong> {user.Email}
        </div>
        <div>
          <strong>Phone:</strong> {user.Phone}
        </div>
      </div>
    </li>
  );
};

export default User;
