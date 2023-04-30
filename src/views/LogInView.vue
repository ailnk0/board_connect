<template>
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-md-6">
        <div class="card mt-5">
          <div class="card-header">
            <h3 class="text-center">Log In</h3>
          </div>
          <div class="card-body">
            <form>
              <div class="form-group">
                <label for="username">Username:</label>
                <input type="text" id="username" name="username" class="form-control" required />
              </div>
              <div class="form-group">
                <label for="password">Password:</label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  class="form-control"
                  required
                />
              </div>
              <button type="submit" class="btn btn-primary btn-block">Log In</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped></style>
