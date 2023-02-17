import Head from "next/head";
import { TodoList } from "./Todo/TodoList";
import TopSection from "./Todo/TopSection";
export default function index() {
  return (
    <div>
      <TopSection />
    </div>
  );
}
