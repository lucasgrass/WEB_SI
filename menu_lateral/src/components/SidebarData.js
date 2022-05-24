import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import * as RiIcons from "react-icons/ri";
  
export const SidebarData = [
  {
    title: "Usuarios",
    path: "/usuarios",
    icon: <AiIcons.AiFillHome />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
  
    subNav: [
      {
        title: "Lista de Usuários",
        path: "/usuarios/listaDeUsuarios",
        icon: <IoIcons.IoIosPaper />,
      }
    ],
  },
  {
    title: "Ocorrências",
    path: "/ocorrencias",
    icon: <IoIcons.IoIosPaper />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
  
    subNav: [
      {
        title: "Mapa de Ocorrências",
        path: "/ocorrencias/mapaDeOcorrencias",
        icon: <IoIcons.IoIosPaper />,
        cName: "sub-nav",
      },
      {
        title: "Lista de Ocorrências",
        path: "/ocorrencias/listaDeOcorrencias",
        icon: <IoIcons.IoIosPaper />,
        cName: "sub-nav",
      },
      {
        title: "Relatório",
        path: "/ocorrencias/relatorios",
        icon: <IoIcons.IoIosPaper />,
      },
    ],
  },
  {
    title: "Tipos e Subtipos",
    path: "/tipos-subtipos",
    icon: <FaIcons.FaEnvelopeOpenText />,
  
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
  
    subNav: [
      {
        title: "Listagem de Tipos",
        path: "/tipos-subtipos/listagemTipos",
        icon: <IoIcons.IoIosPaper />,
      },
    ]
  }
 
];