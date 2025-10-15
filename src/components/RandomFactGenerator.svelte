<script lang="ts">
    const randomFacts = [
        "Tbh, I keep biting plastic. I swear I only do it because it genuinely keeps me dialed in. And it's a bit of a habit now, or maybe even an addiction. Oops!",
        "I wanna be rich give me money",
        "The only reason I use pinterest is hot furry drawings, hood memes, and MAYBE art inpiration / references like once a month."
    ];

    let lastFactIndex = 999999999;

    function getRandomFact() {
      let randomIndex = Math.floor(Math.random() * randomFacts.length);
      while (lastFactIndex == randomIndex && randomFacts.length > 1) {
        randomIndex = Math.floor(Math.random() * randomFacts.length);
      }
      lastFactIndex = randomIndex;
      randomFact = randomFacts[randomIndex];
    }

    let randomFact = $state("");

    getRandomFact();
</script>

<div class="flex flex-col justify-center mt-5 gap-5">
    <button class="btn btn-success"
        onclick={() => getRandomFact()}
        tabindex="0">
        Generate Fact!
    </button>
    <div class="bg-base-200 p-5">
        {randomFact}
    </div>
</div>