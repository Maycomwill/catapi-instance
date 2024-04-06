import Breeds from "@/components/Breeds";

export default async function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-start space-y-4 p-4">
      <h1 className="text-4xl font-bold">Welcome to the cat api instance</h1>
      <div className="w-full flex items-center justify-center">
        <Breeds />
      </div>
    </main>
  );
}
