"use client";
import React, { useState, useEffect } from "react";
import Pagination from "../components/Pagination";
import UserList from "../components/UserList";
import Shimmer from "../components/Shimmer";

interface User {
  ID: string;
  JobTitle: string;
  EmailAddress: string;
  FirstNameLastName: string;
  Email: string;
  Phone: string;
  Company: string;
}

const Home: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [currentPage, setCurrentPage] = useState(0);
  const totalPages = 100;
  const [loading, setLoading] = useState(true);

  //To fetch data from api
  useEffect(() => {
    const fetchUsers = async () => {
      setLoading(true);
      const response = await fetch(
        `https://give-me-users-forever.vercel.app/api/users/${
          currentPage * 10
        }/next`
      );

      const data = await response.json();
      setUsers(data.users);
      setLoading(false);
    };

    fetchUsers();
  }, [currentPage]);

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">User List</h1>
      {loading ? <Shimmer /> : <UserList users={users} />}
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </div>
  );
};

export default Home;
