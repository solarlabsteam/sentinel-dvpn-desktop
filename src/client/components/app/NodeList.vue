<template>
  <table>
    <thead>
    <tr>
      <th v-for="field in fields" :key="field">{{ field.toUpperCase() }}</th>
    </tr>
    </thead>
    <tbody>
    <tr v-for="node in nodes" :key="node.address">
      <td v-for="field in fields" :key="field">{{ node[field] }}</td>
      <td>
        <slot name="actions" v-bind="{ item: node }"></slot>
      </td>
    </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  name: 'NodeList',
  props: {
    nodes: {
      type: Array,
      default: () => []
    },
    fields: {
      type: Array,
      default: () => []
    }
  }
}
</script>
