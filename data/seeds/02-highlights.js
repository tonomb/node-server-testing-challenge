exports.seed = function (knex) {
  return knex("highlights").insert([
    {
      id: 1,
      highlite:
        "Most of us believe we are better performers, more honest and intelligent, have a better future, have a happier marriage, are less vulnerable than the average person, etc. But we can't all be better than average. We tend to overestimate our ability to predict the future. People tend to put a higher probability on desired events than on undesired events. For example, we are over-optimistic about the outcome of planned actions. Optimism is good but when it comes to important decisions, realism is better.",
      book_id: 1,
    },
    {
      id: 2,
      highlite:
        "We have to see the world as it is. Not for what it was or for what we want it to be. Refusing to look at unpleasant facts doesn't make them disappear. Bad news that is true is betrer than good news that is wrong",
      book_id: 1,
    },
    { id: 3, highlite: "Happiness and freedom begin with a clear understanding of one principle: Some things are within our control, and some things are not. It is only after you have faced up to this fundamental rule and learned to distinguish between what you can and can't control that inner tranquility and outer effectiveness become possible.", book_id: 1 },
    { id: 4, highlite: "Human intuition is a notoriously poor guide to reality. A half-century of psychological research has shown that when people try to assess risks or predict the future, their heads are turned by stereotypes, memorable events, vivid scenarios, and moralistic narratives. ", book_id: 2 },
    { id: 5, highlite: "As long as bad things haven’t vanished altogether, there will always be enough to fill the news, and people will intuit that the world is falling apart.", book_id: 2 },
    { id: 6, highlite: "Copernicus and Galileo revealed that the Sun, not the Earth, lay at the center of the solar system. Charles Lyell revealed that the Earth was much older than previously thought. Darwin revealed that humans were not fundamentally different from other animals. Each of these scientific discoveries challenged our presumed specialness. Of course, even if people were just apes with large frontal cortices, at least we could claim that humans are part of a very special club", book_id: 2 },
    { id: 7, highlite: "education’s about the only thing lying around loose in this world, and that it’s about the only thing a fellow can have as much of as he’s willing to haul away", book_id: 3 },
    { id: 8, highlite: "not to play with the spoon before you take the medicine. Putting off an easy thing makes it hard, and putting off a hard one makes it impossible", book_id: 3 },
    { id: 9, highlite: "nothing helps convince some men that a thing has merit like a little gold on the label", book_id: 3 },
    { id: 10, highlite: "any being, if it vary however slightly in any manner profitable to itself, under the complex and sometimes varying conditions of life, will have a better chance of surviving, and thus be naturally selected", book_id: 4 },
  ]);
};
