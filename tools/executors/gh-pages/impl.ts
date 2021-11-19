import { Executor } from '@nrwl/devkit';
import { Options } from './options';
import { asyncExec } from '../../utils/exec';
import { touch } from '../../utils/touch';

async function buildProject(project: string) {
  await asyncExec(`npm run build ${project}`);
}

async function publishToGHPages(outputPath: string) {
  try {
    const { stderr, stdout } = await asyncExec(`npm run gh-pages -- -d ${outputPath} -b frappe-wiki`);

    console.log(stderr, stdout);
  } catch (error) {
    throw error;
  }
}

const ghPagesExecutor: Executor<Options> = async (options, ctx) => {
  const { projectName: project } = ctx;

  await buildProject(project);

  const { outputPath } = options;
  await touch(`${outputPath}/.nojekyll`);
  await publishToGHPages(outputPath);

  return { success: true };
};

export default ghPagesExecutor;
