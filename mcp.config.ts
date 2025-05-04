export const servers = [
  {
    id: "railway-central",
    name: "📡 Scira MCP (Центр управления)",
    endpoint: "https://scira-mcp-chat.up.railway.app",
    role: "controller"
  },
  {
    id: "vercel-core",
    name: "🧠 MCP @ Vercel (основной мозг LMS)",
    endpoint: "https://mcp-vercel-ui.vercel.app/api",
    role: "toolhost"
  }
];

export const tools = [
  {
    id: "terraform_snapshot",
    name: "📦 Снимок инфраструктуры",
    description: "Фиксация Supabase, Railway и Vercel через Terraform",
    actions: [
      {
        type: "shell",
        command: "cd infrastructure && terraform init"
      },
      {
        type: "shell",
        command: "cd infrastructure && terraform plan -var-file=../.env.mcp"
      },
      {
        type: "shell",
        command: "cd infrastructure && terraform apply -auto-approve -var-file=../.env.mcp"
      },
      {
        type: "snapshot",
        tool: "supabase.store_snapshot",
        input: {
          path: "infrastructure/",
          label: "mcp-zero-snapshot",
          env: ".env.mcp"
        }
      }
    ]
  },
  {
    id: "generate_pdf_report",
    name: "📄 Генерация PDF-отчёта",
    description: "Создать PDF с когнитивным профилем",
    actions: [
      {
        type: "tool",
        tool: "pdf.generate_report",
        input: {
          template: "cognitive-profile",
          data_source: "supabase.user_stats",
          format: "pdf"
        }
      }
    ]
  }
];