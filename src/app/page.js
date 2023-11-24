"use client";
import { useSelector } from "react-redux";

export default function Dashboard() {
  const reducer = useSelector((state) => state.book);
  console.log("reducer :>> ", reducer);

  return <div>Hello eveybody</div>;
}
