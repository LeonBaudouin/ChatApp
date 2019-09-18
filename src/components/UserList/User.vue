<template>
    <div class="card mb-3">
        <div class="row no-gutters">
            <div class="col-md-4">
                <img
                    :src="user.avatar ? user.avatar : 'https://via.placeholder.com/200'"
                    class="card-img" alt="..."
                >
            </div>
            <div class="col-md-8">
                <div class="card-body">
                    <h5 v-if="user.username" class="card-title">{{ user.username }}</h5>
                    <h5 v-else class="card-title text-muted">Username</h5>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        user: {
            type: Object,
            required: true
        }
    }
}
</script>