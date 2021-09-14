import { Executor, ExecutorContext, runExecutor } from '@nrwl/devkit';
import { Options } from './options';
import { asyncExec } from '../../utils/exec';

async function buildProject(project: string, ctx: ExecutorContext) {
  for await (const buildResult of await runExecutor({ project, target: 'build' }, {}, ctx)) {
    if (!buildResult.success) {
      throw new Error(`Can't build projec: ${project}`);
    }
  }
}

async function publishToGHPages(outputPath: string) {
  try {
    const { stderr, stdout } = await asyncExec(`yarn gh-pages -d ${outputPath}`);

    console.log(stderr, stdout);

  } catch (error) {
    throw error;
  }
}

const ghPagesExecutor: Executor<Options> = async (options, ctx) => {
  const { projectName: project } = ctx;

  await buildProject(project, ctx);

  const { outputPath } = options;
  await publishToGHPages(outputPath);

  return { success: true };
}

export default ghPagesExecutor;
