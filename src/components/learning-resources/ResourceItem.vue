<template>
  <li>
    <Card>
      <div>
        <header>
          <h3>{{ resource.title }}</h3>
          <Button mode="flat" @click="deleteResource(resource.id)"
            >Delete</Button
          >
        </header>
      </div>
      <p>{{ resource.description }}</p>
      <nav>
        <a :href="resource.link">View Resources</a>
      </nav>
    </Card>
  </li>
</template>

<script>
export default {
  inject: ['deleteResource'],
  props: {
    resource: {
      required: true,
    },
  },
};
</script>

<style scoped>
li {
  margin: auto;
  max-width: 40rem;
}

header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

h3 {
  font-size: 1.25rem;
  margin: 0.5rem 0;
}

p {
  margin: 0.5rem 0;
}

a {
  text-decoration: none;
  color: #ce5c00;
}

a:hover,
a:active {
  color: #c89300;
}
</style>
