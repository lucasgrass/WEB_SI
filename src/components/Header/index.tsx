import React from 'react';

interface HeaderProps {
  variant?: string;
  label: string;
}

const Header = ({ variant = 'default', label }: HeaderProps) => {
  return (
    <>
      {variant === 'default' && <div className="table-title">{label}</div>}
      {/* { variant === 'typeList' && } */}
    </>
  );
};

export default Header;
