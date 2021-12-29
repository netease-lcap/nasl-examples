const nasl = require('@lcap/asl');

nasl.config.baseURL = 'http://defaulttenant.qa-ci.lcap.group'; // 低代码平台某租户的 URL
nasl.config.cookie = 'authorization=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJJc1NlcnZpY2VBY2NvdW50IjoiZmFsc2UiLCJVc2VySWQiOiIyOGRiMmUwNWY3ZTU0YzNiOTBhOWU0MWU1Y2ZlMjMxOCIsImV4cCI6MTYzOTY3NzQyNSwiSXNUaGlyZFBhcnR5Q29va2llIjoiZmFsc2UiLCJpYXQiOjE2Mzk2MzQyMjV9.HiQy2AFTWl5Wjk8YjlQROvvCp14NPz2EgabwnCFUCb4'; // 登录后的 document.cookie
const appId = '8c05b4d7-5928-491b-977d-212f1391904a'; // 需要访问的 appId

async function start() {
    const app = new nasl.App({ id: appId });
    nasl.config.defaultApp = app;

    await app.loadAll();

    const page0 = app.firstWebService.pages[0];
    await page0.rootView.load();
    console.log(page0.rootView.toVue());
}

start().catch((e) => console.log(e.response && e.response.data));
