import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-800 p-1 mt-8">
      <div className="container mx-auto text-center text-gray-300">
        &copy; {currentYear} Joshua Lee Penn
      </div>
    </footer>
  );
};

export default Footer;
