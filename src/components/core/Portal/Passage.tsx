import dynamic from "next/dynamic";

const Passage = dynamic(
  () => import("./Vortex"),
  { ssr: false }
);

export default Passage;