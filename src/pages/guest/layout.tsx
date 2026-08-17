import { Outlet } from "react-router";
import { Header } from "@/components/common/header";
import { Footer } from "@/components/common/footer";

export default function GuestLayout() {
  return (
    <>
      <Header />

      <main className="pt-[90px]">
        <Outlet />
      </main>

      <Footer />
    </>
  );
}