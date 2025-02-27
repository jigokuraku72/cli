import { ExitError } from "./hooks/useErrorHandler.ts"
import which from "tea/plumbing/which.ts"

export default async function provides(args: string[]) {
  let status = 0;
  for (const arg of args) {
    const provides = await which(arg);
    if (!provides) status = 1;
  }
  throw new ExitError(status)
}
