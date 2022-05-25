import { useLocation } from "react-location";

function Adabiyotlar() {
  const adibLocation = useLocation();
  console.log(adibLocation);
  return (
    <div>
      <h1>hello</h1>
    </div>
  );
}

export default Adabiyotlar;
