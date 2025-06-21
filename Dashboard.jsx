

import React from 'react';
import './css/Dashboard.css'; // Optional custom styles

const users = [
  {
    name: 'Joh Deao',
    dob: '2002-10-05',
    password: 'purva@04',
    role: 'Admin',
    status: 'Active',
    dateCreated: '2002-11-08',
    avatar: 'https://i.pravatar.cc/40?u=purva',
  },
  {
    name: 'Paul Wilson',
    dob: '2004-04-04',
    password: 'Bhumi@123',
    role: 'Publisher',
    status: 'Active',
    dateCreated: '2004-08-05',
    avatar: 'https://i.pravatar.cc/40?u=bhumi',
  },
  {
    name: 'Latin Moreno',
    dob: '2008-02-15',
    password: 'Harshad@17',
    role: 'Publisher',
    status: 'Suspended',
    dateCreated: '2008-05-11',
    avatar: 'https://i.pravatar.cc/40?u=harshad',
  },
  {
    name: 'Harry Saveley ',
    dob: '2016-06-09',
    password: 'Manu@11',
    role: 'Reviewer',
    status: 'Active',
    dateCreated: '2015-05-11',
    avatar: 'https://i.pravatar.cc/40?u=bhumi',
  },
   {
    name: 'Martin Sommer ',
    dob: '2014-08-10',
    password: 'rohini@9',
    role: 'Moderator',
    status: 'Inactive',
    dateCreated: '2015-05-11',
    avatar: 'https://i.pravatar.cc/40?u=purva',
  },
];

const getStatusBadge = (status) => {
  switch (status) {
    case 'Active':
      return <span className="badge bg-success"><i className="bi bi-circle-fill me-1" style={{ fontSize: '8px' }}></i>Active</span>;
    case 'Inactive':
      return <span className="badge bg-warning text-dark"><i className="bi bi-circle-fill me-1" style={{ fontSize: '8px' }}></i>Inactive</span>;
    case 'Suspended':
      return <span className="badge bg-danger"><i className="bi bi-circle-fill me-1" style={{ fontSize: '8px' }}></i>Suspended</span>;
    default:
      return <span className="badge bg-secondary">Unknown</span>;
  }
};

const Dashboard = () => {
  return (
    <div className="container mt-5">
      <h2 className="mb-4">User Info Table</h2>
      <table className="table table-hover align-middle">
        <thead className="table-light">
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Date Created</th>
            <th>Role</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>
                <div className="d-flex align-items-center">
                  <img src={user.avatar} alt="avatar" className="rounded-circle me-2" width="40" height="40" />
                  <div>
                    <strong>{user.name}</strong>
                    <div className="small text-muted">{user.email}</div>
                  </div>
                </div>
              </td>
              <td>{new Date(user.dateCreated).toLocaleDateString('en-GB')}</td>
              <td>{user.role}</td>
              <td>{getStatusBadge(user.status)}</td>
              <td>
                <i className="bi bi-gear-fill text-primary me-2" style={{ cursor: 'pointer' }}></i>
                <i className="bi bi-x-circle-fill text-danger" style={{ cursor: 'pointer' }}></i>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Dashboard;
