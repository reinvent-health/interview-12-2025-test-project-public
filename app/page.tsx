import AddUserForm from "@/components/AddUserForm";
import UserList from "@/components/UserList";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <main className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">
          User Management
        </h1>
        <AddUserForm />
        <UserList />
      </main>
    </div>
  );
}
