import React from 'react';
import { NextPage } from 'next';
import { useRouter } from 'next/router';
import 'boxicons';

const Dashboard: NextPage = () => {
  return (
    <div className="body">
      <div className="sidebar">
        <div className="logo_content">
          <div className="logo">
            <i className="bx bxl-react"></i>
            <div className="logo_name">GrafiaCidade</div>
          </div>
          <i className="bx bx-menu"></i>
        </div>
        <ul className="nav_list">
          <li>
            <a href="#">
              <i className="bx bx-user"></i>
              <span className="links_name">Usuários</span>
            </a>
            {/* <span className="tooltip">Dashboard</span> */}
          </li>
          <li>
            <a href="#">
              <i className="bx bx-notepad"></i>
              <span className="links_name">Ocorrências</span>
            </a>
            {/* <span className="tooltip">Dashboard</span> */}
          </li>
          <li>
            <a href="#">
              <i className="bx bx-archive"></i>
              <span className="links_name">Tipos e Subtipos</span>
            </a>
            {/* <span className="tooltip">Dashboard</span> */}
          </li>
          <li>
            <a href="#">
              <i className="bx bx-cog"></i>
              <span className="links_name">Settings</span>
            </a>
            {/* <span className="tooltip">Dashboard</span> */}
          </li>
        </ul>
        <div className="profile_content">
          <div className="profile">
            <div className="profile_details">
              {/* <img src="profile.jpg" /> */}
              <div className="name_job">
                <div className="name">Fernando</div>
                <div className="job">Professor</div>
              </div>
            </div>
            <i className="bx bx-log-out" id="log_out"></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
