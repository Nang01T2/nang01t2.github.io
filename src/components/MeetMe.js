import Image from "next/image";
import styles from "@/styles/Home.module.css";

const MeetMe = () => {
  return (
    <div>
      <Image
        src="/images/no-image.png"
        alt="avatar"
        width={150}
        height={150}
        className={styles.img}
      />
      <p className={styles.p}>
        Hey, I am <strong>Bla bla</strong>. I love coding. Lorem ipsum dolor
        sit, amet consectetur adipisicing elit. Reiciendis commodi numquam
        incidunt blanditiis quibusdam atque natus inventore sunt autem iusto.
      </p>
    </div>
  );
};

export default MeetMe;
