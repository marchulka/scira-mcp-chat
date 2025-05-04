export const servers = [
  {
    id: "railway-central",
    name: "📡 Scira MCP (Центр управления)",
    endpoint: "https://scira-mcp-chat-production-2904.up.railway.app/api",
    role: "controller"
  }
];

export const tools = [
  {
    id: "terraform_snapshot",
    name: "📦 Снимок инфраструктуры",
    description: "Создать снапшот с помощью Terraform",
    run: async () => {
      const mod = await import("./tools/terraform_snapshot");
      return mod.default();
    }
  }
];