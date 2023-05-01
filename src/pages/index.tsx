import Container from "@/components/layouts/Container";
import BouncingBall from "@/components/misc/BouncingBall";
import { PageSEO } from "@/components/SEO";
import { PageTransition } from "@/components/PageTransition";

export default function Home() {
  return (
    <Container className="flex flex-col justify-between">
      <PageSEO />
      <PageTransition>
        <BouncingBall />
      </PageTransition>
    </Container>
  );
}
