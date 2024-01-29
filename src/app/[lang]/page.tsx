import { Welcome } from "@/components/welcome/welcome";

export default function Home() {
  return (
    <div className="bg-blue-200 min-h-screen w-full flex items-center justify-end flex-col py-40">
      <Welcome />
    </div>
  );
}
