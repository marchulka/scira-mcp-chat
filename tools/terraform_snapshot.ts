import { exec } from "child_process";
import util from "util";

const execPromise = util.promisify(exec);

export default async function run() {
  try {
    console.log("🔧 [MCP] Terraform snapshot started");

    const cmds = [
      "cd infrastructure && terraform init -input=false",
      "cd infrastructure && terraform plan -input=false -out=plan.tfplan",
      "cd infrastructure && terraform apply -input=false -auto-approve plan.tfplan"
    ];

    for (const cmd of cmds) {
      const { stdout, stderr } = await execPromise(cmd);
      console.log("📦", stdout || stderr);
    }

    return {
      status: "ok",
      message: "Terraform executed successfully!"
    };
  } catch (error) {
    console.error("❌ Terraform error:", error);
    return {
      status: "error",
      message: `Terraform failed: ${error.message}`
    };
  }
}