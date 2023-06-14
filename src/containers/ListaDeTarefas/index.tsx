import Tarefa from '../../components/Tarefa'
import { Container } from './styles'

const tarefas = [
  {
    titulo: 'estudar Typescript',
    descricao: 'ver a aula EBAC',
    prioridade: 'importante',
    status: 'pendente'
  },
  {
    titulo: 'pagar internet',
    descricao: 'baixar fatura',
    prioridade: 'urgente',
    status: 'concluída'
  },
  {
    titulo: 'ir pra academia',
    descricao: 'fazer trieno D',
    prioridade: 'importante',
    status: 'pendente'
  }
]

const ListaDeTarefas = () => (
  <Container>
    <p>
      2 tarefas marcadas e como: &quot;categoria&ldquo; e &quot;termo&ldquo;
    </p>
    <ul>
      {tarefas.map((t) => (
        <li key={t.titulo}>
          <Tarefa
            descricao={t.descricao}
            titulo={t.titulo}
            status={t.status}
            prioridade={t.prioridade}
          />
        </li>
      ))}
    </ul>
  </Container>
)

export default ListaDeTarefas
