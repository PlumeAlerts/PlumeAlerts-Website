<template>
  <div class="">
    <div class="field">
      <label class="label">Message Template</label>
      <div class="control">
        <input class="input" type="text" placeholder="Text input">
      </div>
    </div>
    <!--  TODO Needs a rework and need to fit in more -->
    <div class="field">
      <label class="label">Alert Image</label>
      <div class="control">
        <div class="box">
          <article class="media">
            <figure class="media-left">
              <p class="image is-128x128">
                <!--                <img v-if="images.length > 0" alt="Alert image" :src="images[0].blob">-->
                <img alt="Alert image" src="https://via.placeholder.com/128.png">
              </p>
            </figure>
            <div class="media-content">
              <div class="content">
                Change media
              </div>
            </div>
          </article>
        </div>
      </div>
    </div>

    <div class="field">
      <label class="label">Alert Sound</label>
      <div class="control">

      </div>
    </div>

    <div class="modal is-active">
      <div class="modal-background"></div>
      <div class="modal-card">
        <header class="modal-card-head">
          <p class="modal-card-title">Media Selector</p>
          <button class="delete" aria-label="close"></button>
        </header>
        <section class="modal-card-body">
          <div class="columns">
            <div class="column is-one-fifth">
              <aside class="menu">
                <p class="menu-label">
                  Uploaded
                </p>
                <ul class="menu-list">
                  <li><a>Images</a></li>
                  <li><a>Audio</a></li>
                </ul>
              </aside>
            </div>
            <!-- TODO Look into padding -->
            <div class="is-divider-vertical"></div>
            <div class="column">
              <file-upload
                ref="upload"
                v-model="files"
                @input-filter="filesFilter"
                :multiple="true"
              >
                Upload files <i class="fas fa-cloud-upload-alt"></i>
              </file-upload>
              <div class="box">
                <ul>
                  <li v-for="file in files">{{file.name}} - Error: {{file.error}}, Success: {{file.success}}</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <footer class="modal-card-foot">
          <button class="button is-success">Save changes</button>
          <button class="button">Cancel</button>
        </footer>
      </div>
    </div>

    <div class="field is-grouped">
      <div class="control">
        <button class="button is-link">Save</button>
      </div>
      <div class="control">
        <button class="button is-text">Discard</button>
      </div>
    </div>
  </div>
</template>

<script>
import FileUpload from 'vue-upload-component';

export default {
  name: 'ContainerAlertsFollower',
  data() {
    return {
      error: '',
      files: [],
    };
  },
  components: {
    FileUpload,
  },
  methods: {
    filesFilter(newFile, oldFile, prevent) {
      if (newFile && !oldFile) {
        if (newFile.size >= 0 && newFile.size > 100 * 1024) {
          // TODO Error
          return prevent();
        }
        if (!/\.(jpeg|jpg|gif|png|webp)$/i.test(newFile.name)) {
          return prevent();
        }
      }

      newFile.blob = '';
      const URL = window.URL || window.webkitURL;
      if (URL && URL.createObjectURL) {
        newFile.blob = URL.createObjectURL(newFile.file);
      }
      return undefined;
    },
  },
};
</script>

<style scoped>

</style>
