<span></span>
<style>
  span {
    display: inline-block;
    margin-left: 1em;
    border: 2px solid #ddd;
    border-top: 2px solid blue;
    border-radius: 50%;
    width: 20px;
    height: 20px;
    animation: spin 1s linear infinite;
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }

    100% {
      transform: rotate(360deg);
    }
  }
</style>
