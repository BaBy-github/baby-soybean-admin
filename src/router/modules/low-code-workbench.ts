const lowCodeWorkbench: AuthRoute.Route = {
  name: 'low-code-workbench',
  path: '/low-code-workbench',
  component: 'basic',
  meta: { title: '低代码工作台', icon: 'ph:codesandbox-logo-fill' },
  children: [
    {
      name: 'low-code-workbench_process-designer',
      path: '/low-code-workbench/process-designer',
      component: 'self',
      meta: { title: '流程设计器', icon: 'carbon:ibm-process-mining' }
    }
  ]
};

export default lowCodeWorkbench;
