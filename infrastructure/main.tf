resource "null_resource" "example_snapshot" {
  provisioner "local-exec" {
    command = "echo '📦 Это фиктивный снапшот, протестируй MCP Snapshot Tool'"
  }
}