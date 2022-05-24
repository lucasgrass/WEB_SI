import React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { NextPage } from 'next';
import { useRouter } from 'next/router';
import 'boxicons';

const Dashboard: NextPage = () => {
  const router = useRouter();
  return (
    <div className="body">
      <div className="sidebar">
        <div className="logo_content">
          <div className="logo">
            <i class="bx bxl-react"></i>
            <div className="logo_name">GrafiaCidade</div>
          </div>
          <i class="bx bx-menu"></i>
        </div>
        <ul className="nav_list">
          <li>
            <i class="bx bx-grid-alt"></i>
            <input type="text" placeholder="Search..." />
            {/* <span className="tooltip">Dashboard</span> */}
          </li>
          <li>
            <a href="#">
              <i class="bx bx-user"></i>
              <span className="links_name">User</span>
            </a>
            {/* <span className="tooltip">Dashboard</span> */}
          </li>
          <li>
            <a href="#">
              <i class="bx bx-chat"></i>
              <span className="links_name">Messages</span>
            </a>
            {/* <span className="tooltip">Dashboard</span> */}
          </li>
          <li>
            <a href="#">
              <i class="bx bx-pie-chart-alt-2"></i>
              <span className="links_name">Analytics</span>
            </a>
            {/* <span className="tooltip">Dashboard</span> */}
          </li>
          <li>
            <a href="#">
              <i class="bx bx-cog"></i>
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
            <i class="bx bx-log-out" id="log_out"></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
