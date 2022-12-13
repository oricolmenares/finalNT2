<template>
  <div class="hello">
    <h2> Tabla respuestas </h2>
    <div class="tabla">
       <table>
        <tr>
          <th>Nro Pregunta </th>
          <th>Respuesta </th>
        </tr>
        <tr v-for="resp in respuestas" :key="resp.id">
          <th>{{resp.pregunta}}</th>
          <th>{{resp.respuesta}}</th>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TablaRespuestas',

  props: {
    msg: String
  },
  data () {
      return {
        respuestas: [
          {pregunta: 1,
          respuesta: " c "
          },
          {pregunta: 2,
          respuesta: " b "
          },
          {pregunta: 3,
          respuesta: " b "
          },
          {pregunta: 4,
          respuesta: " a "
          },
          {pregunta: 5,
          respuesta: " b "
          }

        ]
      }
    }
}
</script>

<style>
  h3 {
    margin: 40px 0 0;
  }
  ul {
    list-style-type: none;
    padding: 0;
  }
  li {
    display: inline-block;
    margin: 0 10px;
  }
  a {
    color: #42b983;
  }
  .tabla {
    display: flex;
    justify-content: center;
    border: 1px solid black;
  }
</style>
