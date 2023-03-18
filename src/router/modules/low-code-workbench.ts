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
    },
    {
      name: 'low-code-workbench_cloud-function',
      path: '/low-code-workbench/cloud-function',
      component: 'self',
      meta: { title: '云函数', icon: 'mdi:code-json' }
    }
  ]
};

export default lowCodeWorkbench;
