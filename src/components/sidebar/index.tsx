import { NextPage } from 'next';
import { useRouter } from 'next/router';
import React from 'react';

const Sidebar: NextPage = (props) => {
  const router = useRouter();
  return (
    <div className="body">
      <div className="sidebar close">
        <div className="logo-details"></div>
        <ul className="nav-links">
          <li>
            <i className="bx bx-home"></i>
            <ul className="sub-menu blank">
              <li>
                <a className="link_name" href="/dashboard/home">
                  Menu
                </a>
              </li>
            </ul>
          </li>
          <li>
            <div className="iocn-link">
              <i className="bx bx-user"></i>
              <i className="bx bxs-chevron-down arrow"></i>
            </div>
            <ul className="sub-menu">
              <li>
                <a className="link_name">Usuários</a>
              </li>
              <li>
                <a href="/dashboard/user_list">Lista de Usuários</a>
              </li>
            </ul>
          </li>
          <li>
            <div className="iocn-link">
              <i className="bx bx-book-alt"></i>
              <i className="bx bxs-chevron-down arrow"></i>
            </div>
            <ul className="sub-menu">
              <li>
                <a className="link_name">Ocorrências</a>
              </li>
              <li>
                <a href="/dashboard/map_occurrences">Mapa de Ocorrências</a>
              </li>
              <li>
                <a href="/dashboard/list_occurrences">Lista de Ocorrência</a>
              </li>
              <li>
                <a href="/dashboard/report">Relatório</a>
              </li>
            </ul>
          </li>

          <li>
            <div className="iocn-link">
              <i className="bx bx-plug"></i>
              <i className="bx bxs-chevron-down arrow"></i>
            </div>
            <ul className="sub-menu">
              <li>
                <a className="link_name">Tipos e Subtipos</a>
              </li>
              <li>
                <a href="/dashboard/type_list">Listagem de Tipos</a>
              </li>
            </ul>
          </li>
          <li>
            <i className="bx bx-cog"></i>
            <ul className="sub-menu blank">
              <li>
                <a className="link_name" href="/configuration">
                  Configurações
                </a>
              </li>
            </ul>
          </li>
          <li>
            <i className="bx bx-exit"></i>
            <ul className="sub-menu blank">
              <li>
                <a className="link_name" href="/login">
                  Sair
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
      <section className="home-section">
        <div className="home-content">
          <h4 className="text-grafia">GRAFIA</h4>
          <span className="text-cidade">Cidade</span>
        </div>
      </section>
    </div>
  );
};

export default Sidebar;
