import Link from "next/link";
export default function Home() {
  return (
    <main className=" bg-gray-100 h-screen">
      <div className=" h-full flex items-center justify-center">
        <Link href={'/dashboard'} className=" bg-gray-300 px-3 py-1 rounded-md text-sm">Dashboard</Link>
      </div>
    </main>
  );
}
