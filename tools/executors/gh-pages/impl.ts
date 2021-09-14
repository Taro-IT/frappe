import { Executor } from '@nrwl/devkit';

const ghPagesExecutor: Executor = async (options, ctx) => {
  console.log(ctx);

  return { success: true };
}

export default ghPagesExecutor;
