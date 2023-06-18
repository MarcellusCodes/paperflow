import React from "react";

type TAppShell = {
  navbar: React.ReactNode;
  children: React.ReactNode;
  aside?: React.ReactNode;
  pageTitle: string;
};

export const AppShell = ({ navbar, children, aside, pageTitle }: TAppShell) => {
  return (
    <main className="px-4">
      <div className="app-shell flex flex-row items-center border-t border-border">
        <nav className="h-full w-[400px] shrink-0 border-r border-border pt-6">
          {navbar}
        </nav>
        <div className="flex h-full w-full flex-col gap-8 px-4 pt-6">
          <h2 className="scroll-m-20 place-self-start text-2xl font-semibold tracking-tight transition-colors first:mt-0">
            {pageTitle}
          </h2>
          {children}
        </div>
        <aside className="h-full w-[400px] shrink-0 bg-orange-600 pt-6">
          {aside}
        </aside>
      </div>
    </main>
  );
};
