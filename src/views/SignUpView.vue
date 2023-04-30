<template>
  <body>
    <ActionBar />
    <div class="container mt-5">
      <div class="row justify-content-center">
        <div class="col-md-6">
          <div class="card">
            <div class="card-header">
              <h4 class="text-center">Sign Up</h4>
            </div>
            <div class="card-body">
              <form>
                <div class="form-group">
                  <label for="name">Name:</label>
                  <input type="text" class="form-control" id="name" placeholder="Enter name" />
                </div>
                <div class="form-group">
                  <label for="email">Email:</label>
                  <input type="email" class="form-control" id="email" placeholder="Enter email" />
                </div>
                <div class="form-group">
                  <label for="password">Password:</label>
                  <input
                    type="password"
                    class="form-control"
                    id="password"
                    placeholder="Enter password"
                  />
                </div>
                <div class="form-group">
                  <label for="confirm-password">Confirm Password:</label>
                  <input
                    type="password"
                    class="form-control"
                    id="confirm-password"
                    placeholder="Confirm password"
                  />
                </div>
                <button type="submit" class="btn btn-primary btn-block">Sign Up</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </body>
</template>

<script setup lang="ts"></script>

<style scoped></style>
