import React from 'react';
import Link from 'next/link';

const Header: React.FC = () => {
  return (
    <div className="fixed top-0 left-0 w-full bg-background p-4">
      <div className="flex items-center justify-center">
        <Link href="/">
          <p className="logo text-2xl font-bold">D4Buildie</p>
        </Link>
      </div>
    </div>
  );
};

export default Header;
