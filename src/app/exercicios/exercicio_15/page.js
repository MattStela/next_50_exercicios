export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center">
      <div className="p-10">
        <div>
          
        </div>
        <div>
          <p>
            Para implementar a Internationalization (i18n) neste projeto, segui os seguintes passos:
          </p>
          <ol>
            <li>Instalei o pacote <code>next-i18next</code>:<br></br><br></br>
              <pre><code>npm install next-i18next</code></pre>
            </li><br></br>
            <li>Criei um arquivo <code>next-i18next.config.js</code> na raiz do projeto:<br></br><br></br>
              <pre><code>
                {`module.exports = {
                  i18n: {
                    defaultLocale: 'en',
                    locales: ['en', 'pt'],
                  },
                };`}
              </code></pre>
            </li><br></br>
            <li>Configurei o Next.js para usar o <code>next-i18next</code> no arquivo <code>next.config.js</code>:
              <pre><code>
                {`const { i18n } = require('./next-i18next.config');

                module.exports = {
                  i18n,
                };`}
                </code>
              </pre>
            </li><br></br>
            <li>Criei uma pasta <code>public/locales</code> com subpastas para cada idioma (por exemplo, <code>en</code> e <code>pt</code>), e adicionei arquivos JSON com as traduções:
            <br></br><br></br>
              <pre><code>
                {`                  public/
                  └── locales/
                      ├── en/
                      │   └── common.json
                      └── pt/
                          └── common.json`}
              </code></pre>
            </li><br></br>
            <li>Enviei as traduções para os componentes usando o hook <code>useTranslation</code>:
              <pre><code>
                {`import { useTranslation } from 'next-i18next';

                const Component = () => {
                  const { t } = useTranslation('common');
                  return <p>{t('key')}</p>;
                };`}
              </code></pre>
            </li><br></br>
            <li>
              E agora eu não vou precisar nunca mais fazer isso, porquê o copilot no vscode faz sozinho e eu descobri tarde demais
            </li>
          </ol>
        </div>
      </div>
    </main>
  );
}
