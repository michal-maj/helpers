"use client";

import { useState } from "react";
import { List } from "@/app/components/List";
import { ListItem } from "@/app/components/ListItem";

export default function App() {
  const [isUpdate, setIsUpdate] = useState(false);
  return (
    <div className="App">
      <List isUpdating={isUpdate} title="Sensor status">
        <ListItem>Window open</ListItem>
        <ListItem>Door closed</ListItem>
        <ListItem>Fridge closed</ListItem>
      </List>
      <button onClick={() => setIsUpdate((prev) => !prev)}>Refresh</button>
    </div>
  );
}
