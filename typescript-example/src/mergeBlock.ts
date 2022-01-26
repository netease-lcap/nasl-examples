import * as nasl from '@lcap/nasl';

nasl.config.baseURL = 'http://defaulttenant.qa-ci.lcap.group';
nasl.config.cookie = 'authorization=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJJc1NlcnZpY2VBY2NvdW50IjoiZmFsc2UiLCJVc2VySWQiOiIyOGRiMmUwNWY3ZTU0YzNiOTBhOWU0MWU1Y2ZlMjMxOCIsImV4cCI6MTYzODgwMTIyOSwiSXNUaGlyZFBhcnR5Q29va2llIjoiZmFsc2UiLCJpYXQiOjE2Mzg3NTgwMjl9.agDpFvTss53nC9YIYI6baLDlasoMa2MiJcStH-St6KA';
const appId = '000a8a8d-a343-46e6-8db4-3967d0bd0589';
const pageTemplateId = 4104;

async function start() {
    const app = new nasl.App({ id: appId });
    nasl.config.defaultApp = app;

    await app.loadAll();

    const parent = app.firstWebService.pages.find((page) => page.name === 'dashboard').rootView;
    const view = await parent.addViewFromTemplate('view10', pageTemplateId);

    await view.mergeBlock({
        code: nasl.genBlock.genCurdBlock(app.firstMicroService.data.entities[0], view),
        nodePath: view.$html.children[0].nodePath,
        position: 'insertAfter',
        parentNodePath: view.$html.nodePath,
    });
}

start().catch((e) => console.log(e.response && e.response.data));