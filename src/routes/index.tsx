import { createFileRoute } from "@tanstack/react-router";
import type { ReactNode } from "react";
import video from "@/assets/iodo-video.mp4.asset.json";
import resultado from "@/assets/resultado-amido.jpg.asset.json";
import pesagem from "@/assets/pesagem-amido.jpg.asset.json";
import solucao from "@/assets/solucao-amido.jpg.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Portfólio — Práticas do Sistema Digestório" },
      { name: "description", content: "Relatório das práticas de identificação do amido e ação da ptialina." },
      { property: "og:title", content: "Portfólio — Práticas do Sistema Digestório" },
      { property: "og:description", content: "Identificação do amido nos alimentos e ação da amilase salivar." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: Index,
});

const resultados = [
  { alimento: "Arroz cru", cor: "Azul-escuro, quase preto", amido: true },
  { alimento: "Bolacha de água e sal", cor: "Azul-escuro, quase preto", amido: true },
  { alimento: "Açúcar", cor: "Marrom-alaranjado (cor do iodo)", amido: false },
  { alimento: "Leite em pó", cor: "Marrom-alaranjado (cor do iodo)", amido: false },
];

function H2({ children }: { children: ReactNode }) {
  return <h2 className="mt-16 mb-4 border-b border-foreground pb-1 text-2xl font-semibold">{children}</h2>;
}
function Q({ q, children }: { q: string; children: ReactNode }) {
  return (
    <div className="mt-6">
      <h3 className="font-semibold italic">{q}</h3>
      <div className="mt-1">{children}</div>
    </div>
  );
}
function Fig({ n, children, legenda }: { n: number; children: ReactNode; legenda: string }) {
  return (
    <figure className="my-8">
      {children}
      <figcaption className="mt-2 text-sm text-muted-foreground">
        <span className="font-mono text-xs">Figura {n}.</span> {legenda}
      </figcaption>
    </figure>
  );
}

function Index() {
  return (
    <main className="mx-auto max-w-2xl px-5 py-16 text-[1.075rem] leading-[1.75]">
      <header>
        <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">Portfólio digital · atividade avaliativa</p>
        <h1 className="mt-3 text-4xl font-semibold leading-tight">Práticas do sistema digestório: o amido e a ptialina</h1>
        <table className="mt-8 w-full text-sm">
          <tbody>
            {[
              ["Instituição", "Senac Paulista"],
              ["Turma", "2C"],
              ["Componente curricular", "Biologia"],
              ["Professora", "Micaelle"],
              ["Integrantes", "Daniel, Julia, Emily, Larissa, Alice"],
            ].map(([k, v]) => (
              <tr key={k} className="border-b border-border">
                <td className="py-1.5 pr-4 text-muted-foreground">{k}</td>
                <td className="py-1.5">{v}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </header>

      <H2>1. Investigação do amido nos alimentos</H2>
      <p>
        Colocamos arroz cru e um pedaço de bolacha em uma placa de Petri, e açúcar e leite em pó em outra.
        Com uma pipeta, pingamos tintura de iodo sobre cada alimento e observamos a cor que aparecia.
      </p>

      <Fig n={1} legenda="Gotejamento da tintura de iodo sobre o arroz e a bolacha.">
        <video src={video.url} controls playsInline className="w-full" />
      </Fig>

      <Q q="O que é amido e qual é sua função nos vegetais?">
        É um carboidrato (polissacarídeo) formado por várias moléculas de glicose ligadas. Nas plantas ele funciona
        como reserva de energia, guardado em grãos, sementes, raízes e tubérculos.
      </Q>
      <Q q="Onde começa sua digestão e qual enzima participa?">
        Na boca, pela ptialina (amilase salivar). A digestão continua no intestino delgado com a amilase pancreática.
      </Q>
      <Q q="Qual a função do iodo e como a cor indicou o amido?">
        O iodo serve como indicador. Em contato com o amido ele forma um composto azul-escuro; onde não há amido, fica
        com a própria cor, marrom-alaranjada.
      </Q>
      <Q q="Quais alimentos deram resultado positivo?">O arroz e a bolacha, que ficaram azul-escuros.</Q>
      <Q q="Nos alimentos negativos, que outros carboidratos podem existir?">
        No açúcar há sacarose, digerida no intestino delgado pela sacarase. No leite em pó há lactose, digerida no
        intestino delgado pela lactase.
      </Q>

      <Fig n={2} legenda="Resultado: à esquerda, arroz e bolacha escurecidos (amido presente); à direita, açúcar e leite em pó com a cor do iodo (sem amido detectável).">
        <img src={resultado.url} alt="Placas com alimentos após o iodo" className="w-full" />
      </Fig>

      <table className="w-full text-left text-sm">
        <thead>
          <tr className="border-y border-foreground">
            <th className="py-2 pr-3 font-semibold">Alimento</th>
            <th className="py-2 pr-3 font-semibold">Coloração</th>
            <th className="py-2 font-semibold">Amido</th>
          </tr>
        </thead>
        <tbody>
          {resultados.map((r) => (
            <tr key={r.alimento} className="border-b border-border">
              <td className="py-2 pr-3">{r.alimento}</td>
              <td className="py-2 pr-3">{r.cor}</td>
              <td className="py-2">{r.amido ? "Presente" : "Não detectável"}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <p className="mt-3 text-sm text-muted-foreground">
        Obs.: resultado negativo para amido não quer dizer que o alimento não tenha nenhum carboidrato.
      </p>

      <H2>2. Investigação da ação da ptialina</H2>
      <p>
        Pesamos amido de milho na balança e misturamos com água no erlenmeyer, formando uma solução esbranquiçada.
        Separamos a solução em duas amostras: uma recebeu saliva e a outra não. Depois de alguns minutos, pingamos
        iodo nas duas.
      </p>

      <Fig n={3} legenda="Pesagem do amido de milho no erlenmeyer de 125 mL.">
        <img src={pesagem.url} alt="Pesagem do amido de milho" className="w-full" />
      </Fig>
      <Fig n={4} legenda="Solução de amido pronta para o teste.">
        <img src={solucao.url} alt="Erlenmeyer com solução de amido" className="w-full" />
      </Fig>

      <Q q="O que é a ptialina? Onde é produzida e sobre o que atua?">
        É a amilase salivar, uma enzima produzida pelas glândulas salivares. Ela atua sobre o amido, quebrando-o em
        moléculas menores, como a maltose.
      </Q>
      <Q q="Quais diferenças foram observadas entre as amostras?">
        A amostra sem saliva ficou azul-escura com o iodo. A amostra com saliva ficou mais clara.
      </Q>
      <Q q="Como isso mostra a ação da ptialina?">
        Na amostra com saliva a enzima quebrou o amido, então sobrou pouco amido para reagir com o iodo.
      </Q>
      <Q q="Como os resultados se relacionam à digestão na boca?">
        Enquanto mastigamos, a saliva se mistura ao alimento e a ptialina já começa a digerir o amido. Por isso um
        pedaço de pão mastigado por bastante tempo fica um pouco doce.
      </Q>

      <H2>3. Conclusão</H2>
      <p>
        Com as práticas, vimos que o iodo identifica o amido pela cor azul-escura, e que alimentos como arroz e
        bolacha têm bastante amido, enquanto açúcar e leite não. Também entendemos que a digestão do amido começa na
        boca, pela ação da ptialina da saliva.
      </p>

      <H2>Fontes</H2>
      <ul className="list-disc pl-5 text-sm">
        <li>AMABIS, J. M.; MARTHO, G. R. <i>Biologia Moderna</i>. São Paulo: Moderna.</li>
        <li>LOPES, S.; ROSSO, S. <i>Bio</i>. São Paulo: Saraiva.</li>
        <li>Roteiro das aulas práticas — Prof.ª Micaelle.</li>
      </ul>
    </main>
  );
}
