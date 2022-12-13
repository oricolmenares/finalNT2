<template>
  <section class="src-components-formulario-vue">
    <h2>Conversor a Dolar</h2>
    <hr />
    <br />
    <div>
      Pesos: <input type="text" v-model="pesos" />
      Dolar: <input type="text" v-model="dolar" />
    </div>
    <hr />
    <div>
      <p>{{ convertido }}</p>
    </div>
  </section>
</template>

<script>
export default {
  name: "src-components-formulario-vue",
  props: [],
  data() {
    return {
      pesos: "",
      dolar: "",
      size: "",
    };
  },
  mounted() {},
  methods: {},
  computed: {
    convertido: function () {
      return "Valor convertido a USD " + this.pesos / this.dolar;
    },
  },
};
</script>

<style scoped lang="css">
.src-components-formulario-vue {
}
</style>
