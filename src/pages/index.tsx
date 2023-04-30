import Container from "@/components/layouts/Container";
import BouncingBall from "@/components/misc/BouncingBall";

export default function Home() {
  return (
    <Container className="flex flex-col justify-between">
      <BouncingBall />
    </Container>
  );
}
