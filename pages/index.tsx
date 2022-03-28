import Container from "../components/Container";
import Slogan from "../components/slogan/Slogan";
import Work from "../components/work/Work";
import Profile from "../components/Profile";

export default function Home() {
  return (
    <Container>
      <Profile />
      <Slogan>Passionate Creative Meticulous</Slogan>
      <Work></Work>
    </Container>
  );
}
