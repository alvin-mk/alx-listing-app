// components/common/Button.tsx
import React from 'react';
 import { ButtonProps } from '../..//interfaces';

const Button: React.FC<ButtonProps> = ({ label, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700"
    >
      {label}
    </button>
  );
};

export default Button;
