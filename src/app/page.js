
import Header from "@/view/header";
import Wave from "@/components/wave";
import Historia from "@/view/historia";
import Autor from "@/view/autor";
import Descricao from "@/view/descricao";
import Avalicacao from "@/view/avalicacao";

export default function Home() {
  const date = new Date()
  return (
    <>
      <Header />
      <Wave
        fill={'#49B970'}
        className={'waveHeader'}
        viewBox={'0 0 1440 320'}
        d={'M0,320L80,277.3C160,235,320,149,480,133.3C640,117,800,171,960,165.3C1120,160,1280,96,1360,64L1440,32L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z'}
      />
      <Historia />
      <Wave
        fill={'#49B970'}
        className={'waveHistoria'}
        viewBox={'0 0 1440 320'}
        d={'M0,96L26.7,96C53.3,96,107,96,160,85.3C213.3,75,267,53,320,80C373.3,107,427,181,480,186.7C533.3,192,587,128,640,106.7C693.3,85,747,107,800,138.7C853.3,171,907,213,960,224C1013.3,235,1067,213,1120,197.3C1173.3,181,1227,171,1280,144C1333.3,117,1387,75,1413,53.3L1440,32L1440,0L1413.3,0C1386.7,0,1333,0,1280,0C1226.7,0,1173,0,1120,0C1066.7,0,1013,0,960,0C906.7,0,853,0,800,0C746.7,0,693,0,640,0C586.7,0,533,0,480,0C426.7,0,373,0,320,0C266.7,0,213,0,160,0C106.7,0,53,0,27,0L0,0Z'}
      />
      <Autor />
      <Avalicacao />
      <Descricao />
      <footer>
        <p>Site - nextjs - Desenvolvido por <a href="https://github.com/unikcabofrio" target="_blank">Unik Cabo Frio</a> - {date.getFullYear()}</p>
      </footer>
    </>

  );
}
