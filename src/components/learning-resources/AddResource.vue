<template>
  <Card>
    <form @submit.prevent="submitHandler">
      <div class="form-control">
        <label for="title">Title</label>
        <input id="title" name="title" type="text" v-model="title" />
      </div>
      <div class="form-control">
        <label for="description">Description</label>
        <textarea
          id="description"
          name="description"
          rows="3"
          v-model="description"
        />
      </div>
      <div class="form-control">
        <label for="link">Link</label>
        <input id="link" name="link" type="url" v-model="link" />
      </div>
      <div>
        <Button type="submit">Add Resource</Button>
      </div>
    </form>
  </Card>

  <Modal v-if="!isValid" title="Invalid Data" @close="isValid = true">
    <template #body>
      <p>Unfortunately, at least one input is invalid.</p>
      <p>
        Please check all inputs and make sure you enter at least a few
        characters into each input field.
      </p>
    </template>
    <template #actions>
      <Button @click="isValid = true">Ok</Button>
    </template>
  </Modal>
</template>

<script>
export default {
  inject: ['addResource'],
  data() {
    return {
      title: '',
      description: '',
      link: '',
      isValid: true,
    };
  },
  methods: {
    submitHandler() {
      if (!this.title.trim() || !this.description.trim() || !this.link.trim()) {
        this.isValid = false;
        return;
      }
      this.addResource({
        title: this.title,
        description: this.description,
        link: this.link,
      });
    },
  },
};
</script>

<style scoped>
label {
  font-weight: bold;
  display: block;
  margin-bottom: 0.5rem;
}

input,
textarea {
  display: block;
  width: 100%;
  font: inherit;
  padding: 0.15rem;
  border: 1px solid #ccc;
}

input:focus,
textarea:focus {
  outline: none;
  border-color: #3a0061;
  background-color: #f7ebff;
}

.form-control {
  margin: 1rem 0;
}
</style>
