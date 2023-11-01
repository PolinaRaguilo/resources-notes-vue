<template>
  <Card>
    <Button
      @click="tabsHandler('ResourcesList')"
      :mode="selectedTab === 'ResourcesList' ? null : 'flat'"
      >Stored Resources</Button
    >
    <Button
      @click="tabsHandler('AddResource')"
      :mode="selectedTab === 'AddResource' ? null : 'flat'"
      >Add Resources</Button
    >
  </Card>

  <keep-alive><component :is="selectedTab" /></keep-alive>
</template>

<script>
import AddResource from './AddResource.vue';
import ResourcesList from './ResourcesList.vue';

export default {
  components: {
    ResourcesList,
    AddResource,
  },
  data() {
    return {
      selectedTab: 'ResourcesList',
      storedResources: [
        {
          id: '1',
          title: 'Official-Guide',
          description: 'The official Vue.js documentation.',
          link: 'https://vue.js.org/',
        },
      ],
    };
  },
  provide() {
    return {
      resources: this.storedResources,
      addResource: this.addResource,
      deleteResource: this.deleteResource,
    };
  },
  methods: {
    tabsHandler(tab) {
      this.selectedTab = tab;
    },
    addResource(newResource) {
      const newItem = {
        id: new Date(),
        ...newResource,
      };
      this.storedResources.unshift(newItem);
      this.selectedTab = 'ResourcesList';
    },
    deleteResource(id) {
      const resIndex = this.storedResources.findIndex((res) => res.id === id);
      this.storedResources.splice(resIndex, 1);
    },
  },
};
</script>
