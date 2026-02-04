import React, { createContext, useEffect, useState } from "react";

export const UserContext = createContext();

export function UserProvider({ children }) {
  const [Posts, setPosts] = useState([]); // Posts array فاضية كبداية
useEffect(() => {
  fetch('https://jsonplaceholder.typicode.com/posts')
  .then((response) => response.json())
  .then((json) => setPosts(json));
}, []);

  return (
    <UserContext.Provider value={{ Posts, setPosts }}>
      {children}
    </UserContext.Provider>
  );
}
export default UserProvider;