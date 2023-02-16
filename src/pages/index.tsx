import PublicLayout from "@/components/layouts/public";
import HomePage from "@/components/pages/Home";
import { Button } from "antd";

export default function Home() {
  return (
    <PublicLayout>
      <HomePage />
    </PublicLayout>
  );
}
