<template>
  <div class="container">
    <div class="row">
      <div class="col-md-4">
        <div class="card">
          <div class="card-body">
            <img
              src="https://via.placeholder.com/150"
              class="rounded-circle mx-auto d-block mb-3"
              alt="User photo"
            />
            <h4 class="text-center">John Doe</h4>
            <p class="text-center">johndoe@example.com</p>
            <hr />
            <ul class="list-group">
              <li class="list-group-item d-flex justify-content-between align-items-center">
                Profile
                <span class="badge badge-primary badge-pill">Edit</span>
              </li>
              <li class="list-group-item d-flex justify-content-between align-items-center">
                Settings
                <span class="badge badge-primary badge-pill">Edit</span>
              </li>
              <li class="list-group-item d-flex justify-content-between align-items-center">
                Billing
                <span class="badge badge-primary badge-pill">Edit</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped></style>
