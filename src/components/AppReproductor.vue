<template>
  <div>
    <audio
      ref="audioElement"
      :src="fileUrl"
      controls
    />
  </div>
</template>

<script lang="ts">
import {Vue} from 'vue-class-component';
import {Prop, Watch} from 'vue-property-decorator';
import {MultimediaFile} from '@/types';

export default class HelloWorld extends Vue {
  @Prop({default: null})
  private multimediaFile!: MultimediaFile;

  $refs!: {
    audioElement: HTMLAudioElement;
  }

  private get fileUrl() {
    return this.multimediaFile?.file_url;
  }

  private get audioElement() {
    return this.$refs.audioElement;
  }

  @Watch('multimediaFile')
  private onMultimediaFileChange() {
    // // this.audioElement.pause();
    // // this.audioElement.play();
    // this.$nextTick(this.audioElement.play);
    setTimeout(() => this.$refs.audioElement.play(), 0);
  }
}
</script>

<style scoped lang="scss"></style>
