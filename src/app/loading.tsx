import Image from "next/image";

export default function loading() {
  return (
    <div className="flex my-30 justify-center z-180">
      <Image
        width={130}
        height={130}
        alt="Loading Image"
        src={"/images/shape.png"}
        className="animate-spin"
      />
    </div>
  );
}
