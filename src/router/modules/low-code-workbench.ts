const lowCodeWorkbench: AuthRoute.Route = {
  name: 'low-code-workbench',
  path: '/low-code-workbench',
  component: 'basic',
  meta: { title: '低代码工作台', icon: 'ph:codesandbox-logo-fill' },
  children: [
    {
      name: 'low-code-workbench_resource-manager',
      path: '/low-code-workbench/resource-manager',
      component: 'self',
      meta: { title: '资源管理器', icon: 'grommet-icons:resources' }
    },
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
      meta: { title: '云函数', icon: 'tabler:code-dots' }
    },
    {
      name: 'low-code-workbench_data-structure',
      path: '/low-code-workbench/data-structure',
      component: 'self',
      meta: { title: '数据结构', icon: 'ph:tree-structure-duotone' }
    },
    {
      name: 'low-code-workbench_data-connector',
      path: '/low-code-workbench/data-connector',
      component: 'self',
      meta: { title: '数据连接器', icon: 'ph:plugs-duotone' }
    },
    {
      name: 'low-code-workbench_form-designer',
      path: '/low-code-workbench/form-designer',
      component: 'self',
      meta: { title: '表单设计器', icon: 'icon-park-outline:form-one' }
    }
  ]
};

export default lowCodeWorkbench;
