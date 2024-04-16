import NavBarEditor from "@/components/ui/NavBarEditor";

export default function RootLayout({ children }) {
  return (
    <div className="h-99vh w-99vh overflow-hidden text-6xl">
        <NavBarEditor />
     {children}
    </div>
  );
}
