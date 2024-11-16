export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main>
      <nav>Nav categorias</nav>
      {children}
    </main>
  );
}
