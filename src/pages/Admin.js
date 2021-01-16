import React from 'react'
import { Link, Outlet, useParams } from "react-router-dom";

function Admin() {
const param = useParams();
console.log(param.id)

  return (
    <div className="admin-grid">
      {param.id}
      <aside className="admin-sidebar">
        <Link to="me">Profile</Link>
        <Link to="my-sales">Sales overview</Link>
      </aside>
    </div>
  )
}

export default Admin;
