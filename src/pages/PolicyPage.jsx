import { Link } from 'react-router-dom'
import './PolicyPage.css'

function PolicyLayout({ title, children }) {
  return (
    <div className="policy-page">
      <div className="policy-container">
        <Link to="/" className="policy-back">&larr; Voltar</Link>
        <h1>{title}</h1>
        {children}
        <p className="policy-updated">Última atualização: julho de 2026</p>
      </div>
    </div>
  )
}

export function PrivacyPage() {
  return (
    <PolicyLayout title="Política de Privacidade">
      <p>
        Neste site respeitamos a sua privacidade. Esta política descreve quais informações
        coletamos, como as utilizamos e quais são os seus direitos.
      </p>
      <h2>Informações que coletamos</h2>
      <p>
        Este site não solicita nem armazena dados pessoais em formulários. Ao clicar no botão do
        WhatsApp, você será redirecionado para o aplicativo WhatsApp, onde decide quais informações
        deseja compartilhar. O número de telefone e as mensagens que você enviar seguem a{' '}
        <a href="https://www.whatsapp.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer">política de privacidade do WhatsApp</a>.
      </p>
      <h2>Cookies e tecnologias de medição</h2>
      <p>
        Utilizamos ferramentas de análise e publicidade de terceiros, como Google Ads (gtag.js) e
        TikTok Pixel, que podem usar cookies e identificadores para medir o desempenho de nossas
        campanhas publicitárias e exibir anúncios relevantes. Consulte nossa{' '}
        <Link to="/cookies">Política de Cookies</Link> para mais detalhes.
      </p>
      <h2>Uso das informações</h2>
      <p>
        Os dados de medição são usados apenas de forma agregada para entender o desempenho da
        página e dos anúncios. Não vendemos nem compartilhamos suas informações pessoais com
        terceiros para fins diferentes dos descritos.
      </p>
      <h2>Seus direitos</h2>
      <p>
        Você pode desativar a publicidade personalizada do Google em{' '}
        <a href="https://adssettings.google.com" target="_blank" rel="noopener noreferrer">adssettings.google.com</a>{' '}
        e gerenciar os cookies pelas configurações do seu navegador. Para exercer seus direitos de
        acesso, correção ou exclusão de dados, entre em contato pelo WhatsApp.
      </p>
    </PolicyLayout>
  )
}

export function TermsPage() {
  return (
    <PolicyLayout title="Termos e Condições">
      <p>
        Ao usar este site você aceita os seguintes termos e condições. Se não concordar, por favor
        não utilize esta página.
      </p>
      <h2>Descrição do serviço</h2>
      <p>
        Este site oferece conteúdo informativo e educativo sobre receitas italianas, entregue por
        meio do WhatsApp. O acesso ao conteúdo é gratuito, salvo indicação em contrário na
        comunicação correspondente.
      </p>
      <h2>Uso permitido</h2>
      <p>
        Você se compromete a usar este site apenas para fins lícitos. É proibido reproduzir,
        distribuir ou modificar o conteúdo sem autorização prévia.
      </p>
      <h2>Isenção de responsabilidade</h2>
      <p>
        O conteúdo compartilhado tem fins informativos. Os resultados das receitas podem variar
        conforme os ingredientes, utensílios e condições de preparo de cada pessoa. Este site não
        é afiliado ao WhatsApp, Google ou TikTok.
      </p>
      <h2>Alterações</h2>
      <p>
        Podemos atualizar estes termos a qualquer momento. A versão vigente será sempre a publicada
        nesta página.
      </p>
      <h2>Contato</h2>
      <p>Para qualquer dúvida sobre estes termos, entre em contato pelo botão do WhatsApp na página inicial.</p>
    </PolicyLayout>
  )
}

export function CookiesPage() {
  return (
    <PolicyLayout title="Política de Cookies">
      <p>
        Este site utiliza cookies e tecnologias semelhantes de terceiros para medir o tráfego e o
        desempenho de nossas campanhas publicitárias.
      </p>
      <h2>O que são cookies?</h2>
      <p>
        Cookies são pequenos arquivos armazenados no seu dispositivo quando você visita um site.
        Eles permitem reconhecer o seu navegador e lembrar de certas informações.
      </p>
      <h2>Cookies que utilizamos</h2>
      <ul>
        <li>
          <strong>Google Ads (gtag.js):</strong> mede conversões e o desempenho de anúncios do
          Google. Mais informações na{' '}
          <a href="https://policies.google.com/technologies/cookies" target="_blank" rel="noopener noreferrer">política de cookies do Google</a>.
        </li>
        <li>
          <strong>TikTok Pixel:</strong> mede conversões de anúncios do TikTok. Mais informações na{' '}
          <a href="https://www.tiktok.com/legal/page/global/cookie-policy/pt" target="_blank" rel="noopener noreferrer">política de cookies do TikTok</a>.
        </li>
      </ul>
      <h2>Como gerenciar os cookies</h2>
      <p>
        Você pode bloquear ou excluir os cookies pelas configurações do seu navegador. Isso não
        afeta o funcionamento desta página, já que os cookies são usados apenas para fins de
        medição.
      </p>
    </PolicyLayout>
  )
}
