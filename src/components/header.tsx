import React from 'react';
import Link from 'next/link';
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarSub,
  MenubarSubContent,
  MenubarSubTrigger,
  MenubarTrigger,
} from '@/components/ui/menubar';

const Header: React.FC = () => {
  return (
    <div className="fixed left-0 top-0 z-50 w-full bg-background p-4">
      <div className="flex items-center justify-between">
        <Link href="/">
          <p className="logo text-2xl font-bold">D4Buildie</p>
        </Link>
        <Menubar>
          <MenubarMenu>
            <MenubarTrigger>File</MenubarTrigger>
            <MenubarContent>
              <MenubarItem>
                <Link href="/builder">New Build</Link>
              </MenubarItem>
              <MenubarItem>Reset Current</MenubarItem>
              <MenubarSeparator />
              <MenubarSub>
                <MenubarSubTrigger>Share Build</MenubarSubTrigger>
                <MenubarSubContent>
                  <MenubarItem>Create link</MenubarItem>
                </MenubarSubContent>
              </MenubarSub>
            </MenubarContent>
          </MenubarMenu>
        </Menubar>
      </div>
    </div>
  );
};

export default Header;
