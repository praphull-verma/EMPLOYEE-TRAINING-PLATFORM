"use client"
import { useEffect, useState } from "react";

export function useUser() {
  const [name, setName] = useState("Loading...");

  useEffect(() => {
    fetch("http://localhost:3001/me", { credentials: "include" })
      .then((res) => res.json())
      .then((data) => setName(data.name || data.email))
      .catch(() => setName("Guest"));
  }, []);

  return name;
}