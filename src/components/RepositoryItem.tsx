interface RepositoryItemPorps {
   repository: {
      name: string;
      description: string;
      html_url: string;
   }
}

export function RepositoryItem(props: RepositoryItemPorps) {
   return (
      <li>
         <strong>{props.repository.name}</strong>
         <p>{props.repository.description}</p>

         <a href={props.repository.html_url}>
            Acessar repositório
         </a>
      </li>
   );
}