<template>
  <div ref="designerRef" class="process-designer"></div>
  <div id="properties-panel" class="panel"></div>
</template>

<script lang="ts" setup>
import { onMounted, ref } from 'vue';
import BpmnModeler from 'bpmn-js/lib/Modeler.js';
import 'bpmn-js/dist/assets/diagram-js.css';
import 'bpmn-js/dist/assets/bpmn-font/css/bpmn.css';
import 'bpmn-js/dist/assets/bpmn-font/css/bpmn-codes.css';
import 'bpmn-js/dist/assets/bpmn-font/css/bpmn-embedded.css';
import 'bpmn-js-properties-panel/dist/assets/properties-panel.css';
// import { BpmnPropertiesPanelModule } from 'bpmn-js-properties-panel/dist';
import CamundaBpmnModdle from 'camunda-bpmn-moddle/resources/camunda.json';
import xmlStr from './xml';
// const { BpmnPropertiesPanelModule, BpmnPropertiesProviderModule } = require('bpmn-js-properties-panel/dist');

const designerRef = ref<HTMLElement>();
const bpmnModeler = ref<BpmnModeler | null>(null);

const createNewDiagram = async (bpmn: any) => {
  try {
    await bpmnModeler.value?.importXML(bpmn);
    // console.log(result);
  } catch (e) {
    // console.log('error--->', e);
  }
};
const init = () => {
  bpmnModeler.value = new BpmnModeler({
    container: designerRef.value,
    propertiesPanel: {
      parent: '#properties-panel'
    },
    // additionalModules: [BpmnPropertiesPanelModule, BpmnPropertiesProviderModule],
    moddleExtensions: {
      camunda: CamundaBpmnModdle
    }
  });
  createNewDiagram(xmlStr);
};
onMounted(() => {
  init();
});
</script>
<style scoped>
.process-designer {
  width: 100%;
  height: 100%;
}
</style>
