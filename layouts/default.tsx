import { Link } from "@heroui/link";

import { Head } from "./head";

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative flex flex-col h-screen">
      <Head />
      <main className="container mx-auto max-w-8xl px-6 flex-grow">
        {children}
      </main>
      <footer className="w-full flex items-center justify-center py-3">
        <Link
          isExternal
          className="flex items-center gap-1 text-current"
          href="https://github.com/s-rayyan"
          title="heroui.com homepage"
        >
          <span className="text-default-600">Built by</span>
          <p className="text-primary">Rayyan</p>
        </Link>
      </footer>
    </div>
  );
}
