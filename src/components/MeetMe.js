import Image from "next/image";
import styles from "@/styles/Home.module.css";

const MeetMe = () => {
  return (
    <div>
      <Image
        src="/images/no-image.png"
        alt="john doe avatar"
        width={150}
        height={150}
      />
      <p>
        Hey, I am <strong>John Doe</strong>. I love coding. Lorem ipsum dolor
        sit, amet consectetur adipisicing elit. Reiciendis commodi numquam
        incidunt blanditiis quibusdam atque natus inventore sunt autem iusto.
      </p>
      <style jsx>{`
        img {
          display: flex;
          flex: 1;
          width: calc(1.2rem + 1vw);
          max-width: calc(1.2rem + 1vw);
          height: auto;
          margin: 0 5px 0 5px;
        }
        img:hover {
          cursor: pointer;
        }
      `}</style>
    </div>
  );
};

export default MeetMe;
