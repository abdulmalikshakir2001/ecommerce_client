import React from "react";
import Layout from "../core/Layout";
import { isAuthenticated } from "../auth";
import { Link } from "react-router-dom";
import RadioButtonUncheckedIcon from "@material-ui/icons/RadioButtonUnchecked";
const AdminDashboard = () => {
  const {
    user: { _id, name, email, role },
  } = isAuthenticated();

  const adminLinks = () => {
    return (
      <>
        <div>
          
          <div className="nav_link_item">
            <div className="icon_cus">
              <RadioButtonUncheckedIcon />
            </div>
            <Link className="nav-link" to="/admin/categories">
              Category List
            </Link>
          </div>
          <div className="nav_link_item">
            <div className="icon_cus">
              <RadioButtonUncheckedIcon />
            </div>
            <Link className="nav-link" to="/create/category">
            Add Category
          </Link>
          </div>
          <div className="nav_link_item">
            <div className="icon_cus">
              <RadioButtonUncheckedIcon />
            </div>
            <Link className="nav-link" to="/create/product">
            Add Product
          </Link>
          </div>
          <div className="nav_link_item">
            <div className="icon_cus">
              <RadioButtonUncheckedIcon />
            </div>
            <Link className="nav-link" to="/admin/orders">
            View Orders
          </Link>
          </div>
          <div className="nav_link_item">
            <div className="icon_cus">
              <RadioButtonUncheckedIcon />
            </div>
            <Link className="nav-link" to="/admin/products">
            Manage Products
          </Link>
          </div>
        </div>
      </>
    );
  };

  const adminInfo = () => {
    return (
      <>
      <div className="card mb-5 user_profile_card">
        <h3 className="card-header">User information</h3>
        <ul className="list-group">
          <li className="list-group-item">
          <img src="https://media.istockphoto.com/id/1435745704/photo/portrait-of-smiling-mid-adult-businessman-standing-at-corporate-office.jpg?b=1&s=612x612&w=0&k=20&c=Kjs_YBhIVk_P71Q-oeIF85CiK5B0so_aOSPif2PFwRI=" className="card-img-top user_profile_img" alt="User"  />

          </li>
          <li className="list-group-item">{name}</li>
          <li className="list-group-item">{email}</li>
          <li className="list-group-item">
            {role === 1 ? "Admin" : "Registered user"}
          </li>
        </ul>
      </div>
      
      </>
    );
  };

  return (
    <Layout
      title="Dashboard"
      description={`${name}`}
      className="container-fluid"
    >
      <div className="row dashboard_page">
        <div className="col-2" style={{ background: "#3F51B5" }}>
          <div className="Sidebar">{adminLinks()}</div>
        </div>
        <div className="col-10" style={{background:"#ECF6FF"}}>
          <div className="admin_body">
          {adminInfo()}

          </div>

          
        </div>
      </div>
    </Layout>
  );
};

export default AdminDashboard;
