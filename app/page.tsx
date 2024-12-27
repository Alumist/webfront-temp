import Download from './components/download';
import Features from './components/features';
import Hero from './components/hero';
import NavBar from './components/navbar';

export default function Home() {
  return (
    <>
      <NavBar />
      <Hero />
      <Features />
      <Download />
    </>
  );
}
