<template>
  <div class="container">
    <div class="row">
      <div class="col-md-4">
        <div class="card">
          <div class="card-body">
            <form>
              <div class="form-group">
                <label for="name">Name:</label>
                <input type="text" id="name" name="name" class="form-control" value="John Doe" />
              </div>
              <div class="form-group">
                <label for="email">Email:</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  class="form-control"
                  value="johndoe@example.com"
                />
              </div>
              <div class="form-group">
                <label for="password">Password:</label>
                <input type="password" id="password" name="password" class="form-control" />
              </div>
              <div class="form-group">
                <label for="image">Profile Picture:</label>
                <div class="custom-file">
                  <input type="file" class="custom-file-input" id="image" name="image" />
                  <label class="custom-file-label" for="image">Choose file</label>
                </div>
                <div class="mt-3">
                  <label>Current Profile Picture:</label>
                  <img
                    src="https://via.placeholder.com/150"
                    alt="current-profile-picture"
                    class="d-block rounded-circle my-3"
                  />
                </div>
              </div>
              <button type="submit" class="btn btn-primary">Save Changes</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped></style>
