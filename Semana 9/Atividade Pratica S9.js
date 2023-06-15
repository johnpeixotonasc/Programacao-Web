<!DOCTYPE html>
<html>
<head>
  <title>Controle de Tarefas</title>
  <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css">
</head>
<body>
  <div class="container">
    <h1>Controle de Tarefas</h1>

    <div id="tasksList" class="mt-4"></div>

    <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.5.4/dist/umd/popper.min.js"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js"></script>
    <script>
      // Exemplo de dados das tarefas
      const tasks = [
        { id: 1, title: "Tarefa 1", description: "Descrição da Tarefa 1" },
        { id: 2, title: "Tarefa 2", description: "Descrição da Tarefa 2" },
        { id: 3, title: "Tarefa 3", description: "Descrição da Tarefa 3" }
      ];

      // Função para exibir as tarefas na página
      function showTasks() {
        const tasksListElement = document.getElementById("tasksList");
        tasksListElement.innerHTML = ""; // Limpa o conteúdo anterior

        tasks.forEach(task => {
          const taskElement = document.createElement("div");
          taskElement.className = "card mb-3";
          taskElement.innerHTML = `
            <div class="card-body">
              <h5 class="card-title">${task.title}</h5>
              <p class="card-text">${task.description}</p>
            </div>
          `;

          tasksListElement.appendChild(taskElement);
        });
      }

      // Chama a função para exibir as tarefas ao carregar a página
      window.onload = showTasks;
    </script>
</body>
</html>
