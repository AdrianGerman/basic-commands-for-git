import { Section } from "./Section"

export const CommandGrid = () => {
  return (
    <div className="flex flex-wrap gap-8 w-full max-w-7xl px-6 justify-center">
      <Section
        title="Inicialización"
        emoji="🚀"
        columns={1}
        className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl shadow-md p-6 w-full max-w-xs"
        commands={[
          { cmd: "git init", desc: "Inicializa un repositorio" },
          { cmd: "git clone <repo-url>", desc: "Clona un repositorio" }
        ]}
      />

      <Section
        title="Desarrollo diario"
        emoji="⚙️"
        columns={3}
        className="bg-gray-900 rounded-3xl shadow-lg p-8 w-full max-w-md"
        commands={[
          { cmd: "git status", desc: "Estado de los cambios" },
          { cmd: "git add <archivo>", desc: "Añade al área de preparación" },
          { cmd: 'git commit -m "Mensaje"', desc: "Confirma los cambios" }
        ]}
      />

      <Section
        title="Gestión de ramas"
        emoji="🌿"
        columns={2}
        className="bg-gray-800 rounded-xl shadow p-5 w-full max-w-sm"
        commands={[
          { cmd: "git branch", desc: "Lista ramas" },
          { cmd: "git branch <nombre>", desc: "Crea una nueva rama" },
          { cmd: "git switch <nombre>", desc: "Cambia de rama" },
          { cmd: "git branch -d <nombre>", desc: "Elimina una rama" }
        ]}
      />

      <Section
        title="Integración y colaboración"
        emoji="🤝"
        columns={4}
        className="bg-gradient-to-tl from-gray-900 to-gray-700 rounded-2xl shadow-xl p-7 w-full max-w-lg"
        commands={[
          { cmd: "git merge <rama>", desc: "Fusiona una rama" },
          { cmd: "git remote add <nombre> <url>", desc: "Añade remoto" },
          { cmd: "git push <remoto> <rama>", desc: "Envía cambios" },
          { cmd: "git pull <remoto> <rama>", desc: "Obtiene cambios" }
        ]}
      />

      <Section
        title="Recuperación y limpieza"
        emoji="🧹"
        columns={3}
        className="bg-gray-900 rounded-2xl shadow-lg p-6 w-full max-w-sm"
        commands={[
          { cmd: "git fetch", desc: "Recupera sin fusionar" },
          { cmd: "git reset --hard HEAD", desc: "Descarta cambios" },
          { cmd: "git revert <commit>", desc: "Revierte un commit" }
        ]}
      />

      <Section
        title="Avanzado y utilidades"
        emoji="✨"
        columns={3}
        className="bg-gray-800 rounded-3xl shadow-2xl p-8 w-full max-w-xl"
        commands={[
          { cmd: "git diff <a> <b>", desc: "Compara ramas" },
          { cmd: "git show <hash>", desc: "Detalles del commit" },
          { cmd: "git stash", desc: "Guarda cambios" },
          { cmd: "git stash pop", desc: "Restaura cambios" },
          { cmd: "git cherry-pick <hash>", desc: "Aplica un commit" },
          { cmd: "git rebase <base>", desc: "Reaplica commits" }
        ]}
      />
    </div>
  )
}
