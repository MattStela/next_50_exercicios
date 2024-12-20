export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <p>
          Essa é uma página em React feita pra eu conseguir fazer os exercícios
          abaixo (que foram gerados por IA):
        </p>
        <div>
          <p>1. Crie uma Página Simples</p>
          <p>
            - Crie uma nova página <code>about.js</code> no diretório{" "}
            <code>pages</code> e exiba um texto simples nela.
          </p>
        </div>
        <div>
          <p>2. Link Entre Páginas</p>
          <p>
            - Crie uma página <code>contact.js</code> e adicione um link na
            página principal para redirecionar para <code>contact</code>.
          </p>
        </div>
        <div>
          <p>3. Estilização com CSS Modules</p>
          <p>
            - Adicione estilização utilizando CSS Modules em uma página
            existente.
          </p>
        </div>
        <div>
          <p>4. Utilize Tailwind CSS</p>
          <p>- Configure e aplique Tailwind CSS no seu projeto Next.js.</p>
        </div>
        <div>
          <p>5. Componentes Personalizados</p>
          <p>
            - Crie um componente <code>Header</code> e utilize-o em várias
            páginas do seu projeto.
          </p>
        </div>
        <div>
          <p>6. Configurar Rotas Dinâmicas</p>
          <p>
            - Crie páginas dinâmicas utilizando rotas dinâmicas como{" "}
            <code>[id].js</code> no Next.js.
          </p>
        </div>
        <div>
          <p>7. Consumir uma API REST</p>
          <p>
            - Faça uma requisição a uma API REST e exiba os dados em uma página.
          </p>
        </div>
        <div>
          <p>
            8. Utilize <code>getStaticProps</code>
          </p>
          <p>
            - Use <code>getStaticProps</code> para fazer pré-renderização com
            dados estáticos.
          </p>
        </div>
        <div>
          <p>
            9. Utilize <code>getServerSideProps</code>
          </p>
          <p>
            - Use <code>getServerSideProps</code> para fazer pré-renderização
            com dados dinâmicos.
          </p>
        </div>
        <div>
          <p>10. Incremental Static Regeneration (ISR)</p>
          <p>
            - Configure ISR para páginas que precisam ser atualizadas após o
            build inicial.
          </p>
        </div>
        <div>
          <p>
            11. Usar <code>useEffect</code> e <code>useState</code>
          </p>
          <p>
            - Crie uma página que utilize hooks <code>useEffect</code> e{" "}
            <code>useState</code> para gerenciar estado e efeitos colaterais.
          </p>
        </div>
        <div>
          <p>12. Autenticação com NextAuth.js</p>
          <p>
            - Implemente autenticação utilizando NextAuth.js em um projeto
            Next.js.
          </p>
        </div>
        <div>
          <p>13. Deploy com Vercel</p>
          <p>- Realize o deploy do seu projeto Next.js na plataforma Vercel.</p>
        </div>
        <div>
          <p>14. Middleware de Autenticação</p>
          <p>
            - Crie um middleware para proteger rotas e garantir que o usuário
            esteja autenticado.
          </p>
        </div>
        <div>
          <p>15. Internationalization (i18n)</p>
          <p>
            - Configure a internacionalização (i18n) no seu projeto Next.js para
            suportar múltiplos idiomas.
          </p>
        </div>
        <div>
          <p>16. Redirecionamentos e Rewrites</p>
          <p>
            - Configure redirecionamentos e rewrites no arquivo{" "}
            <code>next.config.js</code>.
          </p>
        </div>
        <div>
          <p>
            17. Imagem Otimizada com <code>next/image</code>
          </p>
          <p>
            - Utilize o componente <code>next/image</code> para otimização de
            imagens.
          </p>
        </div>
        <div>
          <p>18. GraphQL com Apollo Client</p>
          <p>
            - Implemente GraphQL no seu projeto Next.js utilizando Apollo
            Client.
          </p>
        </div>
        <div>
          <p>19. Criar API Routes</p>
          <p>
            - Crie rotas de API dentro do diretório <code>pages/api</code> e
            faça uma requisição a partir do cliente.
          </p>
        </div>
        <div>
          <p>20. SSR com Apollo Server</p>
          <p>
            - Configure o servidor Apollo para fazer SSR (Server-Side Rendering)
            de consultas GraphQL.
          </p>
        </div>
        <div>
          <p>21. Configurando Paths Absolutos</p>
          <p>
            - Configure paths absolutos para importações mais limpas e
            organizadas.
          </p>
        </div>
        <div>
          <p>22. Dark Mode com Tailwind CSS</p>
          <p>- Implemente um switch de Dark Mode utilizando Tailwind CSS.</p>
        </div>
        <div>
          <p>23. Usar Context API</p>
          <p>
            - Use Context API para gerenciar estado global em seu projeto
            Next.js.
          </p>
        </div>
        <div>
          <p>24. Configurar PWA</p>
          <p>- Configure seu projeto Next.js como Progressive Web App (PWA).</p>
        </div>
        <div>
          <p>25. Adicionar Typescript</p>
          <p>- Adicione suporte a TypeScript ao seu projeto Next.js.</p>
        </div>
        <div>
          <p>26. Formulários com Formik e Yup</p>
          <p>
            - Implemente formulários utilizando Formik para gerenciamento de
            estado e Yup para validação.
          </p>
        </div>
        <div>
          <p>27. Publicando um Blog</p>
          <p>
            - Crie um simples sistema de blog onde você pode adicionar, editar e
            excluir posts.
          </p>
        </div>
        <div>
          <p>28. Componentização de Layout</p>
          <p>
            - Crie componentes de layout reutilizáveis para cabeçalho, rodapé e
            sidebar.
          </p>
        </div>
        <div>
          <p>29. Carregamento Lazy com React.lazy</p>
          <p>
            - Implemente carregamento lazy de componentes usando{" "}
            <code>React.lazy</code>.
          </p>
        </div>
        <div>
          <p>30. Sistema de Comentários</p>
          <p>- Adicione um sistema de comentários a um post de blog.</p>
        </div>
        <div>
          <p>31. Data Fetching com SWR</p>
          <p>
            - Utilize o SWR para fazer data fetching eficiente em seu projeto
            Next.js.
          </p>
        </div>
        <div>
          <p>32. Acessibilidade (A11y)</p>
          <p>
            - Melhore a acessibilidade do seu site aplicando práticas
            recomendadas.
          </p>
        </div>
        <div>
          <p>33. Usando Storybook</p>
          <p>
            - Configure e use Storybook para desenvolver e testar componentes de
            forma isolada.
          </p>
        </div>
        <div>
          <p>34. Deploy com Docker</p>
          <p>
            - Crie uma imagem Docker para seu projeto Next.js e faça o deploy
            utilizando Docker.
          </p>
        </div>
        <div>
          <p>35. Hot Module Replacement (HMR)</p>
          <p>- Configure HMR para desenvolvimento mais eficiente.</p>
        </div>
        <div>
          <p>36. Teste de Unidade com Jest</p>
          <p>- Implemente testes de unidade usando Jest.</p>
        </div>
        <div>
          <p>37. Teste de Integração com Cypress</p>
          <p>- Implemente testes de integração utilizando Cypress.</p>
        </div>
        <div>
          <p>38. Usando Redux</p>
          <p>- Adicione Redux para gerenciar o estado global do seu projeto.</p>
        </div>
        <div>
          <p>39. Performance Optimization</p>
          <p>
            - Otimize a performance do seu site utilizando Lighthouse e outras
            ferramentas.
          </p>
        </div>
        <div>
          <p>40. Visualização de Dados com D3.js</p>
          <p>- Implemente visualizações de dados utilizando D3.js.</p>
        </div>
        <div>
          <p>41. Usar Framer Motion</p>
          <p>
            - Adicione animações interativas ao seu projeto com Framer Motion.
          </p>
        </div>
        <div>
          <p>42. Multi-Step Forms</p>
          <p>
            - Crie formulários de múltiplos passos com validação em cada etapa.
          </p>
        </div>
        <div>
          <p>43. Paginação de Dados</p>
          <p>- Implemente paginação para grandes conjuntos de dados.</p>
        </div>
        <div>
          <p>44. Filtro e Busca</p>
          <p>
            - Adicione funcionalidades de filtro e busca para listar itens
            dinamicamente.
          </p>
        </div>
        <div>
          <p>45. Upload de Arquivos</p>
          <p>
            - Implemente upload de arquivos e armazenamento utilizando um
            serviço como Firebase Storage.
          </p>
        </div>
        <div>
          <p>46. Gestão de Dependências</p>
          <p>
            - Utilize Yarn Workspaces ou Lerna para gerenciar dependências em
            monorepo.
          </p>
        </div>
        <div>
          <p>47. Responsive Design</p>
          <p>
            - Crie um layout responsivo que funcione bem em todos os
            dispositivos.
          </p>
        </div>
        <div>
          <p>48. Custom Document</p>
          <p>
            - Personalize o componente <code>Document</code> para adicionar
            metadados, fontes ou outras configurações globais.
          </p>
        </div>
        <div>
          <p>49. Prevenção de Duplicação de Conteúdo</p>
          <p>
            - Configure cabeçalhos HTTP e meta tags para evitar duplicação de
            conteúdo e melhorar SEO.
          </p>
        </div>
        <div>
          <p>
            50. Usando <code>useReducer</code>
          </p>
          <p>
            - Utilize o hook <code>useReducer</code> para gerenciar estado
            complexo em seu projeto.
          </p>
        </div>
      </main>
    </div>
  );
}
