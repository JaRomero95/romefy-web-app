<template>
  <div>
    <app-reproductor
      :multimedia-file="selectedMultimediaFile"
    />

    <table>
      <tr
        v-for="multimediaFile in multimediaFiles"
        :key="multimediaFile.id"
      >
        <td>{{multimediaFile.name}}</td>
        <td>
          <button
            @click="setSelectedMultimediaFile(multimediaFile)"
          >
            Play
          </button>
        </td>
      </tr>
    </table>
  </div>
</template>

<script lang="ts">
import {Options, Vue} from 'vue-class-component';
import {MultimediaFile} from '@/types';
import {MultimediaFileService} from '@/services/api';
import AppReproductor from '@/components/AppReproductor.vue';

@Options({
  components: {AppReproductor}
})
export default class Home extends Vue {
  private multimediaFiles = [];

  private selectedMultimediaFile: MultimediaFile | null = null;

  created() {
    this.getMultimediaFiles();
  }

  private async getMultimediaFiles() {
    this.multimediaFiles = await MultimediaFileService.index();
  }

  private setSelectedMultimediaFile(multimediaFile: MultimediaFile) {
    this.selectedMultimediaFile = multimediaFile;
  }
}
</script>
