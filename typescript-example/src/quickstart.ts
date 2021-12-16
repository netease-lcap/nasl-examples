import * as nasl from '@lcap/asl';

nasl.config.baseURL = 'http://defaulttenant.qa-ci.lcap.group';
nasl.config.cookie = 'authorization=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJJc1NlcnZpY2VBY2NvdW50IjoiZmFsc2UiLCJVc2VySWQiOiIyOGRiMmUwNWY3ZTU0YzNiOTBhOWU0MWU1Y2ZlMjMxOCIsImV4cCI6MTYzOTQ5MjY1MywiSXNUaGlyZFBhcnR5Q29va2llIjoiZmFsc2UiLCJpYXQiOjE2Mzk0NDk0NTN9.HrhsPCHN0TUpN8IQNl1OoHNJ7Z5mtwbIdbhHgZpEq0I';
const appId = '2bb0bb6a-0fdd-4440-b5d2-a7c041da18f1';

async function start() {
    const app = new nasl.App({ id: appId });
    nasl.config.defaultApp = app;

    await app.loadAll();

    const page0 = app.firstWebService.pages[0];
    await page0.rootView.load();
    console.log(page0.rootView.toVue());
}

start().catch((e) => console.log(e.response && e.response.data));
