import { useState } from 'react'

function App() {
  const [input, setInput] = useState("");
  const [tasks, setTasks] = useState<string[]>([]);

  const [editTask, setEditTask] = useState({
    enable: false,
    task: ''
  })


  function handleRegister() {
    if(!input) {
      alert('Preencha uma tarefa');
      return;
    }

    if(editTask.enable) {
      handleSaveEdit();
      return
    }

    setTasks(tarefas => [...tarefas, input]);
    setInput('');
  }

  function handleSaveEdit() {
    const findIndex = tasks.findIndex(task => task === editTask.task);
    const allTasks = [...tasks];

    allTasks[findIndex] = input;
    setTasks(allTasks);

    setEditTask({
      enable: false,
      task: ''
    })

    setInput('');
  }

  function handleDelete(item: string) {
    const removeTasks = tasks.filter(tasks => tasks !== item);
    setTasks(removeTasks);
  }

  function handleEdit(item: string) {
    setInput(item);
    setEditTask({
      enable: true,
      task: item
    })
  }


  return (
    <div>
      <h1>Lista de tarefas</h1>

      <input
        placeholder='Digite o nome da tarefa...'
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />

      <button onClick={handleRegister}>
        {editTask.enable ? "Atualizar tarefa" : "Adicionar tarefa"}
      </button>

      <hr />
      {tasks.map((item) => (
        <section key={item}>
          <span>{item}</span>
          <button onClick={() => handleEdit(item)}>Editar</button>
          <button onClick={() => handleDelete(item)}>Excluir</button>
        </section>
      ))}
    </div>
  )
}

export default App
