<template>
  <div class="container my-4">
    <form>
      <div class="form-group">
        <label for="postTitle">Title</label>
        <input type="text" class="form-control" id="postTitle" placeholder="Enter post title" />
      </div>
      <div class="form-group">
        <label for="postContent">Content</label>
        <textarea
          class="form-control"
          id="postContent"
          rows="5"
          placeholder="Enter post content"
        ></textarea>
      </div>
      <div class="form-group">
        <label for="postImage">Image</label>
        <input type="file" class="form-control-file" id="postImage" />
      </div>
      <div class="form-group">
        <label for="postImage">Rating</label>
        <div class="rating">
          <input type="radio" name="star" id="star1" value="1" />
          <label for="star1">
            <font-awesome-icon :icon="['fas', 'star']" />
          </label>
          <input type="radio" name="star" id="star2" value="2" />
          <label for="star2">
            <font-awesome-icon :icon="['fas', 'star']" />
          </label>
          <input type="radio" name="star" id="star3" value="3" />
          <label for="star3">
            <font-awesome-icon :icon="['fas', 'star']" />
          </label>
          <input type="radio" name="star" id="star4" value="4" />
          <label for="star4">
            <font-awesome-icon :icon="['fas', 'star']" />
          </label>
          <input type="radio" name="star" id="star5" value="5" />
          <label for="star5">
            <font-awesome-icon :icon="['fas', 'star']" />
          </label>
        </div>
      </div>
      <button type="submit" class="btn btn-primary">Submit</button>
    </form>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.rating > label {
  display: inline-block;
  font-size: 40px;
  cursor: pointer;
  color: #ccc;
}

.rating > input[type='radio'] {
  display: none;
}

.rating > label:hover,
.rating > label:hover ~ label,
.rating > input[type='radio']:checked ~ label {
  color: #ffd700;
}
</style>
