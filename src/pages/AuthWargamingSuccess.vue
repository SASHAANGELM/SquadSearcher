<template>
  <div></div>
</template>

<script>
export default {
  created() {
    // ?status=ok&access_token=6eb66a8ef5917be11fb8fb0c9d7365f21d6dc5fd&nickname=SashaAngelM&account_id=6787804&expires_at=1594296405
    const url = new URL(window.location.href);
    const user = {
      accountId: url.searchParams.get('account_id'),
      nickname: url.searchParams.get('nickname'),
      accessToken: url.searchParams.get('access_token'),
      expiresAt: url.searchParams.get('expires_at')
    };
    this.$store.dispatch('SET_USER', user);
    this.$router.push('/');
  }
};
</script>

<style>

</style>
