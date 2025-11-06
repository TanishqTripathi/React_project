import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div style={{
      display:"flex",
      justifyContent:"space-between",
      alignItems:"center",
      padding:"10px",
      borderBottom:"1px solid #ddd"
    }}>
      <h2 style={{cursor:"pointer"}}> Innogent Shops</h2>

      <div style={{fontSize:"22px", display:"flex", gap:"20px", cursor:"pointer"}}>
        <Link to="/" className="header-decoration">🛒</Link>
        <Link className="header-decoration">🔔</Link>
        <Link className="header-decoration">👤</Link>
      </div>
    </div>
  );
}

export default Header;
