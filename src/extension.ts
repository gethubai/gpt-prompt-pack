

import { AppContext, IExtension, UniqueId } from '@hubai/core';

export class PromptTutorialExtension implements IExtension {
  id: UniqueId = 'PromptPack';

  name: string = 'promptPack';

  activate(extensionCtx: AppContext): void {
    console.log('activating test extension!');
  }
  dispose(extensionCtx: AppContext): void {
    console.log('disposing test extension!');
  }
}

const extension = new PromptTutorialExtension();
export default extension;
