import dynamic from "next/dynamic";

const DynamicMap = dynamic(() => import("./DynamicMap"), {
  ssr: false,
});

const Map = () => {
  return (
    <div>
      <DynamicMap />
    </div>
  );
};

export default Map;
