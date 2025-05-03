import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

function ResMenu() {
  const { id } = useParams();
  const [menu, setMenu] = useState(null);

  useEffect(() => {
    async function fetchMenu() {
      try {
        const response = await fetch(`http://localhost:3000/api/menu/${id}`);
        const json = await response.json();
        setMenu(json);
        console.log(json);
      } catch (err) {
        console.error("Failed to fetch menu:", err);
      }
    }

    fetchMenu();
  }, [id]);

  return (
    <div>
      
    </div>
  );
}

export default ResMenu;
