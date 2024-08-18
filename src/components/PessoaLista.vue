<template>
    <div id="pessoaLista">
        <table class="table">
        <thead>
            <tr>
            <th>Nome</th>
            <th>CPF</th>
            <th>Idade</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="pessoa in pessoas" :key="pessoa.id">
            <td>{{ pessoa.name }}</td>
            <td>{{ pessoa.cpf }}</td>
            <td>{{ pessoa.age }}</td>
            </tr>
        </tbody>
        </table>
        <b-button variant="primary" @click="AddPessoa"> Adicionar Nova Pessoa </b-button>
    </div>
</template>

<script>
import { pessoas } from './Pessoas';

export default {
    name: 'PessoaLista',
  data() {
      return {
        pessoas
    };
  },
};
</script>

<style scoped>

    #pessoaLista {
    padding: 20px;
    }

    .table {
    width: 100%;
    margin-bottom: 20px;
    }

    b-button {
    margin-top: 10px;
    }
</style>
