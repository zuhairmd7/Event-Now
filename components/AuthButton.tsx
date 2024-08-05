import { createClient } from "@/utils/supabase/server";
import Link from "next/link";
import { redirect } from "next/navigation";

export default async function AuthButton() {
  const supabase = createClient();

  const {data: { user }} = await supabase.auth.getUser();

  const signOut = async () => {
    "use server";
  console.log("TESTT!!!!");
    const supabase = createClient();
    await supabase.auth.signOut();
    return redirect("/login");
  };

  return user ? (
    <div className="flex items-center gap-4 text-black">
      {/* Hey, {user.email}! */}
      <form action={signOut}>
         <button /* className="py-1 px-3 rounded-md no-underline text-white font-bold bg-purple-950 hover:bg-btn-background-hover" */>
          Logout
        </button> 
      </form>
    </div>
  ) : (
    <Link href="/login" /* className="py-2 px-3 flex rounded-md no-underline bg-purple-950 hover:bg-btn-background-hover" */ >Login</Link>
  );
}
