import Image from "next/image";

const MeetMe = () => {
  return (
    <div>
      <Image src="/images/no-image.png" alt="avatar" width={150} height={150} />
      <p>
        Hey, I am <strong>Bla bla</strong>. I love coding. Lorem ipsum dolor
        sit, amet consectetur adipisicing elit. Reiciendis commodi numquam
        incidunt blanditiis quibusdam atque natus inventore sunt autem iusto.
      </p>
    </div>
  );
};

export default MeetMe;
