import { NextPage } from "next";
import Image from "next/image";
import SampleImage from "../public/sample.jpg";

const ImageSample: NextPage<void> = (props) => {
  return (
    <div>
      <h1>画像</h1>
      <Image src={SampleImage} />
    </div>
  );
};
