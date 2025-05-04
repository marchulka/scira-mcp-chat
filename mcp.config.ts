export const servers = [
  {
    id: "railway-central",
    name: "📡 Scira MCP (Центр управления)",
    endpoint: "https://scira-mcp-chat.up.railway.app/api",
    role: "controller",
    host: "scira-mcp-chat.up.railway.app"
  }
];

export const tools = [
  {
    id: "terraform_snapshot",
    name: "📦 Снимок инфраструктуры",
    description: "Создание снапшота с помощью Terraform",
    run: async () => {
      const mod = await import("./tools/terraform_snapshot");
      return mod.default();
    }
  }
];